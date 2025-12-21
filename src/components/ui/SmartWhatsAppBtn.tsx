"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { X, ChevronRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface MenuOption {
    label: string;
    message: string;
    icon?: React.ReactNode;
}

export const SmartWhatsAppBtn = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showBubble, setShowBubble] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    // Dynamic Options Logic
    const getMenuOptions = (): MenuOption[] => {
        const commonOptions = [
            { label: "🆘 Soy cliente / Ayuda", message: "Hola, soy cliente y necesito asistencia." },
            { label: "❓ Otras Consultas", message: "Hola, tengo una consulta general." }
        ];

        switch (pathname) {
            case "/nacer":
                return [
                    { label: "🚀 Crear mi empresa hoy", message: "Hola, quiero comenzar el trámite de formalización." },
                    { label: "💬 Tengo dudas del proceso", message: "Hola, tengo dudas sobre cómo formalizar mi empresa." },
                    ...commonOptions
                ];
            case "/crecer":
                return [
                    { label: "💼 Cotizar Plan Mensual", message: "Hola, me interesan los planes de contabilidad mensual." },
                    { label: "👥 Cotizar Gestión RRHH", message: "Hola, necesito ayuda con contratos y liquidaciones." },
                    ...commonOptions
                ];
            case "/consolidar":
                return [
                    { label: "🔍 Auditoría o Renta", message: "Hola, necesito servicios de auditoría o renta." },
                    { label: "📈 Gestión y Control", message: "Hola, busco asesoría de gestión para mi empresa." },
                    ...commonOptions
                ];
            default:
                return [
                    { label: "🚀 Crear mi empresa ($150k)", message: "Hola, quiero formalizar mi empresa." },
                    { label: "📈 Cotizar Planes Contables", message: "Hola, busco contador para mi Pyme." },
                    ...commonOptions
                ];
        }
    };

    // Bubble Greeting Text
    const getGreeting = () => {
        if (pathname === "/nacer") return "🚀 ¿Listo para tu RUT en 24h?";
        if (pathname === "/crecer") return "📈 ¿Cotizando planes?";
        return "👋 ¿En qué te podemos ayudar?";
    };

    const options = getMenuOptions();
    const phoneNumber = "56912345678";

    // Timer for Bubble
    useEffect(() => {
        if (!hasInteracted) {
            const timer = setTimeout(() => {
                setShowBubble(true);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [pathname, hasInteracted]);

    const handleOpenMenu = () => {
        setIsMenuOpen(true);
        setShowBubble(false);
        setHasInteracted(true);
    };

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    };

    const handleOptionClick = (message: string) => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
        setIsMenuOpen(false);
    };

    const handleCloseBubble = (e: React.MouseEvent) => {
        e.stopPropagation();
        setShowBubble(false);
        setHasInteracted(true);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">

            {/* 1. THE MENU WIDGET (The Filter) */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white rounded-2xl shadow-2xl overflow-hidden w-[300px] border border-gray-100 mb-2"
                    >
                        {/* Header */}
                        <div className="bg-[#202f43] p-4 flex items-center justify-between relative overflow-hidden">
                            {/* Background Glow */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#CCA43B] rounded-full blur-[40px] opacity-20"></div>

                            <div className="flex items-center gap-3 relative z-10">
                                <div className="w-10 h-10 rounded-full bg-[#202f43] flex items-center justify-center border-2 border-[#CCA43B] relative shadow-lg">
                                    <img src="/images/logo-v-b.webp" alt="Avatar" className="w-6 h-6 object-contain opacity-90" />
                                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#202f43] rounded-full"></span>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm">Equipo Comercial</h4>
                                    <span className="text-xs text-gray-300 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                                        En línea
                                    </span>
                                </div>
                            </div>
                            <button onClick={handleCloseMenu} className="text-white/70 hover:text-white transition-colors relative z-10">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Body / Options */}
                        <div className="p-4 bg-gray-50 flex flex-col gap-2">
                            <p className="text-xs text-gray-500 font-medium mb-1 uppercase tracking-wide px-1">Opciones Disponibles</p>
                            {options.map((option, idx) => (
                                <motion.button
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    onClick={() => handleOptionClick(option.message)}
                                    className="w-full text-left bg-white hover:bg-white border border-gray-200 hover:border-[#CCA43B] p-3 rounded-xl shadow-sm hover:shadow-md transition-all group flex items-center justify-between group"
                                >
                                    <span className="text-sm font-medium text-gray-700 group-hover:text-[#202f43]">{option.label}</span>
                                    <ChevronRight size={16} className="text-gray-300 group-hover:text-[#CCA43B] transition-colors" />
                                </motion.button>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="px-4 py-2 bg-gray-100 text-[10px] text-center text-gray-400">
                            OC Impulsa | Soluciones Contables
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 2. SMART BUBBLE (Teaser) */}
            <AnimatePresence>
                {showBubble && !isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-white px-4 py-2 rounded-l-full rounded-tr-full shadow-lg border border-gray-100 cursor-pointer flex items-center gap-2 hover:bg-gray-50 transition-colors max-w-[200px]"
                        onClick={handleOpenMenu}
                    >
                        <span className="text-xs font-bold text-[#202f43]">{getGreeting()}</span>
                        <button onClick={handleCloseBubble} className="bg-gray-100 rounded-full p-0.5 text-gray-400 hover:text-red-500">
                            <X size={10} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 3. MAIN FLOAT BUTTON */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => isMenuOpen ? setIsMenuOpen(false) : handleOpenMenu()}
                className={`flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-full shadow-2xl transition-all duration-300 border-2 border-white/20 relative z-50 ${isMenuOpen ? "bg-[#202f43]" : "bg-[#25D366]"}`}
            >
                {isMenuOpen ? (
                    <X size={28} className="text-white" />
                ) : (
                    <>
                        <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-4 w-4">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 items-center justify-center text-[9px] font-bold text-white border border-white">1</span>
                        </span>
                        <FaWhatsapp size={32} className="text-white fill-current" />
                    </>
                )}
            </motion.button>
        </div>
    );
};
