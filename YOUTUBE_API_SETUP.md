# YouTube API Setup Guide 🎬

**Note:** This guide is for setting up the YouTube API. For deployment instructions:
- **Netlify**: See `NETLIFY_DEPLOY.md`
- **Cloudflare Pages**: See old setup in git history

---

This guide will help you set up automatic video fetching from your YouTube playlist.

## 📋 Overview

Your website will automatically fetch videos from this playlist:
**https://www.youtube.com/playlist?list=PLMTq9Wf4LYkflR8yXtJEBQ4xwozGgtkLM**

No rebuild needed - just add videos to the playlist and they'll appear in ~1 hour (or less if cache expires).

---

## 🔑 Step 1: Get YouTube API Key (5 minutes)

### 1.1 Go to Google Cloud Console
https://console.cloud.google.com/

### 1.2 Create a New Project
- Click "Select a project" → "New Project"
- Name: "Nova Reach Website"
- Click "Create"

### 1.3 Enable YouTube Data API v3
- Go to: https://console.cloud.google.com/apis/library
- Search for "YouTube Data API v3"
- Click on it → Click "Enable"

### 1.4 Create API Key
- Go to: https://console.cloud.google.com/apis/credentials
- Click "Create Credentials" → "API Key"
- Copy the API key (starts with `AIza...`)

### 1.5 Restrict the API Key (Security!)
- Click on your newly created key
- Under "API restrictions":
  - Select "Restrict key"
  - Check only "YouTube Data API v3"
- Under "Application restrictions" (optional but recommended):
  - Select "HTTP referrers"
  - Add: `*.pages.dev/*` and `novareach.bg/*`
- Click "Save"

**✅ Save your API key somewhere safe!**

---

## ☁️ Step 2: Add API Key to Cloudflare Pages (2 minutes)

### 2.1 Go to Cloudflare Dashboard
https://dash.cloudflare.com/

### 2.2 Navigate to Your Pages Project
- Click "Workers & Pages"
- Click on "nova-reach-bg" (your project)

### 2.3 Add Environment Variable
- Go to "Settings" tab
- Scroll to "Environment variables"
- Click "Add variable"

**Production Environment:**
```
Variable name: YOUTUBE_API_KEY
Value: [Paste your API key here]
Environment: Production
```

**Preview Environment (optional):**
- Click "Add variable" again
- Same name and value
- Environment: Preview

- Click "Save"

### 2.4 Redeploy
- Go to "Deployments" tab
- Click "..." on the latest deployment
- Click "Retry deployment"

**✅ Your API is now connected!**

---

## 🎥 Step 3: How to Use

### Adding Videos
1. Go to your YouTube playlist:
   https://www.youtube.com/playlist?list=PLMTq9Wf4LYkflR8yXtJEBQ4xwozGgtkLM
2. Click "Add videos"
3. Add your project videos
4. **That's it!** Videos will appear on your site automatically

### Video Display Order
- Videos appear in playlist order (top to bottom)
- Reorder in YouTube playlist to change website order

### Cache
- Videos are cached for 1 hour
- After adding a video, it may take up to 1 hour to appear
- To force refresh, wait 1 hour or clear Cloudflare cache

---

## 🔍 Testing

### Test the API Endpoint
Visit: `https://your-site.pages.dev/api/videos`

You should see JSON response with your videos:
```json
[
  {
    "id": 1,
    "title": "Video Title",
    "thumbnail": "https://...",
    "videoUrl": "https://youtube.com/embed/...",
    "description": "..."
  }
]
```

### Troubleshooting
- **500 Error**: API key not set or invalid
- **Empty array**: Playlist is empty or ID is wrong
- **Quota exceeded**: You've hit YouTube's daily limit (very rare)

---

## 💰 Costs

### YouTube Data API v3
- **Free tier**: 10,000 quota units/day
- **Playlist fetch**: 1 unit per request
- **Your usage**: ~24 units/day (with 1-hour cache)
- **Cost**: $0 (free forever at your scale)

### Cloudflare Pages Functions
- **Free tier**: 100,000 requests/day
- **Your usage**: ~1,000-5,000 requests/day
- **Cost**: $0 (free tier)

**Total cost: $0** ✅

---

## 📊 Quota Management

Daily quota: 10,000 units
- Playlist fetch: 1 unit
- With 1-hour cache: 24 fetches/day = 24 units
- **You'll use 0.24% of your daily quota**

Even with 10,000 visitors/day, you're still free!

---

## 🔧 Advanced Configuration

### Change Cache Duration
Edit `/functions/api/videos.js`:
```javascript
'Cache-Control': 'public, max-age=3600' // 1 hour
// Change 3600 to:
// 1800 = 30 minutes
// 7200 = 2 hours
// 86400 = 24 hours
```

### Change Playlist
Edit `/functions/api/videos.js`:
```javascript
const PLAYLIST_ID = 'YOUR_NEW_PLAYLIST_ID'
```

### Fallback Videos
Edit `/src/components/VideoPortfolio.jsx`:
```javascript
const fallbackVideos = [
  // Add your fallback videos here
]
```

---

## ✅ Setup Complete!

Your site now automatically fetches videos from YouTube:

1. ✅ API key secured in Cloudflare
2. ✅ Function deployed at `/api/videos`
3. ✅ Frontend fetches and displays videos
4. ✅ Loading states and error handling
5. ✅ Fallback for offline mode

**Just add videos to YouTube → They appear on your site!** 🎉

---

## 🆘 Need Help?

**Error messages:**
- Check browser console (F12)
- Check `/api/videos` endpoint directly
- Verify API key in Cloudflare settings

**Videos not showing:**
- Wait 1 hour for cache to expire
- Check playlist is public
- Verify API key has YouTube Data API enabled

**Quota exceeded (rare):**
- Check https://console.cloud.google.com/apis/api/youtube.googleapis.com/quotas
- Increase cache duration to reduce requests

