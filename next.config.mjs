/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [ 
      { 
        hostname: 'plus.unsplash.com', 
        protocol: 'https' 
      } 
    ]
  },
  experimental: {
    serverActions: true,
  }
};

export default nextConfig;
