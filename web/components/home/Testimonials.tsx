import { Avatar } from "@/components/ds/Avatar";

type Testimonial = {
  name: string;
  initials: string;
  title: string;
  cover: string;
  quote: string;
  highlight?: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Dr. Mallesh B.",
    initials: "Mallesh B",
    title: "Co-founder, i3systems",
    cover: "var(--color-block-iris)",
    quote: "It was a genuinely successful branding project, and, more to the point, fun to work with the team.",
  },
  {
    name: "Sharan Urubail",
    initials: "Sharan U",
    title: "CEO & co-founder, Ximkart",
    cover: "var(--color-block-maroon)",
    quote:
      "From concept to final branding the whole thing was glitch-free. Conversations with our own clients are so much easier now.",
    highlight: "glitch-free",
  },
];

function TestimonialCard({ name, initials, title, cover, quote, highlight }: Testimonial) {
  const parts = highlight ? quote.split(highlight) : [quote];
  return (
    <article className="da-testimonial-card">
      <div className="da-testimonial-cover" style={{ background: cover }}>
        <div aria-hidden className="da-testimonial-glow" />
        <span aria-hidden className="da-testimonial-play">
          &#9654;
        </span>
      </div>
      <div className="da-testimonial-byline">
        <Avatar name={initials} size={46} />
        <div>
          <div className="da-testimonial-name">{name}</div>
          <div className="da-testimonial-title">{title}</div>
        </div>
      </div>
      <p className="da-testimonial-quote">
        &ldquo;{parts[0]}
        {highlight ? <span className="da-testimonial-highlight">{highlight}</span> : null}
        {parts[1]}&rdquo;
      </p>
    </article>
  );
}

/** Ported from da/sections-3.jsx `DATestimonials`. */
export function Testimonials() {
  return (
    <section className="da-testimonials">
      <div className="da-wrap da-testimonials-grid">
        <h2>Client words, backing the brand-strategy results</h2>
        <div className="da-testimonials-list">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
