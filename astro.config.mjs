import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  i18n: {
    defaultLocale: 'cs',
    locales: ['cs', 'en', 'pl'],
    routing: {
      prefixDefaultLocale: false,
    }
  },
});