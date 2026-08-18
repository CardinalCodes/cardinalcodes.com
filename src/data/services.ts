import type { L10n, Tag } from '../types';

export interface Service {
  idx: string;
  icon: string; // attribut d d'un path 24×24
  title: L10n;
  text: L10n;
  tag: Tag;
}

export const services: Service[] = [
  {
    idx: '01',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
    title: { en: 'Cloud & Infrastructure Cost Audit', fr: 'Audit & optimisation des coûts cloud' },
    text: {
      en: 'In-depth architectural review to eliminate cloud waste, refactor software bottlenecks and transition workloads to sovereign or bare-metal setups — with up to 30%+ cost reduction.',
      fr: "Audit architectural complet pour éliminer le gaspillage cloud, réusiner les goulots d'étranglement et migrer vers du bare-metal souverain — avec jusqu'à 30%+ d'économies.",
    },
    tag: { variant: 'signal', en: 'Cost reduction focus', fr: 'Cible : réduction des coûts' },
  },
  {
    idx: '02',
    icon: 'M19.428 15.428a2 2 0 0 0-1.022-.547l-2.387-.477a6 6 0 0 0-3.86.517l-.318.158a6 6 0 0 1-3.86.517L6.05 15.21a2 2 0 0 0-1.806.547M8 4h8l-1 1v5.172a2 2 0 0 0 .586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 0 0 9 10.172V5L8 4Z',
    title: { en: 'Sovereign LLM Architecture', fr: 'Architecture IA & LLM souveraine' },
    text: {
      en: 'End-to-end design and deployment of private RAG pipelines, on-premise model serving, OCR document extraction and zero-leak PII sanitization layers.',
      fr: 'Conception et déploiement de pipelines RAG privés, inférence de modèles on-premise, extraction OCR documentaire et couches de masquage PII zéro fuite.',
    },
    tag: { variant: 'accent', en: '100% ON-PREMISE / AIR-GAPPED' },
  },
  {
    idx: '03',
    icon: 'M5 12h14M12 5l7 7-7 7',
    title: { en: 'Private Cloud Operations & MCO', fr: 'Opérations cloud privé & MCO' },
    text: {
      en: 'Bare-metal Kubernetes deployments (Talos OS, ArgoCD, StackGres), virtualized clusters and continuous maintenance for mission-critical production environments.',
      fr: 'Déploiements Kubernetes bare-metal (Talos OS, ArgoCD, StackGres), clusters virtualisés et maintien en conditions opérationnelles pour la production critique.',
    },
    tag: { en: '24/7 SLA operations', fr: 'Opérations SLA 24/7' },
  },
  {
    idx: '04',
    icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3Z',
    title: { en: 'Crisis Leadership & Post-Mortem', fr: 'Gestion de crise & post-mortem' },
    text: {
      en: 'Crisis cell command during major outages or security incidents, rapid service restoration under strict SLAs and transparent root-cause post-mortem reporting.',
      fr: "Conduite de cellule de crise lors d'incidents majeurs, rétablissement rapide sous SLA strict et rapports post-mortem transparents sur les causes racines.",
    },
    tag: { variant: 'accent', en: 'Incident recovery', fr: "Rétablissement d'incident" },
  },
];
