import { Section } from "@/components/ui/Section";
import { Mail, Phone, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contacto | OC Impulsa",
    description: "Contáctanos para resolver tus dudas contables y tributarias.",
};

export default function ContactoPage() {
    return (
        <main className="pt-20">
            <Section>
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Hablemos</h1>

                    <div className="grid md:grid-cols-2 gap-12 bg-gray-50 p-8 rounded-2xl">
                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold">Información de Contacto</h3>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="bg-white p-3 rounded-lg shadow-sm text-primary">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Teléfono / WhatsApp</p>
                                        <a href="tel:+56912345678" className="text-lg font-bold text-gray-900 hover:text-primary transition-colors">+56 9 1234 5678</a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="bg-white p-3 rounded-lg shadow-sm text-primary">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Correo Electrónico</p>
                                        <a href="mailto:contacto@ocimpulsa.cl" className="text-lg font-bold text-gray-900 hover:text-primary transition-colors">contacto@ocimpulsa.cl</a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="bg-white p-3 rounded-lg shadow-sm text-primary">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Oficina</p>
                                        <p className="text-lg font-bold text-gray-900">Santiago, Chile</p>
                                        <p className="text-sm text-gray-500">Región Metropolitana</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm h-64 flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-200">
                            Map Placeholder (Google Maps Embed)
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
