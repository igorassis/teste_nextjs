const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/igorpires/Documents/Development/FreteBras/poc-central-next/.docz/.cache/dev-404-page.js"))),
  "component---components-atoms-boxes-readme-mdx": hot(preferDefault(require("/Users/igorpires/Documents/Development/FreteBras/poc-central-next/components/atoms/Boxes/README.mdx"))),
  "component---components-readme-mdx": hot(preferDefault(require("/Users/igorpires/Documents/Development/FreteBras/poc-central-next/components/README.mdx"))),
  "component---readme-md": hot(preferDefault(require("/Users/igorpires/Documents/Development/FreteBras/poc-central-next/README.md"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/igorpires/Documents/Development/FreteBras/poc-central-next/.docz/src/pages/404.js")))
}

