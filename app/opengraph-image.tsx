import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Gildre — The Home for Founders Who Execute";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #080e1a 0%, #1C2744 55%, #0a1020 100%)",
          position: "relative",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Gold glow top center */}
        <div
          style={{
            position: "absolute",
            top: -120,
            left: "50%",
            transform: "translateX(-50%)",
            width: 700,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(201,169,110,0.18) 0%, transparent 65%)",
          }}
        />

        {/* Subtle grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(201,169,110,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Gold top bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, transparent, #C9A96E 30%, #C9A96E 70%, transparent)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            padding: "0 80px",
            textAlign: "center",
          }}
        >
          {/* Label */}
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#C9A96E",
              marginBottom: 28,
            }}
          >
            Founder Community
          </div>

          {/* Wordmark */}
          <div
            style={{
              fontSize: 108,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1,
              letterSpacing: "-0.02em",
              marginBottom: 32,
            }}
          >
            Gildre
          </div>

          {/* Gold divider */}
          <div
            style={{
              width: 64,
              height: 3,
              background: "#C9A96E",
              borderRadius: 2,
              marginBottom: 32,
            }}
          />

          {/* Tagline */}
          <div
            style={{
              fontSize: 26,
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.4,
              maxWidth: 700,
              fontWeight: 400,
            }}
          >
            The home for founders who execute.
          </div>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              gap: 48,
              marginTop: 56,
            }}
          >
            {[
              { value: "250+", label: "Active Members" },
              { value: "95%", label: "Retention Rate" },
              { value: "74", label: "Cities Worldwide" },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <div style={{ fontSize: 32, fontWeight: 700, color: "#C9A96E" }}>
                  {s.value}
                </div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            fontSize: 15,
            color: "rgba(255,255,255,0.25)",
            letterSpacing: "0.05em",
          }}
        >
          gildre.com
        </div>
      </div>
    ),
    { ...size }
  );
}
