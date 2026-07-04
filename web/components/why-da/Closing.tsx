import Link from "next/link";

/**
 * Ported from footer/why-da.jsx `Closing`. The export's two CTA links
 * pointed at sibling export files directly (`Why Us.html`,
 * `Contact - Book a Call.html`) — mapped to the real routes: `/why-us`
 * (the "no-brainer offer" page — pending route) and `/contact`.
 */
export function Closing() {
  return (
    <>
      <section className="da-wrap wda-closing-statement">
        <h2 className="wda-section-head" style={{ maxWidth: 900 }}>
          Communicate this on your website &mdash; the one belief you want every buyer to leave
          with.
        </h2>
      </section>
      <section className="wda-closing-band">
        <div className="da-wrap wda-closing-band-inner">
          <h2 className="wda-closing-band-h2">Want a no-brainer offer?</h2>
          <div className="wda-closing-band-ctas">
            <Link href="/why-us" className="wda-cta-outline">
              See the offer
            </Link>
            <Link href="/contact" className="wda-cta-fill">
              Book an intro <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
