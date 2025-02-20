// env 
console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
const modules = process.env.NODE_ENV == "production" ? ["add module"] : []
console.log(`modules: ${modules}`)

// Whitelist 
const whitelist = [
  "*"
];

export default {
  // Image
  image: {
    // Options
    quality: 80,
    format: ['webp'],
    // dir: 'assets/images',
    //domains: ['localhost']
    // IPX 
    /*
    ipx: {
      // localhost
      baseURL: 'https://localhost:3000',
    }
    */
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
  ssr: false,
  target: "static",

  /* serverMiddleware */
  serverMiddleware: [
    //"~/middleware/helmet.ts"
  ],

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
    'nuxt-helmet',
    '@nuxtjs/dotenv',
  ],
  /*
  ** dotenv module options 
  */
  dotenv: {
    path: './.env',
  },
  /*
  ** Security module configuration
  */
  
  helmet: {
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'", ...whitelist],
        scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", ...whitelist],
        styleSrc: ["'self'", "'unsafe-inline'", ...whitelist],
        fontSrc: ["'self'", ...whitelist],
        imgSrc: ["'self'", "data:", ...whitelist],
        connectSrc: [ "'self'", ...whitelist],
        frameSrc: ["'self'", ...whitelist],
        frameAncestors: ["'none'"]
      }
    },
    frameguard: { action: "deny" }, // X-Frame-Options
    xssFilter: true,                // X-XSS-Protection
    noSniff: true                   // X-Content-Type-Options
  },
  
  /*
  ** Build configuration
  */
  build: {
    bridge: true,

    extend (config, ctx) {
      config.module.rules.push({
        test: /\.mjs$/,
        type: 'javascript/auto',
        include: /node_modules/
      });
    
      config.module.rules.push({
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      })
    },

    babel: {
      presets() {
        return [
          [
            '@nuxt/babel-preset-app',
            {
              useBuiltIns: 'usage',
              corejs: { version: 3 },
              targets: { node: '18' },
              loose: false 
            }
          ]
        ];
      },
      plugins: ['@babel/plugin-proposal-optional-chaining']
    }
  }
}
