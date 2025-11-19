import Link from 'next/link';
import { Metadata } from 'next';

export const metadata = {
  title: '404 - Page Not Found | FabTech Qatar',
  description: 'The page you are looking for could not be found. Explore our professional cleaning and maintenance services.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-red-600 mb-4">404</div>
          <div className="text-2xl font-semibold text-gray-900 mb-2">Page Not Found</div>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <Link
            href="/"
            className="block w-full bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200"
          >
            Go to Homepage
          </Link>
          
          <Link
            href="/services"
            className="block w-full border-2 border-red-600 text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors duration-200"
          >
            View Our Services
          </Link>
          
          <Link
            href="/contact"
            className="block w-full text-gray-600 hover:text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>

        {/* Popular Services */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Services</h3>
          <div className="grid grid-cols-1 gap-2">
            <Link
              href="/services/residential-deep-cleaning"
              className="text-red-600 hover:text-red-800 text-sm hover:underline"
            >
              Residential Deep Cleaning
            </Link>
            <Link
              href="/services/commercial-deep-cleaning"
              className="text-red-600 hover:text-red-800 text-sm hover:underline"
            >
              Commercial Deep Cleaning
            </Link>
            <Link
              href="/services/pest-control"
              className="text-red-600 hover:text-red-800 text-sm hover:underline"
            >
              Pest Control Services
            </Link>
            <Link
              href="/services/water-tank-cleaning"
              className="text-red-600 hover:text-red-800 text-sm hover:underline"
            >
              Water Tank Cleaning
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Need help? Call us at{' '}
            <a href="tel:+97455187619" className="text-red-600 hover:text-red-800 font-semibold">
              +974 5518 7619
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
