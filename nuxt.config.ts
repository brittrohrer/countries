// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: `Countries of the World`,
      meta: [
        {name: 'description', content: `countries`}
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
        },
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
          tagPosition: 'bodyClose'
        },
        {
          src:"https://kit.fontawesome.com/918e15e8c2.js" ,
          crossorigin:"anonymous",
          tagPosition: 'bodyClose'
        }
      ]
    }
  },
  css: ['@/assets/scss/main.scss']
})

