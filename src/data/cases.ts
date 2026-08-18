import type { L10n, Tag } from '../types';

export interface CaseStudy {
  id: string; // « [ CASE // 01 ] »
  sector: L10n;
  title: L10n;
  text: L10n;
  tags: Tag[];
}

export const cases: CaseStudy[] = [
  {
    id: '[ CASE // 01 ]',
    sector: { en: 'Carrier & Telecom', fr: 'Opérateur & télécom' },
    title: { en: 'Carrier-grade BGP routing & dual-DC resiliency', fr: 'Routage BGP opérateur & résilience bi-datacenter' },
    text: {
      en: 'Engineered a redundant BGP peering topology across two distinct datacenters with /32 RIPE LIR prefix management, maintaining uninterrupted 99.95% service continuity through major transit outages.',
      fr: "Architecture d'une topologie BGP redondante sur deux datacenters distincts avec gestion de préfixes /32 RIPE LIR — 99,95% de continuité de service maintenue malgré des coupures majeures de transit.",
    },
    tags: [
      { en: 'BGP Peering' },
      { en: 'IPv6 /32 LIR' },
      { variant: 'accent', en: '99.95% Uptime' },
    ],
  },
  {
    id: '[ CASE // 02 ]',
    sector: { en: 'Legal & Sensitive Data', fr: 'Juridique & données sensibles' },
    title: { en: 'Sovereign on-premise RAG & PII sanitization', fr: 'RAG souverain on-premise & masquage PII' },
    text: {
      en: 'Deployed a fully air-gapped local LLM stack with Qdrant vector storage and automated PII redaction for confidential document processing — resulting in zero external data exposure.',
      fr: "Déploiement d'une stack LLM locale totalement isolée avec base vectorielle Qdrant et masquage PII automatisé pour le traitement de documents confidentiels — zéro exposition externe des données.",
    },
    tags: [
      { en: 'On-Premise LLM' },
      { en: 'Qdrant Vector DB' },
      { variant: 'accent', en: 'Zero external exposure', fr: 'Zéro exposition externe' },
    ],
  },
  {
    id: '[ CASE // 03 ]',
    sector: { en: 'Healthcare & Compliance', fr: 'Santé & conformité' },
    title: { en: 'Bare-metal Kubernetes & Zero Trust mesh', fr: 'Kubernetes bare-metal & maillage Zero Trust' },
    text: {
      en: 'Migrated cloud workloads to sovereign bare-metal Kubernetes (Talos OS, ArgoCD, StackGres) with an encrypted Zero Trust SD-WAN mesh — cutting operational cloud costs by 32%.',
      fr: 'Migration des charges cloud vers un Kubernetes bare-metal souverain (Talos OS, ArgoCD, StackGres) avec maillage SD-WAN Zero Trust chiffré — 32% de coûts d\'exploitation en moins.',
    },
    tags: [
      { en: 'Talos Linux' },
      { en: 'ArgoCD GitOps' },
      { variant: 'signal', en: '\u221232% Cost' },
    ],
  },
  {
    id: '[ CASE // 04 ]',
    sector: { en: 'Logistics & OCR Processing', fr: 'Logistique & traitement OCR' },
    title: { en: 'Confidential document extraction via PaddleOCR', fr: 'Extraction documentaire confidentielle via PaddleOCR' },
    text: {
      en: 'Engineered a high-throughput, private document parsing engine using PaddleOCR and vector embeddings for multi-language invoice and contract classification.',
      fr: "Moteur d'extraction documentaire privé à haut débit, basé sur PaddleOCR et embeddings vectoriels, pour la classification multilingue de factures et contrats.",
    },
    tags: [
      { en: 'PaddleOCR' },
      { en: 'FastAPI & Rust' },
      { variant: 'accent', en: '> 1,200 docs/min' },
    ],
  },
];
