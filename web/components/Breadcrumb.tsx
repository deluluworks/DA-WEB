import Link from "next/link";

export type Crumb = { label: string; href?: string };

export function Breadcrumb({ trail }: { trail: Crumb[] }) {
  return (
    <nav className="da-breadcrumb" aria-label="Breadcrumb">
      {trail.map((item, i) => {
        const last = i === trail.length - 1;
        return (
          <span key={item.label} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            {last || !item.href ? (
              <span className="da-breadcrumb-current">{item.label}</span>
            ) : (
              <Link href={item.href}>{item.label}</Link>
            )}
            {!last && <span aria-hidden>&rsaquo;</span>}
          </span>
        );
      })}
    </nav>
  );
}
