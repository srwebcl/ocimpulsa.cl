type DataLayerEvent = Record<string, unknown> & { event: string };

declare global {
    interface Window {
        dataLayer?: unknown[];
    }
}

// Siempre encola el evento: si GTM aún no cargó, lo procesará al iniciar.
export const pushDataLayer = (payload: DataLayerEvent) => {
    if (typeof window === "undefined") return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);
};
