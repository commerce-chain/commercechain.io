export const runtime = "nodejs";

const body = `# Commerce Chain (commercechain.io)

Commerce Chain is an open framework for supply chain and demand chain
operations built on Loop Engine. It provides typed domain models,
canonical loop definitions, and pluggable adapter interfaces for ERP,
WMS, and commerce platform integration.

## Architecture

Built on the Five Pillars: SENSE, DECIDE, EXECUTE, GOVERN, IMPROVE.
Powered by Loop Engine (the governed runtime).
Integrates with Commerce Gateway (LLM data access) and Signal Tags
(product authentication).

## Packages

- @commerce-chain/core — domain types (PO, shipment, lot, order)
- @commerce-chain/loops — canonical SCM/DCM loop definitions
- @commerce-chain/scm — supply chain module interfaces
- @commerce-chain/dcm — demand chain module interfaces
- @commerce-chain/adapters — ERP/WMS/TMS adapter interfaces
- @commerce-chain/sdk — main developer SDK

## Industry Packs

Healthcare, Pharmaceutical, Retail, Manufacturing, Food & Beverage,
Construction.

## Links

- Docs: https://commercechain.io/docs
- GitHub: https://github.com/commercechain/commerce-chain
- npm: https://www.npmjs.com/org/commerce-chain
- Created by: Better Data (https://betterdata.co)
- Loop Engine: https://loopengine.io
- Commerce Gateway: https://commercegateway.io
- Signal Tags: https://tagd.sh
`;

export async function GET() {
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=300" } });
}
