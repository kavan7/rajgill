/** @type {import('next').NextConfig} */
import withBundleAnalyzer from '@next/bundle-analyzer';

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

// Apply the bundle analyzer configuration
const withBundleAnalyzerConfig = withBundleAnalyzer({
  enabled: process.env.clsANALYZE === 'true', // Enable analyzer only if ANALYZE env variable is set to true
});

// Export the configuration
export default withBundleAnalyzerConfig(nextConfig);
