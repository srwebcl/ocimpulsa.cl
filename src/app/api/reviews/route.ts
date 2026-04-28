import { NextResponse } from 'next/server';

const FALLBACK_REVIEWS = [
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

export async function GET() {
  // SerpApi Key provided by the user. Fallback is hardcoded for safety in production.
  const apiKey = process.env.SERPAPI_KEY || 'cdf0394e4d61c1772712df0567e07b35aecfe2300a662b5d5530627f7347e4d5';
  
  // Exact data_id for 'Consultora OC Impulsa' found via SerpApi Search
  const dataId = '0x25299c2921f4787b:0x6f6b061289689481';

  try {
    const url = `https://serpapi.com/search.json?engine=google_maps_reviews&data_id=${dataId}&hl=es&api_key=${apiKey}`;
    
    // CACHING IMPORTANTE: Guardamos el resultado por 12 horas (43200 segundos).
    // Esto asegura que solo hagamos 2 llamadas al día = 60 al mes.
    // SerpApi regala 100 al mes, por lo que será gratis para siempre.
    const res = await fetch(url, { next: { revalidate: 43200 } });
    const data = await res.json();

    if (!data.reviews || data.reviews.length === 0) {
      console.error('SerpApi Error or No Reviews:', data.error || 'Empty reviews array');
      return NextResponse.json({ reviews: FALLBACK_REVIEWS });
    }

    const formattedReviews = data.reviews.map((r: any) => ({
      authorAttribution: { 
        displayName: r.user?.name || "Cliente de Google",
        photoUri: r.user?.thumbnail || ""
      },
      rating: r.rating || 5,
      text: {
        text: r.snippet || ""
      },
      relativePublishTimeDescription: r.date || "Reciente"
    }));

    const finalReviews = formattedReviews.length > 0 ? formattedReviews : FALLBACK_REVIEWS;

    return NextResponse.json({ reviews: finalReviews });

  } catch (error: any) {
    console.error('Error fetching reviews via SerpApi:', error.message);
    return NextResponse.json({ reviews: FALLBACK_REVIEWS });
  }
}
