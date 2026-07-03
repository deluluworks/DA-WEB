/* Sevenloop client hub — Section 5 (Project Team) + Section 6 (Service Provided marquee) */
(function () {
  const D = 'var(--font-display)';
  const S = 'var(--font-serif)';
  const INK = 'var(--color-obsidian-ink)';
  const GRAPHITE = 'var(--color-graphite)';
  const ASH = 'var(--color-ash)';

  /* ============ SECTION 5 — PROJECT TEAM ============ */
  const TEAM = [
    ['Creative Director | Films', 'Tejus Yakhob', 'Tejus Yakhob is a writer and filmmaker with 11+ years of experience, specializing in storytelling and visual media.'],
    ['Lead Designer | Content Strategist', 'Athira Krishnan', 'Articulate with a clear thought process, she excels in content writing, driving design in B2B SaaS and B2C websites.'],
    ['Lead Brand Designer | Illustrator', 'Tanmaya Rao', 'A b2b brand designer, she has worked wonders for many SaaS and B2B companies with her vision and expert skills.'],
    ['Co-Founder | Principal Designer', 'Ekta Manchanda', 'Ekta, a design evangelist, has shaped many brands with her creative vision in retail, hospitality, and B2B spaces.'],
    ['Head of Webflow Department', 'Saurabh Chakradhari', 'Your go-to for technical queries, with engineering expertise, analytical thinking, and clear communication.'],
    ['Chief of Staff | Project Manager', 'Arpan Sen', 'Arpan handles management at Design Asylum, ensuring that everything, well\u2026flows smoothly.'],
    ['Content Strategist', 'Swathi Mohan', 'Swathi writes sharp, smart copy, sometimes poetic. Quick on her feet, she has a knack for making people feel heard.'],
    ['Associate Editor | Films', 'Yugankita Aich', 'Yugankita brings ideas to life through seamless editing, storytelling, and high-quality visuals with a creative touch.'],
    ['Partner | Brand Strategist', 'Mejo Kuriachan', 'Mejo puts the \u2018Everything\u2019 in brand, flow, video and motion \u2014 an engineer first, strategist and design manager next.'],
    ['Junior Designer', 'Kashish Gulati', 'Kashish Gulati is a junior designer at Design Asylum, specializing in branding, web design, and typography.'],
    ['Webflow Developer', 'Burhan Upad', 'Burhan is a Webflow developer who crafts visually appealing websites, utilizing GSAP for dynamic, interactive animations.'],
    ['Associate Designer', 'Harishma D', 'Harishma is an Associate Designer at Design Asylum, helping businesses discover the value of great design and build strong partnerships.'],
    ['Project Manager', 'Akshay A D', 'Akshay, a disciplined Project Manager, excels at seamless project execution, making him invaluable to the team.'],
  ];

  function TeamCard({ role, name, bio }) {
    return (
      <article className="sl-team-card" style={{ border: '1px solid var(--color-fog)', padding: '32px 30px 28px', background: 'var(--color-paper-white)', display: 'flex', flexDirection: 'column', minHeight: 280 }}>
        <span style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: 11, color: 'var(--color-iris-voltage)' }}>{role}</span>
        <h3 style={{ margin: '16px 0 0', fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '-0.01em', lineHeight: 1.0, fontSize: 'clamp(24px,2vw,30px)', color: INK }}>{name}</h3>
        <p style={{ margin: '16px 0 0', fontFamily: S, fontSize: 16, lineHeight: 1.5, color: GRAPHITE, flex: '1 1 auto' }}>{bio}</p>
        <a href="#" className="sl-readmore" style={{ marginTop: 24, display: 'inline-flex', alignItems: 'center', gap: 8, alignSelf: 'flex-start', fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 11, color: INK, textDecoration: 'none', transition: 'color .2s ease' }}>
          Read more <span className="sl-readmore-arrow" aria-hidden>&rarr;</span>
        </a>
      </article>
    );
  }

  function SLTeam() {
    return (
      <section style={{ paddingTop: 'var(--section-pad-y)', paddingBottom: 'var(--section-pad-y)', background: 'var(--color-paper-white)' }}>
        <div className="da-wrap">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap', marginBottom: 48 }}>
            <div>
              <Eyebrow>The people</Eyebrow>
              <h2 style={{ margin: '20px 0 0', fontFamily: D, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.0, fontSize: 'var(--text-section)', color: INK }}>Project team</h2>
            </div>
            <p style={{ margin: 0, maxWidth: 380, fontFamily: S, fontSize: 18, lineHeight: 1.5, color: GRAPHITE }}>
              The same core team across Ximkart, Revind and Sevenloop &mdash; strategy, design, film and build under one roof.
            </p>
          </div>
          <div className="sl-reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {TEAM.map((m) => <TeamCard key={m[1]} role={m[0]} name={m[1]} bio={m[2]} />)}
          </div>
        </div>
      </section>
    );
  }

  /* ============ SECTION 6 — SERVICE PROVIDED (marquee) ============ */
  const SERVICES = [
    'Web Design Agency', 'Branding Agency', 'Web Development Agency', 'Website Copywriting Agency',
    'Logo Design Agency', 'Webflow Agency', 'Animated Explainer Video', 'Website Redesign',
    'Rebranding Agency', 'Landing Page Design', 'Lottie Animation Agency', 'Brand Strategy Agency',
    'Brand Strategy Consultancy', 'Illustration Agency', 'Ad Agency for B2B', 'Brochure Design Agency',
    'B2B Messaging Agency', 'Animation Video Agency', 'Brand Positioning Agency', 'Product Messaging Agency',
    'Product Launch Video Agency', 'B2B Film Agency', 'Launch Video Agency', 'Website Redesign Services',
    'B2B Branding Agency', 'B2B Web Design Agency', 'Website Copywriting', 'B2b Video Marketing Agency',
    'Brand Refresh Agency',
  ];

  function Chip({ name }) {
    return (
      <a className="sl-chip" href="#">
        <span className="sl-chip-name">{name}</span>
        <span className="sl-chip-cta">Visit service <span aria-hidden>&#8599;</span></span>
      </a>
    );
  }

  function MarqueeRow({ items, rowClass }) {
    const loop = [...items, ...items];
    return (
      <div className="sl-chip-wrap">
        <div className={'sl-chiptrack ' + rowClass}>
          {loop.map((s, i) => <Chip key={i} name={s} />)}
        </div>
      </div>
    );
  }

  function SLServices() {
    const half = Math.ceil(SERVICES.length / 2);
    const rowA = SERVICES.slice(0, half);
    const rowB = SERVICES.slice(half);
    return (
      <section style={{ paddingTop: 'var(--section-pad-y)', paddingBottom: 'var(--section-pad-y)', background: 'var(--color-paper-off)', overflow: 'hidden' }}>
        <div className="da-wrap" style={{ marginBottom: 44 }}>
          <Eyebrow>What we delivered</Eyebrow>
          <h2 style={{ margin: '20px 0 0', fontFamily: D, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.0, fontSize: 'var(--text-section)', color: INK }}>Service provided</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <MarqueeRow items={rowA} rowClass="sl-chip-row-a" />
          <MarqueeRow items={rowB} rowClass="sl-chip-row-b" />
        </div>
      </section>
    );
  }

  Object.assign(window, { SLTeam, SLServices });
})();
