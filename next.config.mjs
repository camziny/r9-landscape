/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "utfs.io" },
      { hostname: "gbnm7mdcxp.ufs.sh" },
      { hostname: "images.unsplash.com" }
    ],
  },
};

export default nextConfig;
