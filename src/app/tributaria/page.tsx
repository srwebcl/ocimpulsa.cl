"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { FileText, Search, Globe, Award, BarChart, TrendingUp, ArrowRight, Scale, Briefcase } from "lucide-react";
import { FadeIn } from "@/components/ui/motion/FadeIn";
import { HeroForm } from "@/components/home/HeroForm";

export default function TributariaPage() {
    const financialServices = [
        {
            title: "Auditorías Contables",
            description: "Revisión exhaustiva de periodos anteriores para detectar y corregir errores ante el SII antes de que sean multa.",
            icon: Search
        },
        {
            title: "Operación Renta (F22)",
            description: "Preparación y envío de tu declaración anual. Optimizamos tu carga tributaria utilizando todos los beneficios legales.",
            icon: FileText
        },
        {
            title: "Conciliaciones Bancarias",
            description: "Ordenamos tus cartolas bancarias para que cuadren perfectamente con tu contabilidad y flujos reales.",
            icon: BarChart
        },
        {
            title: "Postulaciones Sercotec/Corfo",
            description: "Te apoyamos técnicamente en la formulación de proyectos para ganar fondos públicos de emprendimiento.",
            icon: Award
        },
        {
            title: "Exportación de Servicios",
            description: "Asesoría especializada para facturar al extranjero exento de IVA y manejo correcto de invoices.",
            icon: Globe
        },
        {
            title: "Gestión Administrativa",
            description: "Asesoría para mejorar los flujos y procesos internos de tu empresa, reduciendo costos y tiempos.",
            icon: TrendingUp
        }
    ];

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
                    <div className="absolute inset-0 bg-[#202f43]/85 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#202f43] via-transparent to-[#202f43]/40"></div>
                </div>

                <div className="relative z-10 w-full max-w-4xl mx-auto text-center space-y-8">
                    <FadeIn delay={0.1} direction="down">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#CCA43B]/30 bg-[#202f43]/50 backdrop-blur-sm shadow-sm mx-auto">
                            <Scale className="w-4 h-4 text-[#CCA43B]" />
                            <span className="text-[#CCA43B] text-[10px] md:text-xs font-bold tracking-widest uppercase">
                                Expertos en Normativa
                            </span>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.3} direction="up">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] text-balance">
                            Soluciones Tributarias <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4bf6a] via-[#bb8833] to-[#ffff81]">
                                Especializadas.
                            </span>
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.5} direction="up">
                        <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
                            Desde auditorías complejas hasta tu Declaración de Renta. Resolvemos nudos tributarios para que tu empresa opere sin riesgos.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.7} direction="up">
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <Button
                                variant="secondary"
                                size="lg"
                                href="#servicios"
                                className="font-bold px-8 py-4 text-lg shadow-lg hover:shadow-[#CCA43B]/20 transition-all border-0 rounded-xl"
                            >
                                Ver Soluciones
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </Section>

            {/* 2. WHY US */}
            <Section className="py-20 lg:py-28 bg-white relative">
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#202f43_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        <div className="space-y-10">
                            <FadeIn direction="right">
                                <div className="space-y-6">
                                    <span className="text-[#CCA43B] font-bold tracking-widest uppercase text-sm">
                                        ¿Problemas con el SII?
                                    </span>
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#202f43] mb-6 leading-tight">
                                        Recupera la tranquilidad y el <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCA43B] to-[#b48d28]">orden fiscal.</span>
                                    </h2>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        No dejes que una notificación del SII paralice tu negocio. Nuestros expertos analizan, corrigen y gestionan cualquier situación contable.
                                    </p>
                                </div>
                            </FadeIn>

                            <div className="grid sm:grid-cols-1 gap-6">
                                <FadeIn delay={0.1} direction="up" fullWidth>
                                    <div className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#CCA43B]/30 transition-colors">
                                        <div className="shrink-0 mt-1 bg-white p-2 rounded-full shadow-sm text-[#CCA43B]">
                                            <Search size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-[#202f43] font-bold text-lg">Diagnóstico Profundo</h4>
                                            <p className="text-gray-500 text-sm mt-1">Revisamos hasta el último detalle para encontrar el origen de las inconsistencias.</p>
                                        </div>
                                    </div>
                                </FadeIn>
                                <FadeIn delay={0.2} direction="up" fullWidth>
                                    <div className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#CCA43B]/30 transition-colors">
                                        <div className="shrink-0 mt-1 bg-white p-2 rounded-full shadow-sm text-[#CCA43B]">
                                            <Briefcase size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-[#202f43] font-bold text-lg">Defensa Tributaria</h4>
                                            <p className="text-gray-500 text-sm mt-1">Te representamos y respondemos ante los organismos fiscalizadores.</p>
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

            {/* 3. SERVICES GRID (Dark Premium) */}
            <Section id="servicios" className="py-20 lg:py-28 bg-[#202f43] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#CCA43B]/5 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <FadeIn direction="up">
                        <div className="text-center mb-20">
                            <span className="text-[#CCA43B] font-bold tracking-widest uppercase text-sm mb-3 block">
                                Catálogo de Soluciones
                            </span>
                            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                                Servicios Especializados
                            </h2>
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                                Herramientas técnicas para desafíos financieros específicos.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        {financialServices.map((service, index) => (
                            <FadeIn key={service.title} delay={index * 0.15} direction="up" fullWidth>
                                <div className="bg-[#1a2636] p-8 rounded-2xl border border-white/5 hover:border-[#CCA43B]/50 transition-all duration-300 group h-full hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#CCA43B]/10">
                                    <div className="h-12 w-12 bg-[#202f43] text-[#CCA43B] rounded-xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform ring-1 ring-[#CCA43B]/20">
                                        <service.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#CCA43B] transition-colors">{service.title}</h3>
                                    <p className="text-gray-400 mb-6 text-sm leading-relaxed">{service.description}</p>
                                    <a
                                        href={`https://wa.me/56967336906?text=Hola,%20consulta%20sobre%20${service.title}`}
                                        className="inline-flex items-center text-sm font-bold text-[#CCA43B] hover:text-white transition-colors"
                                    >
                                        Consultar Detalle <ArrowRight size={16} className="ml-2" />
                                    </a>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </Section>

            {/* 4. FINAL CTA */}
            <Section className="py-20 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <FadeIn direction="up">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#202f43] mb-6">
                            ¿Necesitas una auditoría urgente?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Agenda una reunión diagnóstica con nuestros contadores auditores expertos.
                        </p>
                        <Button
                            size="lg"
                            href="https://wa.me/56967336906"
                            className="bg-[#202f43] text-white hover:bg-[#15202b] px-10 py-6 text-xl rounded-full shadow-2xl hover:scale-105 transition-transform"
                        >
                            Contactar Especialista
                        </Button>
                    </FadeIn>
                </div>
            </Section>

        </main>
    );
}
