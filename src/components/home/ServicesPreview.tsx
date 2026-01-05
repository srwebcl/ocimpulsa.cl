import React from "react";
import { Button } from "../ui/Button";
import { Section } from "../ui/Section";
import { ArrowRight, Building, Rocket, BarChart3, Monitor } from "lucide-react";
import { FadeIn } from "../ui/motion/FadeIn";

export const ServicesPreview = () => {
    const stages = [
        {
            title: "FORMALIZAR",
            subtitle: "Tu Empresa",
            description: "Obtén tu RUT y Constitución en 24 horas.",
            price: "$150.000",
            priceDetail: "Pago único",
            icon: Building,
            href: "/formalizacion",
            color: "bg-secondary/10 text-secondary",
            cta: "Empezar",
        },
        {
            title: "CRECER",
            subtitle: "Contabilidad",
            description: "Planes mensuales de contabilidad y RRHH. Orden total ante el SII.",
            price: "$39.000",
            priceDetail: "desde / mes",
            icon: Rocket,
            href: "/planes-contables",
            color: "bg-primary/10 text-primary",
            cta: "Ver Planes",
            highlight: true
        },
        {
            title: "CONSOLIDAR",
            subtitle: "Tributaria",
            description: "Auditorías, F22 y soluciones complejas para empresas maduras.",
            price: "A medida",
            priceDetail: "según caso",
            icon: BarChart3,
            href: "/tributaria",
            color: "bg-gray-100 text-gray-600",
            cta: "Soluciones",
        },
        {
            title: "VENDER",
            subtitle: "Digital",
            description: "Sitios Web y Google Ads. La máquina de ventas que necesitas.",
            price: "$180.000",
            priceDetail: "desde + IVA",
            icon: Monitor,
            href: "/digital",
            color: "bg-orange-100 text-orange-600",
            cta: "Cotizar Web",
        },
    ];

    return (
        <Section id="planes" className="py-20 lg:py-28 bg-gradient-to-b from-[#202f43] to-[#15202b] relative overflow-visible">
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#CCA43B_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <FadeIn direction="up">
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
                </FadeIn>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {stages.map((stage, index) => (
                        <FadeIn key={index} delay={index * 0.15} direction="up" fullWidth>
                            <div
                                className={`relative flex flex-col p-6 rounded-2xl transition-all duration-300 group bg-white h-full ${stage.highlight
                                    ? "border-2 border-[#CCA43B] shadow-[0_0_30px_rgba(204,164,59,0.15)] transform md:-translate-y-4 z-10"
                                    : "border border-gray-100 hover:border-[#CCA43B]/30 hover:shadow-2xl opacity-95 hover:opacity-100"
                                    }`}
                            >
                                {stage.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#CCA43B] text-[#202f43] text-[10px] font-bold px-4 py-1 rounded-full tracking-widest uppercase shadow-lg border border-[#202f43]">
                                        Más Popular
                                    </div>
                                )}

                                <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 ${stage.color}`}>
                                    <stage.icon size={24} />
                                </div>

                                <div className="mb-3">
                                    <h3 className="text-xl font-bold text-[#202f43] group-hover:text-[#CCA43B] transition-colors">
                                        {stage.title}
                                    </h3>
                                    <p className="text-gray-500 font-medium uppercase tracking-wide text-xs mt-1">
                                        {stage.subtitle}
                                    </p>
                                </div>

                                <p className="text-gray-500 mb-6 flex-grow leading-relaxed text-sm">
                                    {stage.description}
                                </p>

                                <div className="mb-6 pt-4 border-t border-gray-100">
                                    <p className="text-3xl font-bold text-[#202f43] tracking-tight">{stage.price}</p>
                                    <p className="text-xs text-gray-400 mt-1 font-medium">{stage.priceDetail}</p>
                                </div>

                                <Button
                                    variant={stage.highlight ? "primary" : "outline"}
                                    href={stage.href}
                                    className={`w-full justify-between h-10 text-xs uppercase tracking-wide ${stage.highlight
                                        ? "bg-[#202f43] text-white hover:bg-[#15202b] border-none"
                                        : "border-gray-200 text-[#202f43] hover:border-[#CCA43B] hover:text-[#CCA43B]"
                                        }`}
                                >
                                    {stage.cta}
                                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                                </Button>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </Section>
    );
};
