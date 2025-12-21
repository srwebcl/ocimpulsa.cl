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
        <Section>
            <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Un servicio para cada etapa
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Te acompañamos en todo el ciclo de vida de tu negocio.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {stages.map((stage, index) => (
                    <div
                        key={index}
                        className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl bg-white ${stage.highlight
                            ? "border-secondary shadow-lg ring-1 ring-secondary/20 transform scale-[1.02]"
                            : "border-gray-200 hover:border-secondary/30"
                            }`}
                    >
                        {stage.highlight && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary-gradient text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wide shadow-md">
                                MÁS POPULAR
                            </div>
                        )}

                        <div className={`h-12 w-12 rounded-lg flex items-center justify-center mb-6 ${stage.color}`}>
                            <stage.icon size={24} />
                        </div>

                        <div className="mb-4">
                            <h3 className="text-2xl font-bold text-gray-900">{stage.title}</h3>
                            <p className="text-primary font-medium">{stage.subtitle}</p>
                        </div>

                        <p className="text-gray-600 mb-8 flex-grow">
                            {stage.description}
                        </p>

                        <div className="mb-8">
                            <p className="text-3xl font-bold text-gray-900">{stage.price}</p>
                            <p className="text-sm text-gray-500">{stage.priceDetail}</p>
                        </div>

                        <Button
                            variant={stage.highlight ? "primary" : "outline"}
                            href={stage.href}
                            className="w-full justify-between group"
                        >
                            {stage.cta}
                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>
                ))}
            </div>
        </Section>
    );
};
