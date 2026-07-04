const ROWS: [string, string][] = [
  ["Tredence", "4 and counting"],
  ["Fortuna Group", "5 branding projects & counting"],
  ["Progcap", "18+ and... we lost count, honestly"],
  ["Grundr", "4 and counting"],
  ["DWIH", "Retainer, 4 years running"],
  ["Manupatra", "9 and counting"],
  ["Vertical Loop", "5 and counting"],
  ["Noise", "5 and counting"],
];

/** Ported from da/sections-2.jsx `DAStats`. */
export function Stats() {
  return (
    <section className="da-stats">
      <div className="da-wrap da-stats-grid">
        <div>
          <h2>
            8 in 10 clients
            <br />
            come back
            <br />
            for more.
          </h2>
          <p className="da-stats-lede">
            Once people work with us, they tend to keep working with us. The number we&rsquo;re
            quietly proud of.
          </p>
          <div className="da-stats-rating">
            <span className="da-stats-rating-value">4.3/5</span>
            <span className="da-stats-rating-label">Glassdoor rating</span>
          </div>
        </div>
        <div className="da-stats-rows">
          {ROWS.map(([name, count], i) => (
            <div key={name} className={`da-stats-row${i === 0 ? " da-stats-row--first" : ""}`}>
              <span className="da-stats-row-name">{name}</span>
              <span className="da-stats-row-count">{count}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
