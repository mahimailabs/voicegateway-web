import type { NextConfig } from 'next';
import { createMDX } from 'fumadocs-mdx/next';
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

initOpenNextCloudflareForDev();

const withMDX = createMDX();

export default withMDX(nextConfig);
