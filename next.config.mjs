/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/diunkrydn/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: [
      'framer-motion',
      'lucide-react',
      '@radix-ui/react-slot',
      'clsx',
      'tailwind-merge'
    ],
  },

  // Bundle analyzer and optimization
  webpack: (config, { dev, isServer }) => {
    // Handle SVG files
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // Optimize bundle splitting
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: 10,
            reuseExistingChunk: true,
          },
          common: {
            name: 'common',
            minChunks: 2,
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      };
    }

    // Tree shaking optimization
    config.optimization.usedExports = true;
    config.optimization.sideEffects = false;

    return config;
  },

  // Redirects for old URLs to prevent 404 errors
  async redirects() {
    return [
      // Old service URLs that are causing 404 errors in Google Search Console
      {
        source: '/services/landscaping-grounds',
        destination: '/services/general-cleaning',
        permanent: true,
      },
      {
        source: '/services/emergency-response',
        destination: '/services/pest-control',
        permanent: true,
      },
      {
        source: '/services/property-management',
        destination: '/services/structural-maintenance',
        permanent: true,
      },
      {
        source: '/services/plumbing-services',
        destination: '/services/structural-maintenance',
        permanent: true,
      },
      {
        source: '/services/facility-maintenance',
        destination: '/services/structural-maintenance',
        permanent: true,
      },
      {
        source: '/services/energy-management',
        destination: '/services/structural-maintenance',
        permanent: true,
      },
      {
        source: '/services/hvac-services',
        destination: '/services/structural-maintenance',
        permanent: true,
      },
      {
        source: '/pesticide-guard',
        destination: '/services/pest-control',
        permanent: true,
      },
      {
        source: '/hospitality-services',
        destination: '/services/commercial-deep-cleaning',
        permanent: true,
      },
      {
        source: '/landscaping-services',
        destination: '/services/general-cleaning',
        permanent: true,
      },
      {
        source: '/building-maintenance',
        destination: '/services/structural-maintenance',
        permanent: true,
      },
      {
        source: '/civil-works',
        destination: '/services/structural-maintenance',
        permanent: true,
      },
      {
        source: '/digital-solutions',
        destination: '/services/interior-design',
        permanent: true,
      },
      // Catch-all for any other old service URLs
      {
        source: '/services/:slug*',
        has: [
          {
            type: 'query',
            key: 'redirect',
            value: 'true',
          },
        ],
        destination: '/services',
        permanent: false,
      },
    ];
  },

  // Headers for caching and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;