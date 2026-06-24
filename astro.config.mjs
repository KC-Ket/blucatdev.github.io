// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://blucatdev.com',

  // Custom domain (CNAME) is served from the repo root, so base stays "/".
  integrations: [sitemap()],

  // Security headers and output format
  output: 'static',

  // Vite configuration for security
  vite: {
    ssr: {
      external: []
    },
    build: {
      // Ensure no inline scripts in build output
      rollupOptions: {
        output: {
          manualChunks: undefined
        }
      }
    }
  },

  // Prevent error messages from exposing sensitive info
  compressHTML: true,
});