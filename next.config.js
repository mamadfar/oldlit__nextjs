/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '38.242.213.151',
        port: '3000',
      },
    ],
  },
}

module.exports = nextConfig
