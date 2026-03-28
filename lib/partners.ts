export type Partner = {
  name: string;
  slug: string;
  logoPath: string;
  description: string;
  integrationType: "featured" | "integration" | "ecosystem";
  docsPath?: string;
  externalUrl?: string;
  certificationStatus?: "certified" | "in-review" | "community";
  comingSoon?: boolean;
};

export const ecosystemPartners: Partner[] = [
  {
    name: "Loop Engine",
    slug: "loop-engine",
    logoPath: "/logos/loop-engine.svg",
    description:
      "Commerce Chain is built on Loop Engine — every SCM/DCM operation is a governed Loop Engine loop.",
    integrationType: "featured",
    docsPath: "/docs/integrations/loop-engine",
    externalUrl: "https://loopengine.io",
    certificationStatus: "certified",
  },
  {
    name: "Commerce Gateway",
    slug: "commerce-gateway",
    logoPath: "/logos/commerce-gateway.svg",
    description:
      "LLM-accessible commerce data for AI actors inside Commerce Chain procurement and demand loops.",
    integrationType: "featured",
    docsPath: "/docs/integrations/commerce-gateway",
    externalUrl: "https://commercegateway.io",
    certificationStatus: "certified",
  },
  {
    name: "Signal Tags",
    slug: "signal-tags",
    logoPath: "/logos/signal-tags.svg",
    description:
      "Product authentication signals that trigger Commerce Chain compliance and quarantine loops.",
    integrationType: "featured",
    docsPath: "/docs/integrations/signal-tags",
    externalUrl: "https://tagd.sh",
    certificationStatus: "certified",
  },
];

export const erpComingSoonPartners: Partner[] = [
  {
    name: "SAP",
    slug: "sap",
    logoPath: "",
    description: "Integration coming soon",
    integrationType: "integration",
    certificationStatus: "in-review",
    comingSoon: true,
  },
  {
    name: "Oracle",
    slug: "oracle",
    logoPath: "",
    description: "Integration coming soon",
    integrationType: "integration",
    certificationStatus: "in-review",
    comingSoon: true,
  },
  {
    name: "NetSuite",
    slug: "netsuite",
    logoPath: "",
    description: "Integration coming soon",
    integrationType: "integration",
    certificationStatus: "in-review",
    comingSoon: true,
  },
];
