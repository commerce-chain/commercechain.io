import type { LoadedDoc } from "./types";

/** Sidebar / prev-next section order (platform IA). */
export const SECTION_LABEL_ORDER: string[] = [
  "Getting Started",
  "Supply Chain (SCM)",
  "Demand Chain (DCM)",
  "Examples",
  "Industry Packs",
  "Integrations",
  "Hosted Platform",
  "Governance",
];

/** Matches prior `lib/nav.ts` traversal + SCM/DCM sub-order. */
const ORDERED_SLUGS = [
  "getting-started/quick-start",
  "getting-started/architecture",
  "getting-started/loop-participation",
  "getting-started/runtime-configuration",
  "getting-started/five-pillars",
  "scm/overview",
  "scm/procurement",
  "scm/fulfillment",
  "scm/inventory",
  "scm/quality",
  "dcm/overview",
  "dcm/demand-sensing",
  "dcm/order-management",
  "dcm/returns",
  "examples/ai-replenishment",
  "industry-packs/overview",
  "industry-packs/healthcare",
  "industry-packs/pharma",
  "industry-packs/retail",
  "industry-packs/manufacturing",
  "industry-packs/food-beverage",
  "industry-packs/construction",
  "integrations/loop-engine",
  "integrations/commerce-gateway",
  "integrations/signal-tags",
  "hosted/overview",
  "hosted/plans",
  "governance/license",
];

const SLUG_RANK: Record<string, number> = (() => {
  const m: Record<string, number> = {};
  ORDERED_SLUGS.forEach((s, i) => {
    m[s] = i;
  });
  return m;
})();

function sectionRank(label: string): number {
  const i = SECTION_LABEL_ORDER.indexOf(label);
  if (i !== -1) return i;
  return 100 + label.localeCompare("");
}

function withinSectionSort(a: LoadedDoc, b: LoadedDoc): number {
  const oa = a.frontmatter.order;
  const ob = b.frontmatter.order;
  if (oa != null && ob != null && oa !== ob) return oa - ob;
  if (oa != null && ob == null) return -1;
  if (oa == null && ob != null) return 1;

  const ra = SLUG_RANK[a.slugPath];
  const rb = SLUG_RANK[b.slugPath];
  const fa = ra !== undefined ? ra : 9999;
  const fb = rb !== undefined ? rb : 9999;
  if (fa !== fb) return fa - fb;
  return a.slugPath.localeCompare(b.slugPath);
}

export function sortLoadedDocsByReaderOrder(docs: LoadedDoc[]): LoadedDoc[] {
  return [...docs].sort((a, b) => {
    const s = sectionRank(a.sectionLabel) - sectionRank(b.sectionLabel);
    if (s !== 0) return s;
    return withinSectionSort(a, b);
  });
}
