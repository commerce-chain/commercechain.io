import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Hero } from "@/components/home/Hero";
import { FivePillars } from "@/components/home/FivePillars";
import { Industries } from "@/components/home/Industries";
import { Ecosystem } from "@/components/home/Ecosystem";

export const metadata: Metadata = {
  title: "Commerce Chain OSS",
  description: "Open SCM/DCM framework built on Loop Engine.",
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Commerce Chain",
    applicationCategory: "DeveloperApplication",
    url: "https://commercechain.io",
    author: { "@type": "Organization", name: "Better Data", url: "https://betterdata.co" },
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <main>
      <Script id="home-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />

      <section className="section">
        <div className="content-grid">
          <h2>Enterprise operations run on spreadsheets and tribal knowledge.</h2>
          <div className="two-col">
            <div>
              <h3>Before</h3>
              <ul>
                <li>Procurement decisions in email threads.</li>
                <li>Demand forecasting in spreadsheets without auditability.</li>
                <li>AI recommendations without runtime governance.</li>
                <li>Compliance as periodic manual reporting.</li>
                <li>Siloed SCM and DCM with no shared state.</li>
              </ul>
            </div>
            <div>
              <h3>After</h3>
              <ul>
                <li>Governed loops with actor attribution.</li>
                <li>AI as a structured actor with hard guardrails.</li>
                <li>Approval policy enforced at transition boundaries.</li>
                <li>Operational events that are auditable by design.</li>
                <li>Unified SCM and DCM operational backbone.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FivePillars />

      <section className="section">
        <div className="content-grid two-col">
          <div className="card">
            <h3>Supply Chain (SCM)</h3>
            <ul>
              <li>Procurement - governed PO approval with AI analysis.</li>
              <li>Fulfillment - reservation, pick, pack, ship execution loops.</li>
              <li>Inventory - stock reconciliation, reservation, lot controls.</li>
              <li>Quality - hold, assessment, and resolution loops.</li>
            </ul>
            <Link href="/docs/scm/overview" className="text-link">SCM docs →</Link>
          </div>
          <div className="card">
            <h3>Demand Chain (DCM)</h3>
            <ul>
              <li>Demand sensing - event ingestion and evaluation loops.</li>
              <li>Order management - allocation and shipping coordination.</li>
              <li>Returns - RMA, condition handling, credit closure loops.</li>
            </ul>
            <Link href="/docs/dcm/overview" className="text-link">DCM docs →</Link>
          </div>
        </div>
      </section>

      <Industries />
      <Ecosystem />

      <section className="section">
        <div className="content-grid two-col">
          <div className="panel">
            <h3>OSS (Apache-2.0)</h3>
            <ul>
              <li>Domain types and loop definitions</li>
              <li>Module interfaces and adapter contracts</li>
              <li>Industry Pack schemas</li>
              <li>Loop Engine runtime integration</li>
            </ul>
            <Link href="/docs/getting-started/architecture" className="text-link">Read architecture →</Link>
          </div>
          <div className="panel panel-hosted">
            <h3>Better Data CCO Platform</h3>
            <ul>
              <li>AI demand intelligence and anomaly detection</li>
              <li>Industry Pack implementations</li>
              <li>Multi-tenant hosted execution</li>
              <li>Compliance reporting</li>
            </ul>
            <a href="https://betterdata.co" className="text-link">Contact Better Data →</a>
          </div>
        </div>
      </section>
    </main>
  );
}
