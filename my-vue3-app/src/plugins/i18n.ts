import type { App } from 'vue'

// Define the structure for translations
export type TranslationOptions = {
  [key: string]: string | TranslationOptions
}

export default {
  install: (app: App, options: TranslationOptions) => {
    // Inject a globally available $translate method
    app.config.globalProperties.$translate = (key: string): string => {
      // Split the key and traverse the options
      return (
        (key
          .split('.')
          .reduce<
            TranslationOptions | string | undefined
          >((o, i) => (o && typeof o === 'object' ? o[i] : undefined), options) as string) || ''
      )
    }
  },
}

// Extend Vue's ComponentCustomProperties to include the $translate method
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $translate: (key: string) => string
  }
}
