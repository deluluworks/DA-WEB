import Link from 'next/link';
import { Breadcrumb, type Crumb } from './Breadcrumb';
import { aiSummaryLinks, footerColumns, site, socialLinks } from '@/lib/config';
import styles from './Footer.module.css';

const linkStyle: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontWeight: 400,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  fontSize: 12,
  color: 'rgba(255,255,255,0.74)',
};

const colHeadStyle: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontWeight: 400,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  fontSize: 10,
  color: 'rgba(255,255,255,0.42)',
  marginBottom: 18,
};

const legalLineStyle: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontWeight: 400,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  fontSize: 11,
  color: 'rgba(255,255,255,0.55)',
};

/** SLFooter — dark/obsidian site footer; ported from sevenloop/sl-shared.jsx.
 * Nav columns and socials now resolve to real routes via lib/config. */
export function Footer({ trail }: { trail?: Crumb[] }) {
  const crumb: Crumb[] = trail ?? [{ label: 'Home', href: '/' }];

  return (
    <footer style={{ background: 'var(--color-obsidian-ink)', color: 'var(--color-paper-white)', paddingTop: 96 }}>
      <div className="da-wrap">
        <div className={styles.top}>
          <p
            style={{
              margin: 0,
              maxWidth: 760,
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(24px,2.6vw,34px)',
              lineHeight: 1.32,
              color: 'var(--color-paper-white)',
            }}
          >
            We exist to design B2B businesses their right to win &amp; communicate with clarity,
            personality, and a point of view, making the right people want to remember &amp;
            associate.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'flex-start' }}>
            <Breadcrumb onDark trail={crumb} />
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                background: 'var(--color-paper-white)',
                color: 'var(--color-obsidian-ink)',
                padding: '16px 28px',
                fontFamily: 'var(--font-display)',
                fontWeight: 400,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                fontSize: 13,
                whiteSpace: 'nowrap',
              }}
            >
              Start a project <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </div>

        <div className={styles.cols}>
          {Object.entries(footerColumns).map(([head, items]) => (
            <div key={head}>
              <div style={colHeadStyle}>{head}</div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {items.map((it) => (
                  <li key={it.label}>
                    <Link href={it.href} style={linkStyle}>
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <div style={colHeadStyle}>Contact</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a
                className="da-mail"
                href={`tel:${site.phone.href}`}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 400,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  fontSize: 13,
                  color: 'var(--color-paper-white)',
                }}
              >
                Call: {site.phone.display}
              </a>
              <a
                className="da-mail"
                href={`mailto:${site.email}`}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 400,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  fontSize: 13,
                  color: 'var(--color-paper-white)',
                }}
              >
                <span>{site.email}</span>
                <span aria-hidden>&#8599;</span>
              </a>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 400,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  fontSize: 13,
                  color: 'rgba(255,255,255,0.74)',
                }}
              >
                {site.location}
              </span>
            </div>
            <div style={{ display: 'flex', gap: 18, marginTop: 22 }}>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 400,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontSize: 11,
                    color: 'var(--color-paper-white)',
                    borderBottom: '1px solid rgba(255,255,255,0.5)',
                    paddingBottom: 2,
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            flexWrap: 'wrap',
            padding: '28px 0',
            marginTop: 56,
            borderTop: '1px solid rgba(255,255,255,0.16)',
            borderBottom: '1px solid rgba(255,255,255,0.16)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontSize: 11,
              color: 'rgba(255,255,255,0.55)',
            }}
          >
            Ask AI for a summary of Design Asylum
          </span>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {aiSummaryLinks.map((a) => (
              <span
                key={a}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 400,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  fontSize: 11,
                  color: 'var(--color-paper-white)',
                  border: '1px solid rgba(255,255,255,0.28)',
                  padding: '9px 16px',
                }}
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding: '40px 24px 0', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '0.04em', lineHeight: 0.78 }}>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              textTransform: 'uppercase',
              letterSpacing: '-0.03em',
              fontSize: 'clamp(56px, 11.4vw, 182px)',
              color: 'var(--color-paper-white)',
            }}
          >
            designasylum
          </span>
          <span
            aria-hidden
            style={{ fontSize: 'clamp(26px,5vw,82px)', color: 'var(--color-iris-voltage)', transform: 'translateY(-0.18em)' }}
          >
            &#10022;
          </span>
        </div>
      </div>

      <div className="da-wrap" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, padding: '32px 0 40px' }}>
        {['© Design Asylum 2026', 'Built in-house by Design Asylum'].map((t) => (
          <span key={t} style={legalLineStyle}>
            {t}
          </span>
        ))}
      </div>
    </footer>
  );
}
