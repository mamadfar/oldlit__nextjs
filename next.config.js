/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'demo.wpthemego.com',
        port: '',
      },
      {
        protocol: 'http',
        hostname: 's.s-bol.com',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
