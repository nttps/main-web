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
    app: {
        head: {
            meta: [
                { charset: "utf-8" },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
            ],
            link: [{ rel: "icon", type: "image/png", href: "/logo.png" }],
        },
    },
});
