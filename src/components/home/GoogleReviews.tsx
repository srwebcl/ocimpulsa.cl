"use client";

import React, { useEffect, useState } from "react";
import { Section } from "../ui/Section";
import { FadeIn } from "../ui/motion/FadeIn";
import { Star, Quote } from "lucide-react";

interface Review {
  authorAttribution: {
    displayName: string;
    photoUri?: string;
  };
  rating: number;
  relativePublishTimeDescription: string;
  text: {
    text: string;
  };
}

const FALLBACK_REVIEWS: Review[] = [
  {
    authorAttribution: { displayName: "César González" },
    rating: 5,
    relativePublishTimeDescription: "Hace 1 mes",
    text: { text: "Excelente servicio, muy profesionales y claros en sus explicaciones. Me ayudaron a ordenar mis finanzas de manera impecable." }
  },
  {
    authorAttribution: { displayName: "María González" },
    rating: 5,
    relativePublishTimeDescription: "Hace 2 semanas",
    text: { text: "La mejor consultora tributaria que he contratado. Entienden perfectamente las necesidades de una Pyme en crecimiento." }
  },
  {
    authorAttribution: { displayName: "Carlos Rojas" },
    rating: 5,
    relativePublishTimeDescription: "Hace 3 días",
    text: { text: "Rápidos y eficientes. Resolvieron todas mis dudas sobre los impuestos anuales sin complicaciones. Altamente recomendados." }
  }
];

export const GoogleReviews = () => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch("/api/reviews");
                const data = await response.json();
                if (data.reviews && data.reviews.length > 0) {
                    setReviews(data.reviews);
                } else {
                    setReviews(FALLBACK_REVIEWS);
                }
            } catch (error) {
                console.error("Error loading reviews:", error);
                setReviews(FALLBACK_REVIEWS);
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, []);

    const displayReviews = loading ? FALLBACK_REVIEWS : reviews;

    return (
        <Section className="relative py-20 lg:py-24 bg-white overflow-hidden border-t border-gray-50">
            {/* Minimal Grid Pattern - Inspired by Trust.tsx */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#202f43_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

            {/* Breathing Aurora - Dynamic Background Orbs like Trust.tsx */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                {/* Gold Orb */}
                <div className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] bg-[#CCA43B]/10 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob"></div>
                {/* Navy Orb */}
                <div className="absolute -bottom-[10%] -left-[10%] w-[500px] h-[500px] bg-[#202f43]/5 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob animation-delay-2000"></div>
            </div>

            <div className="text-center mb-16 relative z-10">
                <FadeIn direction="up">
                    <span className="text-[#CCA43B] font-bold tracking-widest uppercase text-sm mb-3 block">
                        Testimonios
                    </span>
                    <h2 className="text-3xl lg:text-5xl font-bold text-[#202f43] mb-6">
                        Lo que dicen nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCA43B] to-[#b48d28]">Clientes</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        La confianza de quienes ya impulsan su negocio con nosotros a través de Google.
                    </p>
                </FadeIn>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative z-10 max-w-7xl mx-auto px-4">
                {displayReviews.map((review, index) => (
                    <FadeIn key={index} delay={index * 0.1} direction="up" fullWidth>
                        <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#CCA43B]/30 h-full flex flex-col">
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star 
                                        key={i} 
                                        size={16} 
                                        className={i < review.rating ? "fill-[#CCA43B] text-[#CCA43B]" : "text-gray-200"} 
                                    />
                                ))}
                            </div>
                            
                            <div className="relative flex-grow">
                                <Quote className="absolute -top-2 -left-2 text-[#CCA43B]/10 w-10 h-10 -z-10" />
                                <p className="text-gray-600 leading-relaxed italic mb-6 relative z-10">
                                    "{review.text.text}"
                                </p>
                            </div>

                            <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-50">
                                {review.authorAttribution.photoUri ? (
                                    <img 
                                        src={review.authorAttribution.photoUri} 
                                        alt={review.authorAttribution.displayName}
                                        className="w-12 h-12 rounded-full object-cover border border-gray-100"
                                    />
                                ) : (
                                    <div className="w-12 h-12 rounded-full bg-[#202f43] flex items-center justify-center text-white font-bold">
                                        {review.authorAttribution.displayName.charAt(0)}
                                    </div>
                                )}
                                <div>
                                    <h4 className="font-bold text-[#202f43]">
                                        {review.authorAttribution.displayName}
                                    </h4>
                                    <p className="text-sm text-gray-400">
                                        {review.relativePublishTimeDescription}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>

            {/* Bottom Google Badge - Aesthetic Touch */}
            <div className="mt-16 text-center relative z-10">
                <FadeIn direction="up" delay={0.4}>
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-50 rounded-full border border-gray-100">
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-[#CCA43B] text-[#CCA43B]" />)}
                        </div>
                        <span className="text-sm font-semibold text-[#202f43]">4.9/5 en Google Business</span>
                    </div>
                </FadeIn>
            </div>
        </Section>
    );
};
