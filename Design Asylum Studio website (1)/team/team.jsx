/* Team (/team) — two-tier roster: Leadership (12) + Our Team (22).
   Card: portrait · role · name · one-line bio · Read More. */
(function () {
  const D = window.SL_DISPLAY, S = window.SL_SERIF, INK = window.SL_INK;

  const GLOWS = [
    'radial-gradient(90% 130% at 24% 22%, rgba(239,108,46,0.34), transparent 56%), radial-gradient(80% 120% at 84% 86%, rgba(81,111,234,0.44), transparent 54%)',
    'radial-gradient(90% 130% at 78% 20%, rgba(81,111,234,0.48), transparent 54%), radial-gradient(80% 120% at 20% 88%, rgba(150,235,235,0.36), transparent 56%)',
    'radial-gradient(90% 130% at 30% 30%, rgba(255,194,64,0.42), transparent 56%), radial-gradient(80% 120% at 82% 84%, rgba(110,36,51,0.46), transparent 54%)',
    'radial-gradient(90% 130% at 70% 26%, rgba(150,235,235,0.42), transparent 56%), radial-gradient(80% 120% at 24% 86%, rgba(81,111,234,0.42), transparent 54%)',
    'radial-gradient(90% 130% at 26% 24%, rgba(81,111,234,0.42), transparent 56%), radial-gradient(80% 120% at 80% 84%, rgba(239,108,46,0.36), transparent 54%)',
  ];
  const BGS = ['var(--color-obsidian-ink)', 'var(--color-deep-teal)', '#241a1c', '#10212a', '#1b1530'];

  function initials(name) {
    const parts = name.trim().split(/\s+/);
    const a = parts[0] ? parts[0][0] : '';
    const b = parts.length > 1 ? parts[parts.length - 1][0] : (parts[0][1] || '');
    return (a + b).toUpperCase();
  }
  function slug(name) {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }

  const LEADERSHIP = [
    ['Co-Founder | Principal Designer', 'Ekta Manchanda', 'Ekta, a design evangelist, has shaped many brands with her creative vision in retail, hospitality, and B2B spaces.'],
    ['Partner | Brand Strategist', 'Mejo Kuriachan', 'Mejo is the connective tissue across Design Asylum\u2019s brand, flow, video and motion work\u2014an engineer first, strategist and design manager next.'],
    ['Lead Strategist', 'Sijeesh VB', 'Sijeesh is a creative strategist who blends UX, branding, and business to create impactful experiences.'],
    ['Head of Motion Design', 'Felix Hartley', 'Felix leads motion at the studio, turning dense B2B stories into film and animation that actually hold attention.'],
    ['Lead Web Developer', 'Saurabh Chakradhari', 'Saurabh builds the brands we design\u2014translating identity into fast, considered, pixel-faithful websites.'],
    ['Senior Brand Designer', 'Tejus Yakhob', 'Tejus shapes visual identities with a sharp eye for type, system, and the small details that make a brand feel inevitable.'],
    ['Lead Designer | Illustrator', 'Tanmaya Rao', 'Tanmaya is a brand designer and illustrator whose logos and illustration give B2B brands a human, original voice.'],
    ['Brand Strategist', 'Sanjana', 'Sanjana digs for the sharp, true positioning underneath the brief\u2014then makes sure the work never loses it.'],
    ['Lead Designer | Content Strategist', 'Athira Krishnan', 'Articulate with a clear thought process, she excels in content writing, driving design in B2B SaaS and B2C websites.'],
    ['Chief of Staff | Project Manager', 'Arpan Sen', 'Arpan handles management at Design Asylum, ensuring that everything, well...flows smoothly.'],
    ['Senior Motion Designer', 'Akhilesh J', 'Akhilesh animates the brand\u2014Lottie, explainer film, and motion systems that make complex products click.'],
    ['Web Developer', 'Jerry Thomas', 'Jerry turns design files into living, breathing websites\u2014clean build, crisp interaction, no compromise.'],
  ];

  const TEAM = [
    ['Brand Designer', 'Aditi A J', 'Aditi crafts identity systems with a calm, deliberate hand and a soft spot for good grids.'],
    ['Web Developer', 'Ahamed Shabahir', 'Shabahir builds responsive, resilient front-ends that keep the brand intact on every screen.'],
    ['Content Strategist', 'Akhila Suresh', 'Akhila writes the words that carry the strategy\u2014clear, confident, and never filler.'],
    ['Motion Designer', 'Akshay A D', 'Akshay gives static brands a pulse, animating stories that land in seconds.'],
    ['Brand Designer', 'Goutham Shravan', 'Goutham designs marks and systems with an eye for the bold, unexpected detail.'],
    ['UI Designer', 'Harishma D', 'Harishma turns brand into interface\u2014usable, beautiful, and quietly precise.'],
    ['Web Developer', 'Jiyash A K', 'Jiyash codes the kind of websites that load fast and feel effortless.'],
    ['Brand Strategist', 'Mehak Dhruv', 'Mehak finds the angle a market can\u2019t ignore and builds the narrative around it.'],
    ['Web Developer', 'Mithesh Dhariwal', 'Mithesh engineers the back-of-house so the front-of-house never stutters.'],
    ['Copywriter', 'Nanki Arora', 'Nanki writes B2B that sounds like a human wrote it\u2014because one did.'],
    ['Brand Designer', 'Neha Bhatnagar', 'Neha shapes visual identities with warmth, rigour, and a love of typography.'],
    ['Project Coordinator', 'Prenitha Xavier', 'Prenitha keeps timelines honest and teams in sync, brief to launch.'],
    ['Illustrator', 'Rajashri Brahma', 'Rajashri draws the worlds that make a brand memorable and unmistakably its own.'],
    ['Web Developer', 'Siva S', 'Siva builds interaction that feels considered down to the last transition.'],
    ['Motion Designer', 'Sreejith K', 'Sreejith turns scripts into film\u2014frame by frame, with patience and craft.'],
    ['Brand Designer', 'Swathi Mohan', 'Swathi designs systems that scale, from logo to the last touchpoint.'],
    ['Content Strategist', 'Vaishnavi Gupta', 'Vaishnavi maps the message before a single pixel moves.'],
    ['UI Designer', 'Varsha P', 'Varsha designs clean, human interfaces that make complex products feel simple.'],
    ['Web Developer', 'Vignesh', 'Vignesh ships the build\u2014fast, faithful, and quietly bulletproof.'],
    ['Brand Strategist', 'Yash Muley', 'Yash pressure-tests positioning until only the true, sharp version is left.'],
    ['Brand Designer', 'Yugankita Aich', 'Yugankita brings a fine-art eye to brand systems and the details others skip.'],
    ['Copywriter', 'Zakia Ali', 'Zakia writes with clarity and nerve\u2014B2B that\u2019s actually worth reading.'],
  ];

  function MemberCard({ role, name, bio, i }) {
    return (
      <a className="tm-card sl-reveal" href={'#/author/' + slug(name)}>
        <div className="tm-vis" style={{ background: BGS[i % BGS.length] }}>
          <div className="tm-vis-glow" aria-hidden style={{ background: GLOWS[i % GLOWS.length] }} />
          <span className="tm-initials" aria-hidden>{initials(name)}</span>
        </div>
        <div className="tm-body">
          <span className="tm-role">{role}</span>
          <h3 className="tm-name">{name}</h3>
          <p className="tm-bio">{bio}</p>
          <span className="tm-more">Read More <span className="tm-more-arrow" aria-hidden>&rarr;</span></span>
        </div>
      </a>
    );
  }

  function RosterSection({ title, count, members, startIndex }) {
    return (
      <section className="da-wrap" style={{ paddingTop: 'var(--section-pad-y)' }}>
        <div className="tm-head sl-reveal">
          <h2 className="tm-sec-title">{title}</h2>
          <span className="tm-sec-count">{count}</span>
        </div>
        <div className="tm-grid">
          {members.map((m, idx) => (
            <MemberCard key={m[1]} role={m[0]} name={m[1]} bio={m[2]} i={startIndex + idx} />
          ))}
        </div>
      </section>
    );
  }

  function TeamPage() {
    window.useReveal();
    return (
      <React.Fragment>
        <SLNav />
        <main>
          <header className="da-wrap" style={{ paddingTop: 160 }}>
            <div className="sl-reveal" style={{ maxWidth: 900 }}>
              <h1 className="tm-h1">Team</h1>
              <p className="tm-intro">
                Strategists, designers, writers, developers and motion artists &mdash; in the same room,
                on the same problem. The people who make Design Asylum what it is.
              </p>
            </div>
          </header>

          <RosterSection title="Leadership" count="12 people" members={LEADERSHIP} startIndex={0} />
          <RosterSection title="Our Team" count="22 people" members={TEAM} startIndex={3} />

          <div style={{ height: 'var(--section-pad-y)' }} />
        </main>
        <SLFooter trail={[{ label: 'Home', href: '#' }, { label: 'Team' }]} />
      </React.Fragment>
    );
  }

  function mount() {
    const ns = window.DesignAsylumDesignSystem_594314;
    const ready = ns && window.ReactDOM && window.SLNav && window.SLFooter && window.useReveal;
    if (!ready) { return setTimeout(mount, 50); }
    ReactDOM.createRoot(document.getElementById('root')).render(<TeamPage />);
  }
  mount();
})();
