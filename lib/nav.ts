export const docsNav = [
  {
    section: "Getting Started",
    items: [
      { title: "Quick Start", slug: "getting-started/quick-start" },
      { title: "Architecture", slug: "getting-started/architecture" },
      { title: "Five Pillars", slug: "getting-started/five-pillars" },
    ],
  },
  {
    section: "Supply Chain (SCM)",
    items: [
      { title: "Overview", slug: "scm/overview" },
      { title: "Procurement", slug: "scm/procurement" },
      { title: "Fulfillment", slug: "scm/fulfillment" },
      { title: "Inventory", slug: "scm/inventory" },
      { title: "Quality", slug: "scm/quality" },
    ],
  },
  {
    section: "Demand Chain (DCM)",
    items: [
      { title: "Overview", slug: "dcm/overview" },
      { title: "Demand Sensing", slug: "dcm/demand-sensing" },
      { title: "Order Management", slug: "dcm/order-management" },
      { title: "Returns", slug: "dcm/returns" },
    ],
  },
  {
    section: "Industry Packs",
    items: [
      { title: "Overview", slug: "industry-packs/overview" },
      { title: "Healthcare", slug: "industry-packs/healthcare" },
      { title: "Pharmaceutical", slug: "industry-packs/pharma" },
      { title: "Retail", slug: "industry-packs/retail" },
      { title: "Manufacturing", slug: "industry-packs/manufacturing" },
      { title: "Food & Beverage", slug: "industry-packs/food-beverage" },
      { title: "Construction", slug: "industry-packs/construction" },
    ],
  },
  {
    section: "Integrations",
    items: [
      { title: "Loop Engine", slug: "integrations/loop-engine" },
      { title: "Commerce Gateway", slug: "integrations/commerce-gateway" },
      { title: "Signal Tags", slug: "integrations/signal-tags" },
    ],
  },
  {
    section: "Hosted Platform",
    items: [
      { title: "Overview", slug: "hosted/overview" },
      { title: "Plans", slug: "hosted/plans" },
    ],
  },
] as const;
