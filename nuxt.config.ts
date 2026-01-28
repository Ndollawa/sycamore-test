// https://nuxt.com/docs/api/configuration/nuxt-config

const isDev = process.env.NODE_ENV === "development";

export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@nuxt/ui", "@nuxt/image"],

  devtools: { enabled: isDev },

  css: ["~/assets/css/main.css"],

  routeRules: {
    "/": { prerender: true },
  },

  debug: isDev,

  compatibilityDate: "2025-01-15",

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },
});
