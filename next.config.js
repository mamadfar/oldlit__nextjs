/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.oldlit.yalchin.info',
                port: '',
                pathname: '/media/books/**',
            },
        ],
    },
}

module.exports = nextConfig
