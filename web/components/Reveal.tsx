"use client";

import { useEffect } from "react";

/**
 * Wires the design system's `.reveal-up` → `.is-revealed` scroll-reveal
 * primitive (see `app/styles/base.css`) for every matching element already
 * rendered on the page. Ported behavior from the export's `useReveal` hook
 * (`sevenloop/sl-shared.jsx`), but targets the DS token-driven class names
 * already established in `base.css` instead of introducing a second one.
 */
export function RevealObserver() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal-up:not(.is-revealed)");
    if (!("IntersectionObserver" in window) || !els.length) {
      els.forEach((el) => el.classList.add("is-revealed"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
