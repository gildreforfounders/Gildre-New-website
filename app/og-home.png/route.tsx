import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const runtime = "nodejs";

export async function GET() {
  const fontData = await readFile(
    join(process.cwd(), "public/fonts/Inter-Bold.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#080e1a",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Radial gold glow top-center */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            left: "200px",
            width: "800px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse at center, rgba(201,169,110,0.18) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Main content column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "0 80px",
            position: "relative",
          }}
        >
          {/* Eyebrow pill */}
          <div
            style={{
              display: "flex",
              background: "rgba(201,169,110,0.1)",
              border: "1px solid rgba(201,169,110,0.35)",
              borderRadius: "100px",
              padding: "8px 22px",
              color: "#C9A96E",
              fontSize: "15px",
              fontFamily: "Inter",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "32px",
            }}
          >
            Private Founder Community
          </div>

          {/* Wordmark */}
          <div
            style={{
              fontSize: "110px",
              fontWeight: 700,
              color: "#ffffff",
              fontFamily: "Inter",
              lineHeight: 1,
              marginBottom: "28px",
              letterSpacing: "-0.02em",
            }}
          >
            Gildre
          </div>

          {/* Gold divider */}
          <div
            style={{
              width: "72px",
              height: "2px",
              background: "#C9A96E",
              marginBottom: "30px",
              display: "flex",
            }}
          />

          {/* Tagline */}
          <div
            style={{
              fontSize: "26px",
              color: "rgba(255,255,255,0.55)",
              fontFamily: "Inter",
              fontWeight: 700,
              maxWidth: "680px",
              lineHeight: 1.45,
              marginBottom: "44px",
            }}
          >
            Weekly 1:1 introductions to founders and mentors at your exact stage
          </div>

          {/* City chips row */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {[
              "Chicago",
              "NYC",
              "Boston",
              "Bay Area",
              "Austin",
              "LA",
              "Seattle",
            ].map((city) => (
              <div
                key={city}
                style={{
                  display: "flex",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "100px",
                  padding: "6px 18px",
                  color: "rgba(255,255,255,0.45)",
                  fontSize: "15px",
                  fontFamily: "Inter",
                  fontWeight: 700,
                }}
              >
                {city}
              </div>
            ))}
          </div>
        </div>

        {/* Price badge — bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: "44px",
            right: "64px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              fontSize: "38px",
              fontWeight: 700,
              color: "#C9A96E",
              fontFamily: "Inter",
              lineHeight: 1,
            }}
          >
            $59/mo
          </div>
          <div
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.3)",
              fontFamily: "Inter",
              fontWeight: 700,
              marginTop: "4px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            No equity taken
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: fontData,
          weight: 700,
          style: "normal",
        },
      ],
    }
  );
}
