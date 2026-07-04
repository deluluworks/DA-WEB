import { Eyebrow } from "@/components/ds/Eyebrow";

const ACCENTS: Record<number, string> = {
  4: "var(--color-iris-voltage)",
  11: "var(--color-solar-bloom)",
  18: "var(--color-deep-teal)",
  27: "var(--color-iris-voltage)",
};

const POINTS = [
  "A strategy-led studio with real depth in deeptech, fintech and enterprise SaaS. Known for a structured process that helps technical companies pin down positioning, identity and digital experience.",
  "A proven track record of helping startups raise on the back of sharper brand positioning, not just a prettier logo.",
  "Brand strategy and identity for B2B teams that need clarity fast. We work as a consultant, not a vendor, finding the underlying problem, not just filling the brief.",
];

function MazeGraphic() {
  const cells = Array.from({ length: 36 });
  return (
    <div className="da-maze">
      <div className="da-maze-grid">
        {cells.map((_, i) => (
          <div key={i} className="da-maze-cell" style={{ background: ACCENTS[i] || "transparent" }} />
        ))}
      </div>
      <p className="da-maze-caption">Say goodbye to dead ends in design.</p>
    </div>
  );
}

/** Ported from da/sections-3.jsx `DAWhyUs`. */
export function WhyUs() {
  return (
    <section className="da-whyus">
      <div className="da-wrap">
        <Eyebrow>Our brand promise, we take ownership. Period.</Eyebrow>
        <div className="da-whyus-grid">
          <MazeGraphic />
          <div>
            {POINTS.map((p, i) => (
              <div key={i} className={`da-whyus-point${i === POINTS.length - 1 ? " da-whyus-point--last" : ""}`}>
                <span className="da-whyus-index">0{i + 1}</span>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
