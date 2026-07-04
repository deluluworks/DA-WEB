import { ArrowLink } from "@/components/ds/ArrowLink";

type Project = {
  name: string;
  desc: string;
  statValue: string;
  statCaption: string;
  cover: string;
  wordColor: string;
  cta: string;
};

const PROJECTS: Project[] = [
  {
    name: "Northwind",
    cover: "var(--color-deep-teal)",
    wordColor: "var(--color-solar-bloom)",
    cta: "Visit website",
    desc: "A heritage law firm, repositioned with teeth. New name, new voice, a brand that argues its own case.",
    statValue: "41%",
    statCaption: "Rise in inbound briefs in the year after relaunch",
  },
  {
    name: "Foundry",
    cover: "var(--color-block-maroon)",
    wordColor: "var(--color-paper-white)",
    cta: "View case study",
    desc: "Strategic identity for an AI manufacturing platform that needed to look as advanced as it actually is.",
    statValue: "3×",
    statCaption: "Pipeline value within two quarters of launch",
  },
  {
    name: "Vantage",
    cover: "var(--color-block-ink)",
    wordColor: "var(--color-solar-bloom)",
    cta: "View case study",
    desc: "A rebrand for an adtech consultancy, rebuilt to read as sharp on screen as the work behind it.",
    statValue: "2.4×",
    statCaption: "Qualified demo requests, quarter on quarter",
  },
  {
    name: "Lumen",
    cover: "var(--color-block-solar)",
    wordColor: "var(--color-obsidian-ink)",
    cta: "View project",
    desc: "Branding for a cybersecurity brand built for fast-growing businesses that refuse to look generic.",
    statValue: "67%",
    statCaption: "Brand recall in category testing",
  },
];

function ProjectPanel({ name, desc, statValue, statCaption, cover, wordColor, cta, first }: Project & { first: boolean }) {
  return (
    <article className={`da-project-panel${first ? " da-project-panel--first" : ""}`}>
      <div className="da-wrap da-project-inner">
        <div className="da-project-grid">
          <div className="da-project-copy">
            <h3 className="da-project-title">{name}</h3>
            <div className="da-project-copy-lower">
              <p className="da-project-desc">{desc}</p>
              <div className="da-project-stat">
                <span aria-hidden className="da-project-stat-icon">
                  &uarr;
                </span>
                <span className="da-project-stat-value">{statValue}</span>
              </div>
              <p className="da-project-stat-caption">{statCaption}</p>
            </div>
          </div>
          <div className="da-project-cover" style={{ background: cover }}>
            <div className="da-project-cover-word" style={{ color: wordColor }}>
              {name}
            </div>
            <span className="da-project-cta" style={{ borderColor: wordColor, color: wordColor }}>
              {cta} <span aria-hidden>&rarr;</span>
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

/** Ported from da/sections-1.jsx `DAFeatured`. */
export function FeaturedWork() {
  return (
    <section className="da-featured">
      <div className="da-wrap da-featured-head">
        <h2>Featured Projects</h2>
        <div className="da-featured-head-link">
          <ArrowLink href="/blog">Field notes, April 2026</ArrowLink>
        </div>
      </div>
      <div>
        {PROJECTS.map((p, i) => (
          <ProjectPanel key={p.name} first={i === 0} {...p} />
        ))}
      </div>
    </section>
  );
}
