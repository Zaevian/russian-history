import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Using stable webpack for dev (avoids Turbopack/Windows/pnpm resolution issues).
  // Run `pnpm dev:turbo` if you specifically need Turbopack.
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
