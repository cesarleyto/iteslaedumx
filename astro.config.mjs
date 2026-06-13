// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Pon tu dominio aquí
  site: 'https://www.itesla.edu.mx',

  integrations: [sitemap()]
});