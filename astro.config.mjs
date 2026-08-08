// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://franzejr.github.io',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'pt-br'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
