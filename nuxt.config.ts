import vuetify from "vite-plugin-vuetify";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["vuetify/styles", "@mdi/font/css/materialdesignicons.min.css"],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    ssr: {
      noExternal: ["vuetify"],
    },
  },
  modules: [
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) =>
        config.plugins.push(vuetify())
      );
    },
    "@nuxtjs/tailwindcss",
  ],
});
