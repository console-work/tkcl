// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


// next.config.js

// import withBundleAnalyzer from '@next/bundle-analyzer'

// const bundleAnalyzer = withBundleAnalyzer({
//   enabled: process.env.ANALYZE === 'true',
// })

// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// export default bundleAnalyzer(nextConfig)

import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // ✅ Modern JavaScript only, no legacy browser transforms
  experimental: {
    legacyBrowsers: false,
    browsersListForSwc: true,
  },

  // ✅ Output ESNext to skip polyfills and transpilation for modern features
  webpack(config) {
    config.target = 'esnext';
    return config;
  },
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);
