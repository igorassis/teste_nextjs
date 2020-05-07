// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---components-atoms-boxes-readme-mdx": () => import("./../../components/atoms/Boxes/README.mdx" /* webpackChunkName: "component---components-atoms-boxes-readme-mdx" */),
  "component---components-readme-mdx": () => import("./../../components/README.mdx" /* webpackChunkName: "component---components-readme-mdx" */),
  "component---readme-md": () => import("./../../README.md" /* webpackChunkName: "component---readme-md" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

