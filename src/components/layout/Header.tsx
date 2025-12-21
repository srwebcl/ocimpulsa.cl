"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/Button";
import { Menu, X } from "lucide-react";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigation = [
        { name: "Inicio", href: "/" },
        { name: "Planes Mensuales", href: "/crecer" },
        { name: "Formalización", href: "/nacer" },
        { name: "Servicios Adicionales", href: "/consolidar" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-[#0F2027]/95 backdrop-blur-md border-b border-[#CCA43B]/20 shadow-sm transition-all">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-screen-2xl">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 relative h-16 w-48 md:w-64 group">
                        <Image
                            src="/images/logo-white.svg"
                            alt="OC Impulsa"
                            fill
                            sizes="(max-width: 768px) 192px, 256px"
                            className="object-contain object-left"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-gray-300 hover:text-[#CCA43B] font-medium transition-colors text-sm lg:text-base tracking-wide"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex">
                        <Button
                            variant="secondary"
                            size="md"
                            href="/contacto"
                            className="font-bold border-0 shadow-lg hover:shadow-[#CCA43B]/20 flex items-center gap-2"
                        >
                            <span className="bg-white/20 p-1 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
                            </span>
                            Solicitar Ayuda
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-300 hover:text-[#CCA43B]"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-[#202f43] border-b border-gray-800 shadow-xl py-6 animate-in slide-in-from-top-4">
                    <div className="flex flex-col container mx-auto px-4 gap-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-lg font-medium text-gray-300 hover:text-[#CCA43B] py-3 border-b border-gray-800 last:border-0"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="pt-4">
                            <Button
                                variant="secondary"
                                className="w-full font-bold flex items-center justify-center gap-2"
                                size="lg"
                                href="/contacto"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
                                Solicitar Ayuda
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};
