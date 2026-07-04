'use client';

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';

/** Scroll-reveal wrapper — ported from sevenloop/sl-shared.jsx's useReveal
 * hook, scoped to a single element via IntersectionObserver instead of a
 * page-wide querySelectorAll (App Router pages compose from many components,
 * so a single global hook can't own every `.sl-reveal` node). */
export function Reveal({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-in');
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={className ? `sl-reveal ${className}` : 'sl-reveal'} style={style}>
      {children}
    </div>
  );
}
