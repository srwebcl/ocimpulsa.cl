"use client";

import React from "react";
import { HeroForm } from "./HeroForm";
import { CheckCircle2, ShieldCheck, Clock, FileCheck, Users, Receipt, Laptop } from "lucide-react";
import { Section } from "../ui/Section";

export const WhyUs = () => {
    const benefits = [
        {
            icon: <CheckCircle2 className="w-6 h-6 text-[#CCA43B]" />,
            title: "Pago de F29 Mensual",
            description: "Nos encargamos de declarar y pagar tu IVA mes a mes sin falta."
        },
        {
            icon: <Users className="w-6 h-6 text-[#CCA43B]" />,
            title: "Gestión RRHH y Previred",
            description: "Contratos, liquidaciones y pago de imposiciones al día."
        },
        {
            icon: <FileCheck className="w-6 h-6 text-[#CCA43B]" />,
            title: "Operación Renta (F22)",
            description: "Confección de estados financieros y declaración anual sin estrés."
        },
        {
            icon: <Clock className="w-6 h-6 text-[#CCA43B]" />,
            title: "Tu Empresa en un Día",
            description: "Constitución, inicio de actividades y verificación de régimen tributario."
        },
        {
            icon: <Receipt className="w-6 h-6 text-[#CCA43B]" />,
            title: "Facturación Electrónica",
            description: "Asesoría completa en emisión de documentos tributarios."
        },
        {
            icon: <Laptop className="w-6 h-6 text-[#CCA43B]" />,
            title: "Presencia Digital Total",
            description: "Diseño Web y Google Ads para que tu negocio nazca vendiendo."
        }
    ];

    return (
        <Section className="pt-20 lg:pt-24 pb-20 lg:pb-48 bg-white relative">
            {/* Subtle Pattern Background - Positioned absolutely but clipped by relative container naturally or acceptable overflow */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0F2027_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-6xl mx-auto relative z-10">

                {/* Left Column: Value Proposition */}
                <div className="space-y-8 animate-in slide-in-from-left-8 duration-700">
                    <div>
                        <span className="text-[#CCA43B] font-bold tracking-widest uppercase text-sm mb-2 block">
                            ¿Por qué elegirnos?
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F2027] mb-6 leading-tight">
                            Más que contadores, somos tus <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCA43B] to-[#b48d28]">aliados estratégicos</span>.
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                            Deja la burocracia en nuestras manos. Nos enfocamos en el cumplimiento tributario y laboral para que tú te enfoques en crecer.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="space-y-3">
                                <div className="bg-gray-100 w-12 h-12 rounded-xl flex items-center justify-center border border-gray-200 shadow-sm">
                                    {benefit.icon}
                                </div>
                                <h4 className="text-[#0F2027] font-bold text-lg">{benefit.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Key Form (Sticky) */}
                <div className="w-full max-w-md lg:ml-auto lg:sticky lg:top-28 lg:mt-9">
                    <HeroForm className="!bg-[#0F2027] shadow-2xl border-gray-800" />
                </div>

            </div>
        </Section>
    );
};
