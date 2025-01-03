/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.ibb.co", "ik.imagekit.io"], // Allow outer website
  },
  output: 'export',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/zongzewu23.github.io' : '/',
  basePath: '/zongzewu23.github.io',
};

module.exports = nextConfig;
