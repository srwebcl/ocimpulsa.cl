import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { CheckCircle, ShieldCheck, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/motion/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Formaliza tu Negocio | OC Impulsa",
    description: "Constitución de empresa, Inicio de actividades y RUT en un día. Servicio integral por $150.000.",
};

export default function FormalizaPage() {
    return (
        <main className="min-h-screen bg-[#F4F1EA] pt-24 pb-20">
            {/* Hero Section */}
            <Section className="bg-[#F4F1EA]">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <FadeIn delay={0.1}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#202f43]/5 border border-[#202f43]/10 mb-4">
                            <ShieldCheck className="w-4 h-4 text-[#202f43]" />
                            <span className="text-[#202f43] text-xs font-bold tracking-widest uppercase">
                                Todo listo en 24 horas
                            </span>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#202f43]">
                            Formaliza tu Negocio
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.5}>
                        <div className="flex justify-center gap-4">
                            <Button size="lg" className="bg-[#202f43] text-white hover:bg-[#15202b] px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300" href="https://wa.me/56912345678?text=Hola,%20quiero%20formalizar%20mi%20empresa">
                                Comenzar Trámite
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </Section>

            {/* Content Split */}
            <Section>
                <div className="grid md:grid-cols-2 gap-12 items-start max-w-screen-xl mx-auto">

                    {/* What's Included */}
                    <FadeIn delay={0.2} direction="right">
                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100/50 h-full">
                            <h3 className="text-2xl font-bold text-[#202f43] mb-8 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-[#CCA43B]/20 flex items-center justify-center text-[#CCA43B] text-sm font-bold">✓</span>
                                ¿Qué incluye?
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Constitución de Sociedad (Empresa en un día)",
                                    "Inicio de Actividades ante el SII",
                                    "Verificación de Actividad y Régimen Tributario",
                                    "Habilitación de Facturación y Boleta Electrónica",
                                    "Obtención de E-RUT",
                                    "Asesoría inicial para no cometer errores"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="text-[#CCA43B] shrink-0 mt-1" size={20} />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </FadeIn>

                    {/* Digital Upgrade Option */}
                    <div className="space-y-8">
                        <FadeIn delay={0.4} direction="left">
                            <div className="bg-gradient-to-br from-[#202f43] to-[#15202b] text-white p-8 rounded-2xl shadow-2xl relative overflow-hidden group border border-[#CCA43B]/20">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#CCA43B] rounded-full blur-[60px] opacity-20 group-hover:opacity-30 transition-opacity"></div>

                                <span className="inline-block bg-[#CCA43B] text-[#202f43] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                                    Recomendado
                                </span>

                                <h3 className="text-2xl font-bold mb-2">Formaliza tu Negocio Online</h3>
                                <p className="text-gray-300 mb-6">
                                    Todo lo anterior <strong>+ Página Web Profesional + Integración de Pagos</strong>. Ideal para vender desde el primer día.
                                </p>

                                <div className="flex items-baseline gap-2 mb-6">
                                    <span className="text-sm text-gray-400">Desde</span>
                                    <span className="text-3xl font-bold text-[#CCA43B]">$250.000</span>
                                </div>

                                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10" href="https://wa.me/56912345678?text=Me%20interesa%20el%20pack%20Formaliza%20Online">
                                    Cotizar Pack Online
                                </Button>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.6} direction="up">
                            <div className="p-6 bg-[#FFFFFF] rounded-xl border border-gray-200">
                                <h4 className="font-bold text-[#202f43] mb-2">¿Por qué con nosotros?</h4>
                                <p className="text-sm text-gray-600">
                                    Porque somos contadores, no solo llenadores de formularios. Te estructuramos para que crezcas ordenado y sin multas futuras.
                                </p>
                            </div>
                        </FadeIn>
                    </div>

                </div>
            </Section>
        </main>
    );
}
