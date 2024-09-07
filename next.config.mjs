/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [ 
      { 
        hostname: 'plus.unsplash.com', 
        protocol: 'https' 
      },
      { 
        hostname: 'upoad.wikimedia.org', 
        protocol: 'https' 
      } 
    ]
  },
  experimental: {
    serverActions: true,
  }
};

export default nextConfig;
