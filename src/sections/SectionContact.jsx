/* Design Asylum homepage — FAQ · Contact · Brand values · What we do · Footer */
import { useState } from 'react';
import { Eyebrow } from './shared';
import { SITE_CONFIG } from '../config';

/* ============ SECTION 13 - FAQ ============ */
export function DAFaq() {
  const D = 'var(--font-display)';
  const qs = [
    ['What does Design Asylum do?', 'We build brand strategy, identity and digital for ambitious B2B companies, positioning, naming, visual identity, websites, film and campaigns. The kind of brand work that changes how the market reads you.'],
    ['What kind of companies do you work with?', 'Mostly deeptech, fintech and enterprise SaaS, companies with something genuinely interesting to say and a low tolerance for boring. Series A through to public.'],
    ['How does your branding process work?', 'A structured run: discovery and positioning, then identity, then digital and rollout. You always know what stage you&rsquo;re in and what comes next. No mystery, no theatre.'],
    ['How much does a B2B branding project cost?', 'Projects start around &pound;15k for focused work and scale from there with scope. We&rsquo;ll give you a fixed number before anything starts.'],
    ['Where are you, and do you work internationally?', 'We&rsquo;re a studio that works wherever the brief is. Remote-first, async-friendly, and used to working across time zones.'],
    ['Why does branding matter for B2B?', 'Because B2B buyers are still people. Clarity, confidence and a point of view shorten sales cycles, attract better talent and make investors lean in.'],
    ['When should a startup invest in branding?', 'When the story has outgrown the slide deck, usually around a raise, a pivot, or a new category you&rsquo;re trying to own.'],
    ['What’s the difference between a refresh and a full rebrand?', 'A refresh sharpens what already works. A rebrand rebuilds positioning, name and identity from the ground up. We’ll tell you honestly which one you need.'],
    ['How do you measure the ROI of branding?', 'Against the things branding actually moves: pipeline quality, conversion, talent, raise outcomes. We agree what we&rsquo;re watching before we start.'],
    ['How long does a typical project take?', 'A focused identity runs 6&ndash;10 weeks. A full brand-and-website build runs 3&ndash;5 months. We&rsquo;ll map dates against your milestones up front.'],
    ['Do you build websites, or just brand?', 'Both. We design and build in Webflow and beyond, so the brand doesn&rsquo;t fall apart the moment it hits the web.'],
    ['Can you help with video and motion?', 'Yes, live-action film, animation and Lottie. Same studio, same standard, no handoff gaps.'],
    ['What makes you different from other B2B agencies?', 'We work as a consultant, not a vendor. We take ownership of the problem, not just the brief. And we refuse to make boring things.'],
    ['How do I get started?', 'Book a call. Tell us what you&rsquo;re building. We&rsquo;ll reply within a day.'],
  ];
  return (
    <section style={{ paddingTop: 'var(--section-pad-y)', paddingBottom: 'var(--section-pad-y)', background: 'var(--color-paper-white)' }}>
      <div className="da-wrap da-faq-grid" style={{ display: 'grid', gridTemplateColumns: '34fr 66fr', gap: 64, alignItems: 'start' }}>
        <div className="da-faq-sticky" style={{ position: 'sticky', top: 120 }}>
          <Eyebrow>FAQ</Eyebrow>
          <h2 style={{ margin: '20px 0 0', fontFamily: D, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.0, fontSize: 'clamp(34px,3.6vw,52px)', color: 'var(--color-obsidian-ink)' }}>Common questions</h2>
          <a href="#contact" style={{ marginTop: 32, display: 'inline-flex', alignItems: 'center', gap: 12, textDecoration: 'none', background: 'var(--color-obsidian-ink)', color: 'var(--color-paper-white)', padding: '16px 28px', borderRadius: 999, fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: 13, whiteSpace: 'nowrap' }}>
            Book a strategy session <span aria-hidden>&rarr;</span>
          </a>
        </div>
        <div>
          {qs.map(([q, a], i) => (
            <details key={i} className="da-faq" open={i === 0}>
              <summary>
                <span className="da-faq-q">{q}</span>
                <span className="da-faq-plus" aria-hidden>+</span>
              </summary>
              <p className="da-faq-a" dangerouslySetInnerHTML={{ __html: a }} />
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ SECTION 14 - CONTACT / BOOKING ============ */
export function DAContact() {
  const D = 'var(--font-display)', S = 'var(--font-serif)';
  const slots = ['09:30', '11:00', '13:30', '15:00', '16:30'];
  const inputStyle = { width: '100%', border: 'none', borderBottom: '1.5px solid var(--color-fog)', background: 'transparent', padding: '12px 2px', fontFamily: S, fontSize: 17, color: 'var(--color-obsidian-ink)', outline: 'none' };

  const [form, setForm] = useState({ name: '', email: '', message: '', slot: slots[1], website: '' });
  const [status, setStatus] = useState({ state: 'idle', message: '' });
  const [formMode, setFormMode] = useState('brief');

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ state: 'sending', message: '' });
    try {
      const res = await fetch(SITE_CONFIG.contactApi, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus({ state: 'success', message: data.message || 'Thanks — we’ll reply within a day.' });
        setForm({ name: '', email: '', message: '', slot: slots[1], website: '' });
      } else {
        setStatus({ state: 'error', message: data.message || 'Something went wrong. Please try again.' });
      }
    } catch {
      setStatus({ state: 'error', message: 'Could not reach the server. Please email us directly.' });
    }
  }

  return (
    <section id="contact" style={{ paddingTop: 'var(--section-pad-y)', paddingBottom: 'var(--section-pad-y)' }}>
      <div className="da-wrap da-contact-grid" style={{ display: 'grid', gridTemplateColumns: '40fr 60fr', gap: 72, alignItems: 'start' }}>
        <div>
          <h2 style={{ margin: 0, fontFamily: D, fontWeight: 400, fontSize: 'var(--text-section)', lineHeight: 1.0, letterSpacing: '-0.02em', color: 'var(--color-obsidian-ink)' }}>Let&rsquo;s talk about your brand</h2>
          <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <a className="da-mail" href={`mailto:${SITE_CONFIG.email}`} style={{ fontFamily: S, fontSize: 24 }}>
              <span className="da-mail-ul">{SITE_CONFIG.email}</span><span className="da-mail-arrow" aria-hidden>&#8599;</span>
            </a>
            <span style={{ fontFamily: S, fontSize: 24, color: 'var(--color-graphite)' }}>{SITE_CONFIG.phone}</span>
          </div>
          <p style={{ margin: '32px 0 0', maxWidth: 360, fontFamily: S, fontSize: 17, lineHeight: 1.55, color: 'var(--color-graphite)' }}>Tell us what you&rsquo;re building. We reply within a day, usually with questions, sometimes with opinions.</p>
        </div>
        <form onSubmit={handleSubmit} style={{ background: 'var(--color-paper-white)', border: '1px solid var(--color-obsidian-ink)', borderRadius: 'var(--radius-cards)', padding: 36 }}>
          <div style={{ display: 'flex', gap: 0, borderBottom: '1.5px solid var(--color-fog)', marginBottom: 4 }}>
            {[['brief', 'Send a brief'], ['call', '30 min intro call']].map(([mode, label]) => (
              <button key={mode} type="button" onClick={() => setFormMode(mode)} style={{ flex: 1, border: 'none', background: 'none', cursor: 'pointer', paddingBottom: 14, paddingTop: 4, fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: 14, color: formMode === mode ? 'var(--color-obsidian-ink)' : 'var(--color-ash)', borderBottom: formMode === mode ? '2px solid var(--color-obsidian-ink)' : '2px solid transparent', marginBottom: -1.5, textAlign: mode === 'brief' ? 'left' : 'right' }}>{label}</button>
            ))}
          </div>

          <input type="text" name="website" value={form.website} onChange={update('website')} tabIndex={-1} autoComplete="off" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }} aria-hidden="true" />

          <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 20 }}>
            <input type="text" required aria-label="Your name" placeholder="Your name" value={form.name} onChange={update('name')} style={inputStyle} />
            <input type="email" required aria-label="Email address" placeholder="Email address" value={form.email} onChange={update('email')} style={inputStyle} />
            <select value={form.slot} onChange={update('slot')} aria-label="Preferred time slot" style={{ ...inputStyle, color: 'var(--color-graphite)' }}>
              {slots.map((s) => <option key={s} value={s}>{`Preferred slot — ${s}`}</option>)}
            </select>
            {formMode === 'brief' && (
              <textarea required aria-label="Message" placeholder="What are you building?" value={form.message} onChange={update('message')} rows={4} style={{ ...inputStyle, resize: 'vertical', fontFamily: S }} />
            )}
          </div>

          <button type="submit" disabled={status.state === 'sending'} style={{ marginTop: 28, width: '100%', border: 'none', cursor: status.state === 'sending' ? 'default' : 'pointer', opacity: status.state === 'sending' ? 0.6 : 1, background: 'var(--color-obsidian-ink)', color: 'var(--color-paper-white)', padding: '18px 0', borderRadius: 999, fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: 14 }}>
            {status.state === 'sending' ? 'Sending…' : formMode === 'brief' ? 'Send brief' : 'Book a call'}
          </button>

          {status.state === 'success' && <p role="status" style={{ marginTop: 16, fontFamily: S, fontSize: 15, color: 'var(--color-deep-teal)' }}>{status.message}</p>}
          {status.state === 'error' && <p role="alert" style={{ marginTop: 16, fontFamily: S, fontSize: 15, color: 'var(--color-block-maroon)' }}>{status.message}</p>}
        </form>
      </div>
    </section>
  );
}

/* ============ SECTION 15 - BRAND VALUES ============ */
function Blob({ kind }) {
  const wrap = { width: 64, height: 64, position: 'relative' };
  const dot = (c, s, x, y, extra) => (<span style={{ position: 'absolute', width: s, height: s, left: x, top: y, borderRadius: 999, background: c, ...extra }} />);
  if (kind === 'a') return <div style={wrap}>{dot('#96ebeb', 42, 0, 12)}{dot('var(--color-deep-teal)', 42, 22, 0, { mixBlendMode: 'multiply' })}</div>;
  if (kind === 'b') return <div style={wrap}><span style={{ position: 'absolute', left: 6, bottom: 8, width: 0, height: 0, borderLeft: '26px solid transparent', borderRight: '26px solid transparent', borderBottom: '46px solid var(--color-iris-voltage)' }} /><span style={{ position: 'absolute', left: 18, bottom: 8, width: 0, height: 0, borderLeft: '18px solid transparent', borderRight: '18px solid transparent', borderBottom: '34px solid var(--color-solar-bloom)' }} /></div>;
  if (kind === 'c') return <div style={wrap}>{dot('var(--color-iris-voltage)', 36, 0, 6)}{dot('var(--color-deep-teal)', 36, 26, 0, { mixBlendMode: 'multiply' })}{dot('#96ebeb', 36, 14, 26, { mixBlendMode: 'multiply' })}</div>;
  return <div style={wrap}>{dot('var(--color-solar-bloom)', 42, 0, 10)}{dot('#96ebeb', 42, 24, 0, { mixBlendMode: 'multiply' })}</div>;
}

export function DABrandValues() {
  const D = 'var(--font-display)', S = 'var(--font-serif)';
  const values = [
    ['a', 'B2B that&rsquo;s actually interesting'],
    ['b', 'Great agency&ndash;brand partnerships'],
    ['c', 'Being process-strong and accountable'],
    ['d', 'Strategists, writers, designers &amp; developers in harmony'],
  ];
  return (
    <section style={{ paddingTop: 'var(--section-pad-y)', paddingBottom: 'var(--section-pad-y)' }}>
      <div className="da-wrap da-brandvalues-grid" style={{ display: 'grid', gridTemplateColumns: '30fr 70fr', gap: 64, alignItems: 'start' }}>
        <h2 style={{ margin: 0, fontFamily: D, fontWeight: 400, fontSize: 'var(--text-section)', lineHeight: 1.0, letterSpacing: '-0.02em', color: 'var(--color-obsidian-ink)' }}>As a brand strategy studio, we believe in</h2>
        <div className="da-brandvalues-cells" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: '1px solid var(--color-fog)', borderLeft: '1px solid var(--color-fog)' }}>
          {values.map(([k, t]) => (
            <div key={t} style={{ padding: 40, borderRight: '1px solid var(--color-fog)', borderBottom: '1px solid var(--color-fog)', minHeight: 220, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Blob kind={k} />
              <p style={{ margin: '28px 0 0', fontFamily: S, fontSize: 22, lineHeight: 1.3, color: 'var(--color-obsidian-ink)' }} dangerouslySetInnerHTML={{ __html: t }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ SECTION 16 - WHAT WE DO ============ */
function Mosaic() {
  const colors = ['var(--color-solar-bloom)', 'transparent', 'var(--color-iris-voltage)', 'transparent', 'var(--color-deep-teal)', '#96ebeb', 'transparent', 'var(--color-block-maroon)', 'transparent', 'var(--color-solar-bloom)', 'transparent', 'var(--color-iris-voltage)', '#96ebeb', 'transparent', 'var(--color-deep-teal)', 'transparent'];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10, maxWidth: 360 }}>
      {colors.map((c, i) => (
        <div key={i} style={{ aspectRatio: '1 / 1', borderRadius: 12, background: c === 'transparent' ? 'var(--color-paper-white)' : c, border: c === 'transparent' ? '1px solid var(--color-fog)' : 'none' }} />
      ))}
    </div>
  );
}

export function DAWhatWeDo() {
  const D = 'var(--font-display)', S = 'var(--font-serif)';
  const services = ['Brand strategy & brand design', 'Website design', 'Website development', 'Film, live action & animation', 'Print design', 'Brand campaigns'];
  return (
    <section style={{ paddingTop: 'var(--section-pad-y)', paddingBottom: 'var(--section-pad-y)', background: 'var(--color-paper-white)' }}>
      <div className="da-wrap da-whatwedo-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
        <div>
          <h2 style={{ margin: 0, fontFamily: D, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.0, fontSize: 'clamp(40px,4.4vw,68px)', color: 'var(--color-obsidian-ink)' }}>What we do</h2>
          <div style={{ marginTop: 40 }}><Mosaic /></div>
        </div>
        <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
          {services.map((s, i) => (
            <li key={i} className="da-service" style={{ padding: '22px 0', borderTop: '1px solid var(--color-fog)', borderBottom: i === services.length - 1 ? '1px solid var(--color-fog)' : 'none' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <span className="da-service-dot" style={{ width: 9, height: 9, flex: '0 0 auto', borderRadius: 999, background: 'var(--color-obsidian-ink)', transition: 'background .2s ease' }} />
                <span style={{ fontFamily: S, fontSize: 'clamp(22px,2.4vw,30px)', color: 'var(--color-obsidian-ink)' }} dangerouslySetInnerHTML={{ __html: s }} />
              </span>
              <span className="da-service-line" style={{ marginTop: 14, marginLeft: 25 }} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ============ SECTION 17 - FOOTER ============ */
export function DAFooter() {
  const { ContactRow, FooterNav } = window.DesignAsylumDesignSystem_594314;
  const D = 'var(--font-display)', S = 'var(--font-serif)';
  const seo = {
    SOLUTIONS: ['B2B branding', 'Brand strategy', 'Rebrand', 'Naming', 'Positioning', 'Visual identity'],
    SERVICES: ['Website design', 'Webflow build', 'Film & motion', 'Print design', 'Campaigns', 'Brand systems'],
    INDUSTRIES: ['Fintech', 'Deeptech', 'Enterprise SaaS', 'Manufacturing', 'Cybersecurity', 'Healthcare'],
    STUDIO: ['Work', 'Thinking', 'Clients', 'Team', 'Reviews', 'Contact'],
  };
  const ai = ['ChatGPT', 'Gemini', 'Perplexity', 'Claude'];
  return (
    <footer style={{ background: 'var(--color-paper-white)', borderTop: '1px solid var(--color-fog)', paddingTop: 96 }}>
      <div className="da-wrap">
        <div className="da-footer-top" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1.3fr', gap: 56, paddingBottom: 64 }}>
          <FooterNav onDark={false}
            primary={[{ label: 'Projects' }, { label: 'B2B website design' }, { label: 'Website projects' }, { label: '3D & motion' }]}
            secondary={[{ label: 'Thinking' }, { label: 'Website audit' }, { label: 'Print studio' }, { label: 'Studio reviews' }]} />
          <FooterNav onDark={false}
            primary={[{ label: 'Studio' }, { label: 'Our terms' }, { label: 'FAQs' }]}
            secondary={[{ label: 'The no-brainer offer' }, { label: 'Why Design Asylum' }, { label: 'Recent updates' }]} />
          <div>
            <ContactRow label="Say hello" value="Book a call" href="#contact" />
            <ContactRow label="Call" value={SITE_CONFIG.phone} href={`tel:${SITE_CONFIG.phoneHref}`} />
            <ContactRow label="Email" value={SITE_CONFIG.email} href={`mailto:${SITE_CONFIG.email}`} />
            <ContactRow label="Studio" value={SITE_CONFIG.location} />
            <div style={{ display: 'flex', gap: 20, marginTop: 24 }}>
              {['LinkedIn', 'Instagram', 'YouTube'].map((s) => (
                <a key={s} href="#" style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 11, color: 'var(--color-obsidian-ink)', textDecoration: 'none', borderBottom: '1px solid var(--color-obsidian-ink)', paddingBottom: 2 }}>{s}</a>
              ))}
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap', padding: '28px 0', borderTop: '1px solid var(--color-fog)', borderBottom: '1px solid var(--color-fog)' }}>
          <span style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: 11, color: 'var(--color-graphite)' }}>Ask AI for a summary of Design Asylum</span>
          <div style={{ display: 'flex', gap: 10 }}>
            {ai.map((a) => (
              <a key={a} href="#" className="da-ai-pill" style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: 11, color: 'var(--color-obsidian-ink)', textDecoration: 'none', border: '1px solid var(--color-fog)', borderRadius: 999, padding: '8px 16px' }}>{a}</a>
            ))}
          </div>
        </div>
        <div className="da-footer-seo" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 40, paddingTop: 40, paddingBottom: 64 }}>
          {Object.entries(seo).map(([head, items]) => (
            <div key={head}>
              <div style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: 10, color: 'var(--color-ash)', marginBottom: 16 }}>{head}</div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
                {items.map((it) => (
                  <li key={it}><a href="#" style={{ fontFamily: S, fontSize: 14, color: 'var(--color-graphite)', textDecoration: 'none' }}>{it}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div style={{ padding: '0 24px', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '0.04em', lineHeight: 0.78 }}>
          <span style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '-0.03em', fontSize: 'clamp(56px, 11.4vw, 182px)', color: 'var(--color-obsidian-ink)' }}>designasylum</span>
          <span aria-hidden style={{ fontSize: 'clamp(26px,5vw,82px)', color: 'var(--color-iris-voltage)', transform: 'translateY(-0.18em)' }}>&#10022;</span>
        </div>
      </div>
      <div className="da-wrap" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, padding: '32px 80px 40px' }}>
        {['© Design Asylum 2026', 'Built in-house by Asylum Build', 'Last updated 10 June 2026'].map((t) => (
          <span key={t} style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 10, color: 'var(--color-ash)' }}>{t}</span>
        ))}
      </div>
    </footer>
  );
}
