const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/assets/styles")],
    prependData: `@use "mixins";`,
  },
};

module.exports = nextConfig;
