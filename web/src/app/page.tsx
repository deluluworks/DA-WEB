import Link from 'next/link';
import { Eyebrow } from '@/components/chrome/Eyebrow';

/**
 * Homepage — placeholder shell only. The export's full da/ hero, client-logo
 * wall, and service modules are a pending-port unit (SITE-PROGRESS.md); this
 * stub exists so "/" server-renders real content and the nav's internal links
 * resolve while that unit is in progress.
 */
export default function Home() {
  return (
    <main className="da-wrap" style={{ paddingTop: 220, paddingBottom: 'var(--section-pad-y)' }}>
      <div style={{ maxWidth: 900 }}>
        <Eyebrow>Design Asylum</Eyebrow>
        <h1
          style={{
            margin: '24px 0 0',
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            lineHeight: 1.0,
            fontSize: 'var(--text-mega)',
            color: 'var(--color-obsidian-ink)',
          }}
        >
          Bold by design.
        </h1>
        <p
          style={{
            margin: '32px 0 0',
            maxWidth: 640,
            fontFamily: 'var(--font-serif)',
            fontSize: 'var(--text-lede)',
            lineHeight: 1.5,
            color: 'var(--color-graphite)',
          }}
        >
          A B2B branding and website studio. We design brands and websites that refuse to be
          ignored — the full homepage is being ported section by section.
        </p>
        <div style={{ display: 'flex', gap: 16, marginTop: 40, flexWrap: 'wrap' }}>
          <Link
            href="/contact"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              fontSize: 13,
              background: 'var(--color-obsidian-ink)',
              color: 'var(--color-paper-white)',
              padding: '16px 28px',
              borderRadius: 'var(--radius-buttons)',
            }}
          >
            Book a call &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
}
