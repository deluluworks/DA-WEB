/**
 * Export used `<a href="#">` for every tag (service expertise, solution and
 * industry expertise clouds) — an unwired placeholder, not a real
 * destination. No dedicated page exists per tag yet, so these render as
 * static pills rather than fake links (same "no invented destination"
 * decision as the project cards on this page).
 */
export function TagCloud({ title, tags }: { title: string; tags: string[] }) {
  return (
    <section className="da-wrap auth-section reveal-up">
      <h2 className="auth-section-head">{title}</h2>
      <div className="auth-tags">
        {tags.map((t) => (
          <span key={t} className="auth-tag">
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}
