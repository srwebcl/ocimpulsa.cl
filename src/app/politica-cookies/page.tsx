import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/motion/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Política de Cookies | OC Impulsa",
    description: "Información sobre el uso de cookies en nuestro sitio web.",
};

export default function PoliticaCookiesPage() {
    return (
        <main className="min-h-screen bg-[#F4F1EA] pt-24 pb-20">
            <Section className="bg-[#F4F1EA]">
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                    <FadeIn direction="up">
                        <span className="text-[#CCA43B] font-bold tracking-widest uppercase text-sm mb-3 block">
                            Legal
                        </span>
                        <h1 className="text-3xl md:text-4xl font-bold text-[#202f43] mb-8">
                            Política de Cookies
                        </h1>

                        <div className="prose prose-slate prose-lg max-w-none text-gray-600">
                            <p>
                                En <strong>OC Impulsa SpA</strong>, utilizamos cookies para facilitar el uso de nuestra página web y adaptar su contenido a tus necesidades e intereses. A continuación, te explicamos qué son, para qué sirven y cómo puedes configurarlas.
                            </p>

                            <h3 className="text-[#202f43] font-bold mt-8">¿Qué son las Cookies?</h3>
                            <p>
                                Las cookies son pequeños archivos de texto que se instalan en tu ordenador o dispositivo móvil cuando visitas un sitio web. Permiten que el sitio web recuerde tus acciones y preferencias (como inicio de sesión, idioma, tamaño de letra y otras preferencias de visualización) durante un período de tiempo, para que no tengas que volver a configurarlas cada vez que regreses al sitio o navegues por sus páginas.
                            </p>

                            <h3 className="text-[#202f43] font-bold mt-8">¿Qué tipos de Cookies utilizamos?</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>
                                    <strong>Cookies Técnicas (Necesarias):</strong> Son aquellas imprescindibles para el correcto funcionamiento del sitio web. Permiten, por ejemplo, controlar el tráfico, identificar la sesión o acceder a partes de acceso restringido.
                                </li>
                                <li>
                                    <strong>Cookies de Análisis (Google Analytics):</strong> Nos permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado. Para ello se analiza tu navegación en nuestra página web con el fin de mejorar la oferta de servicios que te ofrecemos.
                                </li>
                                <li>
                                    <strong>Cookies Publicitarias (Google Ads):</strong> Son aquellas que nos permiten gestionar de la forma más eficaz posible la oferta de los espacios publicitarios, adecuando el contenido del anuncio al contenido del servicio solicitado o al uso que realices de nuestra página web.
                                </li>
                            </ul>

                            <h3 className="text-[#202f43] font-bold mt-8">Gestión de Cookies</h3>
                            <p>
                                Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones del navegador instalado en tu ordenador. Ten en cuenta que, si deshabilitas las cookies necesarias, es posible que algunas funciones de nuestro sitio web no funcionen correctamente.
                            </p>

                            <h3 className="text-[#202f43] font-bold mt-8">Contacto</h3>
                            <p>
                                Si tienes dudas sobre esta política de cookies, puedes contactarnos en: <a href="mailto:contacto@ocimpulsa.cl" className="text-[#CCA43B] font-bold hover:underline">contacto@ocimpulsa.cl</a>.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </Section>
        </main>
    );
}
