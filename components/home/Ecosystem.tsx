export function Ecosystem() {
  return (
    <section className="section section-alt">
      <div className="content-grid">
        <h2>Layered stack — not a flat catalog of products</h2>
        <p className="section-subtitle max-720">
          Commerce Chain centers on Inventory &amp; Operations. Protocol surfaces (Commerce Gateway + Commerce Registry),
          governance (Loop Engine + Signal Tags), and demos sit in clear layers on the Better Data platform.
        </p>
        <div className="cards-grid four">
          <a className="card" href="https://commercegateway.io/registry">
            <h3>Commerce Registry</h3>
            <p>Native discovery and identity for gateways — configured in-product, with open protocol docs for OSS.</p>
          </a>
          <a className="card" href="https://commercegateway.io">
            <h3>Commerce Gateway</h3>
            <p>LLM-accessible commerce execution for AI actors in chain loops.</p>
          </a>
          <a className="card" href="https://loopengine.io">
            <h3>Loop Engine</h3>
            <p>Control layer: guards, policy, and audit on transitions — not a standalone automation product.</p>
          </a>
          <a className="card" href="https://tagd.sh">
            <h3>Signal Tags</h3>
            <p>Physical-product signals that feed verification and compliance loops.</p>
          </a>
        </div>
      </div>
    </section>
  );
}
