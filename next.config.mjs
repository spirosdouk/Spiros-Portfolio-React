import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['tailwindui.com'], 
  },
  webpack: (config, { isServer, webpack }) => {
    if (!isServer) {
      config.resolve.alias['@emotion/react'] = path.resolve('./node_modules/@emotion/react');
    }
    return config;
  },
};

export default nextConfig;
