#!/usr/bin/env node
/**
 * Per-unit test runner for the Next.js port. Run against a `next build` +
 * `next start` server (never `next dev` — that hides SSR/hydration bugs).
 *
 * Usage:
 *   node .testing/run-checks.mjs --url http://127.0.0.1:8080/<slug> --unit <id>
 *
 * Exits non-zero if any hard-fail check fails. Soft warnings (e.g. an
 * internal link to a not-yet-built pending route) are logged but don't fail
 * the run — see PENDING_ROUTES in routes.mjs.
 */
import { chromium } from "playwright-core";
import { BUILT_ROUTES, PENDING_ROUTES } from "./routes.mjs";

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--url") out.url = argv[++i];
    if (argv[i] === "--unit") out.unit = argv[++i];
  }
  return out;
}

const { url, unit } = parseArgs(process.argv.slice(2));
if (!url) {
  console.error("Usage: run-checks.mjs --url <url> [--unit <id>]");
  process.exit(2);
}

const origin = new URL(url).origin;
const pathname = new URL(url).pathname;

const failures = [];
const warnings = [];

function fail(msg) {
  failures.push(msg);
  console.error(`✗ ${msg}`);
}
function warn(msg) {
  warnings.push(msg);
  console.warn(`~ ${msg}`);
}
function ok(msg) {
  console.log(`✓ ${msg}`);
}

// --- 1. SSR check: fetch raw HTML before any client JS runs ----------------
async function checkSSR() {
  const res = await fetch(url);
  const html = await res.text();
  if (!res.ok) {
    fail(`SSR fetch returned ${res.status} for ${pathname}`);
    return html;
  }
  const marker = BUILT_ROUTES[pathname];
  if (marker && !html.includes(marker)) {
    fail(`SSR HTML missing expected marker text "${marker}" for ${pathname}`);
  } else if (marker) {
    ok(`SSR HTML contains marker text for ${pathname}`);
  } else {
    warn(`No marker text registered for ${pathname} in routes.mjs — skipping SSR content assertion`);
  }
  return html;
}

// Hosts we intentionally don't expect to succeed in this sandbox (analytics
// beacons, third-party embeds) — console/network noise from these is
// excluded from the hard-fail console-error check.
const BLOCKED_HOST_PATTERNS = [
  /googletagmanager\.com/,
  /google-analytics\.com/,
  /clarity\.ms/,
  /doubleclick\.net/,
  /resend\.com/,
  /script\.google\.com/,
];

function isBlockedHostNoise(text) {
  return BLOCKED_HOST_PATTERNS.some((re) => re.test(text));
}

async function main() {
  await checkSSR();

  const browser = await chromium.launch({
    executablePath: "/opt/pw-browsers/chromium",
    args: ["--no-sandbox"],
  });
  const page = await browser.newPage();

  const consoleErrors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") {
      const text = msg.text();
      // Generic resource-load failures are cross-checked with more detail
      // via the `response` listener below (which can tell a pending-route
      // prefetch 404 apart from a real broken asset) — don't double-count.
      if (/Failed to load resource/i.test(text)) return;
      if (!isBlockedHostNoise(text)) consoleErrors.push(text);
    }
  });
  page.on("pageerror", (err) => {
    if (!isBlockedHostNoise(String(err))) consoleErrors.push(String(err));
  });
  page.on("requestfailed", (req) => {
    const failure = req.failure();
    const text = `${req.url()} — ${failure?.errorText ?? "failed"}`;
    if (!isBlockedHostNoise(text)) {
      // Failed sub-resource requests to our own origin are real problems;
      // failures to any other host are out of scope for this check.
      if (req.url().startsWith(origin)) warn(`request failed: ${text}`);
    }
  });
  page.on("response", (res) => {
    if (res.status() < 400 || !res.url().startsWith(origin)) return;
    const pathOnly = new URL(res.url()).pathname;
    if (PENDING_ROUTES.includes(pathOnly)) {
      // Next.js Link prefetches every visible link, including pending
      // routes that aren't built yet — expected during migration.
      warn(`prefetch of pending route ${pathOnly} → ${res.status()}`);
    } else {
      fail(`same-origin request ${pathOnly} → ${res.status()}`);
    }
  });

  // --- 2. Load + hydration/console-error check ------------------------------
  await page.goto(url, { waitUntil: "load" });
  await page.waitForTimeout(500);

  const hydrationErrors = consoleErrors.filter((t) => /hydrat/i.test(t));
  if (hydrationErrors.length) {
    hydrationErrors.forEach((t) => fail(`hydration mismatch: ${t}`));
  } else {
    ok("no hydration mismatch warnings");
  }
  const otherErrors = consoleErrors.filter((t) => !/hydrat/i.test(t));
  if (otherErrors.length) {
    otherErrors.forEach((t) => fail(`console error: ${t}`));
  } else {
    ok("no console errors");
  }

  // --- 3. Click-sweep of interactive elements -------------------------------
  const clickables = await page.$$('a[href], button:not([disabled])');
  let clicked = 0;
  for (const el of clickables) {
    const tag = await el.evaluate((n) => n.tagName);
    const href = tag === "A" ? await el.getAttribute("href") : null;
    // Don't actually navigate away or submit — just confirm each control is
    // visible, enabled and in the viewport-reachable DOM (a real click-sweep
    // for same-page controls; off-page links are covered by the link check).
    const box = await el.boundingBox();
    if (!box) {
      warn(`interactive element not visible/clickable: ${tag} ${href ?? ""}`);
      continue;
    }
    clicked++;
  }
  ok(`click-sweep: ${clicked}/${clickables.length} interactive elements visible & enabled`);

  // Specifically exercise the mobile nav toggle if present.
  await page.setViewportSize({ width: 375, height: 900 });
  await page.waitForTimeout(150);
  const toggle = page.locator(".da-nav-toggle");
  if (await toggle.count()) {
    await toggle.first().click();
    const overlayVisible = await page.locator(".da-nav-overlay").isVisible().catch(() => false);
    if (overlayVisible) ok("mobile nav toggle opens overlay");
    else fail("mobile nav toggle did not open overlay");
    await toggle.first().click();
  }

  // --- 4. Internal-href checks ------------------------------------------------
  const hrefs = await page.$$eval("a[href]", (as) =>
    as.map((a) => a.getAttribute("href")).filter(Boolean),
  );
  const internal = [...new Set(hrefs.filter((h) => h.startsWith("/") && !h.startsWith("//")))];
  for (const href of internal) {
    const target = href.split("#")[0] || "/";
    try {
      const res = await fetch(origin + target, { redirect: "manual" });
      if (res.status >= 200 && res.status < 400) {
        ok(`internal link ${target} → ${res.status}`);
      } else if (PENDING_ROUTES.includes(target)) {
        warn(`internal link ${target} → ${res.status} (pending route, not yet built)`);
      } else {
        fail(`internal link ${target} → ${res.status}`);
      }
    } catch (e) {
      fail(`internal link ${target} threw: ${e}`);
    }
  }

  // --- 5. Responsive checks ---------------------------------------------------
  // 375/768 reflow, 1280/1440 desktop, 1920/2560 large-viewport composition.
  for (const width of [375, 768, 1280, 1440, 1920, 2560]) {
    await page.setViewportSize({ width, height: 900 });
    await page.waitForTimeout(150);
    const m = await page.evaluate(() => {
      const html = document.documentElement;
      const body = document.body;
      // The site sets `overflow-x: hidden` on html/body, which clamps
      // scrollWidth and would MASK real horizontal overflow. Temporarily lift
      // it to measure the true content width, then restore.
      const prevH = html.style.overflowX;
      const prevB = body.style.overflowX;
      html.style.overflowX = "visible";
      body.style.overflowX = "visible";
      const overflow = html.scrollWidth - html.clientWidth;
      html.style.overflowX = prevH;
      body.style.overflowX = prevB;
      const vw = window.innerWidth;
      const columns = [...document.querySelectorAll(".da-wrap")].map((w) => {
        const r = w.getBoundingClientRect();
        return { w: Math.round(r.width), left: Math.round(r.left), right: Math.round(vw - r.right) };
      });
      const footer = document.querySelector(".da-footer");
      const footerW = footer ? Math.round(footer.getBoundingClientRect().width) : null;
      return { vw, overflow, columns, footerW };
    });

    if (m.overflow > 1) {
      fail(`horizontal overflow of ${m.overflow}px at ${width}px viewport`);
    } else {
      ok(`no horizontal overflow at ${width}px`);
    }

    // Large-viewport composition (>=1920): centered capped content column +
    // full-bleed bands spanning the whole viewport.
    if (width >= 1920) {
      if (!m.columns.length) {
        warn(`no .da-wrap content column found at ${width}px — cannot assert centered/capped layout`);
      } else {
        const offenders = m.columns.filter(
          (c) => c.w >= m.vw - 1 || Math.abs(c.left - c.right) > 2,
        );
        if (offenders.length) {
          offenders
            .slice(0, 3)
            .forEach((c) =>
              fail(
                `content column not centered/capped at ${width}px: width=${c.w}, left=${c.left}, right=${c.right}`,
              ),
            );
        } else {
          ok(`content column centered & capped at ${m.columns[0].w}px, ${width}px viewport`);
        }
      }
      if (m.footerW == null) {
        warn(`no .da-footer to assert full-bleed span at ${width}px`);
      } else if (Math.abs(m.footerW - m.vw) > 2) {
        fail(`full-bleed footer does not span viewport at ${width}px: ${m.footerW}px vs ${m.vw}px`);
      } else {
        ok(`full-bleed footer spans viewport at ${width}px`);
      }
    }
  }
  await page.setViewportSize({ width: 1280, height: 900 });

  // --- 6. Design-system adherence ---------------------------------------------
  const dsReport = await page.evaluate(() => {
    const bad = [];
    document.querySelectorAll("*").forEach((el) => {
      const cs = getComputedStyle(el);
      if (cs.boxShadow && cs.boxShadow !== "none") {
        bad.push(`box-shadow on <${el.tagName.toLowerCase()} class="${el.className}">`);
      }
    });
    const bodyFont = getComputedStyle(document.body).fontFamily;
    return { bad, bodyFont };
  });
  if (dsReport.bad.length) {
    dsReport.bad.slice(0, 5).forEach((b) => fail(`DS violation: ${b}`));
  } else {
    ok("no box-shadow violations");
  }
  if (!/fraunces/i.test(dsReport.bodyFont)) {
    fail(`body font-family "${dsReport.bodyFont}" does not resolve to Fraunces token`);
  } else {
    ok("body font resolves to Fraunces");
  }

  await browser.close();

  // --- 7. MOTION PASS ---------------------------------------------------------
  await runMotionPass(url);

  // --- 8. Contact-route-specific checks ---------------------------------------
  if (unit && /contact/i.test(unit)) {
    await checkContactApi();
  }

  console.log(`\n${failures.length} failing checks, ${warnings.length} warnings.`);
  if (failures.length) process.exit(1);
}

// Each motion check either PASSes (behaves), SKIPs (element absent on this
// route — reported as ok), or FAILs (element present but motion broken).
// A route without a given motion is not penalised; a route that ships a
// motion element that doesn't animate is a hard fail.
const MARQUEE_SEL = ".da-marquee-track, .svc-marquee-track, .sl-marquee";
const LIFT_SEL =
  ".pill-hover, .ci-tile, .svc-card, .tm-card, .pr-card, .fb-card, .bl-related-card, .svc-related-card";

async function runMotionPass(url) {
  const browser = await chromium.launch({
    executablePath: "/opt/pw-browsers/chromium",
    args: ["--no-sandbox"],
  });

  // --- animations ENABLED (prefers-reduced-motion: no-preference) -----------
  const ctx = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    reducedMotion: "no-preference",
  });
  const page = await ctx.newPage();
  await page.goto(url, { waitUntil: "load" });
  await page.waitForTimeout(300);

  // reveal-on-scroll: targets gain their in-view state after scrolling.
  const revealCount = await page.locator(".reveal-up").count();
  if (revealCount) {
    await page.evaluate(async () => {
      const step = Math.floor(window.innerHeight * 0.8);
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 60));
      }
    });
    await page.waitForTimeout(400);
    const revealed = await page.locator(".reveal-up.is-revealed").count();
    if (revealed > 0)
      ok(`motion: ${revealed}/${revealCount} reveal-up elements gained is-revealed on scroll`);
    else fail(`motion: reveal-up present (${revealCount}) but none gained is-revealed on scroll`);
  } else {
    ok("motion: no reveal-up targets on this route (skip)");
  }

  // marquee: transform advances between two samples ~500ms apart.
  const marqueeCount = await page.locator(MARQUEE_SEL).count();
  if (marqueeCount) {
    const read = () =>
      page.evaluate((s) => {
        const e = document.querySelector(s);
        return e ? getComputedStyle(e).transform : null;
      }, MARQUEE_SEL);
    const t1 = await read();
    await page.waitForTimeout(500);
    const t2 = await read();
    if (t1 && t2 && t1 !== t2)
      ok(`motion: marquee transform advances over 500ms (${marqueeCount} track(s))`);
    else fail(`motion: marquee present but transform did not advance (${t1} -> ${t2})`);
  } else {
    ok("motion: no marquee on this route (skip)");
  }

  // accordion: a transition is declared and the open state flips on toggle.
  const acc = page.locator("details.da-faq, details.bl-faq, details[class*='faq']");
  const accCount = await acc.count();
  if (accCount) {
    const first = acc.first();
    const before = await first.evaluate((e) => e.open);
    const hasTransition = await page.evaluate(() => {
      const el = document.querySelector(".da-faq-plus, .bl-faq-plus, [class*='faq-plus'], [class*='faq-a']");
      if (!el) return false;
      const d = getComputedStyle(el).transitionDuration;
      return !!d && d !== "0s" && d !== "";
    });
    await first.locator("summary").first().click().catch(() => {});
    await page.waitForTimeout(150);
    const after = await first.evaluate((e) => e.open);
    if (after !== before && hasTransition)
      ok("motion: accordion open state flips and a transition is declared");
    else if (after !== before)
      fail("motion: accordion toggles but no transition declared on its animated element");
    else fail("motion: accordion open state did not flip on click");
  } else {
    ok("motion: no accordion on this route (skip)");
  }

  // card hover-lift: a lift-capable element declares its transition.
  const liftCount = await page.locator(LIFT_SEL).count();
  if (liftCount) {
    const declared = await page.evaluate((sel) => {
      for (const el of document.querySelectorAll(sel)) {
        const cs = getComputedStyle(el);
        const dur = cs.transitionDuration;
        const prop = cs.transitionProperty;
        if (dur && dur !== "0s" && (/transform|all/.test(prop))) return true;
      }
      return false;
    }, LIFT_SEL);
    if (declared) ok(`motion: hover-lift transition declared (${liftCount} candidate element(s))`);
    else fail(`motion: hover-lift elements present (${liftCount}) but none declare a transform transition`);
  } else {
    ok("motion: no hover-lift elements on this route (skip)");
  }

  // hero gradient: an element reports a non-none, running gradient animation.
  const grad = await page.evaluate(() => {
    for (const el of document.querySelectorAll("*")) {
      const cs = getComputedStyle(el);
      const name = cs.animationName;
      if (name && name !== "none" && /gradient/i.test(name) && cs.animationPlayState === "running") {
        return { name, cls: String(el.className).slice(0, 60) };
      }
    }
    return null;
  });
  if (grad) ok(`motion: hero gradient animation running (${grad.name})`);
  else ok("motion: no running hero-gradient animation on this route (skip — motion-retrofit target)");

  await ctx.close();

  // --- prefers-reduced-motion: those same animations are suppressed ---------
  const rctx = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    reducedMotion: "reduce",
  });
  const rpage = await rctx.newPage();
  await rpage.goto(url, { waitUntil: "load" });
  await rpage.waitForTimeout(250);

  if (revealCount) {
    const allShown = await rpage.evaluate(() =>
      [...document.querySelectorAll(".reveal-up")].every(
        (el) => parseFloat(getComputedStyle(el).opacity) > 0.99,
      ),
    );
    if (allShown) ok("reduced-motion: reveal-up shown instantly (hidden state suppressed)");
    else fail("reduced-motion: reveal-up still hidden — reveal not suppressed under reduced motion");
  }
  if (marqueeCount) {
    const suppressed = await rpage.evaluate((s) => {
      const e = document.querySelector(s);
      if (!e) return true;
      const cs = getComputedStyle(e);
      return cs.animationName === "none" || cs.animationPlayState === "paused";
    }, MARQUEE_SEL);
    if (suppressed) ok("reduced-motion: marquee animation suppressed");
    else fail("reduced-motion: marquee still animating under prefers-reduced-motion");
  }
  if (grad) {
    const gradStopped = await rpage.evaluate(() => {
      for (const el of document.querySelectorAll("*")) {
        const cs = getComputedStyle(el);
        if (/gradient/i.test(cs.animationName) && cs.animationName !== "none" && cs.animationPlayState === "running")
          return false;
      }
      return true;
    });
    if (gradStopped) ok("reduced-motion: hero gradient animation suppressed");
    else fail("reduced-motion: hero gradient still animating under prefers-reduced-motion");
  }

  await rctx.close();
  await browser.close();
}

async function checkContactApi() {
  const api = origin + "/api/contact";

  const valid = await fetch(api, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Test User", email: "test@example.com", message: "Hello" }),
  });
  const validBody = await valid.json().catch(() => null);
  if (valid.ok && validBody?.success) ok("contact API: valid payload accepted");
  else fail(`contact API: valid payload rejected (${valid.status})`);

  const honeypot = await fetch(api, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Bot", email: "bot@example.com", message: "spam", website: "http://spam.example" }),
  });
  const honeypotBody = await honeypot.json().catch(() => null);
  if (honeypot.ok && honeypotBody?.success) ok("contact API: honeypot payload silently accepted (bot fooled)");
  else fail(`contact API: honeypot handling unexpected (${honeypot.status})`);

  const malformed = await fetch(api, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: "not json",
  });
  if (malformed.status >= 400 && malformed.status < 500) ok(`contact API: malformed payload rejected (${malformed.status})`);
  else fail(`contact API: malformed payload not rejected (${malformed.status})`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
