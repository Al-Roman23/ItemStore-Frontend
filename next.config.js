/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable Remote Image Domains For Product Images
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
