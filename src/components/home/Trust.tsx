import React from "react";
import { Section } from "../ui/Section";
import { MessageSquareQuote, ShieldCheck, TrendingUp } from "lucide-react";

export const Trust = () => {
    const benefits = [
        {
            icon: MessageSquareQuote,
            title: "Habla Humana",
            description: "No te hablaremos en códigos tributarios complicados. Te explicamos en simple lo que necesitas saber."
        },
        {
            icon: ShieldCheck,
            title: "Todo Digital & Seguro",
            description: "Tu información en la nube, disponible 24/7. Olvídate de llevar carpetas físicas al contador."
        },
        {
            icon: TrendingUp,
            title: "Enfoque en Ventas",
            description: "Somos contadores que entienden de marketing. Te ayudamos a vender más mientras ordenamos la casa."
        }
    ];

    return (
        <Section className="relative">
            <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    ¿Por qué <span className="text-primary">OC Impulsa</span>?
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Claridad que impulsa. Rompemos el molde del contador tradicional.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                    <div
                        key={index}
                        className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                    >
                        <div className="h-14 w-14 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-6 border border-primary/10">
                            <benefit.icon size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            {benefit.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            {benefit.description}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
};
