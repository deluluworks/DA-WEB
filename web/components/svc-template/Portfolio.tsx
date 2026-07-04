"use client";

import { useState } from "react";
import Link from "next/link";
import { MarqueeStrip } from "./MarqueeStrip";

export type PortfolioProject = { name: string; desc: string; href?: string; feat?: boolean };

const GLOWS = [
  "radial-gradient(90% 130% at 24% 22%, rgba(239,108,46,0.30), transparent 56%), radial-gradient(80% 120% at 84% 86%, rgba(81,111,234,0.42), transparent 54%)",
  "radial-gradient(90% 130% at 78% 20%, rgba(81,111,234,0.46), transparent 54%), radial-gradient(80% 120% at 20% 88%, rgba(150,235,235,0.34), transparent 56%)",
  "radial-gradient(90% 130% at 30% 30%, rgba(255,194,64,0.40), transparent 56%), radial-gradient(80% 120% at 82% 84%, rgba(110,36,51,0.42), transparent 54%)",
  "radial-gradient(90% 130% at 70% 26%, rgba(150,235,235,0.40), transparent 56%), radial-gradient(80% 120% at 24% 86%, rgba(81,111,234,0.40), transparent 54%)",
];
const BGS = ["var(--color-obsidian-ink)", "var(--color-deep-teal)", "#241a1c", "#10212a"];

function ProjectCard({ project, i }: { project: PortfolioProject; i: number }) {
  const inner = (
    <>
      <div className="svc-card-vis" style={{ background: BGS[i % BGS.length] }}>
        <div aria-hidden className="svc-card-vis-glow" style={{ background: GLOWS[i % GLOWS.length] }} />
        {project.feat && <span className="svc-card-tag">Featured project</span>}
        <span className="svc-card-link">
          Visit website <span aria-hidden>&#8599;</span>
        </span>
      </div>
      <div className="svc-card-body">
        <h3 className="svc-card-name">{project.name}</h3>
        <p className="svc-card-desc">{project.desc}</p>
      </div>
    </>
  );
  const className = "svc-card" + (project.feat ? " is-feat" : "");
  return project.href ? (
    <Link className={className} href={project.href}>
      {inner}
    </Link>
  ) : (
    <div className={className}>{inner}</div>
  );
}

/**
 * Ported from service/svc-portfolio.jsx (identical shape in industry/
 * ind-blocks.jsx `IndPortfolio`). The export's filter tabs never actually
 * filter `PROJECTS` — `tab` state only toggles the button's active class —
 * so this ports that as-built behavior (decorative tabs) rather than adding
 * filtering the source never implemented.
 */
export function Portfolio({
  heading,
  tabs,
  projects,
}: {
  heading: string;
  tabs: string[];
  projects: PortfolioProject[];
}) {
  const [tab, setTab] = useState(tabs[tabs.length - 1]);
  return (
    <section style={{ paddingTop: "var(--section-pad-y)" }}>
      <div style={{ marginBottom: "clamp(48px,5vw,80px)" }}>
        <MarqueeStrip />
      </div>
      <div className="da-wrap">
        <div className="svc-portfolio-head">
          <h2 className="svc-section-h2">{heading}</h2>
          <div className="svc-tabs" role="tablist">
            {tabs.map((t) => (
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={tab === t}
                className={"svc-tab" + (tab === t ? " is-active" : "")}
                onClick={() => setTab(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <div className="svc-grid reveal-up">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
