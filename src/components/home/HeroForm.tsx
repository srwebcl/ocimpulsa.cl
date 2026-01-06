"use client";

import React, { useState } from "react";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";

interface HeroFormProps {
    className?: string;
}

const HeroFormContent = ({ className }: HeroFormProps) => {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!executeRecaptcha) {
            console.error("Execute recaptcha not yet available");
            return;
        }

        setStatus('loading');
        setErrorMessage('');

        try {
            const formData = new FormData(e.currentTarget);
            const token = await executeRecaptcha('submit');

            const payload = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                rut: formData.get('rut'),
                service: formData.get('service'),
                message: formData.get('message'),
                token,
            };

            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (!res.ok) {
                const details = data.details ? ` (${data.details.message || JSON.stringify(data.details)})` : '';
                throw new Error((data.error || 'Ocurrió un error al enviar el formulario.') + details);
            }

            // Success!!
            setStatus('success');

            // Push to DataLayer for Conversion Tracking
            if (typeof window !== 'undefined') {
                (window as any).dataLayer = (window as any).dataLayer || [];
                (window as any).dataLayer.push({
                    event: 'form_submission_success',
                    location: 'hero_home'
                });
            }

        } catch (error: any) {
            console.error("Form submission error:", error);
            setStatus('error');
            setErrorMessage(error.message || 'Error de conexión. Inténtalo nuevamente.');
        }
    };

    if (status === 'success') {
        return (
            <div className={cn("bg-[#202f43]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl ring-1 ring-white/5 text-center flex flex-col justify-center items-center h-full min-h-[400px]", className)}>
                <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-4 border border-green-500/30">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje Enviado!</h3>
                <p className="text-gray-300">Gracias por contactarnos. Hemos recibido tus datos correctamente y un asesor te contactará a la brevedad.</p>
                <Button
                    variant="outline"
                    className="mt-6 border-white/20 text-white hover:bg-white/10"
                    onClick={() => setStatus('idle')}
                >
                    Volver al formulario
                </Button>
            </div>
        );
    }

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

            <form className="space-y-4" onSubmit={handleSubmit}>

                {/* Full Width Fields for Presence and Comfort */}
                <input
                    name="name"
                    type="text"
                    placeholder="Nombre completo"
                    className="w-full px-4 py-3 rounded-lg bg-[#15202b]/60 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#CCA43B]/50 focus:border-[#CCA43B] transition-all text-sm hover:border-white/20"
                    required
                    disabled={status === 'loading'}
                />

                <input
                    name="email"
                    type="email"
                    placeholder="Correo corporativo"
                    className="w-full px-4 py-3 rounded-lg bg-[#15202b]/60 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#CCA43B]/50 focus:border-[#CCA43B] transition-all text-sm hover:border-white/20"
                    required
                    disabled={status === 'loading'}
                />

                <input
                    name="phone"
                    type="tel"
                    placeholder="Teléfono móvil"
                    className="w-full px-4 py-3 rounded-lg bg-[#15202b]/60 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#CCA43B]/50 focus:border-[#CCA43B] transition-all text-sm hover:border-white/20"
                    required
                    disabled={status === 'loading'}
                />

                {/* Split Fields for Compactness */}
                <div className="grid grid-cols-2 gap-4">
                    <input
                        name="rut"
                        type="text"
                        placeholder="RUT"
                        className="w-full px-4 py-3 rounded-lg bg-[#15202b]/60 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#CCA43B]/50 focus:border-[#CCA43B] transition-all text-sm hover:border-white/20"
                        disabled={status === 'loading'}
                    />
                    <div className="relative">
                        <select
                            name="service"
                            className="w-full px-4 py-3 rounded-lg bg-[#15202b]/60 border border-white/10 text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#CCA43B]/50 focus:border-[#CCA43B] transition-all appearance-none hover:border-white/20 cursor-pointer"
                            disabled={status === 'loading'}
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
                        name="message"
                        placeholder="Mensaje (Opcional)"
                        rows={1}
                        className="w-full px-4 py-3 rounded-lg bg-[#15202b]/60 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#CCA43B]/50 focus:border-[#CCA43B] transition-all resize-none text-sm hover:border-white/20"
                        disabled={status === 'loading'}
                    ></textarea>
                </div>

                {status === 'error' && (
                    <div className="text-red-400 text-xs text-center border border-red-500/20 bg-red-500/10 p-2 rounded">
                        {errorMessage}
                    </div>
                )}

                <Button
                    variant="secondary"
                    className="w-full text-base font-bold py-4 mt-2 shadow-lg shadow-[#CCA43B]/10 hover:shadow-[#CCA43B]/20 transform hover:-translate-y-0.5 transition-all bg-[length:200%_auto] animate-shine disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={status === 'loading'}
                >
                    {status === 'loading' ? 'Enviando...' : 'Hablar con un Asesor'}
                </Button>

                <div className="flex items-center justify-center gap-2 mt-2 opacity-60">
                    <span className="text-[10px] text-gray-400 font-light tracking-wider uppercase">Datos 100% Confidenciales</span>
                </div>
                <div className="text-[9px] text-gray-500 text-center">
                    Protegido por reCAPTCHA y aplican las <a href="https://policies.google.com/privacy" className="underline hover:text-gray-300">Políticas de Privacidad</a> y <a href="https://policies.google.com/terms" className="underline hover:text-gray-300">Términos de Servicio</a> de Google.
                </div>
            </form>
        </div>
    );
};

export const HeroForm = (props: HeroFormProps) => {
    return (
        <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LcKJEIsAAAAABvbX4CbESgjidz_PxXEQ4jAsJ-h"}>
            <HeroFormContent {...props} />
        </GoogleReCaptchaProvider>
    );
}
