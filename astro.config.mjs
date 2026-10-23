// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/*
 * Public URL of the site, used for canonical links, Open Graph tags,
 * the sitemap and robots.txt.
 *
 * When you connect a custom domain, put it here, for example:
 *   const CUSTOM_DOMAIN = 'https://your-domain.com';
 *
 * Until then the URL is resolved automatically:
 *   1. a SITE_URL environment variable, if you set one;
 *   2. on Vercel, the project's production domain (provided at build time);
 *   3. otherwise http://localhost:4321 for local builds.
 */
const CUSTOM_DOMAIN = '';

const site =
  CUSTOM_DOMAIN ||
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:4321');

export default defineConfig({
  site,

  // Clean URLs without trailing slashes: /about, /blog, /explorations.
  // Pairs with "cleanUrls" and "trailingSlash" in vercel.json.
  trailingSlash: 'never',
  build: {
    format: 'file',
    // The stylesheet is small (about 2 KB compressed), so it is inlined into
    // each page to avoid an extra render-blocking request.
    inlineStylesheets: 'always',
  },

  integrations: [sitemap()],

  // Self-hosted variable fonts, taken from the installed Fontsource packages at
  // build time: no requests to third-party font services. Astro also generates
  // size-matched fallback fonts so text does not jump when the fonts load.
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Inter',
      cssVariable: '--font-sans',
      fallbacks: ['sans-serif'],
      options: {
        variants: [
          {
            src: ['@fontsource-variable/inter/files/inter-latin-wght-normal.woff2'],
            weight: '100 900',
            style: 'normal',
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Newsreader',
      cssVariable: '--font-serif',
      fallbacks: ['serif'],
      options: {
        variants: [
          {
            src: ['@fontsource-variable/newsreader/files/newsreader-latin-wght-normal.woff2'],
            weight: '200 800',
            style: 'normal',
          },
        ],
      },
    },
  ],
});
