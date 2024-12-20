import type { TranslationOptions } from '@/plugins/i18n'

// Provide translation data
export const translations: TranslationOptions = {
  en: {
    greeting: 'Hello',
    nested: {
      welcome: 'Welcome to our app!',
    },
  },
  fr: {
    greeting: 'Bonjour',
    nested: {
      welcome: 'Bienvenue dans notre application!',
    },
  },
}
