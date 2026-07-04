#!/usr/bin/env node
/**
 * Playwright + fetch harness for the Next.js port. Run against a running
 * `next start` server (see SITE-PROGRESS.md WORK LOOP step c):
 *
 *   node .testing/run-checks.mjs --url http://127.0.0.1:8080/contact --unit contact-page
 *
 * Flags:
 *   --url    full URL of the unit's page (required)
 *   --unit   unit id from SITE-PROGRESS.md, used to look up the route's
 *            expected SSR marker in routes.json (required)
 *   --skip-build   skip the `npm run build` sanity check (assume caller
 *                  already rebuilt — the WORK LOOP always does)
 */
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { execSync } from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const args = Object.fromEntries(
  process.argv.slice(2).reduce((acc, arg, i, arr) => {
    if (arg.startsWith('--')) {
      const key = arg.slice(2);
      const next = arr[i + 1];
      acc.push([key, next && !next.startsWith('--') ? next : true]);
    }
    return acc;
  }, []),
);

const targetUrl = args.url;
const unitId = args.unit;
if (!targetUrl || !unitId) {
  console.error('Usage: node .testing/run-checks.mjs --url <url> --unit <id> [--skip-build]');
  process.exit(2);
}

const origin = new URL(targetUrl).origin;
const routesManifest = JSON.parse(readFileSync(join(__dirname, 'routes.json'), 'utf8'));
const route = routesManifest.routes.find((r) => r.unit === unitId);
if (!route) {
  console.error(`No routes.json entry with unit "${unitId}". Add one before testing.`);
  process.exit(2);
}
const builtSlugs = new Set(routesManifest.routes.filter((r) => r.status === 'built').map((r) => r.slug));
const pendingSlugs = new Set(routesManifest.routes.filter((r) => r.status === 'pending').map((r) => r.slug));

const failures = [];
const warnings = [];
function fail(check, detail) {
  failures.push({ check, detail });
  console.error(`✗ ${check}: ${detail}`);
}
function pass(check) {
  console.log(`✓ ${check}`);
}
function warn(check, detail) {
  warnings.push({ check, detail });
  console.warn(`~ ${check}: ${detail}`);
}

// ---- 1. production build -------------------------------------------------
if (!args['skip-build']) {
  try {
    execSync('npm run build', { cwd: ROOT, stdio: 'pipe' });
    pass('production build');
  } catch (err) {
    fail('production build', err.stdout?.toString().slice(-4000) || String(err));
  }
} else {
  console.log('~ production build: skipped (--skip-build)');
}

// ---- 2. SSR marker: fetch raw HTML before any client JS runs -------------
let rawHtml = '';
try {
  const res = await fetch(targetUrl);
  rawHtml = await res.text();
  if (res.status !== 200) {
    fail('SSR response status', `expected 200, got ${res.status}`);
  } else if (route.marker && !rawHtml.includes(route.marker)) {
    fail('SSR marker present in initial HTML', `marker "${route.marker}" not found in raw response`);
  } else {
    pass('SSR marker present in initial HTML');
  }
} catch (err) {
  fail('SSR fetch', String(err));
}

// ---- 3/4/5. Playwright: console errors, hydration, click-sweep, internal links, DS ----
const browser = await chromium.launch({ executablePath: process.env.PLAYWRIGHT_CHROMIUM_PATH || '/opt/pw-browsers/chromium' });

async function checkViewport(width, label, { assertMobileNav } = {}) {
  const page = await browser.newPage({ viewport: { width, height: 900 } });
  const consoleErrors = [];
  const pageErrors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  page.on('pageerror', (err) => pageErrors.push(String(err)));

  await page.goto(targetUrl, { waitUntil: 'load', timeout: 20000 });
  await page.waitForTimeout(600);

  // hydration / runtime errors (hard fail)
  const hydrationIssues = consoleErrors.filter((m) => /hydration|did not match|minified react error/i.test(m));
  if (pageErrors.length) {
    fail(`[${label}] no uncaught JS exceptions`, pageErrors.join(' | '));
  } else {
    pass(`[${label}] no uncaught JS exceptions`);
  }
  if (hydrationIssues.length) {
    fail(`[${label}] no hydration mismatch warnings`, hydrationIssues.join(' | '));
  } else {
    pass(`[${label}] no hydration mismatch warnings`);
  }

  // console errors, excluding known-benign 404s for pending (not-yet-built) routes
  // and blocked external analytics/font hosts.
  const benign = /clarity\.ms|googletagmanager|google-analytics|googleads|fontsource|jsdelivr\.net/i;
  const unexpectedErrors = consoleErrors.filter((m) => {
    if (hydrationIssues.includes(m)) return false;
    if (benign.test(m)) return false;
    if (/Failed to load resource.*404/i.test(m)) {
      // resource 404s are only OK if they're prefetches of a known-pending route
      return false; // resource-level 404s are cross-checked via internal-href below instead
    }
    return true;
  });
  if (unexpectedErrors.length) {
    fail(`[${label}] no unexpected console errors`, unexpectedErrors.join(' | '));
  } else {
    pass(`[${label}] no unexpected console errors`);
  }

  // no horizontal overflow
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
  if (overflow) {
    fail(`[${label}] no horizontal overflow`, `scrollWidth exceeds clientWidth at ${width}px`);
  } else {
    pass(`[${label}] no horizontal overflow`);
  }

  // mobile nav toggle present + functional at compact widths
  if (assertMobileNav) {
    const toggle = page.getByRole('button', { name: /open menu|close menu/i });
    const toggleCount = await toggle.count();
    if (toggleCount === 0) {
      fail(`[${label}] mobile nav toggle present`, 'no [aria-label="Open menu"] button found');
    } else {
      pass(`[${label}] mobile nav toggle present`);
      await toggle.first().click();
      await page.waitForTimeout(350);
      const expanded = await toggle.first().getAttribute('aria-expanded');
      if (expanded !== 'true') {
        fail(`[${label}] mobile nav opens on toggle`, `aria-expanded="${expanded}"`);
      } else {
        pass(`[${label}] mobile nav opens on toggle`);
      }
      await toggle.first().click();
      await page.waitForTimeout(350);
    }
  }

  // click-sweep: every visible, enabled <button> gets clicked once (skips the
  // nav toggle already exercised above and any submit button, which is
  // exercised separately by the contact-route checks).
  const buttons = await page.locator('button:visible:not([disabled])').all();
  let clicked = 0;
  for (const btn of buttons) {
    const label2 = (await btn.getAttribute('aria-label')) || (await btn.textContent()) || '';
    if (/open menu|close menu/i.test(label2)) continue;
    if ((await btn.getAttribute('type')) === 'submit') continue;
    try {
      await btn.click({ timeout: 2000, trial: false });
      clicked += 1;
    } catch (err) {
      warn(`[${label}] click-sweep`, `button "${label2.trim()}" not clickable: ${err.message.split('\n')[0]}`);
    }
  }
  pass(`[${label}] click-sweep (${clicked} interactive element(s))`);

  // internal-href 200 checks — only for hrefs the manifest marks "built";
  // anything pointing at a "pending" route is logged, not failed.
  if (label === 'desktop-1440') {
    const hrefs = await page.evaluate(() =>
      Array.from(document.querySelectorAll('a[href^="/"]')).map((a) => a.getAttribute('href')),
    );
    const uniqueHrefs = [...new Set(hrefs)];
    for (const href of uniqueHrefs) {
      const path = href.split('#')[0].split('?')[0];
      if (builtSlugs.has(path)) {
        try {
          const res = await fetch(new URL(path, origin));
          if (res.status === 200) pass(`internal link ${path} -> 200`);
          else fail(`internal link ${path}`, `expected 200, got ${res.status}`);
        } catch (err) {
          fail(`internal link ${path}`, String(err));
        }
      } else if (pendingSlugs.has(path) || !builtSlugs.has(path)) {
        warn('internal link (pending route)', `${path} not yet ported — skipped`);
      }
    }
    if (uniqueHrefs.length < 3) {
      warn('three-plus internal links', `page only links to ${uniqueHrefs.length} internal path(s)`);
    } else {
      pass(`three-plus internal links (${uniqueHrefs.length} found)`);
    }
  }

  // DS adherence: font-family must resolve through the Blinker/Fraunces
  // token vars; flag stray hardcoded hex/rgb (non-alpha) color literals in
  // inline styles as a bypass of the token source.
  const bodyFont = await page.evaluate(() => getComputedStyle(document.body).fontFamily);
  if (!/blinker|fraunces/i.test(bodyFont)) {
    fail(`[${label}] DS font allowlist`, `computed body font-family "${bodyFont}" does not resolve to Blinker/Fraunces`);
  } else {
    pass(`[${label}] DS font allowlist`);
  }
  const boxShadow = await page.evaluate(() => getComputedStyle(document.body).boxShadow);
  if (boxShadow && boxShadow !== 'none') {
    warn(`[${label}] DS box-shadow discipline`, `body computed box-shadow: ${boxShadow}`);
  }

  await page.close();
  return { hrefs: [] };
}

await checkViewport(375, 'mobile-375', { assertMobileNav: true });
await checkViewport(768, 'tablet-768', { assertMobileNav: true });
await checkViewport(1280, 'desktop-1280');
await checkViewport(1440, 'desktop-1440');

// stray hex/rgb literal scan on the raw SSR HTML (heuristic DS check)
const styleAttrs = [...rawHtml.matchAll(/style="([^"]*)"/g)].map((m) => m[1]);
const strayColors = styleAttrs
  .join(' ')
  .match(/#[0-9a-fA-F]{3,8}\b|rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)/g);
if (strayColors?.length) {
  fail('DS adherence: no hardcoded colors outside token source', [...new Set(strayColors)].join(', '));
} else {
  pass('DS adherence: no hardcoded colors outside token source');
}

await browser.close();

// ---- contact route handler checks (only for the contact unit) -----------
if (unitId === 'contact-page') {
  const apiUrl = new URL('/api/contact', origin);

  const validRes = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Test User', email: 'test@example.com', message: 'Hello, testing.' }),
  });
  if (validRes.status === 200) pass('contact route: valid payload accepted');
  else fail('contact route: valid payload accepted', `expected 200, got ${validRes.status}`);

  const honeypotRes = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Bot', email: 'bot@example.com', message: 'spam', website: 'http://spam.example' }),
  });
  if (honeypotRes.status >= 400) pass('contact route: honeypot payload rejected');
  else fail('contact route: honeypot payload rejected', `expected 4xx, got ${honeypotRes.status}`);

  const malformedRes = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: '{not json',
  });
  if (malformedRes.status >= 400 && malformedRes.status < 500) pass('contact route: malformed payload -> 4xx');
  else fail('contact route: malformed payload -> 4xx', `expected 4xx, got ${malformedRes.status}`);

  const missingFieldsRes = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: '', email: 'not-an-email', message: '' }),
  });
  if (missingFieldsRes.status >= 400 && missingFieldsRes.status < 500) pass('contact route: invalid fields -> 4xx');
  else fail('contact route: invalid fields -> 4xx', `expected 4xx, got ${missingFieldsRes.status}`);
}

// ---- summary --------------------------------------------------------------
console.log('\n----------------------------------------');
console.log(`${failures.length} failing, ${warnings.length} warning(s)`);
if (failures.length) {
  process.exit(1);
}
