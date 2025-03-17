/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    // Replace 'kashif-portfolio' with your GitHub repository name
    basePath: process.env.NODE_ENV === 'production' ? '/kashif-portfolio' : '',
    images: {
      unoptimized: true,
    },
  };
  
  module.exports = nextConfig;