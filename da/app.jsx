/* Design Asylum homepage — assemble + mount */
function mount() {
  const ns = window.DesignAsylumDesignSystem_594314;
  const ready = ns && window.ReactDOM &&
    window.DANav && window.DAHero && window.DALogoWall && window.DAFeatured && window.DAServices &&
    window.DAShowreel && window.DAPortfolio && window.DAPainPoints && window.DAStats &&
    window.DAWhyUs && window.DAIndustries && window.DATestimonials &&
    window.DAFaq && window.DAContact && window.DAFooter;
  if (!ready) { return setTimeout(mount, 50); }

  function Page() {
    return (
      <React.Fragment>
        <DANav />
        <DAHero />
        <DALogoWall />
        <DAFeatured />
        <DAServices />
        <DAShowreel />
        <DAPortfolio />
        <DAPainPoints />
        <DAStats />
        <DAWhyUs />
        <DAIndustries />
        <DATestimonials />
        <DAFaq />
        <DAContact />
        <DAFooter />
      </React.Fragment>
    );
  }
  ReactDOM.createRoot(document.getElementById('root')).render(<Page />);
}
mount();
