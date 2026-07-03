/* Author bio (Tanmaya Rao) — service tags · projects grid · blogs list · expertise clouds */
(function () {
  const D = 'var(--font-display)';
  const S = 'var(--font-serif)';
  const INK = 'var(--color-obsidian-ink)';
  const GRAPHITE = 'var(--color-graphite)';

  const GLOWS = [
    'radial-gradient(90% 130% at 24% 22%, rgba(239,108,46,0.30), transparent 56%), radial-gradient(80% 120% at 84% 86%, rgba(81,111,234,0.42), transparent 54%)',
    'radial-gradient(90% 130% at 78% 20%, rgba(81,111,234,0.46), transparent 54%), radial-gradient(80% 120% at 20% 88%, rgba(150,235,235,0.34), transparent 56%)',
    'radial-gradient(90% 130% at 30% 30%, rgba(255,194,64,0.40), transparent 56%), radial-gradient(80% 120% at 82% 84%, rgba(110,36,51,0.42), transparent 54%)',
    'radial-gradient(90% 130% at 70% 26%, rgba(150,235,235,0.40), transparent 56%), radial-gradient(80% 120% at 24% 86%, rgba(81,111,234,0.40), transparent 54%)',
  ];
  const BGS = ['var(--color-obsidian-ink)', 'var(--color-deep-teal)', '#241a1c', '#10212a'];

  function SectionHead({ children }) {
    return <h2 style={{ margin: '0 0 36px', fontFamily: D, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.0, fontSize: 'var(--text-section)', color: INK }}>{children}</h2>;
  }

  /* ---- Service Expertise tags ---- */
  function AuthServiceTags() {
    const tags = ['Logo Design', 'B2B Branding', 'B2B Web Design', 'Illustration', 'Website Redesign', 'Brand Refresh', 'Brochure Design'];
    return (
      <section className="da-wrap sl-reveal" style={{ paddingTop: 'var(--section-pad-y)' }}>
        <SectionHead>Service expertise</SectionHead>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {tags.map((t) => <a key={t} className="auth-tag" href="#">{t}</a>)}
        </div>
      </section>
    );
  }

  /* ---- Projects grid ---- */
  const PROJECTS = [
    { name: 'Armory', cta: 'Visit Website', desc: 'Brand identity and website design for Armory, a security and infrastructure tooling company.' },
    { name: 'Sevenloop', cta: 'View Website', feat: true, subs: ['End To End Custom Manufacturing Solution Provider', 'Funded by Z47'], desc: 'Brand identity and website design for Sevenloop, an end-to-end custom manufacturing solutions provider.' },
    { name: 'Hand In Hand India', cta: 'Visit Website', desc: 'Brand and web design for Hand In Hand India, a livelihoods and social-impact NGO.' },
    { name: 'Lakshmigraha', cta: 'Visit Website', desc: 'Brand identity for Lakshmigraha, a heritage gold and jewellery manufacturing business.' },
    { name: 'Transitry', cta: 'Visit Website', desc: 'Branding and website design for Transitry, a logistics and mobility technology platform.' },
    { name: 'Revind Ai', cta: 'Visit Website', desc: 'Branding for Revind Ai, an AI platform for metals, manufacturing, and industrial procurement.' },
    { name: "HSR Founder's Club GTM Week 2024 | Promo Film", cta: 'Watch Video', desc: 'Concept, illustration, and direction for the GTM Week 2024 promotional film.' },
    { name: 'Sevenloop | Explainer Film', cta: 'Watch Video', desc: 'Brand explainer film for Sevenloop, telling the custom-manufacturing story with conviction.' },
    { name: 'OneLern Scroll Animation Page', cta: 'Visit Website', desc: 'Illustration and scroll-animation design for OneLern, an ed-tech platform for schools.' },
    { name: 'Simpli Contract | Brand Video', cta: 'Watch Video', desc: 'Brand video for SimpliContract, an enterprise contract lifecycle management platform.' },
  ];

  function ProjectCard({ p, i }) {
    const video = p.cta === 'Watch Video';
    return (
      <a className={'svc-card' + (p.feat ? ' is-feat' : '')} href="#">
        <div className="svc-card-vis" style={{ background: BGS[i % BGS.length] }}>
          <div className="svc-card-vis-glow" aria-hidden style={{ background: GLOWS[i % GLOWS.length] }} />
          {p.feat && <span className="svc-card-tag">Featured</span>}
          <span className="svc-card-link">{p.cta} <span aria-hidden>{video ? '\u25B6' : '\u2197'}</span></span>
        </div>
        <div className="svc-card-body">
          <h3 className="svc-card-name">{p.name}</h3>
          {p.subs && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 14 }}>
              {p.subs.map((s) => (
                <span key={s} style={{ fontFamily: D, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: 10, color: 'var(--color-iris-voltage)', border: '1px solid var(--color-fog)', padding: '6px 10px' }}>{s}</span>
              ))}
            </div>
          )}
          <p className="svc-card-desc">{p.desc}</p>
        </div>
      </a>
    );
  }

  function AuthProjects() {
    return (
      <section className="da-wrap" style={{ paddingTop: 'var(--section-pad-y)' }}>
        <SectionHead>Tanmaya Rao&rsquo;s projects</SectionHead>
        <div className="svc-grid sl-reveal">
          {PROJECTS.map((p, i) => <ProjectCard key={p.name} p={p} i={i} />)}
        </div>
      </section>
    );
  }

  /* ---- Blogs list ---- */
  const BLOGS = [
    'Climate Tech Website Agency | Cleantech Web Design for Startups & Scale-ups',
    'Top Brand Design Agencies in Bangalore (Bengaluru): 2026 Shortlist + Buyer Guide',
    'The Psychology & Performance of Scroll Animations',
    "How to Build Startup Credibility Fast: A B2B Founder's Guide",
    'Branding Process',
    'The Art of Iconography: Crafting Distinct Icons for a Professional Online Presence',
    'Brand Photography in B2B Branding',
    'Good Food Movement: Branding & Web Design Case Study',
    'Are People Illustrations a Good Idea on B2B Websites?',
    'The Brand Book: Your Recipe for a Successful Brand Book',
    'How to Use Illustrations on a B2B Website (With Examples)',
    'Dynamic Logos: When and How to Make an Impact?',
    'How can Illustrations be employed in your B2B Website as a powerful marketing tool?',
  ];

  function AuthBlogs() {
    return (
      <section className="da-wrap sl-reveal" style={{ paddingTop: 'var(--section-pad-y)' }}>
        <SectionHead>Tanmaya Rao&rsquo;s blogs</SectionHead>
        <div>
          {BLOGS.map((t) => (
            <a key={t} className="auth-blog" href="#">
              <p className="auth-blog-t">{t}</p>
              <span className="auth-blog-cta">Visit blog <span aria-hidden>&rarr;</span></span>
            </a>
          ))}
        </div>
      </section>
    );
  }

  /* ---- Expertise tag clouds ---- */
  function TagCloud({ title, tags }) {
    return (
      <section className="da-wrap sl-reveal" style={{ paddingTop: 'var(--section-pad-y)' }}>
        <SectionHead>{title}</SectionHead>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {tags.map((t) => <a key={t} className="auth-tag" href="#">{t}</a>)}
        </div>
      </section>
    );
  }

  function AuthSolutionExpertise() {
    const tags = ['Startup Homepage', 'Real Estate', 'Website Animation', 'Fintech Branding', 'Financial', 'Financial Sector Brand', 'Fintech Web Design', 'Venture Capital Website', 'Global Brand Website', 'Energy', 'Publication Design', 'Real Estate Branding', 'Logistics', 'Technology Branding', 'Climate Tech', 'B2B Website Revamp', 'Healthcare Tech', 'Medical', 'Annual Report', 'SaaS Brand', 'SaaS ReBrand', 'Law Firm Branding', 'Service Company Rebranding', 'Deep Tech'];
    return <TagCloud title="Solution Experties" tags={tags} />;
  }

  function AuthIndustryExpertise() {
    const tags = ['Technology Businesses', 'Renewable Energy', 'Manufacturing', 'Healthcare', 'Law Firm', 'Hospitality', 'Aviation Web Design', 'Real Estate', 'NGO', 'DeepTech'];
    return (
      <section className="da-wrap sl-reveal" style={{ paddingTop: 'var(--section-pad-y)', paddingBottom: 'var(--section-pad-y)' }}>
        <SectionHead>Industry Experties</SectionHead>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {tags.map((t) => <a key={t} className="auth-tag" href="#">{t}</a>)}
        </div>
      </section>
    );
  }

  Object.assign(window, { AuthServiceTags, AuthProjects, AuthBlogs, AuthSolutionExpertise, AuthIndustryExpertise });
})();
