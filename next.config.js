// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Si tu veux autoriser d’autres domaines pour <Image src=""> :
  images: {
    domains: [], // par exemple ['example.com']
  },
};

module.exports = nextConfig;
