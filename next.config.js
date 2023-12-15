/** @type {import('next').NextConfig} */
const path = require("path");
const { NormalModuleReplacementPlugin } = require("webpack");

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bit.ly",
      },
      {
        protocol: "https",
        hostname: "tailwindui.com",
      },
    ],
  },
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    config.plugins = config.plugins || [];
    config.plugins.push(
      new NormalModuleReplacementPlugin(
        /email\/render/,
        path.resolve(__dirname, "./renderEmailFix.js")
      )
    );
    // Important: return the modified config
    return config;
  },
};

module.exports = nextConfig;
