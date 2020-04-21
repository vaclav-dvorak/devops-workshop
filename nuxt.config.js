module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    [
      'nuxt-env',
      {
        keys: [
          'DB_USER',
          'DB_NAME',
          { key: 'DB_PASSWORD', secret: true },
          { key: 'DB_URL', default: 'localhost' },
          { key: 'ENV', default: 'dev' },
          {
            key: 'API_URL',
            default: `http://${process.env.HOST}:${process.env.PORT}${process.env.PREFIX}`
          }
        ],
        // Not supported by the module itself, used for validation in server/index.js
        required: ['DB_USER', 'DB_NAME', 'DB_PASSWORD', 'DB_URL']
      }
    ]
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
