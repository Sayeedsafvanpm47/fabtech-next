/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          pathname: '/diunkrydn/**', // Update with your cloud name if necessary
        },
      ],
    },
  };
  
  export default nextConfig;