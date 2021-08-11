const session = require('express-session');
module.exports = {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
    // mode:'spa',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-portfolio',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/axios.config.js',
    // '@/plugins/auth.js',

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  serverMiddleware: [

    "~~/api/",
  ],
  // router: {
  //   middleware: ['auth']
  // },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/auth',
    '@nuxtjs/axios'
  ],
  // axios:{
  //   baseURL:'http://localhost:5000/'
  // },
  auth: {
    // plugins:[
    //   '@/plugins/axios.config.js'
    // ],
    cookie: false, 
    redirect:{
      login:'/login',
      logout:'/login',
      callback:false,
      home:false
    },
    strategies: {
      local: {
        token:{
           property:'token',
           type: "Bearer",
           maxAge:60 
        },

        endpoints: {
          login: { url: '/api/auth/login', method: 'post', propertyName: 'token' },
          logout: false,
          user: { url: '/api/auth/user', method: 'get', }
        },
        // tokenRequired: true,
        // tokenType: 'bearer'
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  // build: {
  //   build: {
  //     babel: {
  //       babelrc: false,
  //       compact: false
  //     }
  //   }
  // }
}
