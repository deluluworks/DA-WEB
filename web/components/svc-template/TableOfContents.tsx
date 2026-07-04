"use client";

import { useEffect, useState } from "react";

export type TocEntry = [id: string, label: string];

/** Ported from service/svc-app.jsx `TableOfContents` (identical in industry/ind-app.jsx). */
export function TableOfContents({ toc }: { toc: TocEntry[] }) {
  const [active, setActive] = useState(toc[0]?.[0]);

  useEffect(() => {
    const sections = toc.map(([id]) => document.getElementById(id)).filter((el): el is HTMLElement => !!el);
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [toc]);

  return (
    <aside className="bl-toc">
      <div className="bl-toc-h">Table of content</div>
      <nav>
        {toc.map(([id, label]) => (
          <a key={id} href={`#${id}`} className={"bl-toc-link" + (active === id ? " is-active" : "")}>
            {label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
