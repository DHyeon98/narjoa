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
  // naver cors 오류 해결을 위해 rewrites를 활용했습니다.
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
