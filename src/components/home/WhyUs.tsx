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
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#202f43_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left Column: Content */}
                    <div className="space-y-10">
                        <div className="space-y-6">
                            <span className="text-[#CCA43B] font-bold tracking-widest uppercase text-sm">
                                ¿Por qué elegirnos?
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#202f43] mb-6 leading-tight">
                                Más que contadores, somos tus <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCA43B] to-[#b48d28]">aliados estratégicos.</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Nos encargamos de todo lo aburrido y complejo de la contabilidad para que tú te dediques a lo que mejor sabes hacer: <strong>hacer crecer tu negocio.</strong>
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                                    <div className="shrink-0 mt-1">
                                        {benefit.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-[#202f43] font-bold text-lg">{benefit.title}</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed mt-1">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Sticky Form */}
                    <div className="w-full max-w-md lg:ml-auto lg:sticky lg:top-28 lg:mt-9">
                        <HeroForm className="!bg-[#202f43] shadow-2xl border-gray-800" />
                    </div>
                </div>
            </div>
        </Section>
    );
};

