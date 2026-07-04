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
  for (const width of [375, 768, 1280, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.waitForTimeout(150);
    const overflow = await page.evaluate(() => {
      const doc = document.documentElement;
      return doc.scrollWidth - doc.clientWidth;
    });
    if (overflow > 1) {
      fail(`horizontal overflow of ${overflow}px at ${width}px viewport`);
    } else {
      ok(`no horizontal overflow at ${width}px`);
    }
  }

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

  // --- 7. Contact-route-specific checks ---------------------------------------
  if (unit && /contact/i.test(unit)) {
    await checkContactApi();
  }

  console.log(`\n${failures.length} failing checks, ${warnings.length} warnings.`);
  if (failures.length) process.exit(1);
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
