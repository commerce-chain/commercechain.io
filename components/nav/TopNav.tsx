import Image from "next/image";
import Link from "next/link";

export function TopNav() {
  return (
    <header className="top-nav">
      <div className="top-nav-inner">
        <Link href="/" className="brand" aria-label="Commerce Chain home">
          <Image src="/logo.svg" alt="Commerce Chain Optimization" width={260} height={34} priority />
        </Link>
        <nav className="nav-links">
          <Link href="/docs/getting-started/quick-start">DOCS</Link>
          <a href="https://betterdata.co/blog/tags/commerce-chain" target="_blank" rel="noreferrer">
            BLOG
          </a>
          <a href="https://betterdata.co/changelog?module=commerce-chain" target="_blank" rel="noreferrer">
            CHANGELOG
          </a>
          <a href="https://github.com/commerce-chain/scm-dcm/releases" target="_blank" rel="noreferrer">
            RELEASES
          </a>
          <Link href="/partners">PARTNERS</Link>
          <a href="https://github.com/commercechain/commerce-chain" target="_blank" rel="noreferrer">
            GITHUB
          </a>
        </nav>
        <div className="nav-actions">
          <span className="npm-badge">npm i @commerce-chain/sdk</span>
          <Link href="/docs/getting-started/quick-start" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
