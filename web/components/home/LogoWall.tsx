function Laurel({ flip }: { flip?: boolean }) {
  const leaf = "M0 0 C 3.4 -4.5, 3.4 -12.5, 0 -16.5 C -3.4 -12.5, -3.4 -4.5, 0 0 Z";
  const leaves: [number, number, number][] = [
    [28, 15, -122],
    [22, 25, -110],
    [17.5, 35, -98],
    [15, 46, -88],
    [17.5, 57, -76],
    [22, 67, -64],
    [28, 77, -52],
  ];
  return (
    <svg
      width="50"
      height="92"
      viewBox="0 0 50 92"
      fill="none"
      aria-hidden="true"
      className="da-laurel"
      style={{ transform: flip ? "scaleX(-1)" : "none" }}
    >
      <path d="M34 8 C 12 27, 12 65, 34 84" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <g fill="currentColor">
        {leaves.map(([x, y, rot], i) => (
          <path key={i} d={leaf} transform={`translate(${x} ${y}) rotate(${rot})`} />
        ))}
      </g>
    </svg>
  );
}

const CLIENTS = [
  "Northwind", "Tessellate", "Halcyon", "Meridian", "Cobalt", "Ambervale", "Forge", "Quorum", "Z-Axis",
  "Hinterland", "Foundry", "Stellar", "Brightline", "Vantage", "Granite", "Solace", "Verdant", "Skylark",
];

/** Ported from da/sections-1.jsx `DALogoWall`. */
export function LogoWall() {
  const loop = [...CLIENTS, ...CLIENTS];
  return (
    <section className="da-logowall">
      <div className="da-wrap da-logowall-head">
        <Laurel />
        <p>Trusted by companies that value design</p>
        <Laurel flip />
      </div>
      <div className="da-marquee-wrap" aria-label="Client logos">
        <div className="da-marquee-track">
          {loop.map((name, i) => (
            <span key={i} className="da-marquee-logo" aria-hidden={i >= CLIENTS.length ? true : undefined}>
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
