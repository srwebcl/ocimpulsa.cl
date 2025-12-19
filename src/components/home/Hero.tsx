import React from "react";
import { Button } from "../ui/Button";
import { Section } from "../ui/Section";
import { ArrowRight, CheckCircle } from "lucide-react";

export const Hero = () => {
    return (
        <Section className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-40">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-bl from-blue-50/80 to-transparent rounded-bl-[100px] opacity-60" />
            <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/2 bg-gradient-to-tr from-orange-50/50 to-transparent rounded-tr-[100px] opacity-60" />

            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className="space-y-8 animate-in slide-in-from-bottom-8 duration-700 fade-in">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-primary text-sm font-medium">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Más de 500 empresas confían en nosotros
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
                        Dedícate a <span className="text-secondary">vender</span>.<br />
                        Nosotros al <span className="text-primary">SII</span>.
                    </h1>

                    <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                        Asesoría contable, laboral y digital para PYMEs en Chile.
                        Sin enredos, sin multas y con precios claros desde <span className="font-bold text-gray-900">$39.000</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" href="/crecer" className="w-full sm:w-auto">
                            Ver Planes para PYMEs
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button variant="secondary" size="lg" href="/nacer" className="w-full sm:w-auto">
                            ¿Quieres crear tu empresa?
                        </Button>
                    </div>

                    <div className="pt-4 flex items-center gap-6 text-sm text-gray-500 font-medium">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="text-green-500 h-5 w-5" />
                            <span>Sin contratos amarrados</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="text-green-500 h-5 w-5" />
                            <span>100% Online</span>
                        </div>
                    </div>
                </div>

                {/* Image/Visual */}
                <div className="relative animate-in slide-in-from-right-8 duration-1000 fade-in delay-200 hidden lg:block">
                    {/* Abstract or Hero Image Representation */}
                    <div className="relative z-10 bg-white p-2 rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                        {/* Placeholder for Hero Image - would use Image component here or a graphic */}
                        <div className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400">
                                {/* Interactive UI Mockup to be placed here */}
                                <div className="text-center p-8">
                                    <div className="bg-white p-6 rounded-lg shadow-sm max-w-xs mx-auto mb-4">
                                        <div className="h-4 w-24 bg-gray-200 rounded mb-4" />
                                        <div className="space-y-2">
                                            <div className="h-2 w-full bg-gray-100 rounded" />
                                            <div className="h-2 w-3/4 bg-gray-100 rounded" />
                                        </div>
                                    </div>
                                    <p className="font-medium text-lg text-gray-500">Tu Contabilidad en Orden</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-xl shadow-xl animate-bounce duration-[3000ms]">
                        <div className="flex items-center gap-3">
                            <div className="bg-green-100 p-2 rounded-full text-green-600">
                                <CheckCircle size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 font-medium tracking-wide uppercase">Estado F29</p>
                                <p className="text-sm font-bold text-gray-900">Declarado al día</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};
