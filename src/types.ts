/** Paire bilingue rendue en attributs data-en / data-fr (toggle client). */
export interface L10n {
  en: string;
  fr: string;
}

/** Tag de carte ; fr absent = libellé identique dans les deux langues. */
export interface Tag {
  variant?: 'accent' | 'signal';
  en: string;
  fr?: string;
}
