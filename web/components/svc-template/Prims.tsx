import type { ReactNode } from "react";

/**
 * Long-form article building blocks, shared by every "SEO landing page"
 * template (Service, Industry, Solution, Location — confirmed identical
 * `bl-*` class structure across `service/svc-body.jsx` and
 * `industry/ind-body.jsx`). Bullet-list items carry inline `<strong>`/HTML
 * entities from the source's own static copy arrays (not user input), so
 * `dangerouslySetInnerHTML` here mirrors the export's own approach.
 */

export function P({ children, lead }: { children: ReactNode; lead?: boolean }) {
  return <p className={lead ? "bl-lead" : undefined}>{children}</p>;
}

export function Sub({ children }: { children: ReactNode }) {
  return <div className="bl-sub">{children}</div>;
}

export function UL({ items }: { items: string[] }) {
  return (
    <ul className="bl-ul">
      {items.map((html, i) => (
        <li key={i} dangerouslySetInnerHTML={{ __html: html }} />
      ))}
    </ul>
  );
}

export function Block({ head, children }: { head?: string; children: ReactNode }) {
  return (
    <div className="bl-block">
      {head && <p className="bl-block-head">{head}</p>}
      {children}
    </div>
  );
}

export function Sec({
  id,
  title,
  sub,
  children,
}: {
  id: string;
  title: string;
  sub?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="bl-sec">
      <h2 className="bl-h2">{title}</h2>
      {sub && <Sub>{sub}</Sub>}
      {children}
    </section>
  );
}
