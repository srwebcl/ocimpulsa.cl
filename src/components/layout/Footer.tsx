import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone } from "lucide-react";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-t from-[#15202b] to-[#202f43] text-gray-300 py-12 md:py-16 border-t border-[#CCA43B]/10">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-screen-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="relative h-12 w-40">
                            <Image
                                src="/images/logo-white.svg"
                                alt="OC Impulsa"
                                fill
                                sizes="(max-width: 768px) 128px, 160px"
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-sm leading-relaxed max-w-xs text-gray-400">
                            Professionalismo, Cercanía y Confianza.
                            Ingeniería contable para empresas que buscan crecer con bases sólidas en el Norte de Chile.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="hover:text-[#CCA43B] transition-colors"><Facebook size={20} /></Link>
                            <Link href="#" className="hover:text-[#CCA43B] transition-colors"><Instagram size={20} /></Link>
                            <Link href="#" className="hover:text-[#CCA43B] transition-colors"><Linkedin size={20} /></Link>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Servicios</h3>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/nacer" className="hover:text-[#CCA43B] transition-colors">Formaliza tu Negocio</Link></li>
                            <li><Link href="/crecer" className="hover:text-[#CCA43B] transition-colors">Planes Mensuales</Link></li>
                            <li><Link href="/consolidar" className="hover:text-[#CCA43B] transition-colors">Negocio Online</Link></li>
                            <li><Link href="/contact" className="hover:text-[#CCA43B] transition-colors">Auditorías Tributarias</Link></li>
                        </ul>
                    </div>

                    {/* Company/Trust Column */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Empresa</h3>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/about" className="hover:text-[#CCA43B] transition-colors">Nosotros</Link></li>
                            <li><Link href="/contacto" className="hover:text-[#CCA43B] transition-colors">Contacto</Link></li>
                            <li><span className="text-[#CCA43B] font-medium">Trabaja con nosotros</span></li>
                        </ul>
                    </div>

                    {/* Contact/Local SEO Column */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Contacto</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="mt-1 text-[#CCA43B] shrink-0" />
                                <span>Región de Coquimbo<br />y Antofagasta</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-[#CCA43B] shrink-0" />
                                <a href="tel:+56912345678" className="hover:text-white transition-colors">+56 9 1234 5678</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-[#CCA43B] shrink-0" />
                                <a href="mailto:contacto@ocimpulsa.cl" className="hover:text-white transition-colors">contacto@ocimpulsa.cl</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-[#CCA43B]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; {currentYear} OC Impulsa SpA. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-[#CCA43B] transition-colors">Políticas de Privacidad</Link>
                        <Link href="#" className="hover:text-[#CCA43B] transition-colors">Términos y Condiciones</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
