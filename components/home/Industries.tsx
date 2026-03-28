const items = [
  { title: "Healthcare", href: "/docs/industry-packs/healthcare", text: "UDI traceability, recall workflows, regulated device operations." },
  { title: "Pharmaceutical", href: "/docs/industry-packs/pharma", text: "DSCSA-aligned serialization, cold chain, controlled substances." },
  { title: "Retail", href: "/docs/industry-packs/retail", text: "Omnichannel fulfillment, returns, and demand volatility." },
  { title: "Manufacturing", href: "/docs/industry-packs/manufacturing", text: "Production scheduling, quality loops, materials planning." },
  { title: "Food & Beverage", href: "/docs/industry-packs/food-beverage", text: "FSMA readiness, traceability, and contamination response." },
  { title: "Construction", href: "/docs/industry-packs/construction", text: "Materials compliance, certification trace, project logistics." },
];

export function Industries() {
  return (
    <section className="section">
      <div className="content-grid">
        <h2>Purpose-built for regulated industries</h2>
        <p className="section-subtitle">Industry Packs extend core loops with domain guard policies and compliance event types.</p>
        <div className="cards-grid industries-grid">
          {items.map((item) => (
            <a key={item.title} href={item.href} className="card industry-card">
              <span className="pill">Industry Pack</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
