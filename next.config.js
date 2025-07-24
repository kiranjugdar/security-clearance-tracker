/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // add custom webpack rules here if needed
    return config;
  }
};
module.exports = nextConfig;