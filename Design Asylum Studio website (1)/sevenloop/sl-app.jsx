/* Sevenloop client hub — assemble + mount */
function mountSevenloop() {
  const ns = window.DesignAsylumDesignSystem_594314;
  const ready = ns && window.ReactDOM &&
    window.SLNav && window.SLHeader && window.SLOverview &&
    window.SLEditorial && window.SLTransformation &&
    window.SLTeam && window.SLServices && window.SLFooter && window.useReveal;
  if (!ready) { return setTimeout(mountSevenloop, 50); }

  function Page() {
    window.useReveal();
    return (
      <React.Fragment>
        <SLNav />
        <SLHeader />
        <SLOverview />
        <SLEditorial />
        <SLTransformation />
        <SLTeam />
        <SLServices />
        <SLFooter />
      </React.Fragment>
    );
  }
  ReactDOM.createRoot(document.getElementById('root')).render(<Page />);
}
mountSevenloop();
