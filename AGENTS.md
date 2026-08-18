# AGENTS.md

Site vitrine Cardinal Codes — Astro 7 + Bun, page unique, bilingue EN/FR.

## Commandes

- `bun install` puis `bun run dev` (dev), `bun run build` (dist), `bun run preview`.
- Serveur dev en arrière-plan : `astro dev --background`, puis `astro dev status/logs/stop`.

## Invariants à préserver lors des modifications

- Bilingue : attributs `data-en` / `data-fr` sur les nœuds feuilles ; toggle client
  dans le script de `src/components/Header.astro` (sans `data-fr` = libellé invariant).
- 1 section = 1 composant Astro, styles de section dans un bloc `<style is:global>`
  co-localisé ; primitives partagées (cartes, bento, metrics, tokens) dans
  `src/styles/global.css`.
- Scripts clients co-localisés dans leurs composants ; comportements globaux dans
  `src/scripts/behaviors.js`.
- Contenu éditorial dans `src/data/*.ts` (paires {en, fr}).
- Déploiement GitHub Pages via `.github/workflows/deploy.yml` ; voir README pour
  la bascule vers le domaine cardinalcodes.com.
