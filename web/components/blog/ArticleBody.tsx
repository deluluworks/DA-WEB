import { Fragment, type ReactNode } from "react";

/**
 * Server-side markdown → React renderer for the Sevenloop blog article.
 *
 * The article copy lives in `content/blog/sevenloop-rebrand-webflow-case-study.mdx`
 * (extracted verbatim in Run 8) and is read as a raw string via `getPostBySlug`.
 * Rather than pull in a full markdown dependency, this renders the small, fixed
 * set of constructs the article actually uses — H2 sections, H3 subs, `-` lists,
 * `>` blockquotes (pull quotes + bordered call-out blocks), `*Figure: …*` tiles,
 * and inline `**bold**` — into the export's `bl-*` article structure (styled in
 * `app/styles/ds-components.css` + `app/styles/blog.css`).
 */

export type TocItem = { id: string; label: string };

/** Sequential ids matching the export's `sec-01`…`sec-NN`. */
function secId(i: number): string {
  return `sec-${String(i + 1).padStart(2, "0")}`;
}

/** Split inline `**bold**` runs into React nodes. */
function inline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
    const b = /^\*\*([^*]+)\*\*$/.exec(part);
    return b ? <strong key={i}>{b[1]}</strong> : <Fragment key={i}>{part}</Fragment>;
  });
}

/** Plain-text version of a heading (for ToC labels / titles). */
function plain(text: string): string {
  return text.replace(/\*\*/g, "").trim();
}

type Section = { id: string; title: string; body: string };

function splitSections(md: string): { lead: string; sections: Section[] } {
  const parts = md.split(/^## (?!#)/m);
  const lead = parts[0]?.trim() ?? "";
  const sections: Section[] = parts.slice(1).map((chunk, i) => {
    const trimmed = chunk.trim();
    const nl = trimmed.indexOf("\n");
    const title = nl === -1 ? trimmed : trimmed.slice(0, nl).trim();
    const body = nl === -1 ? "" : trimmed.slice(nl + 1).trim();
    return { id: secId(i), title, body };
  });
  return { lead, sections };
}

/** Public helper: the ToC entries, derived the same way the body assigns ids. */
export function extractToc(md: string): TocItem[] {
  return splitSections(md).sections.map((s) => ({ id: s.id, label: plain(s.title) }));
}

function renderList(items: string[], key: string): ReactNode {
  return (
    <ul className="bl-ul" key={key}>
      {items.map((it, i) => (
        <li key={i}>{inline(it)}</li>
      ))}
    </ul>
  );
}

function renderQuote(lines: string[], key: string): ReactNode {
  const content = lines.map((l) => l.replace(/^>\s?/, "")).filter((l) => l.trim() !== "");

  // Bordered call-out with a bulleted list ("What changed").
  const listItems = content.filter((l) => l.startsWith("- ")).map((l) => l.slice(2));
  if (listItems.length) {
    const head = plain(content.find((l) => !l.startsWith("- ")) ?? "");
    return (
      <div className="bl-block" key={key}>
        {head && <div className="bl-block-head">{head}</div>}
        {renderList(listItems, key + "-ul")}
      </div>
    );
  }

  // Bordered call-out with a bold head + prose on one line ("The bottom line").
  const headMatch = content.length === 1 ? /^\*\*(.+?)\*\*\s+—\s+(.+)$/.exec(content[0]) : null;
  if (headMatch) {
    return (
      <div className="bl-block" key={key}>
        <div className="bl-block-head">{headMatch[1]}</div>
        <p>{inline(headMatch[2])}</p>
      </div>
    );
  }

  // Pull quote — a trailing line beginning with an em/en dash is the citation.
  const citeIdx = content.findIndex((l) => /^[—–-]\s/.test(l));
  const quote = content.filter((_, i) => i !== citeIdx).join(" ");
  const cite = citeIdx >= 0 ? content[citeIdx].replace(/^[—–-]\s/, "") : null;
  return (
    <blockquote className="bl-pull" key={key}>
      <p>{inline(quote)}</p>
      {cite && <cite>{cite}</cite>}
    </blockquote>
  );
}

function renderFigure(caption: string, key: string): ReactNode {
  const label = caption.replace(/^Figure:\s*/i, "").replace(/\.$/, "");
  return (
    <figure className="bl-fig" key={key}>
      <div className="bl-fig-glow" aria-hidden />
      <figcaption>{label}</figcaption>
    </figure>
  );
}

function renderBlocks(md: string): ReactNode[] {
  const lines = md.split("\n");
  const out: ReactNode[] = [];
  let i = 0;
  let k = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (line.trim() === "") {
      i++;
      continue;
    }

    // H3 sub-heading
    const sub = /^### (.+)$/.exec(line);
    if (sub) {
      out.push(
        <div className="bl-sub" key={k++}>
          {plain(sub[1])}
        </div>,
      );
      i++;
      continue;
    }

    // Figure tile
    const fig = /^\*(Figure:.*)\*$/.exec(line.trim());
    if (fig) {
      out.push(renderFigure(fig[1], `fig-${k++}`));
      i++;
      continue;
    }

    // Blockquote group
    if (line.startsWith(">")) {
      const group: string[] = [];
      while (i < lines.length && (lines[i].startsWith(">") || (group.length && lines[i].trim() === ""))) {
        group.push(lines[i]);
        i++;
      }
      out.push(renderQuote(group, `q-${k++}`));
      continue;
    }

    // Unordered list group
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      out.push(renderList(items, `ul-${k++}`));
      continue;
    }

    // Paragraph (single line in this content)
    out.push(<p key={k++}>{inline(line.trim())}</p>);
    i++;
  }

  return out;
}

export function ArticleBody({ md }: { md: string }) {
  const { lead, sections } = splitSections(md);
  return (
    <article className="bl-body">
      {lead && <p className="bl-lead">{inline(lead)}</p>}
      {sections.map((sec) => (
        <section key={sec.id} id={sec.id} className="bl-sec" data-toc={sec.id}>
          <h2 className="bl-h2">{inline(sec.title)}</h2>
          {renderBlocks(sec.body)}
        </section>
      ))}
    </article>
  );
}
