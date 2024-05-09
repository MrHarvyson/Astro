import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://mrharvyson.github.io',
  base: '/astro-landing-page',
  integrations: [
    tailwind()],
})