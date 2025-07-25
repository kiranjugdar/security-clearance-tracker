/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // No "output: 'export'" – we want dynamic server mode
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;