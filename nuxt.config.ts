// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    "scroll-into-view": "scroll-into-view",
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  compatibilityDate: "2024-04-03",
  css: ["~/assets/css/tailwind.css"],
  devtools: { enabled: true },
  imports: {
    dirs: ["stores", "composables/api"],
  },
  modules: ["@privyid/persona"],
  nitro: {
    compressPublicAssets: true,
  },
  postcss: {
    plugins: {
      "postcss-hexrgba": {},
      "tailwindcss/nesting": {},
      tailwindcss: {},
      "postcss-lighten-darken": {},
      autoprefixer: {},
    },
  },
});
