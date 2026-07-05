import { chromium } from "playwright-core";

const OUT = process.env.SHOOT_OUT || "/tmp/claude-0/-home-user-designasylum-studio-webiste/eb37d928-692c-5072-b548-d0ba91cc3a9c/scratchpad";
const targets = process.argv.slice(2); // list of "path@width[,width...]"

const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium", args: ["--no-sandbox"] });
for (const t of targets) {
  const [path, widthsCsv] = t.split("@");
  const widths = (widthsCsv || "1440").split(",").map(Number);
  for (const width of widths) {
    const page = await browser.newPage({ viewport: { width, height: 1000 }, deviceScaleFactor: 1 });
    const url = `http://127.0.0.1:8080${path}`;
    await page.goto(url, { waitUntil: "networkidle" }).catch(() => {});
    // incremental scroll so reveal-on-scroll fires
    await page.evaluate(async () => {
      const step = Math.floor(window.innerHeight * 0.8);
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 80));
      }
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 300));
    });
    const slug = path.replace(/\//g, "_") || "_home";
    const file = `${OUT}/shot${slug}__${width}.png`;
    await page.screenshot({ path: file, fullPage: false });
    // also a metric probe: main column box + full-bleed candidates
    const metrics = await page.evaluate(() => {
      const vw = window.innerWidth;
      const main = document.querySelector("main");
      const wraps = [...document.querySelectorAll(".da-wrap")];
      const wrapInfo = wraps.slice(0, 3).map((w) => {
        const r = w.getBoundingClientRect();
        return { w: Math.round(r.width), left: Math.round(r.left), right: Math.round(vw - r.right) };
      });
      return { vw, mainW: main ? Math.round(main.getBoundingClientRect().width) : null, wraps: wrapInfo };
    });
    console.log(`${path} @${width}:`, JSON.stringify(metrics));
    await page.close();
  }
}
await browser.close();
