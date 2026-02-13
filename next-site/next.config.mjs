/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  experimental: {
    optimizePackageImports: ['react-icons/si', 'react-icons/fa'],
  },
};

export default nextConfig;
