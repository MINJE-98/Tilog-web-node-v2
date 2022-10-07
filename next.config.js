/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    TILOG_API: process.env.NEXT_PUBLIC_TILOG_API,
    TILOG_AUTH: process.env.NEXT_PUBLIC_TILOG_AUTH,
    TILOG_GITHUB_STATS_API: process.env.NEXT_PUBLIC_TILOG_GITHUB_STATS_API,
  },
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
};

module.exports = {
  experimental: {
    reactMode: "concurrent",
  },
};

module.exports = nextConfig;
