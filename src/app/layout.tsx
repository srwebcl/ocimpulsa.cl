import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/conversion/WhatsAppButton";

import { SmartWhatsAppBtn } from "@/components/ui/SmartWhatsAppBtn";
import { CookieConsent } from "@/components/ui/CookieConsent";


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
        <CookieConsent />
        {/* Google Analytics & Ads */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-4H23DSS8HR');
              gtag('config', 'AW-17854454737');
            `,
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4H23DSS8HR"></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17854454737"></script>
      </body>
    </html>
  );
}
