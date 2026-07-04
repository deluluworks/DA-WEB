const TEAM = ["Ekta", "Mejo", "Sanjana", "Tanmaya", "Athira", "Akhilesh", "Arpan", "Swathi"];

/**
 * Ported from footer/why-da.jsx `TeamStrip`. Links to `/team` (no
 * per-member routes exist) rather than the export's unwired `href="#"`.
 */
export function TeamStrip() {
  return (
    <section className="da-wrap wda-team-section">
      <h2 className="wda-section-head" style={{ maxWidth: 820 }}>
        The team that&rsquo;s making B2B interesting
      </h2>
      <div className="wda-team-row">
        {TEAM.map((n) => (
          <a key={n} className="auth-tag wda-team-pill" href="/team">
            <span aria-hidden className="wda-team-avatar">
              {n[0]}
            </span>
            Meet {n}
          </a>
        ))}
      </div>
    </section>
  );
}
