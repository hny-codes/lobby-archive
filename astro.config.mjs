import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sanity from '@sanity/astro';
import { loadEnv } from 'vite';
import pagefind from 'astro-pagefind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/static';

const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  ''
);

// https://astro.build/config
export default defineConfig({
  site: 'https://lobby-archive.vercel.app/',
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  integrations: [
    tailwind(),
    react(),
    pagefind(),
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
      useCdn: false,
      apiVersion: '2024-07-17',
      studioBasePath: '/admin', // If you want to access the Studio on a route
    }),
    sitemap(),
  ],
});
