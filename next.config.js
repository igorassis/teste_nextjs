const debug = process.env.NODE_ENV !== "production";
module.exports = {
  env: {
    ENV: !debug ? "/teste_nextjs" : "",
  },
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/login": { page: "/login" },
    };
  },
  assetPrefix: !debug ? "https://igorassis.github.io/teste_nextjs/" : "",
};
