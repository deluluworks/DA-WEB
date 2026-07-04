import Link from 'next/link';
import { Fragment } from 'react';

export type Crumb = { label: string; href?: string };

/** HOME › CLIENTS › SEVENLOOP — ported from sevenloop/sl-shared.jsx, using
 * next/link for real internal navigation instead of placeholder `#` anchors. */
export function Breadcrumb({ trail, onDark = false }: { trail: Crumb[]; onDark?: boolean }) {
  const dim = onDark ? 'rgba(255,255,255,0.5)' : 'var(--color-ash)';
  const cur = onDark ? 'var(--color-paper-white)' : 'var(--color-obsidian-ink)';
  const sep = onDark ? 'rgba(255,255,255,0.28)' : 'var(--color-fog)';
  return (
    <nav className="sl-crumb" aria-label="Breadcrumb" style={{ color: dim }}>
      {trail.map((item, i) => {
        const last = i === trail.length - 1;
        return (
          <Fragment key={item.label}>
            {last || !item.href ? (
              <span className="sl-crumb-cur" style={{ color: last ? cur : dim }}>
                {item.label}
              </span>
            ) : (
              <Link href={item.href} style={{ color: dim }}>
                {item.label}
              </Link>
            )}
            {!last && (
              <span className="sl-crumb-sep" style={{ color: sep }} aria-hidden>
                &rsaquo;
              </span>
            )}
          </Fragment>
        );
      })}
    </nav>
  );
}
