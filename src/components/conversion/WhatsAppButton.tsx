"use client";

import React, { useState } from "react";
import { MessageCircle, X, ChevronRight, Briefcase, Calculator, AlertTriangle } from "lucide-react";
import { cn } from "../ui/Button";

export const WhatsAppButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const phone = "56912345678"; // Replace with verified number

    const options = [
        {
            label: "Quiero crear mi empresa",
            icon: Briefcase,
            message: "Hola, quiero crear mi empresa, vengo desde la web.",
        },
        {
            label: "Necesito cambiar de contador",
            icon: Calculator,
            message: "Hola, necesito cambiar de contador, vengo desde la web.",
        },
        {
            label: "Tengo un problema con el SII",
            icon: AlertTriangle,
            message: "Hola, tengo un problema con el SII, necesito ayuda.",
        },
    ];

    const handleOptionClick = (message: string) => {
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
        setIsOpen(false);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
            {/* Menu Options */}
            <div
                className={cn(
                    "bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 origin-bottom-right border border-gray-100 w-72",
                    isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4 pointer-events-none h-0"
                )}
            >
                <div className="bg-primary/5 p-4 border-b border-gray-100">
                    <p className="font-semibold text-gray-800">¿En qué podemos ayudarte?</p>
                    <p className="text-xs text-gray-500">Selecciona una opción para hablar con un especialísta.</p>
                </div>
                <div className="p-2">
                    {options.map((option) => (
                        <button
                            key={option.label}
                            onClick={() => handleOptionClick(option.message)}
                            className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors text-left group"
                        >
                            <div className="flex items-center gap-3">
                                <div className="bg-white p-2 rounded-full shadow-sm text-primary group-hover:text-secondary group-hover:shadow-md transition-all">
                                    <option.icon size={18} />
                                </div>
                                <span className="text-sm font-medium text-gray-700">{option.label}</span>
                            </div>
                            <ChevronRight size={16} className="text-gray-300 group-hover:text-secondary" />
                        </button>
                    ))}
                </div>
            </div>

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "h-14 w-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105",
                    isOpen ? "bg-gray-800 text-white rotate-90" : "bg-[#25D366] text-white hover:bg-[#20bd5a]"
                )}
                aria-label="Abrir WhatsApp"
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={32} />}
            </button>
        </div>
    );
};
