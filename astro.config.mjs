import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  base: '/',
  server: {
    host: true,
    port: 81
  },
  integrations: [tailwind()]
});