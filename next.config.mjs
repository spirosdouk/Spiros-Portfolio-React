import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailwindui.com",
        port: "",
        pathname: "/**",
      },
    ],
    formats: ["image/webp", "image/avif"],
  },
  compress: true,
  poweredByHeader: false,
  webpack: (config, { isServer, webpack }) => {
    if (!isServer) {
      config.resolve.alias["@emotion/react"] = path.resolve(
        "./node_modules/@emotion/react"
      );
    }
    return config;
  },
};
export default nextConfig;
