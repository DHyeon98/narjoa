/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/v1/:path*',
        destination: 'https://openapi.naver.com/v1/:path*',
      },
    ];
  },
};

export default nextConfig;
