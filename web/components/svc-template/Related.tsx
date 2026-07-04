export type RelatedPost = { title: string; color: string };

/**
 * Ported from service/svc-extras.jsx `SvcRelated` (identical shape in
 * industry/ind-blocks.jsx `IndRelated`). Every card is an unwired
 * `href="#"` in the export — no blog article routes exist yet
 * (`global/content-blog`/`blog-index/section-port` are still pending) — so
 * these render as static/decorative, same "no invented destination" policy
 * as the Experts cards above.
 */
export function Related({ heading, posts }: { heading: string; posts: RelatedPost[] }) {
  return (
    <section className="da-wrap reveal-up" style={{ paddingTop: "var(--section-pad-y)", paddingBottom: "var(--section-pad-y)" }}>
      <h2 className="svc-section-h2" style={{ marginBottom: 36 }}>
        {heading}
      </h2>
      <div className="svc-related-grid">
        {posts.map((post) => (
          <div className="svc-related" key={post.title}>
            <div className="svc-related-vis" style={{ background: post.color }}>
              <div aria-hidden className="svc-related-vis-glow" />
            </div>
            <h3 className="svc-related-title">{post.title}</h3>
            <span className="svc-related-cta">
              Read blog <span aria-hidden>&rarr;</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
