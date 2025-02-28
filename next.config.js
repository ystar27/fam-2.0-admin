module.exports = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    //   // Important: return the modified config
    //   config.resolve.fallback = { crypto: false };
    //   return config;
    // },

    // config.output.hashFunction = "xxhash64";
    // config.experiments.futureDefaults = true;

    config.module.rules.push({
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      // issuer: {
      //   // test: /\.tsx?$/,

      // },
      issuer: { and: [/\.(js|ts)x?$/] }, // ✅ Correct
      use: ["@svgr/webpack"],
    });
    if (!isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        victory: {
          test: /[\\/]node_modules[\\/](victory-pie|victory-core|victory-pie\/es)[\\/]/,
          name: "victory",
          priority: 50,
          reuseExistingChunk: true,
        },
        recharts: {
          test: /[\\/]node_modules[\\/](recharts|recharts-scale)[\\/]/,
          priority: 20,
          name: "recharts",
          reuseExistingChunk: true,
        },
        lodash: {
          test: /[\\/]node_modules[\\/](lodash)[\\/]/,
          name: "lodash",
          reuseExistingChunk: true,
          priority: 40,
        },
      };
    }
    return config;
  },
};
