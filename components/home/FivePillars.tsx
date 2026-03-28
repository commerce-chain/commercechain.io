const pillars = [
  { id: "sense", title: "SENSE", text: "Detect demand signals, supply events, and market changes before they become problems.", oss: "DemandSignal types, SupplyEvent schema" },
  { id: "decide", title: "DECIDE", text: "Generate governed recommendations with confidence-scored, evidence-backed AI actors.", oss: "RecommendationSpec, decision loop definitions" },
  { id: "execute", title: "EXECUTE", text: "Carry out approved decisions through ERP, WMS, and 3PL interfaces.", oss: "Execution loop definitions, adapter interfaces" },
  { id: "govern", title: "GOVERN", text: "Enforce policy at runtime. Every transition attributable and auditable.", oss: "Loop Engine integration, guard definitions" },
  { id: "improve", title: "IMPROVE", text: "Capture outcomes and continuously improve future recommendations.", oss: "Learning signal schema, outcome metric types" },
];

export function FivePillars() {
  return (
    <section className="section section-alt">
      <div className="content-grid">
        <h2>The Five Pillars of Commerce Chain Optimization</h2>
        <p className="section-subtitle">A complete operational framework - from signal to improvement.</p>
        <div className="cards-grid pillar-grid">
          {pillars.map((p) => (
            <a key={p.id} className="card pillar-card" href={`/docs/getting-started/five-pillars#${p.id}`}>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <p><strong>OSS:</strong> {p.oss}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
