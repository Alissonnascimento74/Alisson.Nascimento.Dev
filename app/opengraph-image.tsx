import { ImageResponse } from "next/og";
import { content } from "@/data/content";

// Imagem que aparece ao compartilhar o link (LinkedIn, WhatsApp...). Gerada no build.
export const alt = "Alisson Nascimento — iOS Developer · Swift & SwiftUI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  const host = content.pt.profile.siteUrl.replace(/^https?:\/\//, "");
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 90px",
          backgroundColor: "#0a0a0c",
          backgroundImage:
            "radial-gradient(circle at 12% 18%, rgba(255,100,180,0.28), transparent 45%), radial-gradient(circle at 88% 30%, rgba(100,150,255,0.28), transparent 45%), radial-gradient(circle at 45% 100%, rgba(255,200,100,0.22), transparent 45%)",
          color: "#f5f5f7",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 6, textTransform: "uppercase", color: "rgba(245,245,247,0.55)" }}>
          iOS Developer · Swift & SwiftUI
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 104, fontWeight: 300, letterSpacing: -3, lineHeight: 1.02 }}>Alisson Nascimento</div>
          <div style={{ fontSize: 40, marginTop: 24, color: "rgba(245,245,247,0.75)" }}>Transformando ideias em apps.</div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "rgba(245,245,247,0.5)" }}>{host}</div>
      </div>
    ),
    size,
  );
}
