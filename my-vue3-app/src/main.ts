import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import i18nPlugin from './plugins/i18n'
import { translations } from '@/constants/translations'

const app = createApp(App)

app.config.errorHandler = (err, instance, info) => {
  // Log the error
  console.error(`Error: ${err}`)
  console.error(`Info: ${info}`)

  // Example: Send error to a tracking service
  // sendToTrackingService(err, info);
}

app.use(i18nPlugin, translations)

app.use(createPinia())
app.use(router)

app.mount('#app')
