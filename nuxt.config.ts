import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    css: ["~/index.css"],
    vite: {
        plugins: [tailwindcss()],
    },
    srcDir: "src/",
    runtimeConfig: {
        contentfulAccessToken: process.env.NUXT_CONTENTFUL_ACCESS_TOKEN,
        public: {
            contentfulSpaceId: process.env.NUXT_PUBLIC_CONTENTFUL_SPACE_ID,
        },
    },
});
