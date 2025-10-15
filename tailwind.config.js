/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          pink: '#D92282',
          cyan: '#1EBBEC',
        },
        dark: {
          900: '#0a0a0a',
          800: '#121212',
          700: '#1a1a1a',
          600: '#2a2a2a',
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #D92282 0%, #1EBBEC 100%)',
        'gradient-primary-r': 'linear-gradient(135deg, #1EBBEC 0%, #D92282 100%)',
      }
    },
  },
  plugins: [],
}

