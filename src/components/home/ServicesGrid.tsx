"use client";

import React from "react";
import { Section } from "../ui/Section";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

const plans = [
    {
        title: "Formaliza tu Negocio",
        price: "$150.000",
        description: "El punto de partida para tu empresa.",
        features: [
            "Constitución (Empresa en un día)",
            "Inicio de actividades",
            "Verificación de actividades y régimen",
            "Asesoría de facturación y boleta"
        ],
        highlight: false
    },
    {
        title: "Formaliza tu Negocio Online",
        price: "Consultar",
        description: "Todo listo para vender en internet.",
        features: [
            "Todo lo de 'Formaliza tu Negocio'",
            "Diseño página web profesional",
            "Integración de pagos"
        ],
        highlight: true
    },
    {
        title: "Plan Básico / Pyme",
        price: "Desde $39.000",
        description: "Orden mensual para crecer tranquilo.",
        features: [
            "Contabilidad mensual",
            "Declaración de F22 y F29",
            "Confección estados financieros",
            "Asesoría de crecimiento"
        ],
        highlight: false
    },
    {
        title: "Plan Recursos Humanos",
        price: "Desde $39.000 BASE",
        subPrice: "+ $6.000 por persona",
        description: "Gestión laboral completa y sin errores.",
        features: [
            "Contratos y anexos",
            "Liquidaciones de sueldo",
            "Pago en Previred",
            "Finiquitos y Certificados F30"
        ],
        highlight: false
    },
    {
        title: "Plan Negocio Online",
        price: "A medida",
        description: "La solución total para e-commerce.",
        features: [
            "Plan Básico completo",
            "Plan Recursos Humanos completo",
            "Campañas Google Ads gestionadas"
        ],
        highlight: true
    }
];

export const ServicesGrid = () => {
    return (
        <Section className="py-20 bg-[#F4F1EA]">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F2027] mb-4">
                        Nuestros Planes y Servicios
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Soluciones claras y transparentes. Elige el impulso que tu empresa necesita hoy.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${plan.highlight
                                    ? "bg-[#0F2027] text-white border-[#CCA43B]"
                                    : "bg-white text-[#0F2027] border-gray-200"
                                }`}
                        >
                            {plan.highlight && (
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#CCA43B] text-[#0F2027] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    Recomendado
                                </span>
                            )}

                            <h3 className={`text-xl font-bold mb-2 ${plan.highlight ? "text-white" : "text-[#0F2027]"}`}>
                                {plan.title}
                            </h3>
                            <p className={`text-sm mb-6 ${plan.highlight ? "text-gray-300" : "text-gray-500"}`}>
                                {plan.description}
                            </p>

                            <div className="mb-6">
                                <span className={`text-3xl font-bold ${plan.highlight ? "text-[#CCA43B]" : "text-[#0F2027]"}`}>
                                    {plan.price}
                                </span>
                                {plan.subPrice && (
                                    <p className="text-xs font-medium opacity-80 mt-1">{plan.subPrice}</p>
                                )}
                            </div>

                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm">
                                        <Check className={`w-5 h-5 shrink-0 ${plan.highlight ? "text-[#CCA43B]" : "text-[#0F2027]/60"}`} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                className={`w-full font-bold ${plan.highlight
                                        ? "bg-[#CCA43B] text-[#0F2027] hover:bg-[#b88f28]"
                                        : "bg-[#0F2027] text-white hover:bg-[#1B2A41]"
                                    }`}
                            >
                                Cotizar Plan
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
