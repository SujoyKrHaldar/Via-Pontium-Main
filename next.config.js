const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "cdn.sanity.io"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  async redirects() {
    return [
      {
        source: "/dashboard",
        destination: "https://dashboard-viapontium.vercel.app/desk",
        permanent: true,
      },
    ];
  },
};
module.exports = nextConfig;
