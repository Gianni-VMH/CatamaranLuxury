// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: ['@nuxtjs/sanity'],

  sanity: {
    projectId: 'mlgxcumg',
    dataset: 'production'
  },

  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 1000,
        ignored: ['**/node_modules', '**/.nuxt', '**/.git']
      }
    },
    // CONFIGURAZIONE SISTEMA FILE (Importante)
    publicDir: 'public'
  }
})