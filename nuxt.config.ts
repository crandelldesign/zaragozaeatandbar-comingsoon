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
            @use "sass:math" as *;
            @use "sass:color" as *;
            @use "sass:map" as *;
            @use "@/assets/scss/_functions.scss" as *;
            @use "@/assets/scss/_variables.scss" as *;
            @use "@/assets/scss/_mixins.scss" as *;
          `,
        },
      },
    },
  },
  modules: ['@nuxt/eslint', "@nuxtjs/google-fonts"],
  eslint: {
    config: {
      stylistic: true, // <---
    },
  },
  googleFonts: {
    families: {
      'Domine': {
        wght: '400..700',
      },
      'Inknut+Antiqua': {
        wght: '700',
      },
    },
    display: 'swap'
  },
  components: [
    { path: '~/components/icons', pathPrefix: false },
    '~/components'
  ],
})