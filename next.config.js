const debug = process.env.NODE_ENV !== "production";
module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/login": { page: "/login" },
    }
  },
  assetPrefix: !debug ? 'https://igorassis.github.io/teste_nextjs/' : '',
}