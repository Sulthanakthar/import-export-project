import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gafoor Harvest Exports | Premium Rice, Dhall & Pulses from India",
  description:
    "Premium B2B rice, dhall and pulses sourcing from India for importers, wholesalers, distributors and food businesses worldwide.",
  keywords: [
    "rice exporter India",
    "dhall exporter India",
    "pulses exporter India",
    "B2B agricultural export",
    "bulk rice supplier",
    "Gafoor Harvest Exports",
    "Global Exports",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
