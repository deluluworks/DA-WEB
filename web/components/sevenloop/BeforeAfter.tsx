"use client";

import { useCallback, useRef, useState } from "react";

/**
 * Before / after drag-to-compare slider — ported from `sevenloop/sl-editorial.jsx`
 * `BeforeAfter`. Client component (pointer drag + keyboard state). The two
 * panels are the export's own colour-block placeholders (no real screenshots
 * shipped in the export).
 */
export function BeforeAfter() {
  const [pos, setPos] = useState(52);
  const wrapRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    let p = ((clientX - r.left) / r.width) * 100;
    p = Math.max(2, Math.min(98, p));
    setPos(p);
  }, []);

  const onDown = (e: React.PointerEvent) => {
    dragRef.current = true;
    update(e.clientX);
    const move = (ev: PointerEvent) => {
      if (dragRef.current) update(ev.clientX);
    };
    const up = () => {
      dragRef.current = false;
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };

  return (
    <div
      ref={wrapRef}
      className="sl-ba"
      onPointerDown={onDown}
      role="slider"
      aria-valuenow={Math.round(pos)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Before and after website comparison"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPos((p) => Math.max(2, p - 4));
        if (e.key === "ArrowRight") setPos((p) => Math.min(98, p + 4));
      }}
    >
      {/* AFTER (base) */}
      <div className="sl-ba-layer" style={{ background: "var(--color-deep-teal)" }}>
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(90% 130% at 80% 20%, rgba(255,194,64,0.40), transparent 52%), radial-gradient(90% 130% at 15% 90%, rgba(81,111,234,0.46), transparent 52%)",
          }}
        />
        <span className="sl-ba-word" style={{ position: "relative", color: "rgba(255,255,255,0.24)" }}>
          New site
        </span>
      </div>
      {/* BEFORE (clipped to left) */}
      <div
        className="sl-ba-layer"
        style={{ background: "#e7e6e1", clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <span className="sl-ba-word" style={{ color: "rgba(24,31,31,0.18)" }}>
          Old site
        </span>
      </div>
      {/* tags */}
      <span className="sl-ba-tag" style={{ left: 18 }}>
        Before
      </span>
      <span className="sl-ba-tag" style={{ right: 18 }}>
        After
      </span>
      {/* handle + knob */}
      <div className="sl-ba-handle" style={{ left: `${pos}%` }} />
      <div className="sl-ba-knob" style={{ left: `${pos}%`, top: "50%" }}>
        <span aria-hidden>&#8249;</span>
        <span aria-hidden>&#8250;</span>
      </div>
    </div>
  );
}
