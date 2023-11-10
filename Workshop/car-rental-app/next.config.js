/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains : ['drive.google.com'],
    },
    experimental: {
        serverActions: true
    },
    env: {
        FRONTEND: process.env.FRONTEND_URL,
        BACKEND: process.env.BACKEND_URL
    }
}

module.exports = nextConfig
