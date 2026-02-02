/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/kgreat.github.io',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
 
}

export default nextConfig
