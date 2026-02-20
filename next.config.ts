import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/getapp",
        destination: "https://apps.apple.com/us/app/6758810097",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
