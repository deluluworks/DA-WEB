import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RevealObserver } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Sevenloop Brochure",
  description: "Sevenloop Brochure project showcase as a print collateral",
};

/* Print collateral spreads — decorative colour-block placeholder tiles (the
 * export ships no real brochure imagery), ported verbatim from `print/print-page.jsx`. */
type Spread = { caption: string; ratio: string; bg: string; glow: string; word?: string; wordColor?: string };

const SPREADS: Spread[] = [
  {
    caption: "Sevenloop brochure — cover",
    ratio: "16 / 10",
    bg: "var(--color-obsidian-ink)",
    word: "Sevenloop",
    wordColor: "rgba(255,255,255,0.2)",
    glow: "radial-gradient(90% 130% at 50% 38%, rgba(239,108,46,0.34), transparent 58%)",
  },
  {
    caption: "Inside spread 1 — intro / positioning",
    ratio: "2 / 1",
    bg: "var(--color-deep-teal)",
    glow: "radial-gradient(80% 140% at 16% 20%, rgba(255,194,64,0.40), transparent 52%), radial-gradient(80% 140% at 86% 86%, rgba(81,111,234,0.44), transparent 52%)",
  },
  {
    caption: "Inside spread 2 — capabilities",
    ratio: "2 / 1",
    bg: "var(--color-block-maroon)",
    glow: "radial-gradient(80% 130% at 80% 22%, rgba(255,194,64,0.26), transparent 55%)",
  },
  {
    caption: "Inside spread 3 — process / quality",
    ratio: "2 / 1",
    bg: "var(--color-block-iris)",
    glow: "radial-gradient(90% 130% at 22% 84%, rgba(255,255,255,0.20), transparent 55%)",
  },
  {
    caption: "Inside spread 4 — contact / back cover",
    ratio: "16 / 10",
    bg: "var(--color-block-ink)",
    glow: "radial-gradient(90% 130% at 62% 30%, rgba(150,235,235,0.20), transparent 58%), radial-gradient(80% 120% at 12% 90%, rgba(239,108,46,0.26), transparent 55%)",
  },
];

const AI = ["ChatGPT", "Google AI", "Claude", "Perplexity"];

export default function SevenloopPrintShowcase() {
  return (
    <>
      <RevealObserver />

      <section className="pr-page">
        <div className="da-wrap">
          <Breadcrumb
            trail={[
              { label: "Home", href: "/" },
              { label: "Print Design" },
              { label: "Sevenloop Brochure" },
            ]}
          />
          <h1 className="pr-title">Sevenloop Brochure</h1>
        </div>

        <div className="da-wrap pr-stack">
          {SPREADS.map((s, i) => (
            <figure
              key={s.caption}
              className="pr-fig reveal-up"
              style={{ aspectRatio: s.ratio, background: s.bg }}
            >
              <div aria-hidden className="pr-fig-glow" style={{ background: s.glow }} />
              {s.word && (
                <div className="pr-fig-word">
                  <span style={{ color: s.wordColor }}>{s.word}</span>
                </div>
              )}
              <span className="pr-idx">{String(i + 1).padStart(2, "0")}</span>
              <span className="pr-cap">{s.caption}</span>
            </figure>
          ))}
        </div>
      </section>

      {/* AI summary chip row — decorative (the export wired these to href="#"). */}
      <section className="da-wrap pr-airow-wrap">
        <div className="pr-airow">
          <span className="pr-airow-label">Ask AI for a summary of Design Asylum</span>
          <div className="pr-airow-chips">
            {AI.map((a) => (
              <span key={a} className="pr-aichip">
                <span aria-hidden className="pr-aichip-dot" />
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contextual navigation to the Sevenloop work this brochure belongs to. */}
      <section className="da-wrap pr-backbar">
        <Link href="/clients/sevenloop">← Back to the Sevenloop hub</Link>
        <Link href="/clients/sevenloop/branding">Branding case study →</Link>
        <Link href="/clients">All clients →</Link>
      </section>
    </>
  );
}
