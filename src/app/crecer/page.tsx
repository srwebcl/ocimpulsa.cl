import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Check, X } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Planes Mensuales | Contabilidad Pymes | OC Impulsa",
    description: "Planes de contabilidad en Chile desde $39.000. F29 al día, balances, remuneraciones y asesoría experta. Sin contratos amarrados.",
};

export default function CrecerPage() {
    const plans = [
        {
            name: "Plan Básico Orden",
            price: "$39.000",
            description: "Para empresas de servicios o profesionales independientes.",
            features: [
                "Declaración F29 Mensual",
                "Declaración Renta Anual F22",
                "Balance Financiero Anual",
                "Asesoría Contable WhatsApp",
                "Sin Gestión de Personas"
            ],
            notIncluded: ["Contratos y Liquidaciones", "Gestión de Google Ads"],
            cta: "Contratar Básico",
            highlight: false
        },
        {
            name: "Plan RRHH Equipo",
            price: "$45.000",
            priceDetail: "+ $6.000/persona",
            description: "Para empresas con equipo. Cumple con la ley laboral.",
            features: [
                "Todo lo del Plan Básico",
                "Contratos de Trabajo",
                "Liquidaciones de Sueldo",
                "Cargas en Previred",
                "Certificados de Cotizaciones",
                "Finiquitos"
            ],
            notIncluded: ["Gestión de Google Ads"],
            cta: "Contratar Equipos",
            highlight: true
        },
        {
            name: "Plan Negocio Online",
            price: "A medida",
            description: "Full Growth. Contabilidad + Marketing Digital para escalar.",
            features: [
                "Todo lo del Plan RRHH",
                "Gestión de Campañas Google Ads",
                "Optimización de Landing Pages",
                "Reportes de Ventas vs Gasto Publicitario",
                "Estrategia Tributaria Avanzada"
            ],
            notIncluded: [],
            cta: "Cotizar Plan Growth",
            highlight: false
        }
    ];

    return (
        <main className="pt-20">
            <Section className="bg-white text-center">
                <span className="text-primary font-bold tracking-wide uppercase">Etapa 2: Crecer</span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Planes Transparentes</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Elige el plan que se adapte a tu etapa actual. Puedes cambiarte cuando quieras.
                </p>
            </Section>

            <Section background="gray">
                <div className="grid lg:grid-cols-3 gap-8">
                    {plans.map((plan) => (
                        <div key={plan.name} className={`relative bg-white rounded-2xl shadow-sm border ${plan.highlight ? 'border-primary ring-1 ring-primary/20 shadow-xl scale-105 z-10' : 'border-gray-200'} flex flex-col p-8`}>
                            {plan.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                                    RECOMENDADO
                                </div>
                            )}
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                            <div className="mb-4">
                                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                                {plan.priceDetail && <span className="text-sm text-gray-500 ml-2">{plan.priceDetail}</span>}
                            </div>
                            <p className="text-gray-500 mb-6 text-sm">{plan.description}</p>

                            <div className="flex-grow space-y-4 mb-8">
                                {plan.features.map((feature) => (
                                    <div key={feature} className="flex items-start gap-3 text-gray-700 text-sm">
                                        <Check className="text-green-500 w-5 h-5 shrink-0" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                                {plan.notIncluded.map((feature) => (
                                    <div key={feature} className="flex items-start gap-3 text-gray-400 text-sm">
                                        <X className="w-5 h-5 shrink-0" />
                                        <span className="line-through">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Button
                                href={`https://wa.me/56912345678?text=Me%20interesa%20el%20${plan.name}`}
                                variant={plan.highlight ? "primary" : "outline"}
                                className="w-full"
                            >
                                {plan.cta}
                            </Button>
                        </div>
                    ))}
                </div>
            </Section>
        </main>
    );
}
