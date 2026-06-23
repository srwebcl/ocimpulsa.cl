"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "../ui/Button";
import dynamic from 'next/dynamic';
import { Section } from "../ui/Section";
import { CheckCircle, MapPin } from "lucide-react";
import { FadeIn } from "../ui/motion/FadeIn";
import { motion, AnimatePresence } from "framer-motion";

const DynamicHeroForm = dynamic(() => import('./HeroForm').then(mod => mod.HeroForm), { 
    ssr: false,
    loading: () => <div className="h-[520px] w-full bg-[#202f43]/80 backdrop-blur-xl border border-white/10 rounded-2xl animate-pulse shadow-2xl ring-1 ring-white/5"></div>
});

const MotionImage = motion(Image);

const bgImages = [
    "/images/tributaria.jpg",
    "/images/formaliza.jpg",
    "/images/desarrollo-web.jpg",
    "/images/contabilidad.jpg",
];

export const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % bgImages.length);
        }, 6000); // Change image every 6 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <Section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden py-12 lg:py-16">

            {/* Image Slideshow Background with Ken Burns */}
            <div className="absolute inset-0 z-0 w-full h-full overflow-hidden bg-[#15202b]">
                <AnimatePresence initial={false}>
                    <MotionImage
                        key={activeIndex}
                        src={bgImages[activeIndex]}
                        alt="Background"
                        fill
                        priority={activeIndex === 0}
                        sizes="100vw"
                        quality={85}
                        initial={{ opacity: 0, scale: 1 }}
                        animate={{ opacity: 0.6, scale: 1.25 }}
                        exit={{ opacity: 0 }}
                        transition={{ 
                            opacity: { duration: 1.5, ease: "easeInOut" },
                            scale: { duration: 8, ease: "linear" }
                        }}
                        className="object-cover origin-center"
                    />
                </AnimatePresence>
                {/* Gradient Overlay for Text Readability - Corporate Navy tint */}
                <div className="absolute inset-0 bg-[#202f43]/80 mix-blend-multiply pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#202f43] via-transparent to-[#202f43]/40 pointer-events-none"></div>
            </div>

            <div className="relative z-10 w-full max-w-4xl mx-auto text-center space-y-6">

                {/* Location Badge */}
                <FadeIn delay={0.1} direction="down">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#CCA43B]/30 bg-[#202f43]/50 backdrop-blur-sm shadow-sm mx-auto">
                        <MapPin className="w-4 h-4 text-[#CCA43B]" />
                        <span className="text-[#CCA43B] text-[10px] md:text-xs font-bold tracking-widest uppercase">
                            De Coquimbo a Antofagasta
                        </span>
                    </div>
                </FadeIn>

                {/* Main Headline */}
                <FadeIn delay={0.3} direction="up">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.1] text-balance">
                        Asesorías contables, tributarias y laborales para{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4bf6a] via-[#bb8833] to-[#ffff81] drop-shadow-sm">
                            PYMEs.
                        </span>
                    </h1>
                </FadeIn>

                {/* Description */}
                <FadeIn delay={0.5} direction="up">
                    <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
                        Nos encargamos de tu <strong>Contabilidad Mensual, Remuneraciones y Cumplimiento Tributario</strong>.
                        Servicios especializados para <strong>PyMEs y Emprendedores</strong> que buscan orden y tranquilidad.
                    </p>
                </FadeIn>

                {/* Corporate Buttons */}
                <FadeIn delay={0.7} direction="up">
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
                </FadeIn>

                {/* Trust/Benefits */}
                <FadeIn delay={0.9} direction="up">
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
                </FadeIn>

            </div>
        </Section>
    );
};
