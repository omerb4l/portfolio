import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  // GitHub Pages repo name is 'portfolio'
  basePath: isProd ? '/portfolio' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
