/**
 * Ported from service/svc-app.jsx's inline portfolio marquee (industry/
 * ind-app.jsx wraps the identical strip in a standalone section with a
 * `label` above it — `label` is optional here to cover both call sites).
 */
export function MarqueeStrip({ label }: { label?: string }) {
  const strip = Array.from({ length: 8 }, (_, i) => i);
  return (
    <div>
      {label && <div className="svc-marquee-label">{label}</div>}
      <div className="svc-marquee">
        <div className="svc-marquee-track">
          {[...strip, ...strip].map((_, i) => (
            <span className="svc-marquee-item" key={i}>
              <span>Projects</span>
              <em aria-hidden>&#10022;</em>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
