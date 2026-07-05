import type { CSSProperties } from "react";

/**
 * Media placeholder tile — ported verbatim from `sevenloop/sl-header.jsx`
 * `MediaTile`. Purely decorative visual scaffolding (the export ships no real
 * imagery for the client hub); per-tile cover / word colours stay inline since
 * they vary per instance.
 */
export function MediaTile({
  label,
  cover,
  wordColor = "rgba(255,255,255,0.5)",
  ratio = "16 / 9",
  word,
  play,
  big,
}: {
  label: string;
  cover: string;
  wordColor?: string;
  ratio?: string;
  word?: string;
  play?: boolean;
  big?: boolean;
}) {
  const style: CSSProperties = { background: cover, aspectRatio: ratio };
  return (
    <div className="sl-tile" style={style}>
      <div aria-hidden className="sl-tile-grad" />
      <div className="sl-tile-center">
        {word ? (
          <span
            className={big ? "sl-tile-word sl-tile-word-big" : "sl-tile-word"}
            style={{ color: wordColor }}
          >
            {word}
          </span>
        ) : (
          <span className="sl-tile-label-c" style={{ color: wordColor }}>
            {label}
          </span>
        )}
      </div>
      {play && (
        <span className="sl-tile-play">
          Play video{" "}
          <span aria-hidden style={{ fontSize: 10 }}>
            &#9654;
          </span>
        </span>
      )}
      {!word && <span className="sl-tile-label">{label}</span>}
    </div>
  );
}
