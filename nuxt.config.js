module.exports = {
  target: 'static',
  telemetry: false,
  router: {
    base: '/html2md/'  // 将 <REPO_NAME> 替换为你的仓库名称
  },
  head: {
    title: 'hello-html2md',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'helloworld社区开发的轻量强大的html一键转md工具,支持多平台一键转换。' },
      { hid: 'keywords', name: 'keywords', content: 'javscript,html,markdown,vue,html-to-markdown,md,helloworld,helloworld开发者社区' },
      { name: 'renderer', content: 'webkit' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#00A6F4' },
  css: [
    'assets/css/reset.css'
  ],
  plugins: [
    '@/plugins/axios',
    '@/plugins/element-ui',
    { src: '@/plugins/hw-editor', ssr: false }
  ],
  buildModules: [
    '@nuxtjs/eslint-module'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/component-cache'
  ],
  axios: {
    proxy: true,
    credentials: true
  },
  build: {
    extractCSS: true,
    babel: {
      'plugins': [
        [
          'component',
          {
            'libraryName': 'element-ui',
            'styleLibraryName': 'theme-chalk'
          }
        ]
      ],
      'comments': true
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 30000,
        automaticNameDelimiter: '~',
        name: true,
        cacheGroups: {
          styles: {
            test: /\.[css|less|scss|sass]/,
            chunks: 'all',
            priority: 30,
            enforce: true
          },
          'element-ui': {
            test: /node_modules[\\/]element-ui/,
            chunks: 'initial',
            priority: 20,
            name: true,
            enforce: true
          },
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            chunks: 'initial',
            priority: 10,
            enforce: true
          },
          default: {
            minChunks: 2,
            priority: -10,
            reuseExistingChunk: true
          }
        }
      }
    },
    extend (config, { isDev, isClient }) {
      if (isClient && !isDev) {
        config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
      }
    }
  },
  server: {
    port: 3031,
    host: '0.0.0.0'
  },
  env: {}
}
