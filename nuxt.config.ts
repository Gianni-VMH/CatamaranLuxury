// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  // 1. Il modulo
  modules: ['@nuxtjs/sanity'],

  // 2. La configurazione di Sanity (quella che avevi già)
  sanity: {
    projectId: 'mlgxcumg',
    dataset: 'production'
  },

  // 3. AGGIUNTA IMPORTANTE: Configurazione Vite per evitare l'errore EMFILE
  vite: {
    server: {
      watch: {
        usePolling: true, // Forza il controllo periodico invece del controllo nativo del Mac
        interval: 1000
      }
    }
  }
})