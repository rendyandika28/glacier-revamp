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
  css: ["~/assets/css/tailwind.css", "~/assets/styles/global.scss"],
  devtools: { enabled: true },
  googleFonts: {
    preload: true,
    display: "swap",
    families: {
      "DM Sans": "400..700",
      Inter: "400..700",
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
    "@nuxtjs/device",
    "@nuxtjs/i18n",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@pinia/nuxt",
    "@privyid/persona",
    "@privyid/persona-icon",
    "@privyid/persona-ilustration",
    "@vee-validate/nuxt",
    "@vueuse/nuxt",
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
  device: {
    refreshOnResize: true,
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
