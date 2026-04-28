import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const envPlaceId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey) {
    console.error('GOOGLE_PLACES_API_KEY is not defined');
    return NextResponse.json({ reviews: [] }, { status: 200 });
  }

  try {
    // We use the Old API for compatibility with the provided key
    let targetPlaceId = envPlaceId && envPlaceId.startsWith('ChIJ') ? envPlaceId : null;

    if (!targetPlaceId) {
      // Search specifically for the business in Chile.
      // We use a very specific query to avoid the Mexican business.
      const query = "Consultora OC Impulsa Chile";
      const searchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(query)}&key=${apiKey}&language=es`;
      
      const searchResponse = await fetch(searchUrl);
      const searchData = await searchResponse.json();

      if (searchData.status === 'OK' && searchData.results && searchData.results.length > 0) {
        // FILTER: Ensure the business is in CHILE and NOT in Mexico
        const chileResults = searchData.results.filter((r: any) => 
          r.formatted_address.toLowerCase().includes('chile') &&
          !r.formatted_address.toLowerCase().includes('mexico') &&
          !r.formatted_address.toLowerCase().includes('méxico')
        );

        if (chileResults.length > 0) {
          targetPlaceId = chileResults[0].place_id;
        } else {
          // If no Chile match found in results, we don't want to show Mexico's reviews
          console.log('No Chile match found in search results');
          return NextResponse.json({ reviews: [] });
        }
      }
    }

    if (!targetPlaceId) {
        return NextResponse.json({ reviews: [] });
    }

    // Get details including reviews
    const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${targetPlaceId}&fields=reviews,rating,user_ratings_total,name&key=${apiKey}&language=es`;
    
    const detailsResponse = await fetch(detailsUrl);
    const detailsData = await detailsResponse.json();

    if (detailsData.status !== 'OK' || !detailsData.result || !detailsData.result.reviews) {
      return NextResponse.json({ reviews: [] });
    }

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
