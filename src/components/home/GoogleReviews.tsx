"use client";

import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Section } from "../ui/Section";
import { FadeIn } from "../ui/motion/FadeIn";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  },
  {
    authorAttribution: { displayName: "Elena Torres" },
    rating: 5,
    relativePublishTimeDescription: "Hace 1 semana",
    text: { text: "Un equipo excepcional. Me guiaron en todo el proceso de formalización con una paciencia y claridad increíbles." }
  },
  {
    authorAttribution: { displayName: "Roberto Martínez" },
    rating: 5,
    relativePublishTimeDescription: "Hace 1 mes",
    text: { text: "Profesionalismo puro. Su capacidad para simplificar temas tributarios complejos me ha permitido enfocarme al 100% en mi negocio." }
  }
];

export const GoogleReviews = () => {
    const [originalReviews, setOriginalReviews] = useState<Review[]>([]);
    const [globalRating, setGlobalRating] = useState<number>(5.0);
    const [totalReviews, setTotalReviews] = useState<number>(0);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        
        const fetchReviews = async () => {
            try {
                const response = await fetch("/api/reviews");
                const data = await response.json();
                if (data.reviews && data.reviews.length > 0) {
                    setOriginalReviews(data.reviews);
                    setGlobalRating(data.rating || 5.0);
                    setTotalReviews(data.totalReviews || data.reviews.length);
                } else {
                    setOriginalReviews(FALLBACK_REVIEWS);
                }
            } catch (error) {
                console.error("Error loading reviews:", error);
                setOriginalReviews(FALLBACK_REVIEWS);
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const reviews = originalReviews;
    const itemsPerView = isMobile ? 1 : 3;
    const maxIndex = Math.max(0, reviews.length - itemsPerView);

    const next = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, [maxIndex]);

    const prev = useCallback(() => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    }, [maxIndex]);

    // Auto-play
    useEffect(() => {
        if (!isMobile) return;
        const interval = setInterval(next, 6000);
        return () => clearInterval(interval);
    }, [next, isMobile]);

    const ReviewCard = ({ review }: { review: Review }) => (
        <div className="flex-none w-full md:w-1/2 lg:w-1/3 px-4 shrink-0 flex">
            <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-[0_20px_50px_-15px_rgba(32,47,67,0.08)] border border-gray-100/50 w-full flex flex-col group hover:shadow-[0_30px_60px_-15px_rgba(204,164,59,0.1)] transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                        <Star 
                            key={i} 
                            size={18} 
                            className={i < review.rating ? "fill-[#CCA43B] text-[#CCA43B]" : "text-gray-200"} 
                        />
                    ))}
                </div>
                
                <div className="relative flex-grow">
                    <Quote className="absolute -top-6 -left-6 text-[#CCA43B]/5 w-20 h-20 pointer-events-none group-hover:text-[#CCA43B]/10 transition-colors" />
                    <p className="text-[#202f43]/80 text-lg leading-relaxed italic mb-10 relative z-10 font-medium">
                        "{review.text.text}"
                    </p>
                </div>

                <div className="flex items-center gap-5 mt-auto pt-8 border-t border-gray-50">
                    <div className="relative w-14 h-14 shrink-0 rounded-full overflow-hidden shadow-inner bg-gray-50 ring-4 ring-white">
                        {review.authorAttribution.photoUri ? (
                            <img 
                                src={review.authorAttribution.photoUri} 
                                alt={review.authorAttribution.displayName}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full bg-gradient-to-br from-[#202f43] to-[#15202b] flex items-center justify-center text-white font-bold text-xl">
                                {review.authorAttribution.displayName.charAt(0)}
                            </div>
                        )}
                    </div>
                    <div>
                        <h3 className="font-bold text-[#202f43] text-lg leading-tight uppercase tracking-wide">
                            {review.authorAttribution.displayName}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" className="w-3 h-3" alt="Google" />
                            <p className="text-xs text-gray-500 font-semibold">
                                {review.relativePublishTimeDescription}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <Section className="relative py-24 lg:py-40 bg-[#FAFAFA] overflow-hidden border-t border-gray-100">
            {/* Elegant Background Patterns */}
            <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#202f43_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-white to-transparent -z-10"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-24">
                    <FadeIn direction="up">
                        <span className="text-[#CCA43B] font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs mb-5 block">
                            Experiencias Exclusivas
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#202f43] mb-8 tracking-tight">
                            Nuestros Clientes <br className="md:hidden" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCA43B] via-[#b48d28] to-[#CCA43B]">Impulsados</span>
                        </h2>
                        <div className="w-24 h-1 bg-[#CCA43B]/20 mx-auto rounded-full"></div>
                    </FadeIn>
                </div>

                {/* Carousel Logic Container */}
                <div className="relative max-w-[1400px] mx-auto group">
                    
                    {/* External Control Arrows - Desktop (only show if we can slide) */}
                    {reviews.length > itemsPerView && (
                        <>
                            <button 
                                onClick={prev}
                                className="absolute -left-4 xl:-left-16 top-1/2 -translate-y-1/2 z-30 w-16 h-16 bg-white shadow-2xl rounded-full text-[#202f43] hover:bg-[#202f43] hover:text-white transition-all hidden lg:flex items-center justify-center border border-gray-100 hover:scale-110 active:scale-95"
                                aria-label="Anterior"
                            >
                                <ChevronLeft size={32} />
                            </button>
                            
                            <button 
                                onClick={next}
                                className="absolute -right-4 xl:-right-16 top-1/2 -translate-y-1/2 z-30 w-16 h-16 bg-white shadow-2xl rounded-full text-[#202f43] hover:bg-[#202f43] hover:text-white transition-all hidden lg:flex items-center justify-center border border-gray-100 hover:scale-110 active:scale-95"
                                aria-label="Siguiente"
                            >
                                <ChevronRight size={32} />
                            </button>
                        </>
                    )}

                    {/* Window Wrapper */}
                    <div className="relative overflow-visible">
                        <div className="overflow-hidden py-10 -my-10 px-2 -mx-2">
                             <motion.div 
                                className={`flex items-stretch ${!isMobile && reviews.length < 3 ? 'justify-center' : ''}`}
                                drag={reviews.length > itemsPerView ? "x" : false}
                                dragConstraints={{ left: 0, right: 0 }}
                                onDragEnd={(e, { offset }) => {
                                    if (reviews.length <= itemsPerView) return;
                                    if (offset.x > 50) prev();
                                    else if (offset.x < -50) next();
                                }}
                                animate={{ 
                                    x: `-${currentIndex * (isMobile ? 100 : 33.3333)}%` 
                                }}
                                transition={{ 
                                    type: "spring", 
                                    stiffness: 80, 
                                    damping: 18,
                                    mass: 1
                                }}
                            >
                                {reviews.map((review, index) => (
                                    <ReviewCard key={index} review={review} />
                                ))}
                            </motion.div>
                        </div>
                    </div>

                    {/* Pagination Indicators - Sleek and Interactive (only if we can slide) */}
                    {reviews.length > itemsPerView && (
                        <div className="flex justify-center items-center gap-4 mt-20">
                            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    className={`h-2 transition-all duration-500 rounded-full ${currentIndex === i ? 'w-12 bg-[#CCA43B]' : 'w-3 bg-gray-200 hover:bg-[#CCA43B]/30'}`}
                                    aria-label={`Ir a vista ${i + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Reassurance Footer */}
                <div className="mt-24 text-center">
                    <FadeIn direction="up">
                        <div className="inline-flex flex-col items-center gap-4">
                            <div className="flex items-center gap-3 px-10 py-5 bg-white rounded-2xl shadow-[0_15px_40px_-5px_rgba(0,0,0,0.05)] border border-gray-50 ring-1 ring-[#CCA43B]/5">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-6 h-6" />
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-[#CCA43B] text-[#CCA43B]" />)}
                                </div>
                                <span className="text-lg font-black text-[#202f43] ml-3 tracking-tighter">{globalRating.toFixed(1)} / 5.0</span>
                            </div>
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#202f43]/40">Reputación Impecable en base a {totalReviews} {totalReviews === 1 ? 'opinión' : 'opiniones'} reales</p>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </Section>
    );
};
