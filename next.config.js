/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [...String(process.env.NEXT_PUBLIC_IMAGE_DOMAINS ?? "").split(",")],
  },
  eslint: {
    dirs: ["src"],
  },
  swcMinify: true,
  experimental: {
    outputStandalone: true,
    images: {
      layoutRaw: true,
    },
  },
}

module.exports = nextConfig
