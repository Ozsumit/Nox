/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ["scontent.fbdp2-1.fna.fbcdn.net"], // Add any external domains you're using for images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "/Nox" : "", // Adjust this if you're deploying to a subdirectory
};

export default nextConfig;
