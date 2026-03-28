export function Ecosystem() {
  return (
    <section className="section section-alt">
      <div className="content-grid">
        <h2>Built on Loop Engine. Works with Commerce Gateway and Signal Tags.</h2>
        <div className="cards-grid three">
          <a className="card" href="https://loopengine.io"><h3>Loop Engine (blue)</h3><p>The governed runtime that executes Commerce Chain loops.</p></a>
          <a className="card" href="https://commercegateway.io"><h3>Commerce Gateway (green)</h3><p>LLM-accessible commerce data for AI actors in chain loops.</p></a>
          <a className="card" href="https://tagd.sh"><h3>Signal Tags (amber)</h3><p>Product authentication signals that trigger compliance loops.</p></a>
        </div>
      </div>
    </section>
  );
}
