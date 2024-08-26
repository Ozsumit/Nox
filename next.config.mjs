/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "//Nox",
  output: "export",
  reactStrictMode: true,
  images: { unoptimized: true },
};

// Create the configuration with Webpack customization
const config = {
  ...nextConfig,
  webpack: (config) => {
    // Disable canvas in Webpack configuration
    config.resolve.alias.canvas = false;
    return config;
  },
};

export default config;
