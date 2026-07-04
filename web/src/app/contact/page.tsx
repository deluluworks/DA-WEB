import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/chrome/Breadcrumb';
import { Reveal } from '@/components/chrome/Reveal';
import { ContactForm } from '@/components/contact/ContactForm';
import { site } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Contact Us | Get a Free Brand Consultation',
  description: 'Talk to us for your branding. Book a free brand consultation with Design Asylum.',
};

const CRUMB = [{ label: 'Home', href: '/' }, { label: 'Contact Us' }];

export default function ContactPage() {
  return (
    <main className="da-wrap" style={{ paddingTop: 150, paddingBottom: 'var(--section-pad-y)' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <Breadcrumb trail={CRUMB} />

        <h1
          style={{
            margin: '28px 0 0',
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            letterSpacing: '-0.025em',
            lineHeight: 1.0,
            fontSize: 'clamp(44px,5.6vw,92px)',
            color: 'var(--color-obsidian-ink)',
          }}
        >
          Talk to us for your branding
        </h1>

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 24, marginTop: 36 }}>
          <a
            className="da-mail"
            href={`mailto:${site.email}`}
            style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(20px,1.8vw,26px)', color: 'var(--color-obsidian-ink)' }}
          >
            {site.email} <span aria-hidden>&#8599;</span>
          </a>
          <a
            href={`tel:${site.phone.href}`}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              fontSize: 13,
              color: 'var(--color-graphite)',
              border: '1px solid var(--color-fog)',
              borderRadius: 'var(--radius-pill)',
              padding: '11px 20px',
            }}
          >
            {site.phone.display}
          </a>
        </div>

        <Reveal style={{ marginTop: 48 }}>
          <ContactForm />
        </Reveal>

        <p
          style={{
            margin: '64px 0 0',
            fontFamily: 'var(--font-serif)',
            fontWeight: 400,
            letterSpacing: '-0.01em',
            lineHeight: 1.32,
            fontSize: 'clamp(24px,2.6vw,36px)',
            color: 'var(--color-obsidian-ink)',
          }}
        >
          We exist to design B2B businesses their right to win &amp; communicate with clarity,
          personality, and a point of view, making the right people want to remember &amp;
          associate.
        </p>

        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginTop: 40 }}>
          <Link
            href="/why-design-asylum"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              fontSize: 12,
              color: 'var(--color-obsidian-ink)',
              borderBottom: '1px solid var(--color-obsidian-ink)',
              paddingBottom: 2,
            }}
          >
            Why Design Asylum &rarr;
          </Link>
          <Link
            href="/pricing"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              fontSize: 12,
              color: 'var(--color-obsidian-ink)',
              borderBottom: '1px solid var(--color-obsidian-ink)',
              paddingBottom: 2,
            }}
          >
            Pricing &rarr;
          </Link>
          <Link
            href="/team"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              fontSize: 12,
              color: 'var(--color-obsidian-ink)',
              borderBottom: '1px solid var(--color-obsidian-ink)',
              paddingBottom: 2,
            }}
          >
            Meet the team &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
}
