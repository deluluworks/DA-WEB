/**
 * Ported from footer/why-da.jsx `Showreel`. The export's "Play showreel"
 * button was never wired to a real video source — kept as the same static,
 * decorative placeholder rather than inventing a video that doesn't exist.
 */
export function Showreel() {
  return (
    <section className="da-wrap wda-showreel-section">
      <div className="wda-showreel reveal-up">
        <span className="wda-showreel-label">Showreel</span>
        <button className="fb-play wda-showreel-play" type="button">
          Play showreel <span aria-hidden style={{ fontSize: 10 }}>&#9654;</span>
        </button>
      </div>
    </section>
  );
}
