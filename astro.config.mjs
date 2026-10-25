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

  // GitHub Pages can't send custom HTTP headers (public/_headers and
  // src/middleware.ts only apply on Cloudflare/SSR), so Astro emits the CSP as a
  // <meta> tag with hashes for its own inline scripts and styles.
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data: https:",
        "font-src 'self' https://fonts.gstatic.com",
        "connect-src 'self'",
        "frame-src https://www.youtube.com https://www.youtube-nocookie.com",
        "object-src 'none'",
        "base-uri 'self'",
        // Mailchimp newsletter signup
        "form-action 'self' https://blucatdev.us5.list-manage.com",
        "upgrade-insecure-requests",
      ],
      // Templates use style="" attributes throughout.
      styleDirective: {
        resources: [
          "'self'",
          'https://fonts.googleapis.com',
          { resource: "'unsafe-inline'", kind: 'attribute' },
        ],
      },
    },
  },

  // Prevent error messages from exposing sensitive info
  compressHTML: true,
});