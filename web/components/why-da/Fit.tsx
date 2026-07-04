const YES = [
  "require on time delivery (this means you can go live quicker and start selling sooner)",
  "if you're looking for a team that understands branding and how to take it forward on the website",
  "follow universal good work ethics; hire thoughtfully, let them do their job and not micro-manage",
];
const NO = [
  "are an early stage startup and think branding is expensive",
  "need everything done in 3 weeks, but need 1 week to provide feedback",
  "haven't prioritized website for your business and hence tight on budget",
];

/** Ported from footer/why-da.jsx `Fit`. */
export function Fit() {
  return (
    <section className="da-wrap wda-fit-section">
      <div className="wda-fit-grid">
        <div className="fb-fit reveal-up">
          <h2 className="wda-fit-head">We&rsquo;re the right fit if you...</h2>
          <ul className="pr-ul">
            {YES.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
        <div className="fb-fit is-no reveal-up">
          <h2 className="wda-fit-head wda-fit-head--dark">We&rsquo;re the not right fit if you...</h2>
          <ul className="pr-ul">
            {NO.map((t) => (
              <li key={t} className="wda-fit-no-item">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
