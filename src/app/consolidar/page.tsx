import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { FileText, Search, Globe, Award, BarChart, TrendingUp } from "lucide-react";
import { FadeIn } from "@/components/ui/motion/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Servicios Adicionales | OC Impulsa",
    description: "Auditorías, Declaración de Renta, Postulaciones Sercotec y más. Servicios específicos para consolidar tu empresa.",
};

export default function ConsolidarPage() {
    const services = [
        {
            title: "Auditorías Contables",
            description: "Revisión exhaustiva de periodos anteriores para detectar y corregir errores ante el SII.",
            icon: Search
        },
        {
            title: "Operación Renta (F22)",
            description: "Preparación y envío de tu declaración anual. Optimizamos tu carga tributaria legalmente.",
            icon: FileText
        },
        {
            title: "Conciliaciones Bancarias",
            description: "Ordenamos tus cartolas bancarias para que cuadren perfectamente con tu contabilidad.",
            icon: BarChart
        },
        {
            title: "Postulaciones Sercotec/Corfo",
            description: "Te apoyamos en la formulación de proyectos para ganar fondos de emprendimiento.",
            icon: Award
        },
        {
            title: "Exportación de Servicios",
            description: "Asesoría para facturar al extranjero exento de IVA y manejo de invoices.",
            icon: Globe
        },
        {
            title: "Gestión y Control",
            description: "Asesoría administrativa para mejorar los flujos y procesos internos de tu empresa.",
            icon: TrendingUp
        }
    ];

    return (
        <main className="min-h-screen bg-[#F4F1EA] pt-24 pb-20">
            <Section className="bg-[#F4F1EA]">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <FadeIn direction="up">
                        <span className="text-[#CCA43B] font-bold tracking-wide uppercase text-sm mb-2 block">Etapa 3: Consolidar</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-[#202f43] mb-6">Servicios Especializados</h1>
                        <p className="text-xl text-gray-600">
                            Soluciones a medida para momentos clave. No dejes cabos sueltos en tu negocio.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
                    {services.map((service, index) => (
                        <FadeIn key={service.title} delay={index * 0.15} direction="up" fullWidth>
                            <div className="bg-white p-8 rounded-2xl transition-all duration-300 border border-gray-100/50 shadow-sm hover:shadow-xl hover:border-[#CCA43B]/30 group h-full">
                                <div className="h-12 w-12 bg-[#202f43] text-[#CCA43B] rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                                    <service.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-[#202f43] mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.description}</p>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full border-gray-200 text-[#202f43] hover:border-[#CCA43B] hover:text-[#CCA43B]"
                                    href="https://wa.me/56967336906"
                                >
                                    Consultar
                                </Button>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </Section>
        </main>
    );
}
