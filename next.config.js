/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ESLint runs separately — don't block builds on lint warnings
    ignoreDuringBuilds: true,
  },
  compress: true,
  images: {
    // Serve modern formats automatically (WebP/AVIF ~30-50% smaller than PNG/JPG)
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
    // Cache optimized images for 30 days
    minimumCacheTTL: 2592000,
  },
  // Deduplicate packages across chunks
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
}

module.exports = nextConfig
