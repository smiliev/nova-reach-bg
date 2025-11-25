/**
 * Netlify Function to fetch Google Business reviews
 * 
 * Setup:
 * 1. Get your Place ID: https://developers.google.com/maps/documentation/places/web-service/place-id
 * 2. Add GOOGLE_PLACES_API_KEY (or YOUTUBE_API_KEY) to Netlify environment variables
 * 3. Update PLACE_ID below with your actual Place ID
 * 4. This function will be available at: /.netlify/functions/reviews
 * 5. Redirected to: /api/reviews (via netlify.toml)
 */

// Your Google Place ID - REPLACE THIS with your actual Place ID
const PLACE_ID = 'YOUR_PLACE_ID_HERE' // e.g., 'ChIJN1t_tDeuEmsRUsoyG83frY4'

exports.handler = async (event, context) => {
  // Get API key from environment variables (can use same key as YouTube)
  const API_KEY = process.env.GOOGLE_PLACES_API_KEY || process.env.YOUTUBE_API_KEY

  if (!API_KEY) {
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        error: 'Google Places API key not configured' 
      }),
    }
  }

  if (PLACE_ID === 'YOUR_PLACE_ID_HERE') {
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        error: 'Place ID not configured',
        message: 'Please update PLACE_ID in /netlify/functions/reviews.js'
      }),
    }
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

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(responseData),
    }

  } catch (error) {
    console.error('Error fetching Google reviews:', error)
    
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        error: 'Failed to fetch reviews',
        message: error.message 
      }),
    }
  }
}

