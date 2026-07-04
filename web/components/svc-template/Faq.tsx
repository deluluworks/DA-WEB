export type FaqBlock = { p?: string; sub?: string; ul?: string[] };
export type FaqEntry = { q: string; a: FaqBlock[] };

/**
 * Ported from service/svc-extras.jsx `SvcFAQ` (identical shape in industry/
 * ind-blocks.jsx `IndFAQ`). The export drives the accordion with JS
 * `max-height` state; reused the site's native `<details>/<summary>`
 * `.da-faq` primitive instead (same decision as the FAQ index page and
 * home's `Faq` component — no JS accordion state needed).
 */
export function Faq({ heading, items }: { heading: string; items: FaqEntry[] }) {
  return (
    <section className="da-wrap reveal-up" style={{ paddingTop: "var(--section-pad-y)" }}>
      <h2 className="svc-section-h2" style={{ marginBottom: 36 }}>
        {heading}
      </h2>
      <div>
        {items.map((item, i) => (
          <details key={item.q} className="da-faq" open={i === 0}>
            <summary>
              <span className="da-faq-q">{item.q}</span>
              <span className="da-faq-plus" aria-hidden>
                +
              </span>
            </summary>
            {item.a.map((blk, j) => {
              if (blk.sub) return <div className="bl-sub" key={j}>{blk.sub}</div>;
              if (blk.ul)
                return (
                  <ul className="bl-ul" key={j}>
                    {blk.ul.map((li, k) => (
                      <li key={k} dangerouslySetInnerHTML={{ __html: li }} />
                    ))}
                  </ul>
                );
              return <p className="da-faq-a" key={j} dangerouslySetInnerHTML={{ __html: blk.p ?? "" }} />;
            })}
          </details>
        ))}
      </div>
    </section>
  );
}
