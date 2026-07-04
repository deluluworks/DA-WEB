import { Button } from "@/components/ds/Button";

const underline: React.CSSProperties = {
  backgroundImage: "linear-gradient(var(--color-obsidian-ink), var(--color-obsidian-ink))",
  backgroundSize: "100% 4px",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "left 92%",
};

/** Ported from da/sections-1.jsx `DAHero`. */
export function Hero() {
  return (
    <header className="da-hero-section">
      <div aria-hidden="true" className="da-hero-bloom" />
      <div className="da-hero-grid">
        <div className="da-hero-copy">
          <h1 className="da-hero-h1">
            <span style={underline}>Strategic rebranding</span>
            <br />
            &amp; <span style={underline}>digital build</span>
            <br />
            for brands with nerve
          </h1>
          <p className="da-hero-lede">
            Brand work that&rsquo;s more than a logo,{" "}
            <em style={{ color: "var(--color-obsidian-ink)" }}>
              the kind that shifts how investors, talent and markets read your business.
            </em>{" "}
            That shift is the whole game.
          </p>
          <div className="da-hero-actions">
            <Button variant="primary" size="lg" iconRight={<span aria-hidden>&rarr;</span>}>
              Start a project
            </Button>
            <Button variant="secondary" size="lg">
              Don&rsquo;t click this
            </Button>
          </div>
        </div>
        <div className="da-hero-film">
          <div aria-hidden="true" className="da-hero-film-glow" />
          <div aria-hidden="true" className="da-hero-film-vignette" />
          <span className="da-hero-film-label">
            <span aria-hidden className="da-hero-film-dot" />
            Client film
          </span>
          <button aria-label="Play film" className="da-hero-play">
            <span aria-hidden className="da-hero-play-tri">
              &#9654;
            </span>
          </button>
          <div className="da-hero-film-quote">
            <span>&ldquo;And that&rsquo;s when the room went quiet.&rdquo;</span>
          </div>
        </div>
      </div>
    </header>
  );
}
