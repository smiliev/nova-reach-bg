import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This allows access from network IP (dev only)
    port: 5174,
  },
  preview: {
    host: true, // Also expose preview server to network
    port: 4173,
  },
  build: {
    outDir: 'dist',
    sourcemap: false, // Set to true if you want source maps in production
    minify: 'esbuild', // Fast minification
  },
})

