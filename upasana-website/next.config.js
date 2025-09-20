/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  // Enable static export for Amplify
  distDir: '.next',
  // Disable server-side features for static deployment
  experimental: {
    appDir: true,
  }
}

module.exports = nextConfig