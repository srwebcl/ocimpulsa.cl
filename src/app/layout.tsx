import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/conversion/WhatsAppButton";

import { SmartWhatsAppBtn } from "@/components/ui/SmartWhatsAppBtn";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "OC Impulsa | Asesoría Contable y Tributaria",
  description: "Servicios contables, tributarios y laborales para Pymes en Chile.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`} suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
        <SmartWhatsAppBtn />
      </body>
    </html>
  );
}
