import { chromium } from "playwright-core";
const targets = [
  ["/", [".da-footer", ".da-hero-band", "[class*='logowall']", "[class*='marquee']"]],
  ["/service/branding-agency", [".da-footer", ".svc-cta-band", ".svc-marquee", "[class*='marquee']"]],
  ["/industry/manufacturing", [".svc-cta-band", ".ind-marquee", ".svc-marquee"]],
  ["/clients/sevenloop", [".sl-header", "[class*='marquee']", ".da-footer"]],
];
const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium", args: ["--no-sandbox"] });
for (const width of [2560, 1920]) {
  for (const [path, sels] of targets) {
    const page = await browser.newPage({ viewport: { width, height: 1000 } });
    await page.goto(`http://127.0.0.1:8080${path}`, { waitUntil: "load" }).catch(() => {});
    const out = await page.evaluate((sels) => {
      const vw = window.innerWidth;
      const res = {};
      for (const sel of sels) {
        const el = document.querySelector(sel);
        if (!el) { res[sel] = "none"; continue; }
        const r = el.getBoundingClientRect();
        res[sel] = { w: Math.round(r.width), l: Math.round(r.left), r: Math.round(vw - r.right), fullBleed: Math.abs(r.width - vw) < 2 };
      }
      return { vw, res };
    }, sels);
    console.log(`${path} @${width}`, JSON.stringify(out.res));
    await page.close();
  }
}
await browser.close();
