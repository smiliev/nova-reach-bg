# Google Reviews API Setup Guide ⭐

This guide will help you set up automatic review fetching from your Google Business Profile.

## 📋 Overview

Your website will automatically fetch reviews from Google Business Profile.
No rebuild needed - reviews update every hour automatically!

---

## 🏢 Step 1: Create Google Business Profile (if you don't have one)

### 1.1 Go to Google Business Profile
https://business.google.com/

### 1.2 Create or Claim Your Business
- Click "Manage now"
- Search for "Nova Reach" or add new business
- Follow the verification process (postcard, phone, email)
- **This can take 1-7 days for verification**

### 1.3 Complete Your Profile
- Add business hours
- Add photos
- Add description
- Add website: novareach.bg
- Add location: Kyustendil, Bulgaria

---

## 🔑 Step 2: Get Google Places API Key (5 minutes)

### 2.1 Go to Google Cloud Console
https://console.cloud.google.com/

### 2.2 Use Same Project as YouTube
- Select your "Nova Reach Website" project
- (Or create new project if you didn't do YouTube setup)

### 2.3 Enable Places API
- Go to: https://console.cloud.google.com/apis/library
- Search for "Places API"
- Click on it → Click "Enable"

### 2.4 Use Existing API Key
- If you already have YouTube API key, you can use the same one!
- Just add Places API to its restrictions

**OR Create New API Key:**
- Go to: https://console.cloud.google.com/apis/credentials
- Click "Create Credentials" → "API Key"
- Copy the API key

### 2.5 Restrict the API Key (Security!)
- Click on your API key
- Under "API restrictions":
  - Select "Restrict key"
  - Check "YouTube Data API v3" (if using for videos too)
  - Check "Places API"
- Under "Application restrictions":
  - Select "HTTP referrers"
  - Add: `*.pages.dev/*` and `novareach.bg/*`
- Click "Save"

---

## 🆔 Step 3: Find Your Place ID (3 minutes)

### Method 1: Place ID Finder Tool
1. Go to: https://developers.google.com/maps/documentation/places/web-service/place-id
2. Click "Place ID Finder"
3. Search for "Nova Reach Kyustendil" or your business address
4. Copy the Place ID (looks like: `ChIJN1t_tDeuEmsRUsoyG83frY4`)

### Method 2: Google Maps
1. Find your business on Google Maps
2. Right-click on your business
3. Click "What's here?"
4. Bottom panel shows coordinates and place info
5. Look for place_id in the URL or use the coordinates in Place ID Finder

### Method 3: API Call (Advanced)
```bash
https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Nova%20Reach%20Kyustendil&inputtype=textquery&fields=place_id&key=YOUR_API_KEY
```

**✅ Save your Place ID!**

---

## ⚙️ Step 4: Update Code with Your Place ID (2 minutes)

### 4.1 Open the reviews function file
`/functions/api/reviews.js`

### 4.2 Replace the Place ID
Find this line (around line 16):
```javascript
const PLACE_ID = 'YOUR_PLACE_ID_HERE'
```

Replace with your actual Place ID:
```javascript
const PLACE_ID = 'ChIJN1t_tDeuEmsRUsoyG83frY4' // Your actual Place ID
```

### 4.3 Commit and push
```bash
git add functions/api/reviews.js
git commit -m "Add Google Place ID for reviews"
git push
```

---

## ☁️ Step 5: Add API Key to Cloudflare (2 minutes)

### 5.1 Go to Cloudflare Dashboard
https://dash.cloudflare.com/

### 5.2 Navigate to Your Pages Project
- Click "Workers & Pages"
- Click on "nova-reach-bg"

### 5.3 Add Environment Variable
- Go to "Settings" tab
- Scroll to "Environment variables"

**If you're using the same API key as YouTube:**
- You're done! The function will use `YOUTUBE_API_KEY`

**If you want separate keys:**
- Click "Add variable"
- Variable name: `GOOGLE_PLACES_API_KEY`
- Value: [Your API key]
- Environment: Production (and Preview)
- Click "Save"

### 5.4 Redeploy
- Go to "Deployments" tab
- Click "..." on latest deployment
- Click "Retry deployment"

**✅ Reviews API is now live!**

---

## 🎯 Step 6: Update Review Link (1 minute)

### 6.1 Get Your Review Link
1. Search your business on Google
2. Your review link format:
   ```
   https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID
   ```

### 6.2 Update in Code
Edit `/src/components/GoogleReviews.jsx`:

Find this line:
```javascript
href="https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review"
```

Replace with:
```javascript
href="https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID"
```

---

## 🔍 Testing

### Test the API Endpoint
Visit: `https://your-site.pages.dev/api/reviews`

You should see JSON response with your reviews:
```json
{
  "reviews": [
    {
      "id": 1,
      "name": "Customer Name",
      "rating": 5,
      "date": "2 weeks ago",
      "text": "Great service!",
      "avatar": "https://...",
      "platform": "google"
    }
  ],
  "averageRating": 4.8,
  "totalReviews": 12
}
```

### Troubleshooting
- **500 Error**: API key not configured or invalid
- **Place ID Error**: Place ID not updated in code
- **Empty Reviews**: No reviews yet, or business not verified
- **ZERO_RESULTS**: Place ID is incorrect

---

## 💰 Costs

### Places API
- **Free tier**: $200 credit/month
- **Place Details**: $0.017 per request
- **With 1-hour cache**: ~24 requests/day = ~$0.40/month
- **Your $200 credit covers**: ~11,000+ requests/month
- **Realistic cost**: $0 (free tier covers it)

### Cloudflare Pages Functions
- **Free tier**: 100,000 requests/day
- **Your usage**: ~1,000-5,000/day
- **Cost**: $0

**Total cost: $0-$0.40/month** ✅

---

## 📊 What Gets Fetched

From Google Business Profile:
- ✅ Reviewer name
- ✅ Star rating (1-5)
- ✅ Review text
- ✅ Profile photo
- ✅ Time posted ("2 weeks ago")
- ✅ Overall business rating
- ✅ Total number of reviews

Sorted by most recent first!

---

## 🔧 Advanced Configuration

### Change Cache Duration
Edit `/functions/api/reviews.js`:
```javascript
'Cache-Control': 'public, max-age=3600' // 1 hour
// Change to:
// 1800 = 30 minutes
// 7200 = 2 hours
// 86400 = 24 hours
```

### Show More/Fewer Reviews
Google API returns 5 most recent reviews by default.
This is a Google limitation - can't be changed without pagination.

### Filter by Rating
Add filter in the function:
```javascript
const reviews = (result.reviews || [])
  .filter(review => review.rating >= 4) // Only 4-5 stars
  .map((review, index) => ({
    // ... rest of code
  }))
```

---

## ✅ Setup Complete!

Your site now automatically fetches reviews from Google:

1. ✅ Google Business Profile created
2. ✅ Places API enabled
3. ✅ Place ID configured in code
4. ✅ API key secured in Cloudflare
5. ✅ Reviews fetch every hour
6. ✅ Loading states and error handling

**Customers leave review → Appears on site automatically!** 🎉

---

## 🆘 Need Help?

**No reviews showing:**
- Verify business is claimed and has reviews
- Check Place ID is correct
- Test `/api/reviews` endpoint directly

**Wrong business showing:**
- Double-check Place ID
- Use Place ID Finder tool to verify

**API errors:**
- Check API key has Places API enabled
- Verify API key in Cloudflare settings
- Check quota limits in Google Cloud Console

**Still need help?**
- Check browser console (F12) for errors
- Verify `/api/reviews` returns data
- Check Cloudflare Functions logs

