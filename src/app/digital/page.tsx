"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Cpu, Monitor, Zap, Search, ArrowRight, MousePointerClick, BarChart3, Rocket } from "lucide-react";
import { FadeIn } from "@/components/ui/motion/FadeIn";
import { HeroForm } from "@/components/home/HeroForm";

export default function DigitalPage() {
    const digitalServices = [
        {
            title: "Plan Sitio Web",
            price: "$180.000 + IVA",
            description: "Diseño web profesional, rápido y adaptable a móviles. Tu carta de presentación digital disponible 24/7.",
            icon: Monitor,
            cta: "Cotizar Web",
            highlight: false,
            features: ["One Page Moderna", "Botón WhatsApp", "Dominio .cl por 1 año", "Hosting Alta Velocidad"]
        },
        {
            title: "Pack Digital Full",
            price: "$200.000",
            description: "Sitio Web + Configuración Campaña Google Ads. La combinación explosiva para captar clientes inmediatos.",
            icon: Zap,
            cta: "Pedir Pack (Ahorra)",
            highlight: true,
            features: ["Todo lo del Plan Web", "Configuración Google Ads", "Estudio de Palabras Clave", "Anuncios de Alto Impacto"]
        },
        {
            title: "Gestión Google Ads",
            price: "$70.000 + IVA",
            description: "Gestión mensual experta de tus campañas. Aparece primero en Google cuando te busquen.",
            icon: Search,
            cta: "Cotizar Campaña",
            highlight: false,
            features: ["Optimización Mensual", "Reportes de Rendimiento", "Ajuste de Pujas", "Maximización de Clics"]
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
                            <Rocket className="w-4 h-4 text-[#CCA43B]" />
                            <span className="text-[#CCA43B] text-[10px] md:text-xs font-bold tracking-widest uppercase">
                                Agencia de Marketing Pyme
                            </span>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.3} direction="up">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] text-balance">
                            No busques clientes, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4bf6a] via-[#bb8833] to-[#ffff81]">
                                haz que te encuentren.
                            </span>
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.5} direction="up">
                        <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
                            Diseño Web y Google Ads diseñados para vender. Convierte las búsquedas de Google en clientes reales para tu negocio.
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
                                Ver Packs Digitales
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
                                        Estrategia Digital
                                    </span>
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#202f43] mb-6 leading-tight">
                                        Tu vitrina digital abierta <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCA43B] to-[#b48d28]">24/7.</span>
                                    </h2>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        Estar en internet ya no es opcional. Si no estás cuando te buscan, estás perdiendo ventas frente a tu competencia.
                                    </p>
                                </div>
                            </FadeIn>

                            <div className="grid sm:grid-cols-1 gap-6">
                                <FadeIn delay={0.1} direction="up" fullWidth>
                                    <div className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#CCA43B]/30 transition-colors">
                                        <div className="shrink-0 mt-1 bg-white p-2 rounded-full shadow-sm text-[#CCA43B]">
                                            <MousePointerClick size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-[#202f43] font-bold text-lg">Tráfico Calificado</h4>
                                            <p className="text-gray-500 text-sm mt-1">Llevamos a tu web solo a personas que están buscando exactamente lo que vendes.</p>
                                        </div>
                                    </div>
                                </FadeIn>
                                <FadeIn delay={0.2} direction="up" fullWidth>
                                    <div className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#CCA43B]/30 transition-colors">
                                        <div className="shrink-0 mt-1 bg-white p-2 rounded-full shadow-sm text-[#CCA43B]">
                                            <BarChart3 size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-[#202f43] font-bold text-lg">Resultados Medibles</h4>
                                            <p className="text-gray-500 text-sm mt-1">Sabrás exactamente cuántos clics y contactos generó tu inversión.</p>
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

            {/* 3. PRICING SECTION (Dark) */}
            <Section id="servicios" className="py-20 lg:py-28 bg-[#202f43] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#CCA43B]/10 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <FadeIn direction="up">
                        <div className="text-center mb-20">
                            <span className="text-[#CCA43B] font-bold tracking-widest uppercase text-sm mb-3 block">
                                Inversión en Crecimiento
                            </span>
                            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                                Packs Todo Incluido
                            </h2>
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                                Soluciones llave en mano. Sin complicaciones técnicas.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-8">
                        {digitalServices.map((service, index) => (
                            <FadeIn key={service.title} delay={0.2 + (index * 0.1)} direction="up" fullWidth>
                                <div className={`h-full p-8 rounded-2xl border flex flex-col transition-all duration-300 relative ${service.highlight
                                    ? "bg-gradient-to-br from-[#1e2a3b] to-[#15202b] text-white border-[#CCA43B] shadow-2xl scale-105 z-10"
                                    : "bg-white text-[#202f43] border-gray-200 hover:border-[#CCA43B]/30 hover:scale-[1.02]"
                                    }`}>

                                    {service.highlight && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#CCA43B] text-[#202f43] text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-lg">
                                            Recomendado
                                        </div>
                                    )}

                                    <div className={`mb-6 p-3 rounded-xl w-fit ${service.highlight ? "bg-[#CCA43B] text-[#202f43]" : "bg-[#202f43]/5 text-[#202f43]"}`}>
                                        <service.icon size={28} />
                                    </div>

                                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                    <p className={`text-2xl font-bold mb-4 ${service.highlight ? "text-[#CCA43B]" : "text-[#202f43]"}`}>{service.price}</p>
                                    <p className={`text-sm mb-6 leading-relaxed ${service.highlight ? "text-gray-300" : "text-gray-600"}`}>{service.description}</p>

                                    {/* Features List */}
                                    <ul className="mb-8 space-y-3 flex-grow">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className={`text-xs font-medium flex items-center gap-2 ${service.highlight ? "text-gray-400" : "text-gray-500"}`}>
                                                <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${service.highlight ? "bg-[#CCA43B]" : "bg-[#202f43]"}`}></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <Button
                                        href={`https://wa.me/56979567592?text=Hola,%20me%20interesa%20el%20servicio%20${service.title}`}
                                        className={`w-full font-bold py-4 text-base ${service.highlight ? "bg-[#CCA43B] text-[#202f43] hover:bg-[#b88f28] border-0" : "bg-[#202f43] text-white hover:bg-[#15202b] border-0"}`}
                                    >
                                        {service.cta}
                                    </Button>
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
                            Lleva tu marca al siguiente nivel
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Agenda una reunión para revisar tu estrategia digital.
                        </p>
                        <Button
                            size="lg"
                            href="https://wa.me/56979567592"
                            className="bg-[#202f43] text-white hover:bg-[#15202b] px-10 py-6 text-xl rounded-full shadow-2xl hover:scale-105 transition-transform"
                        >
                            Hablar con Marketing
                        </Button>
                    </FadeIn>
                </div>
            </Section>

        </main>
    );
}
