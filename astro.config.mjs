import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  output: 'static',
  adapter: vercel(),
  site: 'https://better-belt.vercel.app/',
  integrations: [preact()]
});
