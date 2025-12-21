import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone } from "lucide-react";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    const cities = ["Ovalle", "Coquimbo", "La Serena", "Vallenar", "Copiapó", "Caldera", "Antofagasta"];

    return (
        <footer className="bg-gradient-to-t from-[#15202b] to-[#202f43] text-gray-300 border-t border-[#CCA43B]/10 overflow-hidden relative">

            {/* Premium Ticker Tape (Top Position) */}
            <div className="w-full overflow-hidden py-3 bg-[#202f43]/50 border-b border-[#CCA43B]/10 backdrop-blur-[2px] relative z-20">
                <div className="animate-marquee flex whitespace-nowrap gap-12 items-center">
                    {[...cities, ...cities, ...cities, ...cities].map((city, i) => (
                        <div key={i} className="flex items-center gap-12">
                            <span className="text-[10px] md:text-xs font-medium uppercase tracking-[0.3em] text-[#CCA43B]/80">
                                {city}
                            </span>
                            <span className="h-1 w-1 rounded-full bg-white/20"></span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-screen-2xl pt-12 md:pt-16 pb-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
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
                            Profesionalismo, Cercanía y Confianza.
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
                            <li><Link href="/formalizacion" className="hover:text-[#CCA43B] transition-colors">Formaliza tu Negocio</Link></li>
                            <li><Link href="/planes-contables" className="hover:text-[#CCA43B] transition-colors">Planes Contables</Link></li>
                            <li><Link href="/tributaria" className="hover:text-[#CCA43B] transition-colors">Servicios Tributarios</Link></li>
                            <li><Link href="/digital" className="hover:text-[#CCA43B] transition-colors">Marketing Digital</Link></li>
                        </ul>
                    </div>

                    {/* Company/Trust Column */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Empresa</h3>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/nosotros" className="hover:text-[#CCA43B] transition-colors">Nosotros</Link></li>
                            <li><Link href="/contacto" className="hover:text-[#CCA43B] transition-colors">Contacto</Link></li>
                        </ul>
                    </div>

                    {/* Contact/Local SEO Column */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Contacto</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="mt-1 text-[#CCA43B] shrink-0" />
                                <span>Ovalle, Chile<br />Región de Coquimbo</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-[#CCA43B] shrink-0" />
                                <a href="tel:+56967336906" className="hover:text-white transition-colors">+56 9 6733 6906</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-[#CCA43B] shrink-0" />
                                <a href="mailto:contacto@ocimpulsa.cl" className="hover:text-white transition-colors">contacto@ocimpulsa.cl</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>



            {/* Bottom Bar */}
            <div className="border-t border-[#CCA43B]/20 bg-[#15202b]">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-screen-2xl py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 order-2 md:order-1 text-center md:text-left">
                            {/* Developer Badge */}
                            <a
                                href="https://srweb.cl"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#CCA43B] transition-colors group bg-white/5 px-3 py-1.5 rounded-full border border-white/5 hover:border-[#CCA43B]/30"
                            >
                                <span>Desarrollado con</span>
                                <span className="text-yellow-400 text-sm group-hover:scale-125 transition-transform duration-300">⚡</span>
                                <span>por <span className="font-bold text-gray-300 group-hover:text-white">SRweb</span></span>
                            </a>
                            <p>&copy; {currentYear} OC Impulsa SpA.</p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-6 order-1 md:order-2">
                            <Link href="#" className="hover:text-[#CCA43B] transition-colors">Políticas de Privacidad</Link>
                            <Link href="#" className="hover:text-[#CCA43B] transition-colors">Términos y Condiciones</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
