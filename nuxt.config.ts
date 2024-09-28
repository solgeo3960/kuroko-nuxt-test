// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    // Public keys that are exposed to the client
    public: {
      apiBase: "https://solgeo-dev.g.kuroco.app",
    },
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
});
