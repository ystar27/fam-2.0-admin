require('dotenv').config();

module.exports = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    return config;
  },
  env: {
    DEV_BASE_URL: process.env.DEV_BASE_URL,
    PRD_BASE_URL: process.env.PRD_BASE_URL,
  },
};
