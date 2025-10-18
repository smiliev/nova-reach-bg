# Deployment Guide - Cloudflare Pages

## Quick Deploy via GitHub (Recommended)

### 1. Push to GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 2. Cloudflare Pages Setup
1. Go to https://dash.cloudflare.com/
2. Navigate to **Workers & Pages** → **Create application** → **Pages**
3. Click **Connect to Git**
4. Select your repository: `nova-reach-bg`
5. Configure build settings:

```
Framework preset:        Vite
Build command:           npm run build
Build output directory:  dist
Root directory:          /
Node version:            18
```

6. Click **Save and Deploy**

### 3. Done! 🎉
Your site will be live at: `https://nova-reach-bg.pages.dev`

## Deploy via Wrangler CLI

### First Time Setup
```bash
# Install Wrangler globally
npm install -g wrangler

# Login to Cloudflare
wrangler login
```

### Deploy
```bash
# Build and deploy in one command
npm run deploy
```

## Custom Domain Setup

### After First Deployment:
1. Go to your Cloudflare Pages project
2. Click **Custom domains**
3. Click **Set up a custom domain**
4. Enter: `novareach.bg` or `www.novareach.bg`
5. Follow DNS instructions

Cloudflare will automatically provide:
- ✅ Free SSL certificate
- ✅ CDN (Content Delivery Network)
- ✅ DDoS protection
- ✅ Automatic HTTPS

## Files Added for Deployment

1. **`public/_redirects`** - SPA routing support
2. **`wrangler.toml`** - Cloudflare configuration
3. **`public/Untitled-2 copy.png`** - Logo in public folder

## Environment Variables (if needed)

If you add API keys or environment variables later:

1. Go to Cloudflare Pages project
2. Click **Settings** → **Environment variables**
3. Add variables for:
   - `VITE_API_URL`
   - `VITE_CONTACT_EMAIL`
   - etc.

## Automatic Deployments

Once connected to GitHub, Cloudflare Pages automatically:
- ✅ Deploys on every push to `main`
- ✅ Creates preview deployments for Pull Requests
- ✅ Provides deployment status in GitHub

## Build Output

After `npm run build`, you'll have:
```
dist/
├── assets/
│   ├── index-[hash].css    (~50KB minified)
│   ├── index-[hash].js     (~100-150KB minified)
│   └── Untitled-2 copy.png
├── _redirects
└── index.html
```

## Troubleshooting

### Build fails on Cloudflare?
Make sure Node version is set to 18 in environment variables:
```
NODE_VERSION = 18
```

### 404 errors when refreshing?
The `_redirects` file should handle this. Verify it's in `public/_redirects`.

### Logo not showing?
Logo is in `public/` folder and accessible at `/Untitled-2 copy.png`.

## Performance

Expected performance on Cloudflare Pages:
- ⚡ 100/100 Lighthouse score
- ⚡ < 1s page load time
- ⚡ Global CDN (300+ locations)
- ⚡ Free bandwidth (unlimited)

## Cost

**Free tier includes:**
- Unlimited bandwidth
- Unlimited requests
- 500 builds per month
- 1 concurrent build

Perfect for this project! 🎉

