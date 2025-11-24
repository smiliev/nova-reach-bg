/**
 * Cloudflare Pages Function to fetch Google Business reviews
 * 
 * Setup:
 * 1. Create Google Business Profile: https://business.google.com/
 * 2. Get your Place ID: https://developers.google.com/maps/documentation/places/web-service/place-id
 * 3. Add GOOGLE_PLACES_API_KEY to Cloudflare Pages environment variables
 * 4. This function will be available at: /api/reviews
 */

export async function onRequest(context) {
  const { env } = context
  
  // Your Google Place ID - REPLACE THIS with your actual Place ID
  // Get it from: https://developers.google.com/maps/documentation/places/web-service/place-id
  const PLACE_ID = 'YOUR_PLACE_ID_HERE' // e.g., 'ChIJN1t_tDeuEmsRUsoyG83frY4'
  
  // Get API key from environment variables (can use same key as YouTube)
  const API_KEY = env.GOOGLE_PLACES_API_KEY || env.YOUTUBE_API_KEY
  
  if (!API_KEY) {
    return new Response(
      JSON.stringify({ error: 'Google Places API key not configured' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }

  if (PLACE_ID === 'YOUR_PLACE_ID_HERE') {
    return new Response(
      JSON.stringify({ 
        error: 'Place ID not configured',
        message: 'Please update PLACE_ID in /functions/api/reviews.js'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }

  try {
    // Fetch place details including reviews from Google Places API
    const placesUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${API_KEY}`
    
    const response = await fetch(placesUrl)
    const data = await response.json()

    if (!response.ok || data.status !== 'OK') {
      throw new Error(data.error_message || 'Google Places API error')
    }

    const result = data.result

    // Transform Google reviews to our format
    const reviews = (result.reviews || []).map((review, index) => ({
      id: index + 1,
      name: review.author_name,
      rating: review.rating,
      date: review.relative_time_description,
      text: review.text,
      avatar: review.profile_photo_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(review.author_name)}&background=D92282&color=fff`,
      platform: 'google',
      time: review.time // Unix timestamp
    }))

    // Sort by most recent
    reviews.sort((a, b) => b.time - a.time)

    const responseData = {
      reviews: reviews,
      averageRating: result.rating || 0,
      totalReviews: result.user_ratings_total || reviews.length
    }

    return new Response(JSON.stringify(responseData), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
        'Access-Control-Allow-Origin': '*'
      }
    })

  } catch (error) {
    console.error('Error fetching Google reviews:', error)
    
    return new Response(
      JSON.stringify({ 
        error: 'Failed to fetch reviews',
        message: error.message 
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
}

