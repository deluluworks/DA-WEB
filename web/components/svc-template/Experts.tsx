import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ds/Eyebrow";

export type Expert = { role: string; name: string; bio: string };

/**
 * Ported from service/svc-extras.jsx `SvcExperts` (identical shape in
 * industry/ind-blocks.jsx `IndExperts`). The export's "Read more" per-expert
 * link is an unwired `href="#"` — no per-expert bio page exists beyond
 * `/author/tanmaya-rao` (see SITE-PROGRESS.md team/section-port's decision
 * on the same 33-of-34 unbuilt-bio pattern) — rendered as static/decorative.
 */
export function Experts({ heading, members }: { heading: ReactNode; members: Expert[] }) {
  return (
    <section style={{ paddingTop: "var(--section-pad-y)", background: "var(--color-paper-off)" }}>
      <div className="da-wrap svc-experts-inner">
        <div style={{ marginBottom: 44 }}>
          <Eyebrow>The roster</Eyebrow>
          <h2 className="svc-section-h2" style={{ marginTop: 18 }}>
            {heading}
          </h2>
        </div>
        <div className="svc-team-grid reveal-up">
          {members.map((m) => (
            <article className="svc-team-card" key={m.name}>
              <span className="svc-team-role">{m.role}</span>
              <h3 className="svc-team-name">{m.name}</h3>
              <p className="svc-team-bio">{m.bio}</p>
              <span className="svc-team-more">
                Read more <span aria-hidden>&rarr;</span>
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
