import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { FileText, Search, Globe, Award } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Servicios Adicionales | OC Impulsa",
    description: "Auditorías, Declaración de Renta, Postulaciones Sercotec y más. Servicios específicos para consolidar tu empresa.",
};

export default function ConsolidarPage() {
    const services = [
        {
            title: "Operación Renta (F22)",
            description: "Preparamos y realizamos tu declaración anual de renta para asegurar el cumplimiento tributario óptimo.",
            icon: FileText
        },
        {
            title: "Auditorías Contables",
            description: "Revisamos tu contabilidad de años anteriores para detectar errores, multas latentes o impuestos pagados en exceso.",
            icon: Search
        },
        {
            title: "Postulaciones Sercotec/Corfo",
            description: "Te ayudamos a formular proyectos ganadores para obtener fondos públicos no reembolsables.",
            icon: Award
        },
        {
            title: "Exportación de Servicios",
            description: "Asesoría especializada para empresas que venden servicios al extranjero (Exención IVA, Invoice, etc).",
            icon: Globe
        }
    ];

    return (
        <main className="pt-20">
            <Section className="bg-white">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-bold tracking-wide uppercase">Etapa 3: Consolidar</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Servicios Adicionales</h1>
                    <p className="text-xl text-gray-600">
                        Soluciones específicas para momentos clave de tu empresa.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {services.map((service) => (
                        <div key={service.title} className="bg-gray-50 hover:bg-white p-8 rounded-2xl transition-all duration-300 border border-gray-100 hover:shadow-lg group">
                            <div className="h-12 w-12 bg-white text-primary rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <service.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-600 mb-6">{service.description}</p>
                            <Button variant="outline" size="sm" href="https://wa.me/56912345678">Consultar</Button>
                        </div>
                    ))}
                </div>
            </Section>
        </main>
    );
}
