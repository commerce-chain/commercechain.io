import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ecosystemPartners, erpComingSoonPartners } from "@/lib/partners";

export const metadata: Metadata = {
  title: "Partners — Commerce Chain",
  description:
    "Commerce Chain ecosystem partners — Loop Engine, Commerce Gateway, Signal Tags, and the Commerce Chain partner program.",
};

const accentColors: Record<string, string> = {
  "loop-engine": "#2563EB",
  "commerce-gateway": "#059669",
  "signal-tags": "#D97706",
};

export default function PartnersPage() {
  return (
    <main className="section">
      <section className="content-grid">
        <h1>Partners</h1>
        <p className="max-600">
          The Commerce Chain ecosystem — the OSS projects and integration
          partners that make up the Commerce Chain Optimization stack.
        </p>
      </section>

      <section className="section">
        <div className="content-grid">
          <h2>The Commerce Chain Optimization Stack</h2>
          <p className="section-subtitle">
            Commerce Chain is one part of a connected OSS ecosystem. These
            three projects work together to form the full CCO platform.
          </p>

          {ecosystemPartners.map((partner) => (
            <article
              key={partner.slug}
              className="card"
              style={{
                borderLeft: `4px solid ${accentColors[partner.slug] ?? "var(--color-primary)"}`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "var(--space-4)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                  <Image src={partner.logoPath} alt={`${partner.name} logo`} width={38} height={38} />
                  <h3>{partner.name}</h3>
                </div>
                <span className="doc-badge">Certified</span>
              </div>
              <p style={{ marginTop: "var(--space-3)" }}>{partner.description}</p>
              <p style={{ marginTop: "var(--space-3)" }}>
                {partner.slug === "loop-engine" && "Commerce Chain loops run on Loop Engine's governed runtime."}
                {partner.slug === "commerce-gateway" &&
                  "AI procurement actors use Commerce Gateway to access product and supplier data."}
                {partner.slug === "signal-tags" &&
                  "Product authentication signals from Signal Tags trigger Commerce Chain compliance loops."}
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "var(--space-4)",
                  marginTop: "var(--space-3)",
                }}
              >
                {partner.docsPath ? (
                  <Link href={partner.docsPath} className="text-link">
                    Integration docs →
                  </Link>
                ) : null}
                {partner.externalUrl ? (
                  <a href={partner.externalUrl} target="_blank" rel="noopener noreferrer" className="text-link">
                    {partner.externalUrl.replace("https://", "")} ↗
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="content-grid">
          <h2>ERP + WMS Integrations</h2>
          <p className="section-subtitle">
            Plug Commerce Chain into your existing ERP or WMS via the
            @commerce-chain/adapters interface.
          </p>
          <div className="cards-grid three">
            {erpComingSoonPartners.map((partner) => (
              <article key={partner.slug} className="card">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <h3>{partner.name}</h3>
                  <span className="doc-badge">Coming Soon</span>
                </div>
                <p style={{ marginTop: "var(--space-3)" }}>Integration coming soon.</p>
                <a
                  href="https://github.com/commercechain/commerce-chain/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                  style={{ marginTop: "var(--space-3)", display: "inline-block" }}
                >
                  Building an integration? → Open an RFC
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="content-grid">
          <h2>Partner Program</h2>
          <p className="max-600">
            Commerce Chain partners get early adapter access, co-marketing, and
            a listing in the Better Data CCO partner directory.
          </p>
          <a href="mailto:partners@betterdata.co" className="text-link">
            Become a partner →
          </a>
        </div>
      </section>

      <section className="section" style={{ borderBottom: "none" }}>
        <div className="content-grid">
          <h2>OSS and Better Data</h2>
          <p className="max-600">
            Commerce Chain is maintained by Better Data. The framework is
            Apache-2.0 licensed — any team can build on it. Better Data hosts
            the production CCO platform with AI intelligence and enterprise
            SLAs.
          </p>
          <Link href="/docs/governance/license" className="text-link">
            About the license →
          </Link>
        </div>
      </section>
    </main>
  );
}
