type Quote = { quote: string; who: string; resolution: string; client: string };

const QUOTES: Quote[] = [
  {
    quote: "We need a brand and a website that say what we actually do, simply, to the people who matter.",
    who: "Cross-border trade platform",
    client: "Ximkart",
    resolution: "on a brand refresh, a new visual identity, and a Webflow site that finally reads clearly.",
  },
  {
    quote: "We can’t convey what the brand stands for, and it’s costing us the talent we want.",
    who: "Cyber-security company",
    client: "Fortuna",
    resolution: "to drag the brand up to the pace of the industry while keeping the depth that attracts better people.",
  },
  {
    quote: "We’re struggling to find a team we can actually work in sync with.",
    who: "B2B fintech brand",
    client: "Progcap",
    resolution: "to understand their position in the market and build materials that hold their values without flinching.",
  },
  {
    quote: "The last agency walked out mid-build. Can you get us live on time?",
    who: "Craft beer brand",
    client: "Geist",
    resolution: "to rescue the build and ship a site where people can find the nearest stockist in two taps.",
  },
];

function QuoteCard({ quote, who, resolution, client }: Quote) {
  return (
    <article className="da-quote-card">
      <p className="da-quote-text">&ldquo;{quote}&rdquo;</p>
      <p className="da-quote-who">{who}</p>
      <hr className="da-rule da-quote-rule" />
      <p className="da-quote-resolution">
        Design Asylum worked with <strong>{client}</strong> {resolution}
      </p>
      <a href="/clients" className="da-quote-outcome">
        See the outcome <span aria-hidden>&rarr;</span>
      </a>
    </article>
  );
}

/** Ported from da/sections-2.jsx `DAPainPoints`. */
export function PainPoints() {
  return (
    <section className="da-painpoints">
      <div className="da-wrap da-painpoints-grid">
        <h2>Does any of this sound familiar?</h2>
        <div className="da-painpoints-list">
          {QUOTES.map((q) => (
            <QuoteCard key={q.client} {...q} />
          ))}
        </div>
      </div>
    </section>
  );
}
