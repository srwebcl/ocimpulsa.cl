"use client";

import React from "react";
import { Check } from "lucide-react";

const additionalServices = [
    "Auditorías contables",
    "Conciliaciones bancarias",
    "Asesorías de exportación",
    "Declaración de renta",
    "Asesorías para postulaciones a Sercotec",
    "Asesorías de gestión y control"
];

export const AdditionalServices = () => {
    return (
        <section className="py-16 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h3 className="text-2xl font-bold text-[#0F2027] mb-8">
                    Servicios Adicionales a tu Medida
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
                    {additionalServices.map((service, index) => (
                        <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-[#F4F1EA]/50 border border-gray-100 hover:border-[#CCA43B]/30 transition-colors">
                            <div className="w-8 h-8 rounded-full bg-[#0F2027] flex items-center justify-center shrink-0">
                                <Check className="w-4 h-4 text-[#CCA43B]" />
                            </div>
                            <span className="text-[#0F2027] font-medium text-sm">
                                {service}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
