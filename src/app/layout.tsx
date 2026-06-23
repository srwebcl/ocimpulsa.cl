import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmartWhatsAppBtn } from "@/components/ui/SmartWhatsAppBtn";
import { CookieConsent } from "@/components/ui/CookieConsent";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ocimpulsa.cl'),
  alternates: {
    canonical: '/',
  },
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

const schemaData = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "name": "Consultora OC",
  "image": "https://www.ocimpulsa.cl/images/logo-white.svg",
  "url": "https://www.ocimpulsa.cl",
  "telephone": "+56979567592",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ovalle",
    "addressRegion": "Coquimbo",
    "addressCountry": "CL"
  },
  "areaServed": ["Ovalle", "Coquimbo", "La Serena", "Vallenar", "Copiapó", "Caldera", "Antofagasta"],
  "priceRange": "$$",
  "sameAs": [
    "https://www.instagram.com/consultoraoc/",
    "https://share.google/1sHXUAg9ojKlf9RHM"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`} suppressHydrationWarning>
        <Script
          id="gtm-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NRBTMTMV');
            `,
          }}
        />
        <Header />
        {children}
        <Footer />
        <SmartWhatsAppBtn />
        <CookieConsent />
      </body>
    </html>
  );
}
