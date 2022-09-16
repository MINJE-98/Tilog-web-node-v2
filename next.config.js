/** @type {import('next').NextConfig} */
const Joi = require("joi");
const schema = Joi.object({
  NEXT_PUBLIC_TILOG_API: Joi.string().required(),
  NEXT_PUBLIC_TILOG_AUTH: Joi.string().required(),
});

(async function () {
  try {
    await schema.validateAsync({
      NEXT_PUBLIC_TILOG_API: process.env.NEXT_PUBLIC_TILOG_API,
      NEXT_PUBLIC_TILOG_AUTH: process.env.NEXT_PUBLIC_TILOG_AUTH,
      NEXT_PUBLIC_TILOG_GITHUB_STATS_API:
        process.env.NEXT_PUBLIC_TILOG_GITHUB_STATS_API,
    });
  } catch (e) {
    throw Error(e);
  }
})();
console.log(process.env.NEXT_PUBLIC_TILOG_API);
console.log(process.env.NEXT_PUBLIC_TILOG_AUTH);
console.log(process.env.NEXT_PUBLIC_TILOG_GITHUB_STATS_API);
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

module.exports = nextConfig;
