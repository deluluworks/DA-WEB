/* Sevenloop — Branding case study · mount */
function mountCaseStudy() {
  const ns = window.DesignAsylumDesignSystem_594314;
  const ready = ns && window.ReactDOM && window.SLNav && window.useReveal && window.Eyebrow && window.CaseStudyPage;
  if (!ready) { return setTimeout(mountCaseStudy, 50); }
  ReactDOM.createRoot(document.getElementById('root')).render(<CaseStudyPage />);
}
mountCaseStudy();
