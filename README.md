# cardinalcodes.com

Site vitrine de **Cardinal Codes** — studio d'ingénierie systèmes & IA. Direction
« Terminal Couture » : papier ivoire / encre chaude, carmin `#c8102e`, serif
éditorial (Instrument Serif) + mono technique (JetBrains Mono), CSS natif
moderne, zéro framework JS.

## Stack

- [Astro 7](https://docs.astro.build) — build statique, zéro JS côté framework
- [Bun](https://bun.sh) — gestionnaire de paquets et runtime
- Polices auto-hébergées via `@fontsource` (aucune requête tierce)

## Commandes

| Commande           | Action                                              |
| :----------------- | :--------------------------------------------------- |
| `bun install`      | Installe les dépendances                             |
| `bun run dev`      | Serveur de dev sur `localhost:4321`                  |
| `bun run build`    | Build de production dans `./dist/`                   |
| `bun run preview`  | Prévisualise le build localement                     |

## Structure

```text
src/
├── layouts/BaseLayout.astro   # <head> SEO/JSON-LD, script anti-FOUC, polices, shell
├── pages/index.astro          # composition de la page unique
├── styles/global.css          # tokens, base, typo, primitives (cartes, bento, metrics)
├── data/                      # contenu bilingue {en, fr} : nav, principles, cases, services, oss
├── scripts/behaviors.js       # scroll progress, reveal-on-scroll, spotlight curseur
└── components/                # 1 section = 1 composant, styles + scripts co-localisés
```

### Invariants du portage

- **Bilingue** : chaque texte traduit porte `data-en` / `data-fr` ; le toggle
  client (`Header.astro`) permute les nœuds feuilles. Sans `data-fr`, le libellé
  reste identique dans les deux langues.
- **Styles** : chaque composant embarque son bloc `<style is:global>` (styles de
  section + media queries) ; les primitives partagées vivent dans `global.css`.
- **Scripts** : co-localisés dans leurs composants (thème/langue/menu dans
  `Header`, compteurs/gauge dans `PaladinCard`, démo dans `VanguardCard`, pause
  offscreen dans `CaseMarquee`, comportements globaux dans `scripts/behaviors.js`).
- **Marquee** : les cartes d'études de cas sont générées par `map()` depuis
  `src/data/cases.ts` et rendues en 2 sets identiques (boucle 60 fps
  translateX(-50 %)).

## Déploiement — GitHub Pages

Le workflow `.github/workflows/deploy.yml` build et publie à chaque push sur
`main`. Le site est servi sur <https://cardinalcodes.github.io/cardinalcodes.com/>.

> ⚠️ Les Pages depuis un repo **privé** exigent un plan GitHub Team/Enterprise
> pour l'organisation. Tant que l'org est en plan Free, le job de déploiement
> échoue ; il redeviendra fonctionnel dès que le repo passe public ou que l'org
> est upgradée (aucune modification de code nécessaire).

### Bascule vers le domaine final

1. DNS : enregistrer `cardinalcodes.com` (apex) → GitHub Pages (A records ou CNAME flatten).
2. Dans `astro.config.mjs` : `site: 'https://cardinalcodes.com'` et supprimer `base`.
3. Créer `public/CNAME` contenant `cardinalcodes.com`.
4. Redéfinir la Page dans les settings du repo avec le custom domain.

Le canonical (`https://cardinalcodes.com/`) et le JSON-LD pointent déjà vers le
domaine final.
