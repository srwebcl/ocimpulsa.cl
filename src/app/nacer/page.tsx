import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { CheckCircle, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Formalización de Empresas | OC Impulsa",
    description: "Crea tu empresa en un día. Inicio de actividades, RUT y facturación inmediata. Comienza tu negocio legalmente.",
};

export default function NacerPage() {
    return (
        <main className="pt-20">
            <Section className="bg-blue-50">
                <div className="text-center max-w-3xl mx-auto space-y-6">
                    <span className="text-primary font-bold tracking-wide uppercase">Etapa 1: Nacer</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Pack "Empieza con el Pie Derecho"
                    </h1>
                    <p className="text-xl text-gray-600">
                        Creamos tu empresa en un día, realizamos el inicio de actividades y te dejamos facturando sin errores.
                    </p>
                    <div className="flex justify-center gap-4 pt-4">
                        <Button size="lg" href="https://wa.me/56912345678?text=Hola,%20quiero%20crear%20mi%20empresa">
                            Empezar Ahora - $150.000
                        </Button>
                    </div>
                </div>
            </Section>

            <Section>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">¿Qué incluye?</h2>
                        <ul className="space-y-4">
                            {[
                                "Constitución de Sociedad (Tu Empresa en un Día)",
                                "Inicio de Actividades ante el SII",
                                "Obtención de RUT E-Rut",
                                "Habilitación para Facturar",
                                "Asesoría en Régimen Tributario (clave para ahorrar)",
                                "Regalo: Manual de primeros pasos tributarios"
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <CheckCircle className="text-green-500 shrink-0 mt-1" size={20} />
                                    <span className="text-gray-700 text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="pt-6">
                            <div className="p-4 bg-orange-50 border border-orange-100 rounded-xl">
                                <h4 className="font-bold text-orange-800 mb-1">Plus Digital (Opcional)</h4>
                                <p className="text-sm text-orange-700 mb-3">
                                    Agrega tu página web básica y correos corporativos por solo <span className="font-bold">$100.000 adicionales</span>.
                                </p>
                                <Button variant="secondary" size="sm" href="#">Solicitar Pack Full</Button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                        <h3 className="text-xl font-bold mb-6 text-center">Proceso Simplificado</h3>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">1</div>
                                <div>
                                    <p className="font-bold">Formulario Simple</p>
                                    <p className="text-sm text-gray-500">Llenas un formulario de 5 minutos con los datos de los socios.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">2</div>
                                <div>
                                    <p className="font-bold">Redacción Legal</p>
                                    <p className="text-sm text-gray-500">Nuestros abogados redactan los estatutos.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">3</div>
                                <div>
                                    <p className="font-bold">Firma Digital</p>
                                    <p className="text-sm text-gray-500">Firmas con tu Clave Única o firma electrónica avanzada.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="h-8 w-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold shrink-0">4</div>
                                <div>
                                    <p className="font-bold">¡Listo!</p>
                                    <p className="text-sm text-gray-500">Te entregamos RUT y facturación habilitada.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
