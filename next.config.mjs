/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig

// export default {
//   output: "standalone",
//   reactStrictMode: true,
//   images: {
//     unoptimized: true
//   }
// }