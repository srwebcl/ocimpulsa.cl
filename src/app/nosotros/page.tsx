"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Info, Diamond, HeartHandshake, Lightbulb, Users, Target } from "lucide-react";
import { FadeIn } from "@/components/ui/motion/FadeIn";
import { HeroForm } from "@/components/home/HeroForm";

export default function NosotrosPage() {
    return (
        <main className="min-h-screen flex flex-col bg-[#F4F1EA]">

            {/* 1. HERO SECTION */}
            <Section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden py-20 lg:py-28">
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
                            <Info className="w-4 h-4 text-[#CCA43B]" />
                            <span className="text-[#CCA43B] text-[10px] md:text-xs font-bold tracking-widest uppercase">
                                Quiénes Somos
                            </span>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.3} direction="up">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] text-balance">
                            Ingeniería Contable <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4bf6a] via-[#bb8833] to-[#ffff81]">
                                con Enfoque Humano.
                            </span>
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.5} direction="up">
                        <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
                            No somos la típica oficina contable llena de papeles. Somos tecnología, estrategia y cercanía para impulsar negocios en el Norte de Chile.
                        </p>
                    </FadeIn>
                </div>
            </Section>

            {/* 2. HISTORY / MANIFESTO */}
            <Section className="py-20 lg:py-28 bg-white relative">
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#202f43_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="space-y-8">
                            <FadeIn direction="right">
                                <span className="text-[#CCA43B] font-bold tracking-widest uppercase text-sm block mb-4">
                                    Nuestra Historia
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold text-[#202f43] mb-6 leading-tight">
                                    Nacimos para cambiar <br /> las reglas del juego.
                                </h2>
                                <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                                    <p>
                                        En OC Impulsa vimos una desconexión: emprendedores llenos de energía frenados por una contabilidad arcaica, lenta y reactiva.
                                    </p>
                                    <p>
                                        Decidimos crear algo diferente. Un servicio donde el contador no es el que te regaña por las facturas, sino el que te ayuda a entenderlas. Donde la tecnología hace el trabajo pesado y nosotros ponemos la estrategia.
                                    </p>
                                    <p className="font-bold text-[#202f43]">
                                        Hoy apoyamos a cientos de PyMEs desde Ovalle hasta Antofagasta, demostrando que el orden financiero es la base de la libertad empresarial.
                                    </p>
                                </div>
                            </FadeIn>
                        </div>

                        <div className="relative">
                            <FadeIn direction="left" delay={0.2}>
                                <div className="bg-[#202f43] p-10 rounded-3xl shadow-2xl relative overflow-hidden text-white">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#CCA43B] rounded-full blur-[100px] opacity-20"></div>
                                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-10"></div>

                                    <div className="relative z-10 space-y-12">
                                        <div>
                                            <div className="w-12 h-12 bg-[#CCA43B] rounded-xl flex items-center justify-center text-[#202f43] mb-4 shadow-lg">
                                                <Target size={28} />
                                            </div>
                                            <h3 className="text-2xl font-bold mb-2">Misión</h3>
                                            <p className="text-gray-300 leading-relaxed">
                                                Empoderar a las PyMEs con información financiera clara y oportuna, eliminando la burocracia para que puedan escalar sin límites.
                                            </p>
                                        </div>
                                        <div className="w-full h-px bg-white/10"></div>
                                        <div>
                                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-[#CCA43B] mb-4 border border-white/5">
                                                <Lightbulb size={28} />
                                            </div>
                                            <h3 className="text-2xl font-bold mb-2">Visión</h3>
                                            <p className="text-gray-300 leading-relaxed">
                                                Ser el referente tecnológico y humano en consultoría contable para el norte de Chile, redefiniendo el estándar de servicio profesional.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 3. VALUES GRID (Dark) */}
            <Section className="py-20 lg:py-28 bg-[#202f43] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#CCA43B]/5 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <FadeIn direction="up">
                        <div className="text-center mb-20">
                            <span className="text-[#CCA43B] font-bold tracking-widest uppercase text-sm mb-3 block">
                                Nuestro ADN
                            </span>
                            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                                Valores que nos definen
                            </h2>
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                                No solo importan los números, importa cómo llegamos a ellos.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <FadeIn delay={0.1} direction="up" fullWidth>
                            <div className="bg-[#1a2636] p-8 rounded-2xl border border-white/5 hover:border-[#CCA43B]/50 transition-all hover:-translate-y-2 h-full">
                                <div className="w-14 h-14 bg-[#202f43] rounded-full flex items-center justify-center text-[#CCA43B] mb-6 shadow-md border border-[#CCA43B]/10">
                                    <Diamond size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">Excelencia Técnica</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    No improvisamos. Nuestro trabajo se basa en el estudio constante de la normativa y la precisión absoluta en cada cálculo.
                                </p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2} direction="up" fullWidth>
                            <div className="bg-[#1a2636] p-8 rounded-2xl border border-white/5 hover:border-[#CCA43B]/50 transition-all hover:-translate-y-2 h-full">
                                <div className="w-14 h-14 bg-[#202f43] rounded-full flex items-center justify-center text-[#CCA43B] mb-6 shadow-md border border-[#CCA43B]/10">
                                    <HeartHandshake size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">Cercanía Real</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Hablamos tu idioma. Si no entiendes algo, te lo explicamos mil veces. Tu tranquilidad es nuestra prioridad.
                                </p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.3} direction="up" fullWidth>
                            <div className="bg-[#1a2636] p-8 rounded-2xl border border-white/5 hover:border-[#CCA43B]/50 transition-all hover:-translate-y-2 h-full">
                                <div className="w-14 h-14 bg-[#202f43] rounded-full flex items-center justify-center text-[#CCA43B] mb-6 shadow-md border border-[#CCA43B]/10">
                                    <Users size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">Compromiso Total</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Nos ponemos la camiseta de tu empresa. Celebramos tus logros y trabajamos el doble cuando hay desafíos.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </Section>

            {/* 4. CTA */}
            <Section className="py-20 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <FadeIn direction="up">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#202f43] mb-6">
                            Únete a la nueva forma de hacer empresa
                        </h2>
                        <Button
                            size="lg"
                            href="/contacto"
                            className="bg-[#202f43] text-white hover:bg-[#15202b] px-10 py-6 text-xl rounded-full shadow-2xl hover:scale-105 transition-transform"
                        >
                            Conocer al Equipo
                        </Button>
                    </FadeIn>
                </div>
            </Section>

        </main>
    );
}
