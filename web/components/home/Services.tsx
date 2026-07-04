"use client";

import { useEffect, useRef, useState } from "react";

type Service = { title: string; meta: string; bg: string; fg: string };

const SERVICES: Service[] = [
  { title: "Brand strategy", meta: "Positioning · Naming · Narrative", bg: "var(--color-block-iris)", fg: "#ffffff" },
  { title: "Brand & identity", meta: "Logos · Systems · Guidelines", bg: "var(--color-block-maroon)", fg: "#ffffff" },
  { title: "Website design", meta: "UX · UI · Art direction", bg: "var(--color-block-teal)", fg: "#ffffff" },
  {
    title: "Website development",
    meta: "Webflow · Build · Launch",
    bg: "var(--color-block-solar)",
    fg: "var(--color-obsidian-ink)",
  },
  {
    title: "Film & animation",
    meta: "Live action · Motion · Lottie",
    bg: "var(--color-block-mint)",
    fg: "var(--color-obsidian-ink)",
  },
  { title: "Brand campaigns", meta: "Launch · Go-to-market", bg: "var(--color-block-ink)", fg: "#ffffff" },
];

/** Ported from da/sections-services.jsx `DAServices`. Cursor-follow preview is fine-pointer only (CSS-hidden on touch). */
export function Services() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const modalWrap = useRef<HTMLDivElement | null>(null);
  const cursorWrap = useRef<HTMLDivElement | null>(null);
  const target = useRef({ x: 0, y: 0 });
  const mp = useRef({ x: 0, y: 0 });
  const cp = useRef({ x: 0, y: 0 });
  const started = useRef(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (!started.current) {
        mp.current = { x: e.clientX, y: e.clientY };
        cp.current = { x: e.clientX, y: e.clientY };
        started.current = true;
      }
    };
    window.addEventListener("mousemove", onMove);
    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;
    let raf: number;
    const tick = () => {
      mp.current.x = lerp(mp.current.x, target.current.x, 0.12);
      mp.current.y = lerp(mp.current.y, target.current.y, 0.12);
      cp.current.x = lerp(cp.current.x, target.current.x, 0.22);
      cp.current.y = lerp(cp.current.y, target.current.y, 0.22);
      if (modalWrap.current) modalWrap.current.style.transform = `translate(${mp.current.x}px, ${mp.current.y}px)`;
      if (cursorWrap.current) cursorWrap.current.style.transform = `translate(${cp.current.x}px, ${cp.current.y}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const { active, index } = modal;

  return (
    <section className="da-services">
      <div className="da-wrap">
        <div className="da-svc-head">
          <h2>Services</h2>
          <p>Brand-first, end to end — strategy through launch, built to be impossible to ignore.</p>
        </div>

        <div className="da-svc-list" onMouseLeave={() => setModal((m) => ({ ...m, active: false }))}>
          {SERVICES.map((s, i) => (
            <div key={s.title} className="da-svc-row" onMouseEnter={() => setModal({ active: true, index: i })}>
              <h3 className="da-svc-title">{s.title}</h3>
              <span className="da-svc-meta">{s.meta}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="da-svc-modalwrap" ref={modalWrap} aria-hidden="true">
        <div className="da-svc-modal" data-active={active ? "true" : "false"}>
          <div className="da-svc-stack" style={{ top: `${index * -100}%` }}>
            {SERVICES.map((s) => (
              <div key={s.title} className="da-svc-tile" style={{ background: s.bg, color: s.fg }}>
                <span>{s.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="da-svc-cursorwrap" ref={cursorWrap} aria-hidden="true">
        <div className="da-svc-cursor" data-active={active ? "true" : "false"}>
          View&nbsp;&rarr;
        </div>
      </div>
    </section>
  );
}
