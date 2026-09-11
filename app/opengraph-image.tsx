import { ImageResponse } from "next/og";

export const alt = "Tadeo Abbruzzese — AI Strategist & Full Stack Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          color: "#f4f5ef",
          background: "#080a0c",
          fontFamily: "Arial, sans-serif",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", width: 520, height: 520, borderRadius: 999, right: -120, top: -190, background: "radial-gradient(circle, rgba(200,255,63,.22), rgba(8,10,12,0) 68%)" }} />
        <div style={{ position: "absolute", inset: 0, opacity: 0.14, backgroundImage: "linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)", backgroundSize: "54px 54px" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 24, letterSpacing: 1 }}>
          <span style={{ display: "flex", width: 50, height: 50, alignItems: "center", justifyContent: "center", color: "#080a0c", background: "#c8ff3f", fontWeight: 700 }}>TA</span>
          <span>Tadeo Abbruzzese</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 72, maxWidth: 970, lineHeight: 1.02, letterSpacing: -3 }}>AI Strategist & Full Stack Software Developer</div>
          <div style={{ display: "flex", alignItems: "center", gap: 22, fontSize: 26, color: "#a5aca3" }}>
            <span style={{ width: 52, height: 2, background: "#c8ff3f" }} /> Software · Web · AI
          </div>
        </div>
      </div>
    ),
    size,
  );
}
