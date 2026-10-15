"use client";

import { useEffect } from "react";
import { pushDataLayer } from "@/lib/analytics";

// Escucha clics en cualquier enlace de WhatsApp (wa.me) o teléfono (tel:) del sitio
// y envía un evento al dataLayer para las conversiones de Google Ads vía GTM.
export const ConversionTracker = () => {
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const link = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
            if (!link) return;

            const href = link.getAttribute("href") || "";
            const pagePath = window.location.pathname;

            if (href.includes("wa.me/") || href.includes("api.whatsapp.com")) {
                pushDataLayer({
                    event: "whatsapp_click",
                    message_content: "WhatsApp Link Click",
                    page_location: pagePath,
                    link_url: href,
                });
            } else if (href.startsWith("tel:")) {
                pushDataLayer({
                    event: "phone_click",
                    page_location: pagePath,
                    link_url: href,
                });
            }
        };

        document.addEventListener("click", handleClick, true);
        return () => document.removeEventListener("click", handleClick, true);
    }, []);

    return null;
};
