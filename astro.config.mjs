// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Aperçu GitHub Pages : https://cardinalcodes.github.io/cardinalcodes.com/
  // Bascule vers le domaine final : remplacer site par 'https://cardinalcodes.com',
  // supprimer base, puis créer public/CNAME contenant « cardinalcodes.com ».
  site: 'https://cardinalcodes.github.io',
  base: '/cardinalcodes.com',
});
