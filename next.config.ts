import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Using stable webpack for dev (avoids Turbopack/Windows/pnpm resolution issues).
  // Run `pnpm dev:turbo` if you specifically need Turbopack.
  images: {
    remotePatterns: [],
  },
  eslint: {
    // Don't fail production builds on lint errors; run `pnpm lint` locally to fix.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
