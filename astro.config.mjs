import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import fs from 'fs';
import path from 'path';

// Zajištění automatického stažení loga Visegrad Fund
const logoPath = path.resolve('public/assets/visegrad-logo.jpg');
if (!fs.existsSync(logoPath)) {
  const assetsDir = path.dirname(logoPath);
  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
  }
  console.log('Stahuji logo Visegrad Fund...');
  try {
    const response = await fetch('https://upload.wikimedia.org/wikipedia/commons/2/20/Logo_of_the_International_Visegrad_Fund_%28visegrad-fund-logo-supported-by%29.jpg');
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const buffer = await response.arrayBuffer();
    fs.writeFileSync(logoPath, Buffer.from(buffer));
    console.log('Logo Visegrad Fund staženo úspěšně.');
  } catch (err) {
    console.error('Chyba při stahování loga Visegrad Fund:', err);
  }
}

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