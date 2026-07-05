import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RevealObserver } from "@/components/Reveal";
import { Eyebrow } from "@/components/ds/Eyebrow";
import { getStudyBySlug } from "@/lib/content/studies";
import { MediaTile } from "@/components/sevenloop/MediaTile";
import { BeforeAfter } from "@/components/sevenloop/BeforeAfter";
import { ProjectTeam } from "@/components/sevenloop/ProjectTeam";
import { ServiceMarquee } from "@/components/sevenloop/ServiceMarquee";

const SLUG = "sevenloop";
const CASE_STUDY_HREF = "/clients/sevenloop/branding";

const study = getStudyBySlug(SLUG);

export const metadata: Metadata = {
  title: { absolute: "Sevenloop | Design Asylum Client Work" },
  description:
    study?.frontmatter.summary ??
    "Sevenloop — brand strategy, identity, a Webflow website, an enterprise sales brochure, and a brand film for a custom metal manufacturing platform.",
};

/** Split an MDX body into `{ heading -> body }` so long-form editorial copy is
 *  sourced from the content layer (`content/studies/sevenloop.mdx`) rather than
 *  duplicated in this component. */
function parseSections(md: string): Record<string, string> {
  const map: Record<string, string> = {};
  for (const part of md.split(/^## /m)) {
    const trimmed = part.trim();
    if (!trimmed) continue;
    const nl = trimmed.indexOf("\n");
    const title = nl === -1 ? trimmed : trimmed.slice(0, nl).trim();
    map[title] = nl === -1 ? "" : trimmed.slice(nl + 1).trim();
  }
  return map;
}

function paragraphs(block: string): string[] {
  return block
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);
}

const INDUSTRIES = [
  { label: "Design Agency for Manufacturing Firms", href: "/industry/manufacturing" },
  { label: "Design Agency for Startups", href: null },
  { label: "Design Agency for Technology Businesses", href: null },
  { label: "Aviation Design Agency", href: null },
  { label: "Chemical Industry — Design Strategy Consultants", href: null },
];

const JUMP = [
  ["About client", "#about"],
  ["Logo design", "#logo-design"],
  ["Website design and development", "#website"],
  ["Project brochure", "#brochure"],
  ["Brand video", "#brand-video"],
  ["Behind the scenes", "#behind"],
  ["Case study", "#case-study"],
  ["Before after website design", "#before-after"],
] as const;

export default function SevenloopClientHub() {
  if (!study) notFound();
  const sections = parseSections(study.content);
  const aboutPara = paragraphs(sections["About the client"] ?? "")[0] ?? "";
  const editorial = paragraphs(sections["How Design Asylum helped Sevenloop"] ?? "");

  return (
    <div className="sl-page">
      <RevealObserver />

      {/* ============ SECTION 1 — CLIENT HEADER ============ */}
      <header className="sl-hero">
        <div aria-hidden className="sl-hero-glow gradient-loop" />
        <div className="da-wrap" style={{ position: "relative" }}>
          <Breadcrumb
            trail={[
              { label: "Home", href: "/" },
              { label: "Clients", href: "/clients" },
              { label: "Sevenloop" },
            ]}
          />
          <h1 className="sl-hero-h1">Sevenloop</h1>

          <div className="sl-ind-row">
            <span className="sl-ind-label">Industry :</span>
            <span className="sl-ind-body">
              {INDUSTRIES.map((ind, i) => (
                <span key={ind.label}>
                  {ind.href ? (
                    <Link className="sl-ind-link" href={ind.href}>
                      {ind.label}
                    </Link>
                  ) : (
                    <span className="sl-ind-link">{ind.label}</span>
                  )}
                  {i < INDUSTRIES.length - 1 ? ", " : ""}
                </span>
              ))}
            </span>
          </div>

          <div className="sl-hero-visual reveal-up">
            <div aria-hidden className="sl-hero-visual-grad" />
            <div className="sl-hero-visual-word">Sevenloop</div>
            <span className="sl-hero-visual-cap">Sevenloop brand hero</span>
          </div>
        </div>
      </header>

      {/* ============ SECTION 2 — OVERVIEW / DELIVERABLES ============ */}
      <section className="sl-section sl-section-paper">
        <div className="da-wrap sl-overview-grid">
          {/* left — jump nav */}
          <div className="sl-jump">
            <Eyebrow>Service provided</Eyebrow>
            <nav className="sl-jump-nav" aria-label="On this page">
              {JUMP.map(([label, href]) => (
                <a key={href} className="sl-jump-link" href={href}>
                  <span>{label}</span>
                  <span className="sl-jump-arrow" aria-hidden>
                    &rarr;
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* right — content */}
          <div>
            <div id="about" style={{ scrollMarginTop: 110 }}>
              <h2 className="sl-about-h2">About client</h2>
              <p className="sl-about-p">{aboutPara}</p>
              <div className="sl-actions">
                <a
                  className="da-btn da-btn-primary da-btn-lg"
                  href="https://sevenloop.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit website <span aria-hidden>&rarr;</span>
                </a>
                <Link className="da-btn da-btn-secondary da-btn-lg" href={CASE_STUDY_HREF}>
                  View case study <span aria-hidden>&rarr;</span>
                </Link>
              </div>
            </div>

            {/* deliverables */}
            <section id="logo-design" className="sl-deliverable reveal-up" style={{ scrollMarginTop: 110 }}>
              <div className="sl-deliverable-head">
                <span className="sl-deliverable-num">01</span>
                <h3 className="sl-deliverable-title">Logo design</h3>
              </div>
              <div className="sl-tilegrid sl-tilegrid-3">
                <MediaTile label="Primary lockup" cover="var(--color-block-ink)" word="Sevenloop" wordColor="var(--color-solar-bloom)" ratio="4 / 3" />
                <MediaTile label="Monogram" cover="var(--color-block-iris)" word={"S·L"} wordColor="var(--color-paper-white)" ratio="4 / 3" />
                <MediaTile label="On solar" cover="var(--color-block-solar)" word="Sevenloop" wordColor="var(--color-obsidian-ink)" ratio="4 / 3" />
              </div>
            </section>

            <section id="website" className="sl-deliverable reveal-up" style={{ scrollMarginTop: 110 }}>
              <div className="sl-deliverable-head">
                <span className="sl-deliverable-num">02</span>
                <h3 className="sl-deliverable-title">Website design and development</h3>
              </div>
              <MediaTile label={"sevenloop.com — Webflow build"} cover="var(--color-deep-teal)" word="sevenloop.com" wordColor="rgba(255,255,255,0.22)" ratio="16 / 9" />
              <p className="sl-deliverable-copy">
                A precision-engineered marketing site built on Webflow &mdash; capabilities, solutions
                and an enterprise-ready quote flow, all reading as advanced as the manufacturing behind
                them.
              </p>
            </section>

            <section id="brochure" className="sl-deliverable reveal-up" style={{ scrollMarginTop: 110 }}>
              <div className="sl-deliverable-head">
                <span className="sl-deliverable-num">03</span>
                <h3 className="sl-deliverable-title">Project brochure</h3>
              </div>
              <div className="sl-tilegrid sl-tilegrid-2">
                <MediaTile label={"Cover — positioning"} cover="var(--color-block-maroon)" ratio="3 / 4" />
                <MediaTile label="Capabilities spread" cover="var(--color-block-ink)" ratio="3 / 4" />
              </div>
            </section>

            <section id="brand-video" className="sl-deliverable reveal-up" style={{ scrollMarginTop: 110 }}>
              <div className="sl-deliverable-head">
                <span className="sl-deliverable-num">04</span>
                <h3 className="sl-deliverable-title">Brand video</h3>
              </div>
              <MediaTile label="The Sevenloop brand film" cover="var(--color-obsidian-ink)" word="Brand film" wordColor="rgba(255,255,255,0.18)" ratio="16 / 9" play />
            </section>

            <section id="behind" className="sl-deliverable reveal-up" style={{ scrollMarginTop: 110 }}>
              <div className="sl-deliverable-head">
                <span className="sl-deliverable-num">05</span>
                <h3 className="sl-deliverable-title">Behind the scenes</h3>
              </div>
              <div className="sl-tilegrid sl-tilegrid-3">
                <MediaTile label="On the factory floor" cover="var(--color-block-iris)" ratio="1 / 1" />
                <MediaTile label="The shoot" cover="var(--color-block-maroon)" ratio="1 / 1" />
                <MediaTile label="The team" cover="var(--color-deep-teal)" ratio="1 / 1" />
              </div>
            </section>

            <section id="case-study" className="sl-deliverable reveal-up" style={{ scrollMarginTop: 110 }}>
              <div className="sl-deliverable-head">
                <span className="sl-deliverable-num">06</span>
                <h3 className="sl-deliverable-title">Case study</h3>
              </div>
              <div className="sl-cs-callout">
                <p>
                  Read the full 5-month story &mdash; repositioning, identity, the Webflow build, and
                  the conversations it opened.
                </p>
                <Link href={CASE_STUDY_HREF} className="sl-cs-callout-cta">
                  View case study <span aria-hidden>&rarr;</span>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* ============ SECTION 3 — EDITORIAL ============ */}
      <section className="sl-section sl-section-off">
        <div className="da-wrap sl-editorial-grid">
          <div className="sl-editorial-head">
            <Eyebrow>The partnership</Eyebrow>
            <h2 className="sl-editorial-h2">How Design Asylum helped Sevenloop</h2>
          </div>
          <div className="sl-editorial-body reveal-up">
            {editorial.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTION 4 — TRANSFORMATION ============ */}
      <section id="before-after" className="sl-section sl-section-paper" style={{ scrollMarginTop: 110 }}>
        <div className="da-wrap">
          <div className="sl-ba-head">
            <div>
              <Eyebrow>Before / after</Eyebrow>
              <h2 className="sl-ba-h2">Transformation</h2>
            </div>
            <p className="sl-ba-lead">
              Drag to compare the old Sevenloop site against the Webflow rebuild.
            </p>
          </div>
          <div className="reveal-up">
            <BeforeAfter />
          </div>
        </div>
      </section>

      {/* ============ SECTION 5 — PROJECT TEAM ============ */}
      <ProjectTeam />

      {/* ============ SECTION 6 — SERVICE PROVIDED (marquee) ============ */}
      <section className="sl-section sl-section-off" style={{ overflow: "hidden" }}>
        <div className="da-wrap" style={{ marginBottom: 44 }}>
          <Eyebrow>What we delivered</Eyebrow>
          <h2 className="sl-team-h2">Service provided</h2>
        </div>
        <ServiceMarquee />
      </section>
    </div>
  );
}
