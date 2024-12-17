/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'cdn.jsdelivr.net',
      'cdn.worldvectorlogo.com',
      's.w.org',
      'upload.wikimedia.org',
      'raw.githubusercontent.com',
      'www.vectorlogo.zone',
      'hebbkx1anhila5yf.public.blob.vercel-storage.com'
    ],
  },
  // Remove the experimental runtime configuration
}

module.exports = nextConfig

