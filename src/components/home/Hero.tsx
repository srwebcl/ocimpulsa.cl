"use client";

import React from "react";
import { Button } from "../ui/Button";
import { Section } from "../ui/Section";
import { CheckCircle, MapPin } from "lucide-react";
import { HeroForm } from "./HeroForm";

export const Hero = () => {
    return (
        <Section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden py-12 lg:py-16">

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
                {/* Gradient Overlay for Text Readability - Corporate Navy tint */}
                <div className="absolute inset-0 bg-[#0F2027]/80 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2027] via-transparent to-[#0F2027]/40"></div>
            </div>

            <div className="relative z-10 w-full max-w-4xl mx-auto text-center space-y-6 animate-in fade-in duration-1000 slide-in-from-bottom-5">

                {/* Location Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#CCA43B]/30 bg-[#0F2027]/50 backdrop-blur-sm shadow-sm mx-auto">
                    <MapPin className="w-4 h-4 text-[#CCA43B]" />
                    <span className="text-[#CCA43B] text-[10px] md:text-xs font-bold tracking-widest uppercase">
                        De Coquimbo a Antofagasta
                    </span>
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.1] text-balance">
                    Asesorías contables, tributarias y laborales para{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4bf6a] via-[#bb8833] to-[#ffff81] drop-shadow-sm">
                        PYMEs.
                    </span>
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
                    Nos encargamos de tu <strong>Contabilidad Mensual, Remuneraciones y Cumplimiento Tributario</strong>.
                    Servicios especializados para <strong>PyMEs y Emprendedores</strong> que buscan orden y tranquilidad en el Norte de Chile.
                </p>

                {/* Corporate Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-1 justify-center">
                    <Button
                        variant="secondary"
                        size="lg"
                        href="#planes"
                        className="font-bold px-8 py-3.5 text-lg shadow-lg hover:shadow-[#CCA43B]/20 transition-all border-0 rounded-xl"
                    >
                        Ver Planes Contables
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        href="/contacto"
                        className="border-white/20 text-white hover:bg-white/10 px-8 py-3.5 text-lg rounded-xl transition-all"
                    >
                        Agendar Asesoría
                    </Button>
                </div>

                {/* Trust/Benefits */}
                <div className="flex flex-wrap gap-y-3 gap-x-8 text-sm text-gray-400 font-medium justify-center pt-4">
                    <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-[#CCA43B]" />
                        <span>Contabilidad 100% Digital</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-[#CCA43B]" />
                        <span>Respuesta Rápida</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-[#CCA43B]" />
                        <span>Orden Tributario</span>
                    </div>
                </div>

            </div>
        </Section>
    );
};
