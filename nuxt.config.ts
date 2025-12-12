import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  nitro: {
    preset: 'static',
    firebase: {
      gen: 2 // Use Firebase Functions Generation 2
    }
  },
  // nitro: {
  //   preset: 'cloudflare'
  // },
  // ssr: true,

  runtimeConfig: {  
    // Private keys (only available on server-side)
    telegramBotToken: import.meta.env.NUXT_TELEGRAM_BOT_TOKEN,
    telegramChatId: import.meta.env.NUXT_TELEGRAM_CHAT_ID,

    public: {
      siteUrl: 'https://senghong-portfolio.web.app',
      // Alternative domain:
      // - https://senghong.pages.dev
    }
  },
})
