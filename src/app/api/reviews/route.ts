import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey) {
    console.error('GOOGLE_PLACES_API_KEY is not defined');
    return NextResponse.json({ reviews: [] }, { status: 200 });
  }

  try {
    // The current API Key is blocked for the "Places API (New)" but works for the "Old API".
    // We switch to the Old API format for compatibility.
    
    // Strategy: 
    // 1. If we have a Place ID (starts with ChIJ), use it directly.
    // 2. Otherwise, search by name + city to be as specific as possible.
    
    let targetPlaceId = placeId && placeId.startsWith('ChIJ') ? placeId : null;

    if (!targetPlaceId) {
      // Search for the specific business in Ovalle, Chile to avoid confusion with Mexico.
      const query = "Consultora OC Impulsa Chile";
      const searchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(query)}&key=${apiKey}&language=es`;
      
      const searchResponse = await fetch(searchUrl);
      const searchData = await searchResponse.json();

      if (searchData.status === 'OK' && searchData.results && searchData.results.length > 0) {
        // Find the one that is likely in Chile
        const chileResult = searchData.results.find((r: any) => 
          r.formatted_address.toLowerCase().includes('chile')
        );
        targetPlaceId = (chileResult || searchData.results[0]).place_id;
      }
    }

    if (!targetPlaceId) {
        console.error('No Place ID found and search failed');
        return NextResponse.json({ reviews: [] });
    }

    // Fetch details including reviews
    const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${targetPlaceId}&fields=reviews,rating,user_ratings_total,name&key=${apiKey}&language=es`;
    
    const detailsResponse = await fetch(detailsUrl);
    const detailsData = await detailsResponse.json();

    if (detailsData.status !== 'OK' || !detailsData.result) {
      console.error('Google Place Details failed:', detailsData.status);
      return NextResponse.json({ reviews: [] });
    }

    if (!detailsData.result.reviews || detailsData.result.reviews.length === 0) {
      console.log('No reviews found for this place');
      return NextResponse.json({ reviews: [] });
    }

    // Map to frontend format
    const mappedReviews = detailsData.result.reviews.map((r: any) => ({
      authorAttribution: {
        displayName: r.author_name,
        photoUri: r.profile_photo_url
      },
      rating: r.rating,
      relativePublishTimeDescription: r.relative_time_description,
      text: {
        text: r.text
      }
    }));

    return NextResponse.json({ reviews: mappedReviews });

  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json({ reviews: [] }, { status: 200 });
  }
}
