import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const oswald = localFont({
  src: "./fonts/oswald/Oswald-VariableFont_wght.ttf",
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thørne Industries",
  description: "Regulatory intelligence, engineered for certainty",
  icons: {
    icon: "/iconv2.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={oswald.variable}>
      <body
        style={{
          minHeight: "100vh",
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {children}
      </body>
    </html>
  );
}
