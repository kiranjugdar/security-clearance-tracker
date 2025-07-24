/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Export as a fully static site
  output: 'export',
  // Avoid server-only modules in client bundles
  webpack: (config, { isServer }) => {
    if (!isServer) config.resolve.fallback = { ...config.resolve.fallback, fs: false };
    return config;
  }
};

module.exports = nextConfig;