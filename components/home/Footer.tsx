import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <h4>Project</h4>
          <a href="https://github.com/commercechain/commerce-chain">GitHub</a>
          <a href="https://www.npmjs.com/org/commerce-chain">npm (@commerce-chain/*)</a>
          <Link href="/docs/scm/overview">Loop Definitions</Link>
          <a href="https://github.com/commercechain/commerce-chain/releases">Changelog</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="https://github.com/commercechain/commerce-chain/blob/main/CONTRIBUTING.md">Contributing</a>
          <a href="https://github.com/commercechain/commerce-chain/issues">Issues</a>
          <a href="https://github.com/commercechain/commerce-chain/discussions">RFC Process</a>
          <a href="mailto:oss@betterdata.co">oss@betterdata.co</a>
        </div>
        <div>
          <h4>Better Data</h4>
          <p>Created by Better Data</p>
          <a href="https://betterdata.co">CCO Platform</a>
          <a href="https://loopengine.io">Loop Engine</a>
          <a href="https://commercegateway.io">Commerce Gateway</a>
          <a href="mailto:security@betterdata.co">security@betterdata.co</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Apache-2.0 Licensed · © Commerce Chain Contributors</span>
        <a href="mailto:conduct@commercechain.io">conduct@commercechain.io</a>
      </div>
    </footer>
  );
}
