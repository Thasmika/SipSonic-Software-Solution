import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { generatePages } from './scripts/pages.mjs'

// Full public address of the site, used for canonical links, social previews and the sitemap.
// Keep the trailing slash.
const SITE_URL = process.env.SITE_URL || 'https://sipsonic.com.lk/'

// One HTML file per page (Home, Services, Products, each product, About, Contact, ...).
const input = generatePages(SITE_URL)

export default defineConfig({
  // Served from the root of the custom domain (sipsonic.com.lk), so the base is always /
  base: '/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      input,
      output: {
        // Keep the 3D libraries in their own chunk so only the home page (3D hero) downloads them.
        // Everything else from node_modules (React, Framer Motion...) goes in 'vendor', so React is
        // never bundled inside the 3D chunk (which would force every page to download it).
        manualChunks(id) {
          if (/node_modules[\\/](three|@react-three|three-stdlib|maath|troika|meshline|camera-controls|@monogrid|stats)/.test(id)) return 'three'
          if (id.includes('node_modules') || id.includes('commonjsHelpers') || id.includes('preload-helper')) return 'vendor'
        },
      },
    },
  },
})
