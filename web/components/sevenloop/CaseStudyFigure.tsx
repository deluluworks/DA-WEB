import type { CSSProperties } from "react";

/**
 * Sevenloop brand mark — orange circle with a four-leaf clover.
 * Ported verbatim from `casestudy/cs-page.jsx` `CloverMark`.
 */
export function CloverMark({ size = 132 }: { size?: number }) {
  const orange = "#ef6c2e";
  const leaf = (cx: number, cy: number) => <circle cx={cx} cy={cy} r="15" fill="#fff" />;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      role="img"
      aria-label="an orange circle with a four leaf clover in the center"
    >
      <circle cx="60" cy="60" r="60" fill={orange} />
      <g transform="translate(60 58)">
        {leaf(0, -17)}
        {leaf(17, 0)}
        {leaf(0, 17)}
        {leaf(-17, 0)}
        <rect x="-2.4" y="6" width="4.8" height="26" rx="2.4" fill="#fff" transform="rotate(38 0 10)" />
      </g>
    </svg>
  );
}

export type CaseFigure = {
  caption: string;
  ratio: string;
  bg: string;
  glow: string;
  word?: string;
  wordColor?: string;
};

/**
 * Full-bleed branding figure — decorative colour-block placeholder (the export
 * ships no real imagery). Ported from `casestudy/cs-page.jsx` `Figure`.
 */
export function CaseStudyFigure({ idx, caption, ratio, bg, glow, word, wordColor }: CaseFigure & { idx: number }) {
  const style: CSSProperties = { aspectRatio: ratio, background: bg };
  return (
    <figure className="cs-figure reveal-up" style={style}>
      <div aria-hidden style={{ position: "absolute", inset: 0, background: glow }} />
      {word && (
        <div className="cs-figure-word">
          <span style={{ color: wordColor }}>{word}</span>
        </div>
      )}
      <span className="cs-idx">{String(idx).padStart(2, "0")}</span>
      <span className="cs-cap">{caption}</span>
    </figure>
  );
}
