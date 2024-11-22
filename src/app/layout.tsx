import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const wotfard = localFont({
  src: "./fonts/Wotfard-Regular.otf",
  variable: "--font-wotfard",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "Matheus Azevedo",
  description: "Initial page from Matheus Azevedo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${wotfard.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

