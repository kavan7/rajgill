/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  images: {
    domains: ['assets.aceternity.com', 'rajgilllaw.com', 'pbs.twimg.com', 'images.unsplash.com'],
  },

  webpack(config) {
    config.optimization.splitChunks = {
      chunks: 'all',
      maxSize: 200000, // Split bundles larger than 200 KB
    };
    return config;
  },

  async headers() {
    return [
      {
        source: '/insights/script.js', // Adjust the path to your specific script
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Cache for 1 year
          },
        ],
      },
    ];
  },
};

module.exports = withBundleAnalyzer(nextConfig);
