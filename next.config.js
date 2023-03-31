/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  eslint: {
    dirs: ["presentation", "data", "infra", "domain"],
  },
};

module.exports = nextConfig;
