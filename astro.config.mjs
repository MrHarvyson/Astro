import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://mrharvyson.github.io',
  base: 'Astro',
  integrations: [tailwind()],
  output: 'server',
  adapter: vercel(),
});