export const languages = {
  en: 'English',
  fr: 'Français',
  'pt-br': 'Português (BR)',
} as const;

export const languageCodes = {
  en: 'EN',
  fr: 'FR',
  'pt-br': 'PT',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'blog.readMore': 'Read more',
    'blog.notAvailable': 'This post is not yet available in this language.',
    'blog.backToBlog': 'Back to blog',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'blog.readMore': 'Lire la suite',
    'blog.notAvailable': "Cet article n'est pas encore disponible dans cette langue.",
    'blog.backToBlog': 'Retour au blog',
  },
  'pt-br': {
    'nav.home': 'Início',
    'nav.blog': 'Blog',
    'nav.contact': 'Contato',
    'blog.readMore': 'Leia mais',
    'blog.notAvailable': 'Este post ainda não está disponível neste idioma.',
    'blog.backToBlog': 'Voltar ao blog',
  },
} as const;
