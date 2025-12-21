import React from "react";
import { Section } from "../ui/Section";
import { MessageSquareQuote, ShieldCheck, TrendingUp } from "lucide-react";

export const Trust = () => {
    const benefits = [
        {
            icon: MessageSquareQuote,
            title: "Comunicación Clara",
            description: "Traducimos la complejidad tributaria a tu idioma. Respuestas rápidas, directas y sin tecnicismos innecesarios."
        },
        {
            icon: ShieldCheck,
            title: "Gestión 100% Digital",
            description: "Tu contabilidad ordenada y segura en la nube. Acceso 24/7 a tu información financiera, cero papeleo."
        },
        {
            icon: TrendingUp,
            title: "Aliados en tu Crecimiento",
            description: "Nos encargamos de la burocracia y el cumplimiento fiscal para que tú dediques toda tu energía a vender y escalar."
        }
    ];

    return (
        <Section className="relative py-20 lg:py-24 bg-white overflow-hidden">
            {/* Minimal Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#202f43_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

            {/* Breathing Aurora - Dynamic Background Orbs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                {/* Gold Orb (Top Left) */}
                <div className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-[#CCA43B]/20 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob"></div>

                {/* Silver/Slate Orb (Bottom Right) */}
                <div className="absolute -bottom-[10%] -right-[10%] w-[500px] h-[500px] bg-[#202f43]/10 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob animation-delay-2000"></div>

                {/* Subtle Center Glow */}
                <div className="absolute top-[30%] left-[40%] w-[400px] h-[400px] bg-[#E5E7EB]/30 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-blob animation-delay-4000"></div>
            </div>

            <div className="text-center mb-16 relative z-10">
                <span className="text-[#CCA43B] font-bold tracking-widest uppercase text-sm mb-3 block">
                    Nuestra Filosofía
                </span>
                <h2 className="text-3xl lg:text-5xl font-bold text-[#202f43] mb-6">
                    ¿Por qué <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCA43B] to-[#b48d28]">OC Impulsa</span>?
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    Claridad que impulsa. Rompemos el molde del contador tradicional.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative z-10">
                {benefits.map((benefit, index) => (
                    <div
                        key={index}
                        className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#CCA43B]/30 hover:-translate-y-1"
                    >
                        <div className="h-16 w-16 bg-[#202f43]/5 text-[#CCA43B] rounded-2xl flex items-center justify-center mb-6 border border-[#CCA43B]/20 group-hover:bg-[#202f43] group-hover:border-[#202f43] transition-all duration-300">
                            <benefit.icon size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-[#202f43] mb-3 group-hover:text-[#CCA43B] transition-colors">
                            {benefit.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            {benefit.description}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
};
