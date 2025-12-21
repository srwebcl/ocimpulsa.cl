import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.ocimpulsa.cl';

    // Core Landing Pages (High Priority)
    const landings = [
        '', // Home
        '/formalizacion',
        '/planes-contables',
        '/tributaria',
        '/digital',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1.0 : 0.9,
    }));

    // Corporate Pages (Medium Priority)
    const corporate = [
        '/nosotros',
        '/contacto',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // Legal Pages (Low Priority)
    const legal = [
        '/politica-cookies',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'yearly' as const,
        priority: 0.3,
    }));

    return [...landings, ...corporate, ...legal];
}
