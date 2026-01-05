"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Mail, Phone, MapPin, MessageCircle, Clock, CalendarCheck } from "lucide-react";
import { FadeIn } from "@/components/ui/motion/FadeIn";
import { HeroForm } from "@/components/home/HeroForm";

export default function ContactoPage() {
    return (
        <main className="min-h-screen flex flex-col bg-[#F4F1EA]">

            {/* 1. HERO SECTION */}
            <Section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center overflow-hidden py-20">
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

                <div className="relative z-10 w-full max-w-4xl mx-auto text-center space-y-6">
                    <FadeIn delay={0.1} direction="down">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#CCA43B]/30 bg-[#202f43]/50 backdrop-blur-sm shadow-sm mx-auto">
                            <MessageCircle className="w-4 h-4 text-[#CCA43B]" />
                            <span className="text-[#CCA43B] text-[10px] md:text-xs font-bold tracking-widest uppercase">
                                Estamos en línea
                            </span>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.3} direction="up">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] text-balance">
                            Agenda tu <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4bf6a] via-[#bb8833] to-[#ffff81]">
                                Asesoría Contable.
                            </span>
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.5} direction="up">
                        <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
                            Resolvemos tus dudas en tiempo récord. Escríbenos, llámanos o visítanos.
                        </p>
                    </FadeIn>
                </div>
            </Section>

            {/* 2. CONTACT CONTENT */}
            <Section className="py-20 lg:py-28 bg-white relative">
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#202f43_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        {/* Left Column: Contact Info */}
                        <div className="space-y-10">
                            <FadeIn direction="right">
                                <span className="text-[#CCA43B] font-bold tracking-widest uppercase text-sm block mb-4">
                                    Canales Directos
                                </span>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#202f43] mb-8 leading-tight">
                                    Conectemos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCA43B] to-[#b48d28]">ahora mismo.</span>
                                </h2>
                            </FadeIn>

                            <div className="space-y-6">
                                <FadeIn delay={0.1} direction="up" fullWidth>
                                    <div className="flex items-start gap-5 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#CCA43B]/30 transition-all hover:bg-white hover:shadow-lg group">
                                        <div className="shrink-0 bg-[#202f43] p-3 rounded-xl text-white shadow-md group-hover:scale-110 transition-transform">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Llámanos o Escríbenos</p>
                                            <a href="tel:+56979567592" className="text-2xl font-bold text-[#202f43] block hover:text-[#CCA43B] transition-colors mb-1">
                                                +569 7956 7592
                                            </a>
                                            <p className="text-sm text-gray-400">Respuesta inmediata en horario hábil.</p>
                                        </div>
                                    </div>
                                </FadeIn>

                                <FadeIn delay={0.2} direction="up" fullWidth>
                                    <div className="flex items-start gap-5 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#CCA43B]/30 transition-all hover:bg-white hover:shadow-lg group">
                                        <div className="shrink-0 bg-[#202f43] p-3 rounded-xl text-white shadow-md group-hover:scale-110 transition-transform">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Correo Electrónico</p>
                                            <a href="mailto:contacto@ocimpulsa.cl" className="text-2xl font-bold text-[#202f43] block hover:text-[#CCA43B] transition-colors mb-1 break-all">
                                                contacto@ocimpulsa.cl
                                            </a>
                                            <p className="text-sm text-gray-400">Ideal para cotizaciones formales.</p>
                                        </div>
                                    </div>
                                </FadeIn>

                                <FadeIn delay={0.3} direction="up" fullWidth>
                                    <div className="flex items-start gap-5 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#CCA43B]/30 transition-all hover:bg-white hover:shadow-lg group">
                                        <div className="shrink-0 bg-[#202f43] p-3 rounded-xl text-white shadow-md group-hover:scale-110 transition-transform">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Oficina Central</p>
                                            <p className="text-xl font-bold text-[#202f43] mb-1">
                                                Ovalle, Región de Coquimbo
                                            </p>
                                            <p className="text-sm text-gray-400">Atendemos a todo Chile de forma remota.</p>
                                        </div>
                                    </div>
                                </FadeIn>
                            </div>
                        </div>

                        {/* Right Column: Sticky Form */}
                        <div className="w-full max-w-md lg:ml-auto lg:sticky lg:top-28 lg:mt-9">
                            <FadeIn direction="left" delay={0.2}>
                                <HeroForm className="!bg-[#202f43] shadow-2xl border-gray-800" />
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
