
export default {
  image: {
    // Options
    quality: 80,
    format: ['webp'],
    // dir: 'assets/images',
    // domains: ['localhost']
  },
  // Enable Nuxt Bridge features
  bridge: {
    vue: true,  // Enables Vue 3 features
    nitro: true,  // Enable the Nitro engine
    autoImports: true,  // Use auto-imports
    meta: true,  // Enable new head and meta APIs
    scriptSetup: true,  // Enable new script setup syntax
  },
  // existing configuration
  target: 'server', // or 'static'
  ssr: true, // or false
  // other configurations 
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxt/image',
  ],
  /*
  ** Build configuration
  */
  build: {
    bridge: true,  // Enables Vue 3 features
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.module.rules.push({
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      })
    }
  }
}
