/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: [
  //     "www.notion.so",
  //     "images.unsplash.com",
  //     "prod-files-secure.s3.us-west-2.amazonaws.com",
  //   ],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "elite-aletopelta-3ca.notion.site",
      },
    ],
  },
};

export default nextConfig;
