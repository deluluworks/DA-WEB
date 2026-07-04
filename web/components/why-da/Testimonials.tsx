const CHIPS = ["Series A | $2.4M", "Deep Tech | $3.3M", "Cybersecurity | Global", "Insur-Tech | $3.97M"];

/** Ported from footer/why-da.jsx `Testimonials`. */
export function Testimonials() {
  return (
    <section className="wda-testimonials">
      <div className="da-wrap wda-testimonials-inner">
        <h2 className="wda-section-head" style={{ maxWidth: 760 }}>
          How we are different, in our client&rsquo;s words
        </h2>
        <div className="wda-chip-row">
          {CHIPS.map((c) => (
            <span key={c} className="fb-chip">
              {c}
            </span>
          ))}
        </div>
        <blockquote className="pr-quote wda-quote">
          <p>
            &ldquo;Our entire experience, from design concept to the final product was
            glitch-free. Conversations with our clients have become so much more easier
            now.&rdquo;
          </p>
          <cite>Sharan Urubail &mdash; CEO &amp; Co-Founder</cite>
        </blockquote>
        <button className="fb-play" type="button">
          Watch testimonial <span aria-hidden style={{ fontSize: 10 }}>&#9654;</span>
        </button>
      </div>
    </section>
  );
}
