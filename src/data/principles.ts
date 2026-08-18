import type { L10n } from '../types';

export interface Principle {
  num: string;
  title: L10n;
  text: L10n;
}

export const principles: Principle[] = [
  {
    num: '01',
    title: { en: 'Data Sovereignty & Privacy', fr: 'Souveraineté & protection des données' },
    text: {
      en: 'Complete data retention, local AI inference on your own servers, and zero reliance on black-box third-party dependencies.',
      fr: "Maîtrise totale de vos données, inférence IA locale sur vos serveurs et indépendance vis-à-vis des dépendances tierces opaques.",
    },
  },
  {
    num: '02',
    title: { en: 'Architectural Rigor', fr: 'Rigueur architecturale' },
    text: {
      en: 'End-to-end Zero Trust security, applied from BGP network routing down to LLM token-stream filtering.',
      fr: "Sécurité Zero Trust de bout en bout, appliquée du routage réseau BGP jusqu'au filtrage des flux de tokens LLM.",
    },
  },
  {
    num: '03',
    title: { en: 'Cost Efficiency & Control', fr: 'Efficience & maîtrise des coûts' },
    text: {
      en: 'Pragmatic engineering focused on eliminating cloud waste, reducing operational overhead, and delivering high ROI.',
      fr: "Ingénierie pragmatique visant à éliminer le gaspillage cloud, réduire les charges d'exploitation et optimiser votre ROI.",
    },
  },
];
