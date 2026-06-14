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

        /* ===== HERO ARROW ===== */
        .hero-arrow {
          position: absolute;
          left: 50%;
          bottom: 34px;
          transform: translateX(-50%);
          z-index: 5;
          width: 42px;
          height: 42px;
          border-radius: 999px;
          border: 1px solid rgba(251, 236, 227, 0.55);
          background: rgba(30, 4, 4, 0.22);
          display: grid;
          place-items: center;
          cursor: pointer;
          transition:
            background 180ms ease,
            border-color 180ms ease,
            transform 180ms ease;
        }

        .hero-arrow:hover {
          background: rgba(251, 236, 227, 0.12);
          border-color: rgba(251, 236, 227, 0.9);
          transform: translateX(-50%) translateY(3px);
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

        /* ===== DORIAN CARD TYPO ===== */
        .dorian-row {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 18px;
        }

        .dorian-lockup {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding-top: 2px;
        }

        .dorian-logo-box {
          width: 112px;
          height: 112px;
          border-radius: 18px;
          background: #ffffff;
          display: grid;
          place-items: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
          flex: 0 0 auto;
        }

        .dorian-logo-box img {
          width: 92px;
          height: 92px;
          display: block;
          transform: scale(1.18);
          transform-origin: center;
        }

        .dorian-introducing {
          font-family: "SFProDisplay";
          font-weight: 400;
          font-size: 26px;
          line-height: 1;
          color: rgba(251, 236, 227, 0.8);
        }

        .dorian-wordmark {
          font-family: "NewYorkExtraLarge";
          font-weight: 500;
          font-size: 80px;
          line-height: 0.9;
          letter-spacing: 0.004em;
          color: #fbece3;
          margin: 0;
          display: inline-flex;
          gap: 10px;
          align-items: flex-start;
        }

        .dorian-tm {
          font-family: "SFProDisplay";
          font-weight: 700;
          font-size: 26px;
          position: relative;
          top: 12px;
          color: rgba(251, 236, 227, 0.92);
        }

        .dorian-tagline {
          font-family: "NewYorkExtraLarge";
          font-weight: 700;
          font-size: 54px;
          line-height: 1.08;
          color: #fbece3;
          margin: 0 0 26px 0;
          max-width: 740px;
        }

        .dorian-body {
          font-family: "SFProDisplay";
          font-size: 25px;
          line-height: 1.5;
          color: rgba(251, 236, 227, 0.78);
          margin: 0 0 44px 0;
          max-width: 720px;
        }

        .dorian-btnrow {
          display: flex;
          gap: 18px;
        }

        .dorian-btn {
          height: 67px;
          padding: 0 30px;
          border-radius: 16px;
          font-family: "SFProDisplay";
          font-size: 21px;
          cursor: pointer;
        }

        .dorian-btn-outline {
          background: rgba(0, 0, 0, 0.18);
          border: 2px solid rgba(235, 80, 60, 0.35);
          color: rgba(251, 236, 227, 0.9);
          font-weight: 700;
        }

        .dorian-btn-primary {
          background: #eb503c;
          border: 2px solid #eb503c;
          color: #ffffff;
          font-weight: 600;
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

        <a className="hero-arrow" href="#intro" aria-label="Scroll to next section">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="#FBECE3"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </section>

      {/* STATEMENT + DORIAN */}
      <section
        id="intro"
        style={{
          backgroundColor: "#1e0404",
          padding: "140px 24px 200px",
          textAlign: "center",
        }}
      >
        <h1
          className="thorne-statement-title"
          style={{
            fontFamily: "NewYorkExtraLarge",
            color: "#fbece3",
            maxWidth: 980,
            margin: "0 auto",
          }}
        >
          We design and build uncompromising software
          <span className="thorne-break" />
          that defines what comes next.
        </h1>

        <div
          style={{
            width: 48,
            height: 1,
            backgroundColor: "rgba(251,236,227,0.8)",
            margin: "36px auto 80px",
          }}
        />

        <div
          style={{
            transform: "scale(0.7)",
            transformOrigin: "top center",
            marginBottom: "-260px",
          }}
        >
          <div
            style={{
              maxWidth: 1680,
              margin: "0 auto",
              borderRadius: 34,
              overflow: "hidden",
              border: "2px solid rgba(235,80,60,0.8)",
              background: "rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "0.52fr 0.48fr",
                minHeight: 660,
              }}
            >
              {/* LEFT */}
              <div
                style={{
                  background: "#1e0404",
                  padding: "86px 84px",
                  textAlign: "left",
                }}
              >
                <div className="dorian-row">
                  <div className="dorian-logo-box">
                    <img src="/dorian-logo.svg" alt="Dorian" />
                  </div>

                  <div className="dorian-lockup">
                    <div className="dorian-introducing">Introducing</div>
                    <h2 className="dorian-wordmark">
                      Dorian <span className="dorian-tm">™</span>
                    </h2>
                  </div>
                </div>

                <p className="dorian-tagline">
                  Regulatory intelligence,
                  <br />
                  engineered for certainty.
                </p>

                <p className="dorian-body">
                  Turn EU AI Act requirements into clear, auditable compliance
                  that is documented, structured, and ready for regulators.
                </p>

                <div className="dorian-btnrow">
                  <button className="dorian-btn dorian-btn-outline">
                    EU AI Act
                  </button>
                  <button className="dorian-btn dorian-btn-outline">
                    Whitepaper
                  </button>
                  <button className="dorian-btn dorian-btn-primary">
                    Learn More
                  </button>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div style={{ position: "relative" }}>
                <img
                  src="/dorian-img.jpg"
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(90deg, rgba(30,4,4,0.85) 0%, rgba(30,4,4,0.55) 35%, rgba(30,4,4,0.15) 70%, rgba(30,4,4,0.05) 100%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

