// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  
  i18n: {
    defaultLocale: 'cs',
    locales: ['cs', 'en', 'pl'],
    routing: {
      prefixDefaultLocale: false,
    }
  },

  vite: {
    plugins: [tailwindcss()]
  },
});