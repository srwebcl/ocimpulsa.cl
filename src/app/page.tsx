import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/conversion/WhatsAppButton";
import { Hero } from "@/components/home/Hero";
import { Trust } from "@/components/home/Trust";
import { ServicesPreview } from "@/components/home/ServicesPreview";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      <Hero />
      <Trust />
      <ServicesPreview />

      {/* Additional CTA Section before Footer */}
      <section className="bg-primary py-16 text-center text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para ordenar tu negocio?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Agenda tu diagnóstico gratuito hoy mismo y descubre cómo podemos ayudarte.
          </p>
          <a
            href="https://wa.me/56912345678"
            className="inline-flex items-center justify-center rounded-lg bg-white text-primary font-bold px-8 py-4 text-lg hover:bg-gray-50 transition-colors shadow-lg"
          >
            Hablemos por WhatsApp
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
