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
  googleFonts: {
    preload: true,
    display: "swap",
    families: {
      "DM Sans": "400..700",
      Allura: ["400"],
    },
  },
  imports: {
    dirs: ["stores", "composables/api"],
  },
  i18n: {
    locales: [
      { code: "en", iso: "en-US" },
      { code: "id", iso: "id-ID" },
    ],
    defaultLocale: "en",
  },
  modules: [
    "@privyid/persona",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/device",
    "@nuxtjs/google-fonts",
    "@vee-validate/nuxt",
    "nuxt-svgo",
  ],
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
  svgo: {
    componentPrefix: "i",
  },
  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: "VeeForm",
      Field: "VeeField",
      FieldArray: "VeeFieldArray",
      ErrorMessage: "VeeErrorMessage",
    },
  },
});
