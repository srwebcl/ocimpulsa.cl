import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone } from "lucide-react";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300 py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="relative h-12 w-40">
                            {/* Ensure we have a white/light version of logo effectively or use filter */}
                            <Image
                                src="/images/logo.png"
                                alt="OC Impulsa"
                                fill
                                className="object-contain object-left brightness-0 invert"
                            />
                        </div>
                        <p className="text-sm leading-relaxed max-w-xs">
                            En OC Impulsa no hacemos magia, hacemos ingeniería contable y comercial.
                            Dedícate a vender, nosotros nos encargamos del SII.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="hover:text-white transition-colors"><Facebook size={20} /></Link>
                            <Link href="#" className="hover:text-white transition-colors"><Instagram size={20} /></Link>
                            <Link href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></Link>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Servicios</h3>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/nacer" className="hover:text-primary transition-colors">Crear Empresa</Link></li>
                            <li><Link href="/crecer" className="hover:text-primary transition-colors">Planes Mensuales</Link></li>
                            <li><Link href="/consolidar" className="hover:text-primary transition-colors">Servicios Adicionales</Link></li>
                            <li><Link href="/crecer" className="hover:text-primary transition-colors">Contabilidad para PYMEs</Link></li>
                        </ul>
                    </div>

                    {/* Company/Trust Column */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Empresa</h3>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/about" className="hover:text-primary transition-colors">Nosotros</Link></li>
                            <li><Link href="/blog" className="hover:text-primary transition-colors">Blog & Recursos</Link></li>
                            <li><Link href="/contacto" className="hover:text-primary transition-colors">Contacto</Link></li>
                            <li><span className="text-gray-500">Trabaja con nosotros</span></li>
                        </ul>
                    </div>

                    {/* Contact/Local SEO Column */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Contacto</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="mt-1 text-primary shrink-0" />
                                <span>Oficina Central, Santiago de Chile<br />(Atención con cita previa)</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-primary shrink-0" />
                                <a href="tel:+56912345678" className="hover:text-white transition-colors">+56 9 1234 5678</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-primary shrink-0" />
                                <a href="mailto:contacto@ocimpulsa.cl" className="hover:text-white transition-colors">contacto@ocimpulsa.cl</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <p>&copy; {currentYear} OC Impulsa SpA. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        <Link href="/legal/privacy" className="hover:text-white transition-colors">Políticas de Privacidad</Link>
                        <Link href="/legal/terms" className="hover:text-white transition-colors">Términos y Condiciones</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
