import type { NextConfig } from "next";

const isVercel = process.env.VERCEL === '1'

const nextConfig: NextConfig = {
  experimental: {
    webpackBuildWorker: isVercel ? false : true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "placehold.co" },
      { protocol: "https", hostname: "images.unsplash.com" }
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
