import Link from "next/link";

export function Hero() {
  return (
    <section className="hero section">
      <div className="content-grid">
        <h1>Supply chain and demand chain. Governed by design.</h1>
        <p className="section-subtitle max-600">
          In Better Data, Inventory &amp; Operations is where you run the business; Commerce Chain packages the open models
          and loops behind that work. Typed domain models, canonical loop definitions, and adapters for ERP, WMS, and
          commerce platforms — composed with Gateway, Registry, Loop Engine, and Signal Tags as layers, not interchangeable
          SKUs.
        </p>
        <div className="hero-cta">
          <Link href="/docs/getting-started/architecture" className="btn btn-primary">
            View the architecture
          </Link>
          <a href="https://github.com/commercechain/commerce-chain" className="btn btn-outline">GitHub</a>
          <code className="npm-badge">npm install @commerce-chain/sdk</code>
        </div>
        <div className="pillars-strip">
          <span>SENSE</span><span aria-hidden>→</span><span>DECIDE</span><span aria-hidden>→</span>
          <span>EXECUTE</span><span aria-hidden>→</span><span>GOVERN</span><span aria-hidden>→</span><span>IMPROVE</span>
        </div>
      </div>
    </section>
  );
}
