import type { ReactNode } from "react";

/** Ported from da/sections-1.jsx `Eyebrow` (shared across the home sections). */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="da-eyebrow">
      <span aria-hidden className="da-eyebrow-dot" />
      <span className="da-eyebrow-text">{children}</span>
    </span>
  );
}
