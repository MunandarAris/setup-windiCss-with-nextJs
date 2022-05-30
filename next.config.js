// default setup next js
const nextConfig = {
  reactStrictMode: true,
};

// setup windi css
const WindiCSSWebpackPlugin = require("windicss-webpack-plugin");

module.exports = {
  nextConfig,
  webpack(config) {
    config.plugins.push(new WindiCSSWebpackPlugin());
    return config;
  },
};
