// module.exports = {
//   images: {
//     domains: ['mcusercontent.com'],
//   },
// };
/** @type {import('next').NextConfig}*/

const nextConfig = {
  reactStrictMode: true,
  images: {
    // unoptimized: true,
    domains: ["drive.google.com"],
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },

  // images: { unoptimized: true }
  // Optional: Add a trailing slash to all paths `/about` -> `/about/`
  // trailingSlash: true,
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
};

module.exports = nextConfig;
