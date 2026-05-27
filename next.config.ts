import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack configuration for better pnpm compatibility
  experimental: {
    turbo: {
      resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.json'],
    },
  },
  // Optimize images in future (currently using public assets for generated visuals)
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
