import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RevealObserver } from "@/components/Reveal";
import { Eyebrow } from "@/components/ds/Eyebrow";
import { getStudyBySlug } from "@/lib/content/studies";
import { CloverMark, CaseStudyFigure, type CaseFigure } from "@/components/sevenloop/CaseStudyFigure";

const SLUG = "sevenloop-branding";

const study = getStudyBySlug(SLUG);

export const metadata: Metadata = {
  title: { absolute: "Sevenloop | Branding — Design Asylum" },
  description:
    study?.frontmatter.summary ?? "Sevenloop — Branding and project brochure design.",
};

/** Full-bleed placeholder figures — the export's own image-forward stack (no
 *  real imagery ships in the export). Captions mirror the study's "The work". */
const FIGURES: CaseFigure[] = [
  { caption: "Sevenloop logo lockup", ratio: "16 / 9", bg: "var(--color-obsidian-ink)", glow: "radial-gradient(90% 130% at 50% 40%, rgba(239,108,46,0.32), transparent 60%)", word: "Sevenloop", wordColor: "rgba(255,255,255,0.20)" },
  { caption: "Brand identity — logo system / colour / type", ratio: "16 / 10", bg: "var(--color-deep-teal)", glow: "radial-gradient(90% 130% at 18% 20%, rgba(255,194,64,0.40), transparent 52%), radial-gradient(90% 130% at 86% 88%, rgba(81,111,234,0.46), transparent 52%)" },
  { caption: "Project brochure spreads", ratio: "16 / 9", bg: "var(--color-block-maroon)", glow: "radial-gradient(80% 120% at 80% 18%, rgba(255,194,64,0.26), transparent 55%)" },
  { caption: "Brand applications / collateral", ratio: "4 / 3", bg: "var(--color-block-iris)", glow: "radial-gradient(90% 120% at 22% 84%, rgba(255,255,255,0.20), transparent 55%)" },
  { caption: "Brochure detail / mockups", ratio: "16 / 10", bg: "var(--color-block-ink)", glow: "radial-gradient(90% 130% at 62% 30%, rgba(150,235,235,0.22), transparent 58%), radial-gradient(80% 120% at 12% 90%, rgba(239,108,46,0.28), transparent 55%)" },
];

export default function SevenloopBrandingCaseStudy() {
  if (!study) notFound();
  const fm = study.frontmatter;
  const investors = fm.investors ?? [];

  return (
    <div className="cs-page">
      <RevealObserver />
      <div className="da-wrap">
        <Breadcrumb
          trail={[
            { label: "Home", href: "/" },
            { label: "Clients", href: "/clients" },
            { label: "Sevenloop", href: "/clients/sevenloop" },
            { label: "Branding" },
          ]}
        />
      </div>

      {/* SECTION 1 — header + metadata sidebar */}
      <header className="da-wrap cs-header">
        <div>
          <Eyebrow>Case study</Eyebrow>
          <h1 className="cs-h1">{fm.title}</h1>
          <div className="cs-clover">
            <CloverMark />
          </div>
        </div>

        <aside className="cs-aside">
          <div className="cs-meta-row">
            <span className="cs-meta-label">Client</span>
            <span className="cs-tag">Sevenloop | Branding</span>
          </div>
          <div className="cs-meta-row">
            <span className="cs-meta-label">Funding</span>
            {fm.funding ? (
              <span className="cs-meta-value">{fm.funding}</span>
            ) : (
              <span className="cs-empty-rule" aria-hidden />
            )}
          </div>
          <div className="cs-meta-row">
            <span className="cs-meta-label">Lead Investors</span>
            {investors.length ? (
              <div className="cs-investors">
                {investors.map((inv) => (
                  <span key={inv} className="cs-investor" aria-label={`${inv} logo`}>
                    {inv}
                  </span>
                ))}
              </div>
            ) : (
              <span className="cs-empty-rule" aria-hidden />
            )}
          </div>
          <div className="cs-meta-row">
            <span className="cs-meta-label">Industry</span>
            <span className="cs-empty-rule" aria-hidden />
          </div>
          <div className="cs-meta-row">
            <span className="cs-meta-label">Headquarters</span>
            <span className="cs-empty-rule" aria-hidden />
          </div>
          <div className="cs-meta-row">
            <span className="cs-meta-label">Target Audience</span>
            <span className="cs-empty-rule" aria-hidden />
          </div>
        </aside>
      </header>

      {/* SECTION 2 — full-bleed visual stack */}
      <div className="da-wrap cs-stack">
        {FIGURES.map((f, i) => (
          <CaseStudyFigure key={i} idx={i + 1} {...f} />
        ))}
      </div>

      {/* slim back-link bar (the global site footer supplies contact/legal) */}
      <div className="cs-backbar">
        <div className="da-wrap cs-backbar-inner">
          <Link href="/clients/sevenloop" className="cs-back">
            <span className="cs-back-arrow" aria-hidden>
              &larr;
            </span>{" "}
            Back to Sevenloop hub
          </Link>
          <Link href="/clients" className="cs-back">
            All clients{" "}
            <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
