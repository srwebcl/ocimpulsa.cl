import React from "react";
import { Button } from "../ui/Button";
import { Section } from "../ui/Section";
import { ArrowRight, Building, Rocket, BarChart3 } from "lucide-react";

export const ServicesPreview = () => {
    const stages = [
        {
            title: "NACER",
            subtitle: "Formalización",
            description: "Ideal para quien tiene una idea y quiere su RUT. Creamos tu empresa en un día y te dejamos facturando.",
            price: "$150.000",
            priceDetail: "Pago único",
            icon: Building,
            href: "/nacer",
            // Gold Theme
            color: "bg-secondary/10 text-secondary",
            cta: "Empezar",
        },
        {
            title: "CRECER",
            subtitle: "Planes Mensuales",
            description: "Contabilidad, F29 y RRHH. Mantén tu negocio ordenado y sin multas mientras tú vendes.",
            price: "$39.000",
            priceDetail: "desde / mes",
            icon: Rocket,
            href: "/crecer",
            // Primary Theme
            color: "bg-primary/10 text-primary",
            cta: "Ver Planes",
            highlight: true
        },
        {
            title: "CONSOLIDAR",
            subtitle: "Servicios Adicionales",
            description: "Auditorías, Declaración de Renta, Postulaciones a Corfo/Sercotec para escalar.",
            price: "A medida",
            priceDetail: "según requerimiento",
            icon: BarChart3,
            href: "/consolidar",
            color: "bg-gray-100 text-gray-600",
            cta: "Más Info",
        },
    ];

    return (
        <Section className="py-20 lg:py-28 bg-gradient-to-b from-[#202f43] to-[#15202b] relative overflow-visible">
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#CCA43B_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-[#CCA43B] font-bold tracking-widest uppercase text-sm mb-3 block">
                        Nuestras Soluciones
                    </span>
                    <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                        Un servicio para cada etapa
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Te acompañamos en todo el ciclo de vida de tu negocio con soluciones a medida.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {stages.map((stage, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col p-8 rounded-2xl transition-all duration-300 group bg-white ${stage.highlight
                                    ? "border-2 border-[#CCA43B] shadow-[0_0_30px_rgba(204,164,59,0.15)] transform md:-translate-y-4 z-10"
                                    : "border border-gray-100 hover:border-[#CCA43B]/30 hover:shadow-2xl opacity-95 hover:opacity-100"
                                }`}
                        >
                            {stage.highlight && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#CCA43B] text-[#202f43] text-xs font-bold px-6 py-2 rounded-full tracking-widest uppercase shadow-lg border-2 border-[#202f43]">
                                    Más Popular
                                </div>
                            )}

                            <div className={`h-14 w-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${stage.color}`}>
                                <stage.icon size={28} />
                            </div>

                            <div className="mb-4">
                                <h3 className="text-2xl font-bold text-[#202f43] group-hover:text-[#CCA43B] transition-colors">
                                    {stage.title}
                                </h3>
                                <p className="text-[#202f43]/70 font-medium uppercase tracking-wide text-sm mt-1">
                                    {stage.subtitle}
                                </p>
                            </div>

                            <p className="text-gray-500 mb-8 flex-grow leading-relaxed">
                                {stage.description}
                            </p>

                            <div className="mb-8 pt-6 border-t border-gray-100">
                                <p className="text-4xl font-bold text-[#202f43] tracking-tight">{stage.price}</p>
                                <p className="text-sm text-gray-400 mt-1 font-medium">{stage.priceDetail}</p>
                            </div>

                            <Button
                                variant={stage.highlight ? "primary" : "outline"}
                                href={stage.href}
                                className={`w-full justify-between h-12 text-sm uppercase tracking-wide ${stage.highlight
                                        ? "bg-[#202f43] text-white hover:bg-[#15202b] border-none"
                                        : "border-gray-200 text-[#202f43] hover:border-[#CCA43B] hover:text-[#CCA43B]"
                                    }`}
                            >
                                {stage.cta}
                                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
