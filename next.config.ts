/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Permite que o build continue mesmo com alguns warnings do ESLint
    ignoreDuringBuilds: false,
  },
  typescript: {
    // Permite que o build continue mesmo com alguns erros de TypeScript
    ignoreBuildErrors: false,
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig