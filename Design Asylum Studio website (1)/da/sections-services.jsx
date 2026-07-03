/* Design Asylum — Services (animated cursor-follow hover reveal)
   Adapted from a GSAP/Framer "services with animated hover modal" pattern,
   rebuilt natively for the Design Asylum system: Blinker 400 titles, Fraunces
   meta, hairline rows, DS colour-block previews + Iris-Voltage VIEW cursor. */
const { useState: useStateSvc, useEffect: useEffectSvc, useRef: useRefSvc } = React;

function DAServices() {
  const D = 'var(--font-display)', S = 'var(--font-serif)';
  const services = [
    { title: 'Brand strategy',      meta: 'Positioning · Naming · Narrative',  bg: 'var(--color-block-iris)',   fg: '#ffffff' },
    { title: 'Brand & identity',    meta: 'Logos · Systems · Guidelines',      bg: 'var(--color-block-maroon)', fg: '#ffffff' },
    { title: 'Website design',      meta: 'UX · UI · Art direction',           bg: 'var(--color-block-teal)',   fg: '#ffffff' },
    { title: 'Website development', meta: 'Webflow · Build · Launch',          bg: 'var(--color-block-solar)',  fg: 'var(--color-obsidian-ink)' },
    { title: 'Film & animation',    meta: 'Live action · Motion · Lottie',     bg: 'var(--color-block-mint)',   fg: 'var(--color-obsidian-ink)' },
    { title: 'Brand campaigns',     meta: 'Launch · Go-to-market',             bg: 'var(--color-block-ink)',    fg: '#ffffff' },
  ];

  const [modal, setModal] = useStateSvc({ active: false, index: 0 });
  const modalWrap = useRefSvc(null);
  const cursorWrap = useRefSvc(null);
  const target = useRefSvc({ x: 0, y: 0 });
  const mp = useRefSvc({ x: 0, y: 0 });
  const cp = useRefSvc({ x: 0, y: 0 });
  const started = useRefSvc(false);

  useEffectSvc(() => {
    const onMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (!started.current) {
        mp.current = { x: e.clientX, y: e.clientY };
        cp.current = { x: e.clientX, y: e.clientY };
        started.current = true;
      }
    };
    window.addEventListener('mousemove', onMove);
    const lerp = (a, b, n) => a + (b - a) * n;
    let raf;
    const tick = () => {
      mp.current.x = lerp(mp.current.x, target.current.x, 0.12);
      mp.current.y = lerp(mp.current.y, target.current.y, 0.12);
      cp.current.x = lerp(cp.current.x, target.current.x, 0.22);
      cp.current.y = lerp(cp.current.y, target.current.y, 0.22);
      if (modalWrap.current) modalWrap.current.style.transform = `translate(${mp.current.x}px, ${mp.current.y}px)`;
      if (cursorWrap.current) cursorWrap.current.style.transform = `translate(${cp.current.x}px, ${cp.current.y}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf); };
  }, []);

  const { active, index } = modal;

  return (
    <section style={{ paddingTop: 'var(--section-pad-y)', paddingBottom: 'var(--section-pad-y)', background: 'var(--color-paper-white)', overflow: 'hidden' }}>
      <div className="da-wrap">
        <div className="da-svc-head">
          <h2 style={{ margin: 0, fontFamily: D, fontWeight: 400, fontSize: 'var(--text-section)', lineHeight: 1.0, letterSpacing: '-0.02em', color: 'var(--color-obsidian-ink)' }}>Services</h2>
          <p style={{ margin: 0, maxWidth: 440, fontFamily: S, fontSize: 18, lineHeight: 1.55, color: 'var(--color-graphite)' }}>
            Brand-first, end to end — strategy through launch, built to be impossible to ignore.
          </p>
        </div>

        <div className="da-svc-list" onMouseLeave={() => setModal((m) => ({ ...m, active: false }))}>
          {services.map((s, i) => (
            <div key={s.title} className="da-svc-row" onMouseEnter={() => setModal({ active: true, index: i })}>
              <h3 className="da-svc-title" style={{ fontFamily: D }}>{s.title}</h3>
              <span className="da-svc-meta" style={{ fontFamily: S }}>{s.meta}</span>
            </div>
          ))}
        </div>
      </div>

      {/* floating preview — fine-pointer only */}
      <div className="da-svc-modalwrap" ref={modalWrap} aria-hidden="true">
        <div className="da-svc-modal" data-active={active ? 'true' : 'false'}>
          <div className="da-svc-stack" style={{ top: `${index * -100}%` }}>
            {services.map((s) => (
              <div key={s.title} className="da-svc-tile" style={{ background: s.bg, color: s.fg }}>
                <span style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '-0.01em', fontSize: 'clamp(20px,1.7vw,32px)', textAlign: 'center', padding: '0 24px' }}>{s.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="da-svc-cursorwrap" ref={cursorWrap} aria-hidden="true">
        <div className="da-svc-cursor" data-active={active ? 'true' : 'false'}>View&nbsp;&rarr;</div>
      </div>
    </section>
  );
}

Object.assign(window, { DAServices });
