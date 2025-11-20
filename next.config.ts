import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "standalone",
  images: {
    qualities: [100, 70, 75],
  },
};

export default nextConfig;
