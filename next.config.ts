import { withContentlayer } from "next-contentlayer";
import type { NextConfig } from 'next'
const nextConfig: NextConfig = {
    experimental: {
        turbo: {
            resolveExtensions: [
                '.mdx',
                '.tsx',
                '.ts',
                '.jsx',
                '.js',
                '.mjs',
                '.json',
              ],
        },
    },
};

export default withContentlayer(nextConfig);
