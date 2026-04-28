import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmartWhatsAppBtn } from "@/components/ui/SmartWhatsAppBtn";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { GoogleTagManager } from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ocimpulsa.cl'),
  title: "OC Impulsa | Asesoría Contable, Tributaria y Financiera",
  description: "Expertos en contabilidad, planificación tributaria, formalización de empresas y asesoría laboral para Pymes en Chile. Impulsamos el crecimiento de tu negocio.",
  keywords: [
    "asesoría contable", "asesoría tributaria", "contadores Chile", 
    "formalización de empresas", "declaración de renta", "gestión laboral", 
    "contabilidad pymes", "consultora financiera", "OC Impulsa"
  ],
  authors: [{ name: "Consultora OC Impulsa" }],
  creator: "Consultora OC Impulsa",
  publisher: "Consultora OC Impulsa",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://www.ocimpulsa.cl",
    siteName: "OC Impulsa",
    title: "OC Impulsa | Asesoría Contable y Tributaria",
    description: "Servicios contables, tributarios y laborales para Pymes en Chile. Impulsamos el crecimiento de tu negocio de forma segura.",
    images: [
      {
        url: "/og-image.jpg", // Asegúrate de tener esta imagen en tu carpeta 'public'
        width: 1200,
        height: 630,
        alt: "OC Impulsa - Asesoría Contable y Tributaria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OC Impulsa | Asesoría Contable y Tributaria",
    description: "Servicios contables, tributarios y laborales para Pymes en Chile.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`} suppressHydrationWarning>
        <GoogleTagManager gtmId="GTM-NRBTMTMV" />
        <Header />
        {children}
        <Footer />
        <SmartWhatsAppBtn />
        <CookieConsent />
      </body>
    </html>
  );
}
