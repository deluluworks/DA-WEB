/* Sevenloop — Print collateral showcase · mount */
function mountPrint() {
  const ns = window.DesignAsylumDesignSystem_594314;
  const ready = ns && window.ReactDOM && window.SLNav && window.SLFooter && window.Breadcrumb && window.useReveal && window.PrintPage;
  if (!ready) { return setTimeout(mountPrint, 50); }
  ReactDOM.createRoot(document.getElementById('root')).render(<PrintPage />);
}
mountPrint();
