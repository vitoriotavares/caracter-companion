const withNextIntl = require('next-intl/plugin')('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuração para a Vercel
  swcMinify: true,
  reactStrictMode: true,
  // Otimizações para produção
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  }
};

module.exports = withNextIntl(nextConfig);
