// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  
  i18n: {
    defaultLocale: 'cs',
    locales: ['cs', 'en', 'pl'],
    routing: {
      prefixDefaultLocale: false,
    }
  },
});