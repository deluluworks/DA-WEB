import { chromium } from "playwright-core";
const url = process.argv[2] || "http://127.0.0.1:8080/";
const width = Number(process.argv[3] || 768);
const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium", args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width, height: 900 } });
await page.goto(url, { waitUntil: "networkidle" }).catch(() => {});
const res = await page.evaluate((vw) => {
  const html = document.documentElement, body = document.body;
  html.style.overflowX = "visible"; body.style.overflowX = "visible";
  const offenders = [];
  for (const el of document.querySelectorAll("*")) {
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) continue;
    if (r.right > vw + 1 || r.left < -1) {
      // Skip if clipped by an ancestor with overflow hidden/clip (not html/body)
      let p = el.parentElement, clipped = false;
      while (p && p !== document.documentElement && p !== document.body) {
        const ov = getComputedStyle(p).overflowX;
        if (ov === "hidden" || ov === "clip" || ov === "auto" || ov === "scroll") { clipped = true; break; }
        p = p.parentElement;
      }
      if (clipped) continue;
      offenders.push({
        tag: el.tagName.toLowerCase(),
        cls: String(el.className).slice(0, 60),
        left: Math.round(r.left), right: Math.round(r.right), w: Math.round(r.width),
      });
    }
  }
  return { vw, scrollW: html.scrollWidth, clientW: html.clientWidth, offenders: offenders.slice(0, 12) };
}, width);
console.log(JSON.stringify(res, null, 2));
await browser.close();
