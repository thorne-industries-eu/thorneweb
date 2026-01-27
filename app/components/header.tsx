"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = ["Features", "Company", "EU AI Act", "Applicability", "Pricing"];

function ThorneLogo({ width = 120 }: { width?: number }) {
  return (
    <span
      aria-label="THØRNE"
      role="img"
      style={{ display: "inline-block", width, height: "auto", color: "#ffffff" }}
    >
      <img
        src="/thorne-logo.svg"
        alt="THØRNE"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          filter: "brightness(0) saturate(100%) invert(1)",
        }}
      />
    </span>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1300);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <header
      style={{
        padding: "20px 32px",
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative",
        color: "#ffffff",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <ThorneLogo width={120} />

        {!isMobile && (
          <nav style={{ display: "flex", gap: "40px", color: "#ffffff" }}>
            {NAV_ITEMS.map((label) => (
              <a
                key={label}
                href="#"
                style={{ fontSize: "16px", fontWeight: 500, textDecoration: "none", color: "#ffffff" }}
              >
                {label}
              </a>
            ))}
          </nav>
        )}

        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            style={{ background: "none", border: "none", fontSize: "26px", cursor: "pointer", color: "#ffffff" }}
          >
            ☰
          </button>
        )}
      </div>

      {isMobile && menuOpen && (
        <div
          style={{
            marginTop: "20px",
            padding: "24px",
            borderRadius: "20px",
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            color: "#ffffff",
          }}
        >
          {NAV_ITEMS.map((label) => (
            <a
              key={label}
              href="#"
              style={{ fontSize: "18px", fontWeight: 500, textDecoration: "none", color: "#ffffff" }}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
