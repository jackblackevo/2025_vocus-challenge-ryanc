import type { NextConfig } from 'next';
import { IMG_ENDPOINT } from './lib/constants';

const nextConfig: NextConfig = {
  /* config options here */
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [new URL(`${IMG_ENDPOINT}/**`)],
  },
};

export default nextConfig;
