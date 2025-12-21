import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/motion/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nosotros | OC Impulsa",
    description: "Conoce a OC Impulsa, tu aliado contable y tributario en el norte de Chile.",
};

export default function NosotrosPage() {
    return (
        <main className="min-h-screen bg-[#F4F1EA] pt-24 pb-20">
            <Section className="bg-[#F4F1EA]">
                <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
                    <FadeIn direction="up">
                        <span className="text-[#CCA43B] font-bold tracking-widest uppercase text-sm mb-3 block">
                            Sobre Nosotros
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#202f43] mb-6">
                            Más que Contadores, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCA43B] to-[#b48d28]">Aliados Estratégicos</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Nacimos con la misión de modernizar la contabilidad para las Pymes del norte de Chile. Creemos en la tecnología, la transparencia y el trato humano.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
                    <FadeIn direction="right">
                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                            <h3 className="text-2xl font-bold text-[#202f43] mb-4">Nuestra Misión</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Empoderar a los emprendedores entregándoles control total sobre sus finanzas, eliminando el miedo al SII y permitiéndoles enfocarse en lo que mejor saben hacer: hacer crecer su negocio.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn direction="left" delay={0.2}>
                        <div className="bg-[#202f43] p-8 rounded-2xl shadow-xl text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#CCA43B] rounded-full blur-[60px] opacity-20"></div>
                            <h3 className="text-2xl font-bold text-[#CCA43B] mb-4">Nuestra Visión</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Ser la consultora líder en digitalización contable de la macrozona norte, reconocidos por nuestra capacidad de respuesta y soluciones innovadoras.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </Section>
        </main>
    );
}
