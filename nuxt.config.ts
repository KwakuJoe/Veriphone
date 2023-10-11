// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig:{
    public:{
      apiKey: process.env.API_KEY
    }
  },
  devtools: { enabled: true },
  modules: ['@nuxt/ui', 'nuxt-icon', '@nuxt/image', '@pinia/nuxt', '@formkit/auto-animate/nuxt']
  
})
