// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://blucatdev.com',
  // Custom domain (CNAME) is served from the repo root, so base stays "/".
  integrations: [sitemap()],
});
