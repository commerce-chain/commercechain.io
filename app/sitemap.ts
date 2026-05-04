import type { MetadataRoute } from "next";
import { getAllDocs } from "@/lib/docs";

function priorityFor(slug: string): number {
  if (slug.startsWith("getting-started/")) return 0.9;
  if (slug.startsWith("scm/") || slug.startsWith("dcm/") || slug.startsWith("industry-packs/")) return 0.8;
  return 0.7;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const docs = await getAllDocs();
  const docRoutes: MetadataRoute.Sitemap = docs.map((doc) => ({
    url: doc.frontmatter.canonical ?? `https://commercechain.io/docs/${doc.slugPath}`,
    lastModified: now,
    priority: priorityFor(doc.slugPath),
    changeFrequency: "weekly",
  }));

  return [
    { url: "https://commercechain.io", lastModified: now, priority: 1.0, changeFrequency: "weekly" },
    {
      url: "https://commercechain.io/partners",
      lastModified: now,
      priority: 0.65,
      changeFrequency: "monthly",
    },
    ...docRoutes,
  ];
}
