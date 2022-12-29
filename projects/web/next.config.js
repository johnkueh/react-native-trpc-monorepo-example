/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["@packages/trpc"]);
const nextConfig = withTM({
  reactStrictMode: true,
});

module.exports = nextConfig
