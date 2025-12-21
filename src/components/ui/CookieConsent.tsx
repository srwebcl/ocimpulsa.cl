"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Cookie, X } from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already consented
        const consent = localStorage.getItem("ocimpulsa_cookie_consent");
        if (!consent) {
            // Show banner after a short delay
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("ocimpulsa_cookie_consent", "true");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 max-w-md z-50 pointer-events-none"
                >
                    <div className="bg-[#202f43] text-white p-6 rounded-2xl shadow-2xl border border-[#CCA43B]/20 pointer-events-auto relative overflow-hidden backdrop-blur-md bg-opacity-95">
                        {/* Decoration */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#CCA43B] rounded-full blur-[60px] opacity-10 pointer-events-none"></div>

                        <div className="flex items-start gap-4">
                            <div className="bg-[#CCA43B]/10 p-2 rounded-lg text-[#CCA43B] shrink-0">
                                <Cookie size={24} />
                            </div>
                            <div className="flex-1 space-y-3">
                                <h4 className="font-bold text-lg leading-none pt-1">🍪 Tu privacidad importa</h4>
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    Usamos cookies para mejorar tu experiencia y medir nuestras campañas.
                                    Al continuar navegando, aceptas nuestra{" "}
                                    <Link href="/politica-cookies" className="text-[#CCA43B] underline hover:text-white transition-colors">
                                        Política de Cookies
                                    </Link>.
                                </p>
                                <div className="flex gap-3 pt-1">
                                    <Button
                                        onClick={handleAccept}
                                        size="sm"
                                        className="bg-[#CCA43B] text-[#202f43] hover:bg-[#b88f28] font-bold border-0 px-6"
                                    >
                                        Aceptar Todo
                                    </Button>
                                    <button
                                        onClick={handleAccept}
                                        className="text-xs text-gray-400 hover:text-white underline decoration-gray-500 hover:decoration-white transition-all p-2"
                                    >
                                        Solo necesarias
                                    </button>
                                </div>
                            </div>
                            <button
                                onClick={handleAccept}
                                className="text-gray-400 hover:text-white transition-colors absolute top-4 right-4"
                                aria-label="Cerrar"
                            >
                                <X size={18} />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
