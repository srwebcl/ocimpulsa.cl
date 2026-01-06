"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { CheckCircle, ShieldCheck, ArrowRight, Laptop, Rocket, FileCheck, Clock, Building, BadgeCheck } from "lucide-react";
import { FadeIn } from "@/components/ui/motion/FadeIn";
import { HeroForm } from "@/components/home/HeroForm";

export default function FormalizaPage() {
    return (
        <main className="min-h-screen flex flex-col bg-[#F4F1EA]">

            {/* 1. HERO SECTION (Video BG, Dark, Impactful) */}
            <Section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 lg:py-28">
                {/* Video Background */}
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
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-[#202f43]/80 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#202f43] via-transparent to-[#202f43]/40"></div>
                </div>

                <div className="relative z-10 w-full max-w-4xl mx-auto text-center space-y-8">
                    {/* Badge */}
                    <FadeIn delay={0.1} direction="down">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#CCA43B]/30 bg-[#202f43]/50 backdrop-blur-sm shadow-sm mx-auto">
                            <ShieldCheck className="w-4 h-4 text-[#CCA43B]" />
                            <span className="text-[#CCA43B] text-[10px] md:text-xs font-bold tracking-widest uppercase">
                                Estructura Legal Sólida
                            </span>
                        </div>
                    </FadeIn>

                    {/* Headline */}
                    <FadeIn delay={0.3} direction="up">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] text-balance">
                            Crea tu Empresa en <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4bf6a] via-[#bb8833] to-[#ffff81]">
                                un solo día.
                            </span>
                        </h1>
                    </FadeIn>

                    {/* Subheadline */}
                    <FadeIn delay={0.5} direction="up">
                        <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
                            Olvídate de notariats, filas y trámites eternos. Te entregamos tu empresa <strong>lista para facturar</strong>, con RUT, cuenta bancaria y claves del SII.
                        </p>
                    </FadeIn>

                    {/* CTAs */}
                    <FadeIn delay={0.7} direction="up">
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <Button
                                variant="secondary"
                                size="lg"
                                href="#planes"
                                className="font-bold px-8 py-4 text-lg shadow-lg hover:shadow-[#CCA43B]/20 transition-all border-0 rounded-xl"
                            >
                                Ver Planes
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                href="https://wa.me/56979567592?text=Hola,%20quiero%20formalizar%20mi%20negocio"
                                className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-xl transition-all"
                            >
                                Consultar Gratis
                            </Button>
                        </div>
                    </FadeIn>

                    {/* Trust Signals */}
                    <FadeIn delay={0.9} direction="up">
                        <div className="flex flex-wrap gap-y-3 gap-x-8 text-sm text-gray-400 font-medium justify-center pt-8">
                            <div className="flex items-center gap-2">
                                <BadgeCheck className="w-5 h-5 text-[#CCA43B]" />
                                <span>100% Online</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <BadgeCheck className="w-5 h-5 text-[#CCA43B]" />
                                <span>Sin Errores Legales</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <BadgeCheck className="w-5 h-5 text-[#CCA43B]" />
                                <span>Asesoría Experta</span>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </Section>

            {/* 2. WHY FORMALIZE (Similar to WhyUs but specific) */}
            <Section className="py-20 lg:py-28 bg-white relative">
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#202f43_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        {/* Content */}
                        <div className="space-y-10">
                            <FadeIn direction="right">
                                <div className="space-y-6">
                                    <span className="text-[#CCA43B] font-bold tracking-widest uppercase text-sm">
                                        ¿Por qué Formalizar?
                                    </span>
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#202f43] mb-6 leading-tight">
                                        Pasa de emprendedor a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCA43B] to-[#b48d28]">Empresario.</span>
                                    </h2>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        Formalizar no es solo un trámite, es el primer paso para crecer de verdad. Accede a bancos, licitaciones y vende con confianza.
                                    </p>
                                </div>
                            </FadeIn>

                            <div className="grid sm:grid-cols-1 gap-6">
                                <FadeIn delay={0.1} direction="up" fullWidth>
                                    <div className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#CCA43B]/30 transition-colors">
                                        <div className="shrink-0 mt-1 bg-white p-2 rounded-full shadow-sm text-[#CCA43B]">
                                            <Building size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-[#202f43] font-bold text-lg">Protege tu Patrimonio</h4>
                                            <p className="text-gray-500 text-sm mt-1">Separa tus finanzas personales de las del negocio legalmente.</p>
                                        </div>
                                    </div>
                                </FadeIn>
                                <FadeIn delay={0.2} direction="up" fullWidth>
                                    <div className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#CCA43B]/30 transition-colors">
                                        <div className="shrink-0 mt-1 bg-white p-2 rounded-full shadow-sm text-[#CCA43B]">
                                            <FileCheck size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-[#202f43] font-bold text-lg">Factura a Grandes Empresas</h4>
                                            <p className="text-gray-500 text-sm mt-1">Nadie contrata servicios serios sin factura. Abre esa puerta hoy.</p>
                                        </div>
                                    </div>
                                </FadeIn>
                                <FadeIn delay={0.3} direction="up" fullWidth>
                                    <div className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#CCA43B]/30 transition-colors">
                                        <div className="shrink-0 mt-1 bg-white p-2 rounded-full shadow-sm text-[#CCA43B]">
                                            <Clock size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-[#202f43] font-bold text-lg">Evita Multas del SII</h4>
                                            <p className="text-gray-500 text-sm mt-1">Inicia actividades correctamente y cumple con la ley desde el día 1.</p>
                                        </div>
                                    </div>
                                </FadeIn>
                            </div>
                        </div>

                        {/* Sticky Form */}
                        <div className="w-full max-w-md lg:ml-auto lg:sticky lg:top-28 lg:mt-9">
                            <FadeIn direction="left" delay={0.2}>
                                <HeroForm
                                    className="!bg-[#202f43] shadow-2xl border-gray-800"
                                    defaultService="formalizacion"
                                    lockService={true}
                                />
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 3. PRICING (Dark Section like ServicesPreview) */}
            <Section id="planes" className="py-20 lg:py-28 bg-[#202f43] relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#CCA43B]/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#CCA43B]/5 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <FadeIn direction="up">
                        <div className="text-center mb-20">
                            <span className="text-[#CCA43B] font-bold tracking-widest uppercase text-sm mb-3 block">
                                Inversión Transparente
                            </span>
                            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                                Elige cómo empezar
                            </h2>
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                                Precios claros, pago único y sin letras chicas.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
                        {/* Plan Base */}
                        <FadeIn delay={0.2} direction="right" fullWidth>
                            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 h-full flex flex-col relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                                <h3 className="text-2xl font-bold text-[#202f43] mb-2">Formaliza tu Negocio</h3>
                                <p className="text-gray-500 text-sm mb-6">La base legal sólida que necesitas.</p>

                                <div className="flex items-baseline gap-1 mb-8">
                                    <span className="text-4xl font-bold text-[#202f43]">$150.000</span>
                                    <span className="text-gray-400 text-sm">+ Costos notariales</span>
                                </div>

                                <ul className="space-y-4 mb-8 flex-grow">
                                    {[
                                        "Constitución de Sociedad",
                                        "Inicio de Actividades SII",
                                        "Verificación de Actividad",
                                        "Habilitación Facturación",
                                        "Asesoría Boleta Electrónica",
                                        "Obtención de E-RUT"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle className="text-gray-400 shrink-0 mt-1" size={18} />
                                            <span className="text-gray-700 font-medium text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    variant="outline"
                                    className="w-full border-[#202f43] text-[#202f43] hover:bg-[#202f43] hover:text-white"
                                    href="https://wa.me/56979567592?text=Hola,%20me%20interesa%20el%20Plan%20Formaliza%20Base%20($150.000)"
                                >
                                    Contratar Plan Base
                                </Button>
                            </div>
                        </FadeIn>

                        {/* Plan Full Online - Highlighted */}
                        <FadeIn delay={0.4} direction="left" fullWidth>
                            <div className="bg-gradient-to-br from-[#1e2a3b] to-[#15202b] text-white p-8 rounded-2xl shadow-2xl border border-[#CCA43B] h-full flex flex-col relative overflow-hidden transform md:-translate-y-6">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-[#CCA43B] rounded-full blur-[80px] opacity-20"></div>

                                <div className="absolute top-4 right-4 bg-[#CCA43B] text-[#202f43] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                                    Más Vendido
                                </div>

                                <div className="mb-2 flex items-center gap-2 text-[#CCA43B]">
                                    <Rocket size={20} />
                                    <span className="text-sm font-bold tracking-widest uppercase">Pack Digital</span>
                                </div>

                                <h3 className="text-3xl font-bold mb-2">Formaliza Online</h3>
                                <p className="text-gray-300 text-sm mb-6">Empieza vendiendo desde el primer día.</p>

                                <div className="flex items-baseline gap-1 mb-8">
                                    <span className="text-5xl font-bold text-[#CCA43B]">$350.000</span>
                                    <span className="text-gray-400 text-sm">Pago Único</span>
                                </div>

                                <div className="space-y-6 mb-8 flex-grow">
                                    <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                                        <p className="font-bold text-[#CCA43B] mb-2 flex items-center gap-2">
                                            <CheckCircle size={16} /> Incluye Plan Base Completo
                                        </p>
                                        <p className="text-xs text-gray-400 pl-6">Constitución, SII, RUT, Facturación...</p>
                                    </div>

                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <div className="bg-[#CCA43B]/20 p-1.5 rounded-lg text-[#CCA43B] mt-0.5">
                                                <Laptop size={16} />
                                            </div>
                                            <div>
                                                <span className="font-bold block">Diseño de Sitio Web</span>
                                                <span className="text-xs text-gray-400">One-page profesional</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="bg-[#CCA43B]/20 p-1.5 rounded-lg text-[#CCA43B] mt-0.5">
                                                <Rocket size={16} />
                                            </div>
                                            <div>
                                                <span className="font-bold block">Campaña Google Ads</span>
                                                <span className="text-xs text-gray-400">Configuración profesional</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <Button
                                    className="w-full bg-[#CCA43B] text-[#202f43] hover:bg-[#b88f28] font-bold py-6 text-lg shadow-lg hover:shadow-[#CCA43B]/20 transition-all border-0"
                                    href="https://wa.me/56979567592?text=Hola,%20quiero%20el%20Plan%20Formaliza%20Online%20($350.000)"
                                >
                                    Empezar Ahora
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </Section>

            {/* 4. FINAL CTA (Trust style) */}
            <Section className="py-20 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <FadeIn direction="up">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#202f43] mb-6">
                            ¿Listo para ser tu propio jefe?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Confía en OC Impulsa para dar tus primeros pasos. No te quedes atrás y emprende con nosotros
                        </p>
                        <Button
                            size="lg"
                            href="https://wa.me/56979567592"
                            className="bg-[#202f43] text-white hover:bg-[#15202b] px-10 py-6 text-xl rounded-full shadow-2xl hover:scale-105 transition-transform"
                        >
                            Comenzar Trámite
                        </Button>
                    </FadeIn>
                </div>
            </Section>

        </main>
    );
}
