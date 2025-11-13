/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'katyanimedia.com',
      },
    ],
  },
}

module.exports = nextConfig

