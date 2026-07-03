/* OneLern written case study — assembly + mount */
(function () {
  function CaseStudyPage() {
    window.useReveal();
    return (
      <React.Fragment>
        <SLNav />
        <CSHeader />
        <CSOverview />
        <CSAttributes />
        <CSBeforeAfter />
        <CSWhy />
        <CSDeliverables />
        <CSQuote1 />
        <CSProcess />
        <SLFooter trail={[{ label: 'Home', href: '#' }, { label: 'Case Studies', href: '#' }, { label: 'Edtech Web Design OneLern' }]} />
      </React.Fragment>
    );
  }

  function mountCS() {
    const ns = window.DesignAsylumDesignSystem_594314;
    const ready = ns && window.ReactDOM && window.SLNav && window.SLFooter && window.Breadcrumb && window.useReveal && window.Eyebrow &&
      window.CSHeader && window.CSOverview && window.CSAttributes && window.CSBeforeAfter && window.CSWhy && window.CSDeliverables && window.CSQuote1 && window.CSProcess;
    if (!ready) { return setTimeout(mountCS, 50); }
    ReactDOM.createRoot(document.getElementById('root')).render(<CaseStudyPage />);
  }
  mountCS();
})();
