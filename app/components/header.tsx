"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = ["Company", "Products", "Services", "Security", "Contacts"];

export default function Header() {
  const [isTablet, setIsTablet] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const check = () => setIsTablet(window.innerWidth <= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll as any);
  }, []);

  const BURGER_PX = 56;

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? "rgba(30,4,4,0.45)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        transition: "background 180ms ease, backdrop-filter 180ms ease",
      }}
    >
      <div
        style={{
          width: "100%",
          padding: "22px 44px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img
          src="/thorne-logo.svg"
          alt="THØRNE"
          style={{ height: 24, display: "block" }}
        />

        {!isTablet && (
          <nav style={{ display: "flex", gap: 42, alignItems: "center" }}>
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  color: "rgba(255,255,255,0.92)",
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: "0.01em",
                  textDecoration: "none",
                }}
              >
                {item}
              </a>
            ))}
          </nav>
        )}

        {isTablet && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            style={{
              width: BURGER_PX,
              height: BURGER_PX,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
              style={{
                width: BURGER_PX,
                height: BURGER_PX,
                display: "block",
              }}
            >
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="8" y1="12" x2="20" y2="12" />
              <line x1="12" y1="17" x2="20" y2="17" />
            </svg>
          </button>
        )}
      </div>

      {isTablet && menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "rgba(30,4,4,0.55)",
            backdropFilter: "blur(8px)",
            padding: "28px 44px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => setMenuOpen(false)}
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
