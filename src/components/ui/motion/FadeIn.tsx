"use client";

import { motion, useInView, UseInViewOptions } from "framer-motion";
import { useRef } from "react";

interface FadeInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    fullWidth?: boolean;
    // Helper to trigger only once
    once?: boolean;
}

export const FadeIn = ({
    children,
    className = "",
    delay = 0,
    duration = 0.5,
    direction = "up",
    fullWidth = false,
    once = true,
}: FadeInProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: "-50px 0px" });

    const getDirectionOffset = () => {
        switch (direction) {
            case "up": return { y: 40, x: 0 };
            case "down": return { y: -40, x: 0 };
            case "left": return { x: 40, y: 0 }; // enters from right to left
            case "right": return { x: -40, y: 0 }; // enters from left to right
            case "none": return { x: 0, y: 0 };
            default: return { y: 40, x: 0 };
        }
    };

    const initial = { opacity: 0, ...getDirectionOffset() };
    const animate = isInView ? { opacity: 1, x: 0, y: 0 } : initial;

    return (
        <div ref={ref} className={fullWidth ? "w-full" : undefined}>
            <motion.div
                initial={initial}
                animate={animate}
                transition={{
                    duration,
                    delay,
                    ease: [0.21, 0.47, 0.32, 0.98], // Custom spring-like easing
                }}
                className={className}
            >
                {children}
            </motion.div>
        </div>
    );
};
