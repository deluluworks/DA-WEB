"use client";

import { useEffect, useState } from "react";
import type { TocItem } from "./ArticleBody";

/**
 * Sticky table of contents with scroll-spy — the interactive slice of the blog
 * article's left rail. Content is server-rendered; only the active-section
 * highlight needs the client. The "read summarised version with" AI chips from
 * the export are kept as decorative (non-interactive) markers: the export wired
 * them to `href="#"` with no real destination, so per the migration's
 * "no invented destination" policy they render as static chips.
 */
export function BlogToc({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const sections = items
      .map((it) => document.getElementById(it.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [items]);

  const ai = ["ChatGPT", "Google AI", "Claude", "Perplexity"];

  return (
    <aside className="bl-toc">
      <div className="bl-toc-h">Table of content</div>
      <nav>
        {items.map((it) => (
          <a key={it.id} href={`#${it.id}`} className={"bl-toc-link" + (active === it.id ? " is-active" : "")}>
            {it.label}
          </a>
        ))}
      </nav>
      <div className="bl-toc-ai">
        {/* Verbatim from the export ("summaried" is the source's own typo — kept
            per the migration's don't-silently-correct policy, flagged for human). */}
        <div className="bl-toc-h">Read summaried version with</div>
        <div className="bl-toc-ai-row">
          {ai.map((name) => (
            <span key={name} className="bl-aichip">
              <span aria-hidden className="bl-aichip-dot" />
              {name}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
