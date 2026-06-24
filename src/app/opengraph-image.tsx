import { readFileSync } from "fs";
import { join } from "path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "S7 — Software, IA e Automação";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const logoBase64 = readFileSync(
    join(process.cwd(), "public", "s7-logo-mark.png")
  ).toString("base64");
  const logoSrc = `data:image/png;base64,${logoBase64}`;

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
          backgroundColor: "#0a0a0a",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            left: -80,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: "#1E8FE0",
            opacity: 0.35,
            filter: "blur(140px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -140,
            right: -100,
            width: 560,
            height: 560,
            borderRadius: "50%",
            background: "#79C342",
            opacity: 0.3,
            filter: "blur(140px)",
          }}
        />

        {/* eslint-disable-next-line @next/next/no-img-element -- next/image can't run inside ImageResponse's Satori renderer */}
        <img
          src={logoSrc}
          alt="S7"
          width={88}
          height={98}
          style={{ marginBottom: 36 }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: 880,
            padding: "0 40px",
          }}
        >
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "#fff",
              textAlign: "center",
              lineHeight: 1.15,
              letterSpacing: -1.5,
            }}
          >
            Construímos software que transforma negócios.
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 24,
              color: "rgba(255,255,255,0.55)",
              textAlign: "center",
            }}
          >
            Software · Inteligência Artificial · Automação
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
