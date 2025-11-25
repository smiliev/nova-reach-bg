/**
 * Netlify Function to fetch YouTube playlist videos
 * 
 * Setup:
 * 1. Add YOUTUBE_API_KEY to Netlify environment variables
 * 2. Update PLAYLIST_ID below with your YouTube playlist ID
 * 3. This function will be available at: /.netlify/functions/videos
 * 4. Redirected to: /api/videos (via netlify.toml)
 */

const PLAYLIST_ID = 'PLMTq9Wf4LYkflR8yXtJEBQ4xwozGgtkLM' // Your YouTube Playlist ID

exports.handler = async (event, context) => {
  // Get API key from environment variables
  const API_KEY = process.env.YOUTUBE_API_KEY

  if (!API_KEY) {
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        error: 'YOUTUBE_API_KEY is not set in environment variables.' 
      }),
    }
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${PLAYLIST_ID}&key=${API_KEY}`
    )

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`YouTube API error: ${response.status} - ${errorText}`)
    }

    const data = await response.json()

    const videos = data.items.map((item) => ({
      id: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      thumbnail: 
        item.snippet.thumbnails.maxresdefault?.url || 
        item.snippet.thumbnails.high?.url || 
        item.snippet.thumbnails.medium?.url || '',
      videoUrl: `https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`,
      description: item.snippet.description,
    }))

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(videos),
    }
  } catch (error) {
    console.error('Error fetching YouTube videos:', error)
    
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        error: error.message 
      }),
    }
  }
}

