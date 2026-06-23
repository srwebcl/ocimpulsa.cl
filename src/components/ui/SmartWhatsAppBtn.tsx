"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export const SmartWhatsAppBtn = () => {
    const pathname = usePathname();
    const [isVisible] = useState(true);
    const [showBubble, setShowBubble] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);
    const phoneNumber = "56979567592";

    // Bubble Greeting Text
    const getGreeting = () => {
        if (pathname === "/formalizacion") return "🚀 ¿Creamos tu empresa hoy?";
        if (pathname === "/planes-contables") return "📊 ¿Buscas contador?";
        if (pathname === "/tributaria") return "⚖️ ¿Problemas con el SII?";
        if (pathname === "/digital") return "📈 ¿Quieres vender más?";
        return "👋 ¿En qué te ayudamos?";
    };

    // Timer for Bubble
    useEffect(() => {
        if (!hasInteracted && isVisible) {
            const timer = setTimeout(() => {
                setShowBubble(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [pathname, hasInteracted, isVisible]);

    const handleClick = () => {
        // Push GTM Event
        if (typeof window !== "undefined" && (window as any).dataLayer) {
            (window as any).dataLayer.push({
                event: "whatsapp_click",
                message_content: "Direct WhatsApp Click",
                page_location: pathname
            });
        }

        const message = "Hola, vengo desde la web y necesito información.";
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
        setShowBubble(false);
        setHasInteracted(true);
    };

    const handleCloseBubble = (e: React.MouseEvent) => {
        e.stopPropagation();
        setShowBubble(false);
        setHasInteracted(true);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 pointer-events-none"
                >
                    <div className="pointer-events-auto flex flex-col items-end gap-4">

                        {/* SMART BUBBLE (Teaser) */}
                        <AnimatePresence>
                            {showBubble && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="bg-white px-4 py-2 rounded-l-full rounded-tr-full shadow-lg border border-gray-100 cursor-pointer flex items-center gap-2 hover:bg-gray-50 transition-colors max-w-[200px]"
                                    onClick={handleClick}
                                >
                                    <span className="text-xs font-bold text-[#202f43]">{getGreeting()}</span>
                                    <button onClick={handleCloseBubble} className="bg-gray-100 rounded-full p-0.5 text-gray-400 hover:text-red-500">
                                        <X size={10} />
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* MAIN FLOAT BUTTON */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleClick}
                            className="flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-full shadow-2xl transition-all duration-300 border-2 border-white/20 relative z-50 bg-[#25D366]"
                        >
                            <>
                                <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-4 w-4">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 items-center justify-center text-[9px] font-bold text-white border border-white">1</span>
                                </span>
                                <FaWhatsapp size={32} className="text-white fill-current" />
                            </>
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
