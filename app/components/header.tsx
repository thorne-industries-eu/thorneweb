"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = ["THORNE WHO", "SOFTWARE", "APPS", "GAMING", "WEBSITES", "CONTACT"];

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
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

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
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled && !menuOpen ? "rgba(30,4,4,0.45)" : "transparent",
        backdropFilter: scrolled && !menuOpen ? "blur(8px)" : "none",
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
          position: "relative",
          zIndex: 1002,
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
        )}

        {isTablet && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            style={{
              width: 34,
              height: 34,
              background: "transparent",
              border: "none",
              padding: 0,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <line x1="5" y1="5" x2="17" y2="17" stroke="#eadbcc" strokeWidth="2" strokeLinecap="round" />
                <line x1="17" y1="5" x2="5" y2="17" stroke="#eadbcc" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="28" height="22" viewBox="0 0 28 22" fill="none">
                <line x1="2" y1="4" x2="26" y2="4" stroke="#eadbcc" strokeWidth="2" strokeLinecap="round" />
                <line x1="2" y1="11" x2="26" y2="11" stroke="#eadbcc" strokeWidth="2" strokeLinecap="round" />
                <line x1="2" y1="18" x2="26" y2="18" stroke="#eadbcc" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        )}
      </div>

      {isTablet && menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            width: "100vw",
            height: "100dvh",
            backgroundColor: "#fc1a1a",
            zIndex: 1001,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "120px 32px 64px",
          }}
        >
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 22,
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setMenuOpen(false)}
                style={{
                  ...menuFont,
                  color: "white",
                  fontSize: "clamp(24px, 5vw, 42px)",
                  fontWeight: 400,
                  lineHeight: 1,
                  letterSpacing: "0.01em",
                  textDecoration: "none",
                }}
              >
                {item}
              </a>
            ))}
          </nav>

          <div
            style={{
              display: "flex",
              gap: 24,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 36,
            }}
          >
            <a href="#" aria-label="Facebook" style={iconStyle}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                <path d="M14.2 8.1V6.4c0-.8.5-1 1-1h2.6V1.2L14.2 1c-4 0-5.5 2.4-5.5 5.4v1.7H5v4.7h3.7V23h5.1V12.8h3.6l.6-4.7h-3.8Z" />
              </svg>
            </a>

            <a href="#" aria-label="TikTok" style={iconStyle}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
                <path d="M16.6 3c.4 2.5 1.8 4 4.4 4.2v4.1c-1.7.1-3.1-.4-4.3-1.3v6.4c0 4.1-2.5 6.6-6.3 6.6-3.3 0-5.9-2.3-5.9-5.6 0-3.7 2.8-5.9 6.7-5.6v4.2c-1.6-.3-2.7.4-2.7 1.6 0 1 .8 1.6 1.8 1.6 1.3 0 2.1-.8 2.1-2.7V3h4.2Z" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}