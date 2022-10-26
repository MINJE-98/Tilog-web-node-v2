/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const nextConfig = {
  reactStrictMode: true,
  env: {
    TILOG_API: process.env.NEXT_PUBLIC_TILOG_API,
    TILOG_AUTH: process.env.NEXT_PUBLIC_TILOG_AUTH,
    TILOG_GITHUB_STATS_API: process.env.NEXT_PUBLIC_TILOG_GITHUB_STATS_API,
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `${process.env.BASE_URL}/:path*`,
      },
    ];
  },
  images: {
    domains: ["avatars.githubusercontent.com", "og.tilog.link"],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
