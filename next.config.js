/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.ibb.co", "ik.imagekit.io"],
    unoptimized: true,
  },
  output: 'export',
  assetPrefix: '/',
};

module.exports = nextConfig;

