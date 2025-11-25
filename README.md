# Nova Reach - Marketing Agency Website 🚀

Modern, responsive website for Nova Reach marketing agency with automatic video portfolio and Google reviews.

## ✨ Features

- 🎨 **Modern Dark Theme** with gradient accents (#D92282 → #1EBBEC)
- 🌍 **Bilingual** - Bulgarian and English with persistent language selection
- 📱 **Fully Responsive** - Beautiful on all devices
- 🎬 **Auto Video Portfolio** - Fetches from YouTube playlist automatically
- ⭐ **Auto Google Reviews** - Fetches from Google Business Profile automatically
- 📧 **Contact Form** - Integrated with Web3Forms
- ⚡ **Fast & Optimized** - Built with Vite and React
- 🔒 **Secure** - API keys protected server-side

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Internationalization**: i18next + react-i18next
- **Icons**: React Icons
- **Hosting**: Netlify (with serverless functions)
- **APIs**: YouTube Data API v3, Google Places API

## 📁 Project Structure

```
nova-reach-bg/
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── VideoPortfolio.jsx    # Auto-fetches from YouTube
│   │   ├── GoogleReviews.jsx     # Auto-fetches from Google
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── i18n.js              # Localization config
│   ├── App.jsx
│   └── main.jsx
├── netlify/
│   └── functions/           # Serverless functions (secure!)
│       ├── videos.js        # YouTube API integration
│       └── reviews.js       # Google Places API integration
├── public/
│   ├── logo.png
│   └── _redirects           # SPA routing
├── netlify.toml             # Netlify configuration
└── package.json
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/smiliev/nova-reach-bg.git
cd nova-reach-bg

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit: `http://localhost:5174`

### Build for Production

```bash
npm run build
```

Output will be in `dist/` directory.

## 🌐 Deployment

See **[NETLIFY_DEPLOY.md](./NETLIFY_DEPLOY.md)** for complete deployment guide.

### Quick Deploy Steps:

1. **Push to GitHub**
2. **Connect to Netlify** (auto-detects settings from `netlify.toml`)
3. **Add environment variables**:
   - `YOUTUBE_API_KEY` - Your Google API key
4. **Configure function files**:
   - Update `PLACE_ID` in `/netlify/functions/reviews.js`
   - Update `PLAYLIST_ID` in `/netlify/functions/videos.js` (optional)
5. **Deploy!** 🎉

## 🔑 API Setup

### YouTube Videos
1. See **[YOUTUBE_API_SETUP.md](./YOUTUBE_API_SETUP.md)**
2. Get YouTube Data API v3 key
3. Add to Netlify environment variables
4. Update playlist ID in `/netlify/functions/videos.js`

### Google Reviews
1. See **[GOOGLE_REVIEWS_SETUP.md](./GOOGLE_REVIEWS_SETUP.md)**
2. Enable Places API (same key works!)
3. Get your Google Place ID
4. Update Place ID in `/netlify/functions/reviews.js`

## 🌍 Localization

The site supports Bulgarian (bg) and English (en).

**To add new translations:**
1. Edit `/src/i18n.js`
2. Add translations to both `bg` and `en` objects
3. Use in components: `const { t } = useTranslation()` then `{t('key')}`

Language preference is saved in localStorage.

## 📧 Contact Form

Integrated with [Web3Forms](https://web3forms.com/).

**To use your own:**
1. Get free API key from Web3Forms
2. Update in `/src/components/Contact.jsx`:
   ```javascript
   access_key: 'your-web3forms-key'
   ```

## 🎨 Customization

### Colors
Edit `/tailwind.config.js`:
```javascript
colors: {
  'primary-pink': '#D92282',
  'primary-cyan': '#1EBBEC',
  // Add more colors
}
```

### Logo
Replace `/public/logo.png` with your logo.

### Content
- **Hero**: Edit `/src/components/Hero.jsx`
- **Services**: Edit `/src/components/Services.jsx`
- **About**: Edit `/src/components/About.jsx`
- **Contact Info**: Edit `/src/components/Contact.jsx` and `/src/components/Footer.jsx`

## 📊 Performance

- ⚡ Lighthouse Score: 95-100
- ⚡ First Contentful Paint: < 1s
- ⚡ Time to Interactive: < 2s
- 📦 Bundle Size: ~150KB gzipped

## 🔒 Security

- ✅ API keys stored server-side only (Netlify environment variables)
- ✅ No API keys exposed to client
- ✅ Serverless functions handle all external API calls
- ✅ HTTPS enforced (Netlify automatic SSL)

## 🆘 Troubleshooting

### Videos Not Showing?
1. Check `/api/videos` endpoint in browser
2. Verify `YOUTUBE_API_KEY` in Netlify environment variables
3. Check playlist is public
4. View function logs in Netlify dashboard

### Reviews Not Showing?
1. Check `/api/reviews` endpoint in browser
2. Verify Place ID is correct
3. Enable Places API in Google Cloud Console
4. Check function logs in Netlify dashboard

### Build Fails?
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📝 License

Private project for Nova Reach marketing agency.

## 📞 Contact

**Nova Reach**
- 📧 Email: novareach2025@gmail.com
- 📱 Phone: +359 895 613 162
- 📍 Location: Kyustendil, Bulgaria
- 🌐 Website: novareach.bg

## 🙏 Credits

Built with:
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Netlify](https://www.netlify.com/)

---

Made with ❤️ in Bulgaria 🇧🇬
