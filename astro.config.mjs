import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import preact from "@astrojs/preact";


export default defineConfig({
  output: "server",
  adapter: vercel(),
  site: "https://better-belt.vercel.app/",
  integrations: [preact()]
});