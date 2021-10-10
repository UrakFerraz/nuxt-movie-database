export default {
  mode: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-movies-database',
    htmlAttrs: {
      lang: 'en'
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
    '@/assets/css/default.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: ['~/components/', '~/components/ui/'],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  loading: {
    color: 'red',
    height: '5px'
  },

// Module - installation
        modules: [ '@luxdamore/nuxt-prune-html' ],

        // Module - default config
        pruneHtml: {
            enabled: false, // `true` in production
            hideGenericMessagesInConsole: false, // `false` in production
            hideErrorsInConsole: false, // deactivate the `console.error` method
            hookRenderRoute: true, // activate `hook:render:route`
            hookGeneratePage: true, // activate `hook:generate:page`
            selectors: [
                // CSS selectors to prune
                'link[rel="preload"][as="script"]',
                'script:not([type="application/ld+json"])',
            ],
            classesSelectorsToKeep: [], // disallow pruning of scripts with this classes, n.b.: each `classesSelectorsToKeep` is appended to every `selectors`, ex.: `link[rel="preload"][as="script"]:not(__classesSelectorsToKeep__)`
            link: [], // inject custom links, only if pruned
            script: [], // inject custom scripts, only if pruned
            htmlElementClass: null, // a string added as a class to the <html> element if pruned
            cheerio: {
                // the config passed to the `cheerio.load(__config__)` method
                xmlMode: false,
            },
            types: [
                // it's possibile to add different rules for pruning
                'default-detect',
            ],

            // 👇🏻 Type: `default-detect`
            headerNameForDefaultDetection: 'user-agent', // The `header-key` base for `MobileDetection`, usage `request.headers[ headerNameForDefaultDetection ]`
            auditUserAgent: 'lighthouse', // prune if `request.header[ headerNameForDefaultDetection ]` match, could be a string or an array of strings
            isAudit: true, // remove selectors if match with `auditUserAgent`
            isBot: true, // remove selectors if is a bot
            ignoreBotOrAudit: false, // remove selectors in any case, not depending on Bot or Audit
            matchUserAgent: null, // prune if `request.header[ headerNameForDefaultDetection ]` match, could be a string or an array of strings

            // 👇🏻 Type: 'query-parameters'
            queryParametersToPrune: [
                // array of objects (key-value)
                // trigger the pruning if 'query-parameters' is present in `types` and at least one value is matched, ex. `/?prune=true`
                {
                    key: 'prune',
                    value: 'true',
                },
            ],
            queryParametersToExcludePrune: [], // same as `queryParametersToPrune`, exclude the pruning if 'query-parameters' is present in `types` and at least one value is matched, this priority is over than `queryParametersToPrune`

            // 👇🏻 Type: 'headers-exist'
            headersToPrune: [], // same as `queryParametersToPrune`, but it checks `request.headers`
            headersToExcludePrune: [], // same as `queryParamToExcludePrune`, but it checks `request.headers`, this priority is over than `headersToPrune`

            // Emitted events for callbacks methods
            onBeforePrune: null, // ({ result, [ req, res ] }) => {}, `req` and `res` are not available on `nuxt generate`
            onAfterPrune: null, // ({ result, [ req, res ] }) => {}, `req` and `res` are not available on `nuxt generate`
        },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    cssSourceMap: true,
  },
  router: {
    base: '/nuxt-movie-database/',
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue')
      })
    }
  }
}
