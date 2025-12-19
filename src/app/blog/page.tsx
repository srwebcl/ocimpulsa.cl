import { Section } from "@/components/ui/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog & Recursos | OC Impulsa",
    description: "Artículos sobre contabilidad, impuestos y emprendimiento en Chile.",
};

export default function BlogPage() {
    return (
        <main className="pt-20">
            <Section>
                <div className="text-center max-w-2xl mx-auto py-20">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">Blog & Recursos</h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Estamos escribiendo los mejores artículos para ayudarte a ordenar tu negocio.
                    </p>
                    <div className="inline-block bg-blue-50 text-primary px-6 py-3 rounded-full font-bold">
                        ¡Próximamente!
                    </div>
                </div>
            </Section>
        </main>
    );
}
