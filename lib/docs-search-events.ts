/** Dispatched to open the docs Pagefind modal (commercechain.io). */
export const DOCS_SEARCH_OPEN_EVENT = "commercechain:docs-search-open" as const;

export type DocsSearchOpenSource = "keyboard" | "sidebar" | "header";

export type DocsSearchOpenDetail = {
  source: DocsSearchOpenSource;
};
