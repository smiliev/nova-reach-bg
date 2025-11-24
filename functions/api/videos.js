/**
 * Cloudflare Pages Function to fetch YouTube playlist videos
 * 
 * Setup:
 * 1. Add YOUTUBE_API_KEY to Cloudflare Pages environment variables
 * 2. This function will be available at: /api/videos
 */

export async function onRequest(context) {
  const { env } = context
  
  // Your YouTube playlist ID
  const PLAYLIST_ID = 'PLMTq9Wf4LYkflR8yXtJEBQ4xwozGgtkLM'
  
  // Get API key from environment variables
  const API_KEY = env.YOUTUBE_API_KEY
  
  if (!API_KEY) {
    return new Response(
      JSON.stringify({ error: 'YouTube API key not configured' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }

  try {
    // Fetch playlist items from YouTube API
    const youtubeUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${PLAYLIST_ID}&key=${API_KEY}`
    
    const response = await fetch(youtubeUrl)
    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error?.message || 'YouTube API error')
    }

    // Transform YouTube data to our format
    const videos = data.items.map((item, index) => ({
      id: index + 1,
      title: item.snippet.title,
      // Try to get the best quality thumbnail available
      thumbnail: item.snippet.thumbnails.maxresdefault?.url || 
                 item.snippet.thumbnails.high?.url ||
                 item.snippet.thumbnails.medium?.url ||
                 item.snippet.thumbnails.default?.url,
      videoUrl: `https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`,
      description: item.snippet.description || 'Nova Reach project video',
      publishedAt: item.snippet.publishedAt
    }))

    return new Response(JSON.stringify(videos), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
        'Access-Control-Allow-Origin': '*'
      }
    })

  } catch (error) {
    console.error('Error fetching YouTube playlist:', error)
    
    return new Response(
      JSON.stringify({ 
        error: 'Failed to fetch videos',
        message: error.message 
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
}

