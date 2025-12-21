"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Cookie, X } from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasConsented, setHasConsented] = useState(true); // Default to true to prevent flash

    useEffect(() => {
        // Check consent on mount
        const consent = localStorage.getItem("ocimpulsa_cookie_consent");
        if (!consent) {
            setHasConsented(false);
        }
    }, []);

    useEffect(() => {
        if (hasConsented) return;

        const handleScroll = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [hasConsented]);

    const handleAccept = () => {
        localStorage.setItem("ocimpulsa_cookie_consent", "true");
        setHasConsented(true);
        setIsVisible(false);
    };

    if (hasConsented) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="fixed bottom-4 left-4 z-40 pointer-events-none max-w-sm"
                >
                    <div className="bg-[#202f43]/90 text-white p-5 rounded-xl shadow-lg border border-white/10 pointer-events-auto backdrop-blur-md">
                        <div className="flex flex-col gap-3">
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex items-center gap-2 text-[#CCA43B]">
                                    <Cookie size={18} />
                                    <span className="text-sm font-bold">Privacidad</span>
                                </div>
                                <button
                                    onClick={handleAccept}
                                    className="text-gray-400 hover:text-white transition-colors"
                                    aria-label="Cerrar"
                                >
                                    <X size={16} />
                                </button>
                            </div>

                            <p className="text-xs text-gray-300 leading-relaxed">
                                Utilizamos cookies para mejorar tu experiencia. Al navegar, aceptas nuestra{" "}
                                <Link href="/politica-cookies" className="text-[#CCA43B] hover:underline">
                                    Política de Privacidad
                                </Link>.
                            </p>

                            <div className="flex items-center gap-3">
                                <Button
                                    onClick={handleAccept}
                                    className="h-8 text-xs bg-[#CCA43B] text-[#202f43] hover:bg-[#b88f28] font-bold px-4 rounded-lg w-full"
                                >
                                    Aceptar y Continuar
                                </Button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
