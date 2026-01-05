"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Check, ArrowRight, Users, Calculator, TrendingUp, ShieldCheck, PieChart, BadgeCheck } from "lucide-react";
import { FadeIn } from "@/components/ui/motion/FadeIn";
import { HeroForm } from "@/components/home/HeroForm";

export default function ContabilidadPage() {
    return (
        <main className="min-h-screen flex flex-col bg-[#F4F1EA]">

            {/* 1. HERO SECTION */}
            <Section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 lg:py-28">
                <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute min-w-full min-h-full object-cover w-full h-full opacity-60"
                    >
                        <source src="/images/hero-video.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-[#202f43]/80 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#202f43] via-transparent to-[#202f43]/40"></div>
                </div>

                <div className="relative z-10 w-full max-w-4xl mx-auto text-center space-y-8">
                    <FadeIn delay={0.1} direction="down">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#CCA43B]/30 bg-[#202f43]/50 backdrop-blur-sm shadow-sm mx-auto">
                            <TrendingUp className="w-4 h-4 text-[#CCA43B]" />
                            <span className="text-[#CCA43B] text-[10px] md:text-xs font-bold tracking-widest uppercase">
                                Crecimiento Ordenado
                            </span>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.3} direction="up">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] text-balance">
                            Contabilidad Clara, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4bf6a] via-[#bb8833] to-[#ffff81]">
                                Sin Sorpresas.
                            </span>
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.5} direction="up">
                        <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
                            Planes mensuales que se ajustan a tu etapa. Mantén tu negocio al día con el SII y la Dirección del Trabajo sin pagar de más.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.7} direction="up">
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <Button
                                variant="secondary"
                                size="lg"
                                href="#planes"
                                className="font-bold px-8 py-4 text-lg shadow-lg hover:shadow-[#CCA43B]/20 transition-all border-0 rounded-xl"
                            >
                                Ver Planes Mensuales
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </Section>

            {/* 2. WHY US SECTION */}
            <Section className="py-20 lg:py-28 bg-white relative">
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#202f43_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        <div className="space-y-10">
                            <FadeIn direction="right">
                                <div className="space-y-6">
                                    <span className="text-[#CCA43B] font-bold tracking-widest uppercase text-sm">
                                        ¿Por qué externalizar?
                                    </span>
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#202f43] mb-6 leading-tight">
                                        Dedícate a vender, nosotros a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCA43B] to-[#b48d28]">los números.</span>
                                    </h2>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        Un error tributario puede costar caro. Nuestro equipo asegura que cumplas con cada obligación mensual mientras duermes tranquilo.
                                    </p>
                                </div>
                            </FadeIn>

                            <div className="grid sm:grid-cols-1 gap-6">
                                <FadeIn delay={0.1} direction="up" fullWidth>
                                    <div className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#CCA43B]/30 transition-colors">
                                        <div className="shrink-0 mt-1 bg-white p-2 rounded-full shadow-sm text-[#CCA43B]">
                                            <ShieldCheck size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-[#202f43] font-bold text-lg">Cumplimiento Total (F29/F22)</h4>
                                            <p className="text-gray-500 text-sm mt-1">Declaramos tus impuestos mensuales y anuales puntualmente.</p>
                                        </div>
                                    </div>
                                </FadeIn>
                                <FadeIn delay={0.2} direction="up" fullWidth>
                                    <div className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#CCA43B]/30 transition-colors">
                                        <div className="shrink-0 mt-1 bg-white p-2 rounded-full shadow-sm text-[#CCA43B]">
                                            <Users size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-[#202f43] font-bold text-lg">Gestión de Remuneraciones</h4>
                                            <p className="text-gray-500 text-sm mt-1">Contratos, finiquitos y pago de imposiciones (Previred) correctos.</p>
                                        </div>
                                    </div>
                                </FadeIn>
                                <FadeIn delay={0.3} direction="up" fullWidth>
                                    <div className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#CCA43B]/30 transition-colors">
                                        <div className="shrink-0 mt-1 bg-white p-2 rounded-full shadow-sm text-[#CCA43B]">
                                            <PieChart size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-[#202f43] font-bold text-lg">Informes Financieros</h4>
                                            <p className="text-gray-500 text-sm mt-1">Recibe balances para tomar decisiones informadas sobre tu dinero.</p>
                                        </div>
                                    </div>
                                </FadeIn>
                            </div>
                        </div>

                        <div className="w-full max-w-md lg:ml-auto lg:sticky lg:top-28 lg:mt-9">
                            <FadeIn direction="left" delay={0.2}>
                                <HeroForm className="!bg-[#202f43] shadow-2xl border-gray-800" />
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 3. PRICING SECTION */}
            <Section id="planes" className="py-20 lg:py-28 bg-[#202f43] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#CCA43B]/10 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <FadeIn direction="up">
                        <div className="text-center mb-20">
                            <span className="text-[#CCA43B] font-bold tracking-widest uppercase text-sm mb-3 block">
                                Planes Flexibles
                            </span>
                            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                                Elige según tu etapa
                            </h2>
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                                Sin amarras. Si creces, tu plan crece contigo de forma transparente.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-start">
                        {/* Plan Básico */}
                        <FadeIn delay={0.2} direction="right" fullWidth>
                            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 h-full flex flex-col hover:scale-[1.02] transition-transform duration-300">
                                <h3 className="text-2xl font-bold text-[#202f43] mb-2">Plan Básico Pyme</h3>
                                <p className="text-gray-500 text-sm mb-6">Para mantener tu empresa al día ante el SII.</p>

                                <div className="flex items-baseline gap-1 mb-8">
                                    <span className="text-sm text-gray-400">Desde</span>
                                    <span className="text-5xl font-bold text-[#202f43]">$39.000</span>
                                    <span className="text-gray-400 text-sm">/mes</span>
                                </div>

                                <ul className="space-y-4 mb-8 flex-grow">
                                    {[
                                        "Contabilidad Mensual",
                                        "Declaración F29 (IVA)",
                                        "Estados Financieros",
                                        "Declaración Renta F22",
                                        "Asesoría Permanente"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <Check className="text-[#CCA43B] shrink-0 mt-1" size={18} />
                                            <span className="text-gray-700 font-medium text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    variant="outline"
                                    className="w-full border-[#202f43] text-[#202f43] hover:bg-[#202f43] hover:text-white"
                                    href="https://wa.me/56979567592?text=Hola,%20me%20interesa%20el%20Plan%20Básico%20Pyme"
                                >
                                    Contratar Plan Básico
                                </Button>
                            </div>
                        </FadeIn>

                        {/* Plan RRHH */}
                        <FadeIn delay={0.4} direction="left" fullWidth>
                            <div className="bg-gradient-to-br from-[#1e2a3b] to-[#15202b] text-white p-8 rounded-2xl shadow-2xl border border-[#CCA43B] h-full flex flex-col relative overflow-hidden transform md:-translate-y-6">
                                <div className="absolute top-4 right-4 bg-[#CCA43B] text-[#202f43] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    Más Completo
                                </div>

                                <h3 className="text-2xl font-bold mb-2">Plan Recursos Humanos</h3>
                                <p className="text-gray-300 text-sm mb-6">Contabilidad + Gestión Laboral Completa.</p>

                                <div className="flex flex-col mb-8">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-sm text-gray-400">Desde</span>
                                        <span className="text-5xl font-bold text-[#CCA43B]">$39.000</span>
                                    </div>
                                    <div className="flex items-center gap-2 mt-2 text-[#CCA43B] text-xs font-bold bg-[#CCA43B]/10 w-fit px-3 py-1 rounded-full border border-[#CCA43B]/20">
                                        <Users size={12} />
                                        <span>+ $6.000 por persona add.</span>
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-8 flex-grow">
                                    <li className="font-bold text-[#CCA43B] flex items-center gap-2 border-b border-white/10 pb-2 mb-2">
                                        <BadgeCheck size={16} /> Todo lo del Plan Básico
                                    </li>
                                    {[
                                        "Contratos de Trabajo",
                                        "Liquidaciones de Sueldo",
                                        "Carga en Previred",
                                        "Finiquitos y Avisos",
                                        "Certificados F30"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <Check className="text-[#CCA43B] shrink-0 mt-1" size={18} />
                                            <span className="text-gray-200 font-medium text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="bg-white/5 p-4 rounded-lg border border-white/10 mb-6">
                                    <p className="text-xs text-gray-400 italic">
                                        <span className="block font-bold text-gray-300 not-italic mb-1">Transparencia Total:</span>
                                        Solo pagas los $6.000 adicionales por trabajador activo en el mes. Si no tienes personal un mes, vuelves al precio base.
                                    </p>
                                </div>

                                <Button
                                    className="w-full bg-[#CCA43B] text-[#202f43] hover:bg-[#b88f28] font-bold py-4 text-lg border-0"
                                    href="https://wa.me/56979567592?text=Hola,%20me%20interesa%20el%20Plan%20Recursos%20Humanos"
                                >
                                    Cotizar Plan RRHH
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </Section>

            {/* 4. FINAL CTA */}
            <Section className="py-20 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <FadeIn direction="up">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#202f43] mb-6">
                            Ordena tu empresa hoy
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Deja los números en manos expertas y enfócate en crecer.
                        </p>
                        <Button
                            size="lg"
                            href="https://wa.me/56979567592"
                            className="bg-[#202f43] text-white hover:bg-[#15202b] px-10 py-6 text-xl rounded-full shadow-2xl hover:scale-105 transition-transform"
                        >
                            Hablar con un Contador
                        </Button>
                    </FadeIn>
                </div>
            </Section>
        </main>
    );
}
