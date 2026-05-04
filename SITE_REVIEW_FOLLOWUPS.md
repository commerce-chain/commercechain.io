# commercechain.io — content review follow-ups

Generated after enabling indexing (`robots.ts` + metadata). Use this list for editorial / product passes — not blockers for crawlability.

## Checklist (snapshot)

| Criterion | Status | Notes |
|-----------|--------|--------|
| Clear headline (what Commerce Chain is) | OK | Hero: “Supply chain and demand chain. Governed by design.” |
| Problem/solution framing | OK | Before/After section on homepage |
| npm install command | Partial | Hero shows `npm install @commerce-chain/sdk`. Review criteria mentioned `@commerce-chain/scm-contracts`; align messaging if that package is the preferred public entry |
| Link to GitHub `github.com/commerce-chain/scm-dcm` | Follow-up | Nav RELEASES → `commerce-chain/scm-dcm/releases`. Hero/footer GitHub → `commercechain/commerce-chain`. Confirm single canonical repo for marketing and unify links |
| Quick start / code example | OK | `/docs/getting-started/quick-start` and related docs |
| Footer links to other OSS sites | OK | Loop Engine, Commerce Gateway, Signal Tags under Better Data |
| Draft / placeholder copy | OK | None spotted in quick pass |
| No “next-forge” in titles | OK | Template is `%s \| Commerce Chain` |
| Getting started docs not a stub | OK | Architecture, quick-start, five-pillars present |
| License (Apache-2.0) | OK | Footer: “Apache-2.0 Licensed”; `docs/governance/license.mdx` |

## Suggested next actions

1. **Canonical GitHub**: Decide whether primary OSS repo for the site is `commercechain/commerce-chain`, `commerce-chain/scm-dcm`, or both (mono vs packages) — then align Hero, footer “GitHub”, and nav RELEASES.
2. **npm entry package**: If `@commerce-chain/scm-contracts` is the flagship install for adopters, add it beside or instead of `@commerce-chain/sdk` in the hero strip after PM review.
3. **Search Console**: After deploy, submit `https://commercechain.io/sitemap.xml` and request indexing for `/` and key doc URLs.
