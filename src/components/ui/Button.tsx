import React from "react";
import Link from "next/link";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for merging tailwind classes (standard practice)
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    href?: string;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = "primary",
    size = "md",
    href,
    className,
    ...props
}) => {
    const baseStyles =
        "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary:
            "bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] text-white hover:opacity-95 bg-[length:200%_200%] transition-all hover:bg-right shadow-md hover:shadow-lg focus:ring-primary/50 border-none",
        secondary:
            "bg-gradient-to-r from-[#f4bf6a] via-[#bb8833] to-[#905c00] text-white hover:opacity-95 bg-[length:200%_200%] transition-all hover:bg-right shadow-md hover:shadow-lg focus:ring-secondary/50 border-none",
        outline:
            "bg-transparent border-2 border-[#102A43] text-[#102A43] hover:bg-[#102A43]/5 focus:ring-[#102A43]/50",
        ghost: "bg-transparent text-gray-700 hover:bg-gray-100 hover:text-[#102A43]",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
        return (
            <Link href={href} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};
