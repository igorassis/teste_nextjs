const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Poc Central Next',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {
          codemirrorTheme: 'material',
          colors: { primary: '#f2f2f2', sidebarBg: '#f3f3f3' },
          styles: {
            body: {
              fontFamily: "'Roboto', Helvetica Neue, Arial, sans",
              fontSize: 16,
            },
            h1: { fontFamily: "'Product Sans'" },
            h2: { fontFamily: "'Product Sans'" },
            h3: { fontFamily: "'Product Sans'" },
            logo: { background: 'red', alignItems: 'center' },
          },
        },
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root:
          '/Users/igorpires/Documents/Development/FreteBras/poc-central-next/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Poc Central Next',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3001,
        p: 3000,
        separator: '-',
        paths: {
          root:
            '/Users/igorpires/Documents/Development/FreteBras/poc-central-next',
          templates:
            '/Users/igorpires/Documents/Development/FreteBras/poc-central-next/node_modules/docz-core/dist/templates',
          docz:
            '/Users/igorpires/Documents/Development/FreteBras/poc-central-next/.docz',
          cache:
            '/Users/igorpires/Documents/Development/FreteBras/poc-central-next/.docz/.cache',
          app:
            '/Users/igorpires/Documents/Development/FreteBras/poc-central-next/.docz/app',
          appPackageJson:
            '/Users/igorpires/Documents/Development/FreteBras/poc-central-next/package.json',
          appTsConfig:
            '/Users/igorpires/Documents/Development/FreteBras/poc-central-next/tsconfig.json',
          gatsbyConfig:
            '/Users/igorpires/Documents/Development/FreteBras/poc-central-next/gatsby-config.js',
          gatsbyBrowser:
            '/Users/igorpires/Documents/Development/FreteBras/poc-central-next/gatsby-browser.js',
          gatsbyNode:
            '/Users/igorpires/Documents/Development/FreteBras/poc-central-next/gatsby-node.js',
          gatsbySSR:
            '/Users/igorpires/Documents/Development/FreteBras/poc-central-next/gatsby-ssr.js',
          importsJs:
            '/Users/igorpires/Documents/Development/FreteBras/poc-central-next/.docz/app/imports.js',
          rootJs:
            '/Users/igorpires/Documents/Development/FreteBras/poc-central-next/.docz/app/root.jsx',
          indexJs:
            '/Users/igorpires/Documents/Development/FreteBras/poc-central-next/.docz/app/index.jsx',
          indexHtml:
            '/Users/igorpires/Documents/Development/FreteBras/poc-central-next/.docz/app/index.html',
          db:
            '/Users/igorpires/Documents/Development/FreteBras/poc-central-next/.docz/app/db.json',
        },
        htmlContext: {
          head: {
            links: [
              {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
              },
            ],
          },
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
