"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function GraciasPage() {
    useEffect(() => {
        // Trigger Google Ads Conversion
        if (typeof window !== "undefined" && (window as any).gtag) {
            (window as any).gtag('event', 'conversion', {
                'send_to': 'AW-17854454737/-9qeCNmZ2t0bENG31cFC'
            });
        }
    }, []);

    return (
        <main className="min-h-[80vh] flex flex-col items-center justify-center bg-[#0B1221] text-white px-4 relative overflow-hidden">

            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#CCA43B]/10 blur-[100px] rounded-full"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#202f43]/20 blur-[100px] rounded-full"></div>
            </div>

            <div className="relative z-10 text-center max-w-2xl mx-auto space-y-8 animate-in fade-in zoom-in duration-700">
                <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center ring-4 ring-green-500/10 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                        <CheckCircle2 className="w-12 h-12 text-green-400" strokeWidth={2.5} />
                    </div>
                </div>

                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                        ¡Mensaje Recibido!
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg mx-auto">
                        Gracias por confiar en <span className="text-[#CCA43B] font-semibold">OC Impulsa</span>. Hemos recibido tus datos correctamente.
                    </p>
                    <p className="text-gray-400">
                        Un asesor de nuestro equipo te contactará a la brevedad para coordinar tu diagnóstico.
                    </p>
                </div>

                <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/">
                        <Button
                            variant="secondary"
                            className="w-full sm:w-auto min-w-[200px] py-6 text-lg shadow-xl shadow-[#CCA43B]/10"
                        >
                            Volver al Inicio
                        </Button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
