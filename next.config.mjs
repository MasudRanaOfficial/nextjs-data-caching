/** @type {import('next').NextConfig} */
const nextConfig = {
  // https://images.unsplash.com/photo-1521572163474-6864f9cf17ab
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "**",
        search: "",
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
