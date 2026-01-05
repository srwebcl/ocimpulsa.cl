"use client";

import React from "react";
import { Button } from "../ui/Button";

import { cn } from "@/lib/utils";

interface HeroFormProps {
    className?: string;
}

export const HeroForm = ({ className }: HeroFormProps) => {
    return (
        <div className={cn("bg-[#202f43]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl animate-in slide-in-from-right-8 duration-1000 ring-1 ring-white/5", className)}>
            <div className="mb-5 text-center">
                <h3 className="text-2xl font-bold text-white tracking-tight mb-1">
                    Agenda tu Diagnóstico
                </h3>
                <p className="text-gray-300 text-sm font-medium tracking-wide">
                    Nos pondremos en contacto contigo hoy.
                </p>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>

                {/* Full Width Fields for Presence and Comfort */}
                <input
                    type="text"
                    placeholder="Nombre completo"
                    className="w-full px-4 py-3 rounded-lg bg-[#15202b]/60 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#CCA43B]/50 focus:border-[#CCA43B] transition-all text-sm hover:border-white/20"
                    required
                />

                <input
                    type="email"
                    placeholder="Correo corporativo"
                    className="w-full px-4 py-3 rounded-lg bg-[#15202b]/60 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#CCA43B]/50 focus:border-[#CCA43B] transition-all text-sm hover:border-white/20"
                    required
                />

                <input
                    type="tel"
                    placeholder="Teléfono móvil"
                    className="w-full px-4 py-3 rounded-lg bg-[#15202b]/60 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#CCA43B]/50 focus:border-[#CCA43B] transition-all text-sm hover:border-white/20"
                    required
                />

                {/* Split Fields for Compactness */}
                <div className="grid grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="RUT"
                        className="w-full px-4 py-3 rounded-lg bg-[#15202b]/60 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#CCA43B]/50 focus:border-[#CCA43B] transition-all text-sm hover:border-white/20"
                    />
                    <div className="relative">
                        <select
                            className="w-full px-4 py-3 rounded-lg bg-[#15202b]/60 border border-white/10 text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#CCA43B]/50 focus:border-[#CCA43B] transition-all appearance-none hover:border-white/20 cursor-pointer"
                        >
                            <option value="" className="bg-[#202f43] text-gray-400">Servicio</option>
                            <option value="contabilidad" className="bg-[#202f43]">Contabilidad</option>
                            <option value="formalizacion" className="bg-[#202f43]">Formalización</option>
                            <option value="tributaria" className="bg-[#202f43]">Tributaria</option>
                            <option value="laboral" className="bg-[#202f43]">Laboral</option>
                        </select>
                    </div>
                </div>

                {/* Message */}
                <div className="hidden sm:block">
                    <textarea
                        placeholder="Mensaje (Opcional)"
                        rows={1}
                        className="w-full px-4 py-3 rounded-lg bg-[#15202b]/60 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#CCA43B]/50 focus:border-[#CCA43B] transition-all resize-none text-sm hover:border-white/20"
                    ></textarea>
                </div>

                <Button
                    variant="secondary"
                    className="w-full text-base font-bold py-4 mt-2 shadow-lg shadow-[#CCA43B]/10 hover:shadow-[#CCA43B]/20 transform hover:-translate-y-0.5 transition-all bg-[length:200%_auto] animate-shine"
                >
                    Hablar con un Asesor
                </Button>

                <div className="flex items-center justify-center gap-2 mt-2 opacity-60">
                    <span className="text-[10px] text-gray-400 font-light tracking-wider uppercase">Datos 100% Confidenciales</span>
                </div>
            </form>
        </div>
    );
};
