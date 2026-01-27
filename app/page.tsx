import Header from "./components/header";

export default function HomePage() {
  return (
    <>
      {/* Background layer */}
      <div id="thorn-bg" />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
        }}
      >
        <Header />

        <main
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "160px 32px 120px",
            color: "#ffffff",
          }}
        >
          {/* HERO */}
          <h1
            style={{
              fontSize: "72px",
              lineHeight: "1.05",
              fontWeight: 500,
              letterSpacing: "-0.025em",
              margin: 0,
              maxWidth: "900px",
            }}
          >
            Regulatory intelligence,
            <br />
            engineered for certainty
          </h1>

          <p
            style={{
              marginTop: "28px",
              fontSize: "20px",
              lineHeight: "1.6",
              maxWidth: "640px",
              opacity: 0.9,
            }}
          >
            Bank-grade EU AI Act compliance software. Evidence-first. Regulator-ready.
          </p>

          {/* CTA */}
          <div
            style={{
              marginTop: "40px",
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#"
              style={{
                padding: "14px 22px",
                borderRadius: "999px",
                background: "#ffffff",
                color: "#0b0d12",
                fontSize: "15px",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Request demo
            </a>

            <a
              href="#"
              style={{
                padding: "14px 22px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.4)",
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Read the EU AI Act
            </a>
          </div>

          {/* DIVIDER */}
          <div
            style={{
              marginTop: "120px",
              height: "1px",
              width: "100%",
              background: "rgba(255,255,255,0.15)",
            }}
          />

          {/* PLACEHOLDER FOR NEXT SECTIONS */}
          <section
            style={{
              marginTop: "120px",
              maxWidth: "800px",
            }}
          >
            <h2
              style={{
                fontSize: "36px",
                fontWeight: 500,
                margin: 0,
              }}
            >
              Built for regulators. Trusted by institutions.
            </h2>

            <p
              style={{
                marginTop: "20px",
                fontSize: "18px",
                lineHeight: "1.6",
                opacity: 0.9,
              }}
            >
              THØRN structures compliance as evidence, not paperwork. Every
              output maps directly to EU AI Act obligations, audit trails, and
              supervisory review.
            </p>
          </section>
        </main>
      </div>
    </>
  );
}
