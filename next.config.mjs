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

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ✅ 'swcMinify' is no longer needed in Next.js 15
  // ✅ Don't use 'experimental.legacyBrowsers' in v15
  // ✅ Let Browserslist control targeting

  webpack(config) {
    // ❌ Avoid using 'esnext', it's not a valid target
    // You can skip setting config.target altogether for most setups
    return config;
  },
};

export default bundleAnalyzer(nextConfig);
