// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@nuxtjs/google-fonts", "nuxt-icon", "@nuxt/ui"],
    css: ["@/assets/css/main.css"],
    googleFonts: {
        display: "swap",
        prefetch: true,
        preconnect: true,
        families: {
            Kanit: true,
        },
    },
    colorMode: {
        preference: "light",
    },
});
