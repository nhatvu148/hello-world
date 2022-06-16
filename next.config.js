const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const webpack = require("webpack");
const path = require("path");

module.exports = withPlugins([[withImages]], {
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
  images: {
    domains: ["image.tmdb.org"],
  },
  experimental: {
    scrollRestoration: true,
  },
  redirects: async () => {
    return [
      {
        source: "/about",
        destination: "https://www.google.com",
        permanent: true,
      },
      {
        source: "/old-blog/:id",
        destination: "/new-blog/:id",
        permanent: false,
      },
    ];
  },
});
