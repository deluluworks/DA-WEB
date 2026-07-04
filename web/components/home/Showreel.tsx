/** Ported from da/sections-2.jsx `DAShowreel`. */
export function Showreel() {
  return (
    <section className="da-showreel">
      <div className="da-wrap">
        <div className="da-showreel-film">
          <div aria-hidden="true" className="da-showreel-film-glow" />
          <div className="da-showreel-film-word">Showreel 2026</div>
          <span className="da-showreel-film-label">Showreel 2026</span>
          <button className="da-showreel-play">
            Play video <span aria-hidden>&#9654;</span>
          </button>
        </div>
      </div>
      <div className="da-wrap da-showreel-teaser-wrap">
        <div className="da-showreel-teaser">
          <div className="da-showreel-teaser-copy">
            <span className="da-showreel-teaser-eyebrow">The long version</span>
            <p>
              We wrote four thousand words on how that film actually got made. The brief, the dead
              ends, the bit we&rsquo;d never do again. Worth a read.
            </p>
          </div>
          <a href="/blog" className="da-showreel-teaser-cta">
            Read the breakdown <span aria-hidden>&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
