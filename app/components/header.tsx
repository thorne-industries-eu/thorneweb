"use client";

const NAV_ITEMS = ["THORNE WHO", "SOFTWARE", "APPS", "GAMING", "WEBSITES", "CONTACT"];

export default function Header() {
  const menuFont = {
    fontFamily: "var(--font-oswald)",
    fontVariationSettings: '"wght" 400',
    fontWeight: 400,
    textTransform: "none" as const,
  };

  const iconStyle = {
    color: "white",
    opacity: 0.82,
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <header
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: "transparent",
      }}
    >
      <div
        style={{
          width: "100%",
          padding: "22px 44px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <img
          src="/thorne-logo.svg"
          alt="THØRNE"
          style={{ height: 24, display: "block" }}
        />

        <nav className="desktop-nav" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href="#"
              style={{
                ...menuFont,
                color: "rgba(255,255,255,0.92)",
                fontSize: 16,
                letterSpacing: "0.01em",
                textDecoration: "none",
              }}
            >
              {item}
            </a>
          ))}

          <a href="#" aria-label="Facebook" style={iconStyle}>
            <svg width="21" height="21" viewBox="0 0 24 24" fill="white">
              <path d="M14.2 8.1V6.4c0-.8.5-1 1-1h2.6V1.2L14.2 1c-4 0-5.5 2.4-5.5 5.4v1.7H5v4.7h3.7V23h5.1V12.8h3.6l.6-4.7h-3.8Z" />
            </svg>
          </a>

          <a href="#" aria-label="TikTok" style={iconStyle}>
            <svg width="23" height="23" viewBox="0 0 24 24" fill="white">
              <path d="M16.6 3c.4 2.5 1.8 4 4.4 4.2v4.1c-1.7.1-3.1-.4-4.3-1.3v6.4c0 4.1-2.5 6.6-6.3 6.6-3.3 0-5.9-2.3-5.9-5.6 0-3.7 2.8-5.9 6.7-5.6v4.2c-1.6-.3-2.7.4-2.7 1.6 0 1 .8 1.6 1.8 1.6 1.3 0 2.1-.8 2.1-2.7V3h4.2Z" />
            </svg>
          </a>
        </nav>
      </div>

      <style jsx>{`
        .desktop-nav {
          display: flex;
          gap: 42px;
          align-items: center;
        }

        @media (max-width: 1024px) {
          header {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
