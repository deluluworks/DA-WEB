type Card = { name: string; cover: string; wordColor: string; service: string; meta?: string };

const CARDS: Card[] = [
  { name: "Botim", cover: "var(--color-deep-teal)", wordColor: "var(--color-solar-bloom)", service: "Web design & Webflow development", meta: "Fintech" },
  { name: "Ximkart", cover: "var(--color-block-iris)", wordColor: "var(--color-paper-white)", service: "Branding", meta: "Series A" },
  { name: "Stellar", cover: "var(--color-block-maroon)", wordColor: "var(--color-paper-white)", service: "Website design", meta: "Venture capital" },
  { name: "Relanto", cover: "var(--color-block-ink)", wordColor: "var(--color-solar-bloom)", service: "Website design & build", meta: "IT services" },
  { name: "Verdant", cover: "var(--color-block-solar)", wordColor: "var(--color-obsidian-ink)", service: "Brand identity", meta: "Multimedia portal" },
];

const REASONS = [
  "audience say &ldquo;yes, this&rdquo;",
  "team want to be part of it",
  "investors reach for the chequebook",
];

function PortfolioCard({ name, cover, wordColor, service, meta }: Card) {
  return (
    <article className="da-portfolio-card">
      <div className="da-portfolio-cover" style={{ background: cover }}>
        <div className="da-portfolio-cover-word" style={{ color: wordColor }}>
          {name}
        </div>
        <span className="da-portfolio-cta" style={{ borderColor: wordColor, color: wordColor }}>
          Visit website <span aria-hidden>&rarr;</span>
        </span>
      </div>
      <div className="da-portfolio-meta">
        <span className="da-portfolio-name">{name}</span>
        <span className="da-portfolio-service">{service}</span>
        {meta ? <span className="da-portfolio-tag">{meta}</span> : null}
      </div>
    </article>
  );
}

/** Ported from da/sections-2.jsx `DAPortfolio`. */
export function Portfolio() {
  return (
    <section className="da-portfolio">
      <div className="da-wrap da-portfolio-grid">
        <div className="da-portfolio-intro">
          <h2>Design Asylum&rsquo;s strategic branding projects</h2>
          <p className="da-portfolio-lede">A brand &amp; digital studio with a low tolerance for boring.</p>
          <p className="da-portfolio-body">
            The value of branding isn&rsquo;t how a thing looks or sounds. It&rsquo;s the story,
            confidence and clarity you unearth in the process, the part that makes your:
          </p>
          <ul className="da-portfolio-reasons">
            {REASONS.map((t, i) => (
              <li key={i}>
                <span aria-hidden className="da-portfolio-dot" />
                <span dangerouslySetInnerHTML={{ __html: t }} />
              </li>
            ))}
          </ul>
          <a href="/clients" className="da-portfolio-more">
            See more work <span aria-hidden>&rarr;</span>
          </a>
        </div>
        <div className="da-portfolio-list">
          {CARDS.map((c) => (
            <PortfolioCard key={c.name} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
