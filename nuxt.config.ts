// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  // 1. Il modulo
  modules: ['@nuxtjs/sanity'],

  // 2. La configurazione
  sanity: {
    projectId: 'mlgxcumg',
    dataset: 'production'
  }
})