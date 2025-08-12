/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.thecloroxcompany.com" },
      { protocol: "https", hostname: "www.vhv.rs" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "images.rawpixel.com" },
      { protocol: "https", hostname: "www.pngkey.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "testgrid.io" },
      { protocol: "https", hostname: "ui-avatars.com" },
      { protocol: "https", hostname: "media.nngroup.com" },
      { protocol: "https", hostname: "swadhahospital.com" },
    ],
  },
};

export default nextConfig;
