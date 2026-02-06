import type { Metadata } from "next";
import { Pacifico, Dancing_Script, Inter } from "next/font/google";
import "../src/App.css";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
  display: "swap",
});

const dancingScript = Dancing_Script({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-dancing",
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Valentine's Day 💕",
  description: "A romantic Valentine's Day experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${pacifico.variable} ${dancingScript.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
