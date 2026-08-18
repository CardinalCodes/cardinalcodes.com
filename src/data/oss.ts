import type { L10n, Tag } from '../types';

export interface OssProject {
  name: string;
  url: string;
  tag: Tag;
  text: L10n;
  linkLabel: L10n;
  muted?: boolean;
}

export const ossProjects: OssProject[] = [
  {
    name: 'simpleUx',
    url: 'https://github.com/cardinalcodes/simpleux',
    tag: { en: 'OPEN SOURCE' },
    text: {
      en: 'A user interface and experience overhaul for the SimpleX client — a polished, mainstream UX that preserves strict metadata-free protocol compatibility.',
      fr: 'Refonte ergonomique et d\'interface du client SimpleX — une expérience fluide et grand public qui préserve la compatibilité avec le protocole sans métadonnées.',
    },
    linkLabel: { en: 'SimpleX client fork', fr: 'Fork du client SimpleX' },
  },
  {
    name: 'KronoCal',
    url: 'https://github.com/cardinalcodes/kronocal',
    tag: { en: 'OPEN SOURCE' },
    text: {
      en: 'A sovereign, tracker-free meeting scheduler built as a lightweight, privacy-first alternative to proprietary booking tools.',
      fr: "Alternative libre, souveraine et sans traceur tiers pour la planification de rendez-vous d'équipe.",
    },
    linkLabel: { en: 'Sovereign scheduling', fr: 'Planification souveraine' },
  },
  {
    name: 'KronoTable',
    url: 'https://github.com/cardinalcodes/kronotable',
    tag: { variant: 'accent', en: 'ACTIVE R&D', fr: 'R&D ACTIVE' },
    text: {
      en: 'A high-integrity survey and feedback collection engine, designed for structured data analysis without third-party tracking cookies.',
      fr: 'Moteur de formulaires et d\'analyse de retours structurés, conçu pour une collecte intègre sans cookies tiers.',
    },
    linkLabel: { en: 'Research repository', fr: 'Dépôt de recherche' },
    muted: true,
  },
];
