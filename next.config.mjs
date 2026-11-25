/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        // Downloadable bio deck: reachable from the footer, but kept out of search engines.
        source: "/bio/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" }],
      },
    ]
  },
}

export default nextConfig
