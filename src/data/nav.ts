export interface NavLink {
  href: string;
  id: string;
  en: string;
  fr: string;
}

export const navLinks: NavLink[] = [
  { href: '#platforms', id: 'platforms', en: 'Platforms', fr: 'Plateformes' },
  { href: '#advisory', id: 'advisory', en: 'Services', fr: 'Services' },
  { href: '#cases', id: 'cases', en: 'Case Studies', fr: 'Études de cas' },
  { href: '#open-source', id: 'open-source', en: 'Open Source', fr: 'Open Source' },
];
