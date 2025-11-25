# Netlify Deployment Guide 🚀

Complete guide for deploying Nova Reach website to Netlify with automatic video and review fetching.

---

## 📋 Quick Start

### Step 1: Deploy to Netlify (5 minutes)

#### Option A: Deploy via Git (Recommended)

1. **Push to GitHub** (if not already):
   ```bash
   git add .
   git commit -m "Ready for Netlify deployment"
   git push origin main
   ```

2. **Connect to Netlify**:
   - Go to https://app.netlify.com/
   - Click **"Add new site"** → **"Import an existing project"**
   - Choose **"Deploy with GitHub"**
   - Select repository: `nova-reach-bg`

3. **Configure Build Settings**:
   ```
   Build command:         npm run build
   Publish directory:     dist
   Functions directory:   netlify/functions
   ```

4. **Click "Deploy site"**

Your site is now live at: `https://random-name-123.netlify.app`

#### Option B: Deploy via CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

---

## 🔑 Step 2: Set Up API Keys

### 2.1 Add Environment Variables

1. Go to your Netlify site dashboard
2. Navigate to **Site settings** → **Environment variables**
3. Click **Add a variable** → **Add a single variable**

**Add this variable:**
```
Key:   YOUTUBE_API_KEY
Value: [Your Google API key from Google Cloud Console]
Scopes: Builds and Functions ✅
```

**Optional:** If using separate keys:
```
Key:   GOOGLE_PLACES_API_KEY
Value: [Your Google Places API key]
Scopes: Builds and Functions ✅
```

### 2.2 Get Your API Keys

If you don't have API keys yet, follow these guides:
- **YouTube API**: See `YOUTUBE_API_SETUP.md`
- **Google Places API**: See `GOOGLE_REVIEWS_SETUP.md`

**💡 Pro Tip:** You can use the same Google API key for both services!

---

## 🎬 Step 3: Configure YouTube Playlist

Your playlist is already configured in `/netlify/functions/videos.js`:
```javascript
const PLAYLIST_ID = 'PLMTq9Wf4LYkflR8yXtJEBQ4xwozGgtkLM'
```

**To change it:**
1. Open `/netlify/functions/videos.js`
2. Update line 11 with your YouTube playlist ID
3. Commit and push:
   ```bash
   git add netlify/functions/videos.js
   git commit -m "Update YouTube playlist"
   git push
   ```

Netlify will auto-deploy! 🎉

---

## ⭐ Step 4: Configure Google Reviews

### 4.1 Find Your Place ID

Use Google's Place ID Finder:
https://developers.google.com/maps/documentation/places/web-service/place-id

Search for "Nova Reach Kyustendil" and copy the Place ID.

### 4.2 Update the Function

1. Open `/netlify/functions/reviews.js`
2. Find line 13:
   ```javascript
   const PLACE_ID = 'YOUR_PLACE_ID_HERE'
   ```
3. Replace with your actual Place ID:
   ```javascript
   const PLACE_ID = 'ChIJYourActualPlaceID'
   ```
4. Commit and push:
   ```bash
   git add netlify/functions/reviews.js
   git commit -m "Add Google Place ID"
   git push
   ```

### 4.3 Enable Places API

In Google Cloud Console:
1. Go to **APIs & Services** → **Library**
2. Search for "Places API"
3. Click **Enable**
4. Your existing API key now works for reviews too!

---

## 🧪 Step 5: Test Your APIs

### Test Videos API
Visit: `https://your-site.netlify.app/api/videos`

Expected response:
```json
[
  {
    "id": "abc123",
    "title": "Your Video Title",
    "thumbnail": "https://...",
    "videoUrl": "https://www.youtube.com/embed/abc123",
    "description": "..."
  }
]
```

### Test Reviews API
Visit: `https://your-site.netlify.app/api/reviews`

Expected response:
```json
{
  "reviews": [...],
  "averageRating": 4.8,
  "totalReviews": 12
}
```

### View Function Logs
1. Netlify Dashboard → **Functions** tab
2. Click on `videos` or `reviews`
3. See real-time logs and invocations

---

## 🌐 Step 6: Custom Domain (Optional)

### 6.1 Add Custom Domain

1. In Netlify Dashboard, go to **Domain settings**
2. Click **Add a domain**
3. Enter: `novareach.bg`
4. Follow DNS configuration instructions

### 6.2 Update DNS

Add these records to your domain registrar:

**For Netlify DNS:**
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: your-site.netlify.app
```

**Or use Netlify DNS** (recommended):
- Transfer DNS to Netlify for automatic configuration
- Free SSL included!

---

## 🔒 Security Verification

### Your API Keys Are Secure ✅

**Test it:**
1. Open your website
2. Press F12 → Network tab
3. Load the page
4. Look at requests to `/api/videos` and `/api/reviews`
5. **You should NOT see any API keys!**

**Why it's secure:**
```
Browser (Client-side)
    ↓ fetch('/api/videos')
    ↓ (NO API KEY)
    ↓
Netlify Function (Server-side)
    ↓ process.env.YOUTUBE_API_KEY
    ↓ Calls YouTube API
    ↓ Returns cleaned data
    ↓
Browser receives video JSON
    ✅ (API key never exposed)
```

---

## 📊 How It Works

### Project Structure
```
nova-reach-bg/
├── netlify/
│   └── functions/
│       ├── videos.js      → Serverless function (secure)
│       └── reviews.js     → Serverless function (secure)
├── src/
│   └── components/
│       ├── VideoPortfolio.jsx   → Calls /api/videos
│       └── GoogleReviews.jsx    → Calls /api/reviews
├── netlify.toml           → Configuration
└── package.json
```

### API Routing
```
netlify.toml configures:

/api/videos  →  /.netlify/functions/videos
/api/reviews →  /.netlify/functions/reviews
```

Client code doesn't change! Still uses `/api/videos` and `/api/reviews`.

---

## 🚀 Automatic Deployments

Once connected to GitHub:

- ✅ **Push to main** → Automatic production deploy
- ✅ **Pull Requests** → Automatic preview deploys
- ✅ **Deploy previews** → Test before merging
- ✅ **Deploy notifications** → In GitHub PRs

### Manual Redeploy
1. Netlify Dashboard → **Deploys** tab
2. Click **Trigger deploy** → **Deploy site**

---

## 💰 Costs

### Netlify Free Tier
- ✅ 100 GB bandwidth/month
- ✅ 125,000 function invocations/month
- ✅ Unlimited sites
- ✅ Instant cache invalidation
- ✅ Free SSL

### Google APIs
- **YouTube Data API**: $0 (within free quota)
- **Places API**: $0 (within $200 monthly credit)

**Expected total cost: $0/month** ✅

Your traffic will stay well within free limits!

---

## 🔧 Advanced Configuration

### Adjust Cache Duration

Edit functions to change cache time:

**`/netlify/functions/videos.js`:**
```javascript
'Cache-Control': 'public, max-age=3600' // 1 hour
// Change to:
// 1800  = 30 minutes
// 7200  = 2 hours
// 86400 = 24 hours
```

### Change Playlist

Edit `/netlify/functions/videos.js`:
```javascript
const PLAYLIST_ID = 'YOUR_NEW_PLAYLIST_ID'
```

### Limit Video Count

Change `maxResults`:
```javascript
maxResults=50  // Default: 50 videos
maxResults=20  // Show only 20 newest
```

---

## 🆘 Troubleshooting

### Functions Not Working?

**Check environment variables:**
1. Netlify Dashboard → Site settings → Environment variables
2. Verify `YOUTUBE_API_KEY` is set
3. Scope should include "Functions" ✅

**Redeploy after adding variables:**
1. Go to **Deploys** tab
2. Click **Trigger deploy** → **Clear cache and deploy site**

### API Returns 500 Error?

**Check function logs:**
1. Netlify Dashboard → **Functions** tab
2. Click on the function name
3. View recent invocations and errors

**Common issues:**
- ❌ API key not set
- ❌ API key doesn't have YouTube/Places API enabled
- ❌ Playlist ID is private or incorrect
- ❌ Place ID not updated

### Videos/Reviews Not Showing?

**Test the API directly:**
```bash
# Test videos
curl https://your-site.netlify.app/api/videos

# Test reviews
curl https://your-site.netlify.app/api/reviews
```

**Check browser console:**
1. Open DevTools (F12)
2. Console tab
3. Look for error messages

### Build Fails?

**Check build log:**
1. Netlify Dashboard → Deploys → Failed deploy
2. Read error message

**Common fixes:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Test build locally
npm run build
```

---

## ✅ Deployment Checklist

- [ ] Site deployed to Netlify
- [ ] `YOUTUBE_API_KEY` added to environment variables
- [ ] YouTube playlist ID configured in `/netlify/functions/videos.js`
- [ ] Google Place ID configured in `/netlify/functions/reviews.js`
- [ ] Places API enabled in Google Cloud Console
- [ ] Test `/api/videos` endpoint - returns JSON ✅
- [ ] Test `/api/reviews` endpoint - returns JSON ✅
- [ ] Website loads correctly
- [ ] Videos display in portfolio section
- [ ] Reviews display in reviews section
- [ ] Custom domain configured (optional)
- [ ] SSL certificate active ✅

---

## 📚 Additional Resources

- **Netlify Docs**: https://docs.netlify.com/
- **Netlify Functions**: https://docs.netlify.com/functions/overview/
- **YouTube API Setup**: See `YOUTUBE_API_SETUP.md`
- **Google Reviews Setup**: See `GOOGLE_REVIEWS_SETUP.md`

---

## 🎉 You're All Set!

Your website now:
- ✅ Deploys automatically on every push
- ✅ Fetches videos from YouTube automatically
- ✅ Fetches reviews from Google automatically
- ✅ Keeps API keys secure (server-side only)
- ✅ Caches data for fast loading
- ✅ Updates every hour with fresh content

**No rebuild needed when you add new videos or get new reviews!** 🚀

