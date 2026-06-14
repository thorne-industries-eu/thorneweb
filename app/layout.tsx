import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";

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
    <html lang="en">
      <body
        style={{
          minHeight: "100vh",
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
