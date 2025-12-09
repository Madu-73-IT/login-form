// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],
  modules: ["@nuxt/ui", "@pinia/nuxt"],
  vite: {
    plugins: [tailwindcss()],
  },
  routeRules: {
    "/api/**": {
      proxy: {
        to: "http://edu-manage.us-east-2.elasticbeanstalk.com/api/**",
      },
    },
  },
});
