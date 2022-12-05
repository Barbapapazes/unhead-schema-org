import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  extends: ['@nuxt-themes/docus'],

  app: {
    head: {
      title: '@vueuse',
      meta: [
        { property: 'og:title', content: '@vueuse/schema-org' },
        { property: 'og:description', content: 'Simple and automated Schema.org for Google Rich Results with Vue.' },
        { property: 'og:url', content: 'https://vue-schema-org.netlify.app/' },
        { property: 'og:image', content: 'https://vue-schema-org.netlify.app/og.png' },
        { name: 'twitter:title', content: '@vueuse/schema-org' },
        { name: 'twitter:description', content: 'Simple and automated Schema.org for Google Rich Results with Vue.' },
        { name: 'twitter:image', content: 'https://vue-schema-org.netlify.app/og.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml', media: '(prefers-color-scheme:no-preference)' },
        { rel: 'icon', href: '/logo-dark.svg', type: 'image/svg+xml', media: '(prefers-color-scheme:dark)' },
        { rel: 'icon', href: '/logo-light.svg', type: 'image/svg+xml', media: '(prefers-color-scheme:light)' },
      ],
      script: [
        {
          'src': 'https://cdn.usefathom.com/script.js',
          'data-spa': 'auto',
          'data-site': 'UQADBWCI',
          'defer': true,
        },
      ],
    },
  },

  components: [
    {
      path: './node_modules/@nuxt-themes/docus/components/app',
      global: true,
      prefix: '',
    },
    {
      path: './node_modules/@nuxt-themes/docus/components/content',
      global: true,
      prefix: '',
    },
    {
      path: './node_modules/@nuxt-themes/docus/components/docs',
      global: true,
      prefix: '',
    },
    {
      path: './node_modules/@nuxt-themes/docus/components/github',
      global: true,
      prefix: '',
    },
    {
      path: './node_modules/@nuxt-themes/docus/components/icons',
      global: true,
      prefix: '',
    },
    {
      path: './node_modules/@nuxt-themes/docus/components/prose',
      global: true,
      prefix: '',
    },
    {
      path: './components',
      prefix: '',
    },
  ],
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
      ],
    },
  },
})
