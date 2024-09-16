import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer, webpack }) => {
    if (!isServer) {
      // Resolves multiple instances warning by pointing all imports to a single version
      config.resolve.alias['@emotion/react'] = path.resolve('./node_modules/@emotion/react');
    }
    return config;
  },
};

export default nextConfig;
