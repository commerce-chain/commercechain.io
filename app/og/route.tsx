import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "Commerce Chain - Open SCM/DCM Framework";
  const description = searchParams.get("description") ?? "Open framework for governed supply and demand chain operations.";

  return new ImageResponse(
    (
      <div style={{ width: "1200px", height: "630px", background: "#0F172A", color: "#E2E8F0", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px", fontFamily: "DM Sans, sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", color: "#4338CA" }}>
          <div style={{ width: 50, height: 18, borderTop: "2px solid #4338CA", borderBottom: "2px solid #4338CA" }} />
          <div style={{ fontSize: 30, fontWeight: 700 }}>Commerce Chain</div>
        </div>
        <div>
          <div style={{ fontSize: 60, lineHeight: 1.1, marginBottom: 18 }}>{title}</div>
          <div style={{ fontSize: 30, lineHeight: 1.3, color: "#94A3B8", maxWidth: 960 }}>{description}</div>
        </div>
        <div style={{ fontSize: 22, color: "#6366F1" }}>SENSE · DECIDE · EXECUTE · GOVERN · IMPROVE</div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
