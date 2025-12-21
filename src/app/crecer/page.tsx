import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Check, X } from "lucide-react";
import { FadeIn } from "@/components/ui/motion/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Planes Mensuales | Contabilidad Pymes | OC Impulsa",
    description: "Planes de contabilidad en Chile desde $39.000. F29 al día, balances, remuneraciones y asesoría experta. Sin contratos amarrados.",
};

export default function CrecerPage() {
    const plans = [
        {
            name: "Plan Básico / Pyme",
            price: "$39.000",
            description: "Para empresas de servicios o profesionales que necesitan orden.",
            features: [
                "Contabilidad mensual",
                "Declaración de F29",
                "Declaración Renta Anual F22",
                "Confección de estados financieros",
                "Asesoría de crecimiento"
            ],
            notIncluded: ["Contratos y Liquidaciones", "Gestión de Google Ads"],
            cta: "Contratar Básico",
            highlight: false
        },
        {
            name: "Plan Recursos Humanos",
            price: "Desde $39.000",
            priceDetail: "+ $6.000/persona",
            description: "Gestión laboral completa. Cumple con la ley sin estrés.",
            features: [
                "Todo lo del Plan Básico",
                "Contratos de trabajo y anexos",
                "Cálculo de liquidaciones",
                "Carga en Previred",
                "Finiquitos y Certificados F30"
            ],
            notIncluded: ["Gestión de Google Ads"],
            cta: "Contratar Plan RRHH",
            highlight: true
        },
        {
            name: "Plan Negocio Online",
            price: "A medida",
            description: "La solución total: Contabilidad + Marketing para escalar.",
            features: [
                "Todo lo del Plan RRHH",
                "Gestión de Campañas Google Ads",
                "Optimización de Landing Pages",
                "Reportes de retorno de inversión (ROAS)",
                "Estrategia comercial mensual"
            ],
            notIncluded: [],
            cta: "Cotizar Plan Growth",
            highlight: false
        }
    ];

    return (
        <main className="min-h-screen bg-[#F4F1EA] pt-24 pb-20">
            <Section className="bg-[#F4F1EA] text-center">
                <FadeIn direction="up">
                    <span className="text-[#202f43] font-bold tracking-wide uppercase text-sm mb-2 block">Crecimiento sin Techo</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-[#202f43] mb-6">Planes Mensuales Transparentes</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                        Elige el plan que se adapte a tu etapa actual. <br />
                        <strong className="text-[#CCA43B]">Sin multas. Sin excusas.</strong>
                    </p>
                </FadeIn>
            </Section>

            <Section>
                <div className="grid lg:grid-cols-3 gap-8 max-w-screen-2xl mx-auto">
                    {plans.map((plan, index) => (
                        <FadeIn key={plan.name} delay={index * 0.2} direction="up" fullWidth>
                            <div
                                className={`relative rounded-2xl shadow-lg border transition-all duration-300 flex flex-col p-8 h-full ${plan.highlight
                                    ? 'bg-[#202f43] text-white border-[#CCA43B] scale-105 z-10 shadow-2xl'
                                    : 'bg-white text-[#202f43] border-gray-200 hover:border-[#CCA43B]/30 hover:shadow-xl'
                                    }`}
                            >
                                {plan.highlight && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#CCA43B] text-[#202f43] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md border-2 border-[#202f43]">
                                        Más Solicitado
                                    </div>
                                )}

                                <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-[#202f43]'}`}>
                                    {plan.name}
                                </h3>
                                <div className="mb-4 flex items-baseline flex-wrap gap-2">
                                    <span className={`text-4xl font-bold ${plan.highlight ? 'text-[#CCA43B]' : 'text-[#202f43]'}`}>
                                        {plan.price}
                                    </span>
                                    {plan.priceDetail && (
                                        <span className={`text-sm font-medium ${plan.highlight ? 'text-gray-300' : 'text-gray-500'}`}>
                                            {plan.priceDetail}
                                        </span>
                                    )}
                                </div>
                                <p className={`mb-8 text-sm leading-relaxed ${plan.highlight ? 'text-gray-300' : 'text-gray-500'}`}>
                                    {plan.description}
                                </p>

                                <div className="flex-grow space-y-4 mb-8">
                                    {plan.features.map((feature) => (
                                        <div key={feature} className="flex items-start gap-3 text-sm">
                                            <Check className={`w-5 h-5 shrink-0 ${plan.highlight ? 'text-[#CCA43B]' : 'text-[#202f43]'}`} />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                    {plan.notIncluded.map((feature) => (
                                        <div key={feature} className={`flex items-start gap-3 text-sm ${plan.highlight ? 'text-gray-600' : 'text-gray-300'}`}>
                                            <X className="w-5 h-5 shrink-0" />
                                            <span className="line-through">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Button
                                    href={`https://wa.me/56967336906?text=Me%20interesa%20el%20${plan.name}`}
                                    className={`w-full font-bold ${plan.highlight
                                        ? "bg-[#CCA43B] text-[#202f43] hover:bg-[#b88f28]"
                                        : "bg-[#202f43] text-white hover:bg-[#15202b]"
                                        }`}
                                >
                                    {plan.cta}
                                </Button>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </Section>
        </main>
    );
}
