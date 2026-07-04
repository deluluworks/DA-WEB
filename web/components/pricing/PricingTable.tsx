type Row = [service: string, inr: string, usd: string, timeline: string];

// Verbatim figures from pricing/pricing.jsx.
const ROWS: Row[] = [
  ["Brand Design + Website — Early Stage", "₹9L – 18L", "$10,000 – $20,000", "8 – 10 Weeks"],
  ["Strategic Branding + Website — Growth Stage / Funded", "₹25L – 55L", "$28,000 – $60,000", "10 – 20 Weeks"],
  ["Brand Design — Mainly Visual & Motion", "₹5L – 12L", "$6,000 – $14,000", "3 – 8 Weeks"],
  ["Strategic Branding", "₹14L – 45L", "$15,000 – $48,000", "8 – 16 Weeks"],
  ["Website — Early Stage", "₹6L – 15L", "$8,000 – $18,000", "4 – 6 Weeks"],
  ["Growth / Funded Startup Website", "₹12L – 25L", "$15,000 – $30,000", "8 – 12 Weeks"],
  ["Corporate Website (Multiple Solutions)", "₹20L – 70L", "$24,000 – $75,000", "12 – 20 Weeks"],
  ["Explainer Video", "₹4L – 10L", "$5,000 – $11,000", "3 – 5 Weeks"],
];

export function PricingTable() {
  return (
    <div className="pr-tablewrap reveal-up">
      <table className="pr-table">
        <colgroup>
          <col style={{ width: "40%" }} />
          <col style={{ width: "20%" }} />
          <col style={{ width: "24%" }} />
          <col style={{ width: "16%" }} />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">Service</th>
            <th scope="col">INR</th>
            <th scope="col">USD</th>
            <th scope="col">Timeline</th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map(([svc, inr, usd, time]) => (
            <tr key={svc}>
              <td>
                <span className="pr-svc">
                  <span className="pr-svc-arrow" aria-hidden>
                    &rarr;
                  </span>
                  <span>{svc}</span>
                </span>
              </td>
              <td>
                <span className="pr-inr">{inr}</span>
              </td>
              <td>
                <span className="pr-usd">{usd}</span>
              </td>
              <td>
                <span className="pr-time">{time}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
