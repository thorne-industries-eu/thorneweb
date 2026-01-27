"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = ["Features", "Company", "EU AI Act", "Applicability", "Pricing"];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1200);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(0,0,0,0.65)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "18px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* LOGO */}
        <a href="/" style={{ display: "block", lineHeight: 0 }}>
          <img
            src="/thorne-logo.svg"
            alt="THØRNE"
            style={{
              height: "20px",
              width: "auto",
              display: "block",
              filter: "brightness(0) saturate(100%) invert(1)",
            }}
          />
        </a>

        {/* DESKTOP NAV */}
        {!isMobile && (
          <nav style={{ display: "flex", gap: "36px" }}>
            {NAV_ITEMS.map((label) => (
              <a
                key={label}
                href="#"
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                  textDecoration: "none",
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                {label}
              </a>
            ))}
          </nav>
        )}

        {/* MOBILE MENU BUTTON */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            style={{
              background: "none",
              border: "none",
              fontSize: "22px",
              cursor: "pointer",
              color: "#ffffff",
            }}
          >
            ☰
          </button>
        )}
      </div>

      {/* MOBILE MENU */}
      {isMobile && menuOpen && (
        <div
          style={{
            margin: "0 16px 16px",
            padding: "24px",
            borderRadius: "18px",
            background: "rgba(0,0,0,0.92)",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          {NAV_ITEMS.map((label) => (
            <a
              key={label}
              href="#"
              style={{
                fontSize: "16px",
                fontWeight: 500,
                textDecoration: "none",
                color: "#ffffff",
              }}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
