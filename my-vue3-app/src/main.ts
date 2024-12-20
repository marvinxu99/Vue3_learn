import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import i18nPlugin from './plugins/i18n'
import { translations } from '@/constants/translations'

const app = createApp(App)

app.use(i18nPlugin, translations)

app.use(createPinia())
app.use(router)

app.mount('#app')
