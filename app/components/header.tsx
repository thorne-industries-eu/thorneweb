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
        />      </div>

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
