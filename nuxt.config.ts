// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler', // or "modern"
          additionalData: `
            @use "@/assets/scss/_functions.scss" as *;
            @use "@/assets/scss/_variables.scss" as *;
            @use "@/assets/scss/_mixins.scss" as *;
          `
        }
      }
    },
  },
  modules: ["@nuxt/eslint"],
  eslint: {
    config: {
      stylistic: true // <---
    }
  }
})