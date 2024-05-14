/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'upload.wikimedia.org'],
  },
};

module.exports = nextConfig;
