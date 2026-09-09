const path = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  webpack(config) {
    config.resolve.alias["react-router-dom"] = path.resolve(__dirname, "src/lib/routerShim.js");
    return config;
  },
};
// Trigger Vercel deployment after switching project framework to Next.js.
module.exports = nextConfig;
