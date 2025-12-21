import { Section } from "@/components/ui/Section";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contacto | OC Impulsa",
    description: "Contáctanos para resolver tus dudas contables y tributarias. Coquimbo y Antofagasta.",
};

export default function ContactoPage() {
    return (
        <main className="min-h-screen bg-[#F4F1EA] pt-24 pb-20">
            <Section className="bg-[#F4F1EA]">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-[#CCA43B] font-bold tracking-wide uppercase text-sm mb-2 block">Estamos para ayudarte</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-[#202f43]">Hablemos de tu Negocio</h1>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        {/* Contact Info */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 space-y-8">
                            <h3 className="text-2xl font-bold text-[#202f43] mb-6">Información de Contacto</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-[#202f43]/5 p-3 rounded-lg text-[#CCA43B]">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-medium">Teléfono / WhatsApp</p>
                                        <a href="tel:+56912345678" className="text-lg font-bold text-[#202f43] hover:text-[#CCA43B] transition-colors">
                                            +56 9 1234 5678
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-[#202f43]/5 p-3 rounded-lg text-[#CCA43B]">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-medium">Correo Electrónico</p>
                                        <a href="mailto:contacto@ocimpulsa.cl" className="text-lg font-bold text-[#202f43] hover:text-[#CCA43B] transition-colors">
                                            contacto@ocimpulsa.cl
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-[#202f43]/5 p-3 rounded-lg text-[#CCA43B]">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-medium">Cobertura</p>
                                        <p className="text-lg font-bold text-[#202f43]">Región de Coquimbo<br />y Antofagasta</p>
                                        <p className="text-sm text-gray-500">Atención 100% Online y Presencial (Agenda)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA / Form Placeholder */}
                        <div className="bg-gradient-to-br from-[#202f43] to-[#15202b] text-white p-8 rounded-2xl shadow-xl flex flex-col justify-center min-h-[400px]">
                            <h3 className="text-2xl font-bold mb-4">¿Listo para ordenar tus números?</h3>
                            <p className="text-gray-300 mb-8 leading-relaxed">
                                No dejes que la contabilidad frene tu crecimiento. Agenda una reunión de diagnóstico gratuita y veamos cómo podemos potenciar tu empresa.
                            </p>

                            <Button
                                href="https://wa.me/56912345678"
                                className="w-full bg-[#CCA43B] text-[#202f43] hover:bg-[#b88f28] font-bold text-lg py-6 shadow-md hover:shadow-lg transition-all"
                            >
                                Agendar Diagnóstico
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
