import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    console.error('GOOGLE_PLACES_API_KEY is not defined');
    return NextResponse.json({ reviews: [] }, { status: 200 });
  }

  try {
    const response = await fetch('https://places.googleapis.com/v1/places:searchText', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'places.reviews,places.id',
      },
      body: JSON.stringify({
        textQuery: 'Consultora OC Impulsa',
        languageCode: 'es',
        maxResultCount: 1,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Google Places API error:', errorData);
      return NextResponse.json({ reviews: [] }, { status: 200 });
    }

    const data = await response.json();
    const place = data.places?.[0];

    if (!place || !place.reviews || place.reviews.length === 0) {
      return NextResponse.json({ reviews: [] });
    }

    // Google Places (New) returns reviews in a specific format
    // mapped to a simpler interface for the frontend if needed, 
    // but we can just pass them through or refine them.
    return NextResponse.json({ reviews: place.reviews });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json({ reviews: [] }, { status: 200 });
  }
}
