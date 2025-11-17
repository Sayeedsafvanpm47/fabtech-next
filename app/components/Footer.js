import Link from 'next/link';
import Image from 'next/image';

export default function Footer({ showServiceLinks = false }) {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 gap-8 ${showServiceLinks ? 'md:grid-cols-4 lg:grid-cols-5' : 'md:grid-cols-4'}`}>
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
            <span  className="text-2xl font-bold text-blue-600"> <Image className='rounded-full' src="/logo.png" alt="logo" width={200} height={200} /> </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
         
            We are dedicated to providing exceptional cleaning and facility management services in Qatar.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/Fabtechqatar/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Visit Fabtech Services on Facebook"
              >
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/fabtechservicestrading" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Visit Fabtech Services on LinkedIn"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/fabtech_services/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Visit Fabtech Services on Instagram"
              >
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.017 0C8.396 0 8.002.01 6.78.048 5.56.087 4.74.222 4.02.42c-.74.198-1.37.462-2 .962-.63.5-.864 1.26-1.062 2-.198.72-.333 1.54-.372 2.76C.01 8.002 0 8.396 0 12.017c0 3.62.01 4.015.048 5.237.039 1.22.174 2.04.372 2.76.198.74.462 1.37.962 2 .5.63 1.26.864 2 1.062.72.198 1.54.333 2.76.372 1.222.039 1.616.048 5.237.048 3.62 0 4.015-.01 5.237-.048 1.22-.039 2.04-.174 2.76-.372.74-.198 1.37-.462 2-.962.63-.5.864-1.26 1.062-2 .198-.72.333-1.54.372-2.76.039-1.222.048-1.616.048-5.237 0-3.62-.01-4.015-.048-5.237-.039-1.22-.174-2.04-.372-2.76-.198-.74-.462-1.37-.962-2-.5-.63-1.26-.864-2-1.062-.72-.198-1.54-.333-2.76-.372C16.015.01 15.62 0 12.017 0zM12.017 2.163c3.557 0 3.98.01 5.385.048 1.3.06 2.006.276 2.477.458.622.242 1.067.532 1.533.998.466.466.756.911.998 1.533.182.471.398 1.177.458 2.477.038 1.405.048 1.828.048 5.385 0 3.557-.01 3.98-.048 5.385-.06 1.3-.276 2.006-.458 2.477-.242.622-.532 1.067-.998 1.533-.466.466-.911.756-1.533.998-.471.182-1.177.398-2.477.458-1.405.038-1.828.048-5.385.048-3.557 0-3.98-.01-5.385-.048-1.3-.06-2.006-.276-2.477-.458-.622-.242-1.067-.532-1.533-.998-.466-.466-.756-.911-.998-1.533-.182-.471-.398-1.177-.458-2.477-.038-1.405-.048-1.828-.048-5.385 0-3.557.01-3.98.048-5.385.06-1.3.276-2.006.458-2.477.242-.622.532-1.067.998-1.533.466-.466.911-.756 1.533-.998.471-.182 1.177-.398 2.477-.458 1.405-.038 1.828-.048 5.385-.048z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M12.017 5.838a6.179 6.179 0 100 12.358 6.179 6.179 0 000-12.358zM12.017 16a4 4 0 110-8 4 4 0 010 8z" clipRule="evenodd" />
                  <path d="M19.846 5.595a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Sublinks - Only shown on service pages */}
          {showServiceLinks && (
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
                Popular Services
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/residential-deep-cleaning" className="text-gray-300 hover:text-white transition-colors">
                    Residential Deep Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="/services/commercial-deep-cleaning" className="text-gray-300 hover:text-white transition-colors">
                    Commercial Deep Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="/services/general-cleaning" className="text-gray-300 hover:text-white transition-colors">
                    General Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="/services/sofa-cleaning" className="text-gray-300 hover:text-white transition-colors">
                    Sofa Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="/services/carpet-cleaning" className="text-gray-300 hover:text-white transition-colors">
                    Carpet Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="/services/pest-control" className="text-gray-300 hover:text-white transition-colors">
                    Pest Control
                  </Link>
                </li>
                <li>
                  <Link href="/services/marble-polishing" className="text-gray-300 hover:text-white transition-colors">
                    Marble Polishing
                  </Link>
                </li>
                <li>
                  <Link href="/services/post-construction-cleaning" className="text-gray-300 hover:text-white transition-colors">
                    Post Construction Cleaning
                  </Link>
                </li>
              </ul>
            </div>
          )}

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
              Contact Info
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <span className="block">Phone: +974 5518 7619</span>
              </li>
              <li>
                <span className="block">Email: fms@fabtech-services.com</span>
              </li>
              <li>
                <span className="block">
                <p style={{ lineHeight: '1.6', margin: 0 }}>
              Madina Khalifa (S) Building 138, Zone 34, Street 362 <br></br>Al Rabiah Building 1 
              Second floor S14, Doha
              </p>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Fabtech Services W.L.L. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
