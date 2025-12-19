import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OC Impulsa | Claridad que Impulsa",
  description: "Asesoría contable, laboral y digital para PYMEs en Chile. Sin enredos, sin multas. Déjate ayudar por expertos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased font-sans text-gray-900 bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
