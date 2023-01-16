import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Open Recruitment | Asprak 2023' || '',
      titleTemplate: 'Oprec Asprak 2023 | %s',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Website Open Recruitment Asprak 2023',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  modules: ['@unocss/nuxt', '@nuxt/image-edge'],
  unocss: {
    preflight: true,
    uno: true,
    icons: true,
    attributify: true,
    webFonts: {
      provider: 'google',
      fonts: {
        sans: 'Inter',
      },
    },

    safelist: [
      'i-ph:files',
      'i-ph:newspaper-clipping',
      'i-ph:laptop',
      'i-ph:user',
      'i-ph:speaker-high',
    ],
  },
})
