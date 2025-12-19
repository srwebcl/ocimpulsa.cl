import React from "react";
import { cn } from "./Button";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
    id?: string;
    background?: "white" | "gray" | "dark";
}

export const Section: React.FC<SectionProps> = ({
    children,
    className,
    id,
    background = "white",
    ...props
}) => {
    const bgColors = {
        white: "bg-white",
        gray: "bg-gray-50",
        dark: "bg-gray-900 text-white",
    };

    return (
        <section
            id={id}
            className={cn("py-16 md:py-24", bgColors[background], className)}
            {...props}
        >
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                {children}
            </div>
        </section>
    );
};
