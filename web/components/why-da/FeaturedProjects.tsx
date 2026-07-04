const GLOWS = [
  "radial-gradient(90% 130% at 24% 22%, rgba(239,108,46,0.30), transparent 56%), radial-gradient(80% 120% at 84% 86%, rgba(81,111,234,0.42), transparent 54%)",
  "radial-gradient(90% 130% at 78% 20%, rgba(81,111,234,0.46), transparent 54%), radial-gradient(80% 120% at 20% 88%, rgba(150,235,235,0.34), transparent 56%)",
  "radial-gradient(90% 130% at 30% 30%, rgba(255,194,64,0.40), transparent 56%), radial-gradient(80% 120% at 82% 84%, rgba(110,36,51,0.42), transparent 54%)",
];
const BGS = ["var(--color-obsidian-ink)", "var(--color-deep-teal)", "#241a1c"];

const PROJECTS: { name: string; tags: string[]; blurb: string }[] = [
  {
    name: "Ximkart",
    tags: ["Brand Identity", "Website Design", "Website Development"],
    blurb:
      "Ximkart was able to communicate the value proposition to prospects via website clearly and was able to bring down the sales effort.",
  },
  {
    name: "Botim",
    tags: ["Brand Strategy", "Website Design"],
    blurb:
      "A new website to position Botim as a super app for the EMEA region — payments, calls, and services under one confident brand.",
  },
  {
    name: "Sevenloop",
    tags: ["Brand Identity", "Website Design", "Brand Film"],
    blurb:
      "A deep-tech manufacturing platform repositioned from product company to enterprise-ready brand in five months.",
  },
  {
    name: "Fortuna Cysec",
    tags: ["Brand Strategy", "Website Design"],
    blurb:
      "Brand and site for a global, AI-driven managed security services provider — credibility built for an enterprise buyer.",
  },
  {
    name: "SimpliContract",
    tags: ["Messaging", "Website Design"],
    blurb:
      "Enterprise contract lifecycle management, made legible — a site that leads with the source-to-pay outcome.",
  },
  {
    name: "Entropik",
    tags: ["Website Design", "Motion"],
    blurb:
      "An emotion-AI research platform given a site that makes cutting-edge technology feel accessible and trustworthy.",
  },
];

/**
 * Ported from footer/why-da.jsx `FeaturedProjects`. Most of these projects
 * don't have a dedicated case-study route yet (only Sevenloop/Aavenir are
 * planned) — "Read case study" points at `/clients` per the same
 * unbuilt-project-page convention used on the homepage's Industries/
 * Portfolio sections.
 */
export function FeaturedProjects() {
  return (
    <section className="da-wrap wda-projects-section">
      <div className="wda-projects-head">
        <h2 className="wda-section-head">Featured projects</h2>
        <span className="wda-projects-count">6 of 6</span>
      </div>
      <div className="svc-grid reveal-up">
        {PROJECTS.map((p, i) => (
          <a key={p.name} className="svc-card" href="/clients">
            <div className="svc-card-vis" style={{ background: BGS[i % BGS.length] }}>
              <div className="svc-card-vis-glow" aria-hidden style={{ background: GLOWS[i % GLOWS.length] }} />
              <span className="svc-card-link">
                Read case study <span aria-hidden>&rarr;</span>
              </span>
            </div>
            <div className="svc-card-body">
              <div className="wda-card-tags">
                {p.tags.map((t) => (
                  <span key={t} className="wda-card-tag">
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="svc-card-name">{p.name}</h3>
              <p className="svc-card-desc">{p.blurb}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
