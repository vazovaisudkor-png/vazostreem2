/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  async headers() {
    return [
      {
        source: '/api/fragments/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, s-maxage=60, stale-while-revalidate=300' }
        ]
      }
    ];
  }
};
module.exports = nextConfig;
