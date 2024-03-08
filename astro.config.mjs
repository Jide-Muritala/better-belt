import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  site: "https://better-belt.vercel.app/",
  integrations: [preact()]
});