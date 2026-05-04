import type { ReactNode } from "react";
import { DocsSidebar } from "@/components/docs/DocsSidebar";
import { getNavTree } from "@/lib/docs";

export default async function DocsLayout({ children }: { children: ReactNode }) {
  const nav = await getNavTree();

  return (
    <main className="docs-shell">
      <DocsSidebar sections={nav} />
      <article className="docs-content">{children}</article>
    </main>
  );
}
