/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

//Languages
import { createI18n } from 'vue-i18n'

//Translations
import pt from './locales/pt.json'
import en from './locales/en.json'

const i18n = createI18n({
  locale: 'pt',
  fallbackLocale: 'en',
  messages: {
    pt,
    en
  }
})

const app = createApp(App)

app.use(i18n)

registerPlugins(app)

app.mount('#app')
