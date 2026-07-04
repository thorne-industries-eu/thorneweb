"use client";

export default function HomePage() {
  return (
    <main style={{ width: "100vw" }}>
      <style jsx global>{`
        /* ===== FONTS ===== */
        @font-face {
          font-family: "SFProDisplay";
          src: url("/fonts/sf-pro-display/sf-pro-display-regular.woff2")
            format("woff2");
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: "SFProDisplay";
          src: url("/fonts/sf-pro-display/sf-pro-display-bold.woff2")
            format("woff2");
          font-weight: 700;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: "NewYorkExtraLarge";
          src: url("/fonts/new-york-extra-large/NewYorkExtraLarge-Medium.woff2")
            format("woff2");
          font-weight: 500;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: "NewYorkExtraLarge";
          src: url("/fonts/new-york-extra-large/NewYorkExtraLarge-Bold.woff2")
            format("woff2");
          font-weight: 700;
          font-style: normal;
          font-display: swap;
        }

        html {
          scroll-behavior: smooth;
        }

        /* ===== STATEMENT ===== */
        .thorne-statement-title {
          font-size: 32px;
          line-height: 1.15;
        }
        .thorne-break {
          display: block;
        }
        @media (max-width: 520px) {
          .thorne-statement-title {
            font-size: 18px;
            line-height: 1.25;
          }
          .thorne-break {
            display: inline;
          }
        }
      `}</style>

      {/* HERO */}
      <section
        style={{
          height: "100vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: 'url("/thorne-background.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "34vh",
            background:
              "linear-gradient(to bottom, rgba(30,4,4,0) 0%, rgba(30,4,4,0.55) 45%, #1e0404 100%)",
            pointerEvents: "none",
          }}
        />

        <img
          src="/hero-type-new.svg"
          alt="we are thørne"
          style={{
            position: "absolute",
            left: "50%",
            top: "45%",
            transform: "translate(-50%, -50%)",
            width: "min(820px, 68vw)",
            opacity: 0.85,
          }}
        />
      </section>
    </main>
  );
}
