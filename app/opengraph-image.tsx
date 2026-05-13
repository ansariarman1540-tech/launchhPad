import { ImageResponse } from "next/og";

export const alt = "LaunchhPad — Where ideas launch. And keep launching.";
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
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#09090B",
          color: "#E4E4E7",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 9999,
              background: "#7C3AED",
            }}
          />
          <div
            style={{
              fontSize: 32,
              fontWeight: 600,
              letterSpacing: -0.5,
              color: "#A1A1AA",
            }}
          >
            LaunchhPad
          </div>
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 96,
            fontWeight: 600,
            letterSpacing: -3,
            lineHeight: 1.05,
            color: "#FAFAFA",
            display: "flex",
          }}
        >
          Where ideas launch.
        </div>
        <div
          style={{
            marginTop: 8,
            fontSize: 96,
            fontWeight: 600,
            letterSpacing: -3,
            lineHeight: 1.05,
            color: "#7C3AED",
            display: "flex",
          }}
        >
          And keep launching.
        </div>
      </div>
    ),
    { ...size },
  );
}
