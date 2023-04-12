/** @type {import('next').NextConfig} */

const isElectron = !!process.env.NEXT_PUBLIC_IS_ELECTRON;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer && isElectron) {
      config.target = 'electron-renderer';
    }

    return config;
  },
}

module.exports = nextConfig
