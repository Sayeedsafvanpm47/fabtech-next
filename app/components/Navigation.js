'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Phone, MapPin, Mail } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [language, setLanguage] = useState('en');
  const [closeTimeout, setCloseTimeout] = useState(null);
  const pathname = usePathname();

  const handleMouseEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsServicesOpen(false);
    }, 300); // Increased delay to allow mouse movement to dropdown
    setCloseTimeout(timeout);
  };

  const navItems = [
    { href: '/', label: 'Home', labelAr: 'الرئيسية' },
    { 
      href: '/services', 
      label: 'Services', 
      labelAr: 'الخدمات',
      hasDropdown: true 
    },
    { href: '/projects', label: 'Projects', labelAr: 'المشاريع' },
    { href: '/about', label: 'About', labelAr: 'من نحن' },
    { href: '/blog', label: 'Blog', labelAr: 'المدونة' },
    { href: '/faq', label: 'FAQ', labelAr: 'الأسئلة الشائعة' },
    { href: '/contact', label: 'Contact', labelAr: 'اتصل بنا' },
  ];

  const serviceCategories = [
    {
      title: 'Cleaning',
      titleAr: 'التنظيف',
      services: [
        { name: 'Sofa Cleaning Services', nameAr: 'خدمات تنظيف الأرائك', href: '/services/sofa-cleaning' },
        { name: 'Carpet Cleaning Services', nameAr: 'خدمات تنظيف السجاد', href: '/services/carpet-cleaning' },
        { name: 'Mattress Cleaning Services', nameAr: 'خدمات تنظيف المراتب', href: '/services/mattress-cleaning' },
        { name: 'Curtain Cleaning Services', nameAr: 'خدمات تنظيف الستائر', href: '/services/curtain-cleaning' },
        { name: 'Water Tank Cleaning Services', nameAr: 'خدمات تنظيف خزانات المياه', href: '/services/water-tank-cleaning' },
        { name: 'Oven Cleaning Services', nameAr: 'خدمات تنظيف الأفران', href: '/services/oven-cleaning' },
        { name: 'Majlis Cleaning', nameAr: 'تنظيف المجالس', href: '/services/majlis-cleaning' }
      ]
    },
    {
      title: 'Marble',
      titleAr: 'الرخام',
      services: [
        { name: 'Marble Polishing & Restoration', nameAr: 'تلميع وترميم الرخام', href: '/services/marble-polishing' },
        { name: 'Crystallization', nameAr: 'التبلور', href: '/services/crystallization' },
        { name: 'Granite Polishing', nameAr: 'تلميع الجرانيت', href: '/services/granite-polishing' },
        { name: 'Marble Stain Removal', nameAr: 'إزالة بقع الرخام', href: '/services/marble-stain-removal' },
        { name: 'Stone Polishing', nameAr: 'تلميع الحجر', href: '/services/stone-polishing' },
        { name: 'Marble Floor Cleaning', nameAr: 'تنظيف أرضيات الرخام', href: '/services/marble-floor-cleaning' }
      ]
    },
    {
      title: 'Pest Control Services',
      titleAr: 'خدمات مكافحة الآفات',
      services: [
        { name: 'Cockroach Control', nameAr: 'مكافحة الصراصير', href: '/services/cockroach-control' },
        { name: 'Bedbug Control', nameAr: 'مكافحة بق الفراش', href: '/services/bedbug-control' },
        { name: 'Termite Control', nameAr: 'مكافحة النمل الأبيض', href: '/services/termite-control' },
        { name: 'Snake Control', nameAr: 'مكافحة الثعابين', href: '/services/snake-control' },
        { name: 'Scorpion Control', nameAr: 'مكافحة العقارب', href: '/services/scorpion-control' }
      ]
    },
    {
      title: 'Car',
      titleAr: 'السيارات',
      services: [
        { name: 'Car Interior Detailing', nameAr: 'تفصيل داخلي للسيارة', href: '/services/car-interior-detailing' },
        { name: 'Car Exterior Polishing', nameAr: 'تلميع خارجي للسيارة', href: '/services/car-exterior-polishing' },
        { name: 'Full Car Detailing', nameAr: 'تفصيل كامل للسيارة', href: '/services/full-car-detailing' },
        { name: 'Car Waxing', nameAr: 'تشميع السيارة', href: '/services/car-waxing' }
      ]
    },
    {
      title: 'Commercial & Residential Cleaning',
      titleAr: 'التنظيف التجاري والسكني',
      services: [
        { name: 'Commercial Cleaning', nameAr: 'التنظيف التجاري', href: '/services/commercial-cleaning' },
        { name: 'Residential Cleaning', nameAr: 'التنظيف السكني', href: '/services/residential-cleaning' },
        { name: 'After Construction Cleaning', nameAr: 'تنظيف ما بعد البناء', href: '/services/after-construction-cleaning' },
        { name: 'Floor Cleaning', nameAr: 'تنظيف الأرضيات', href: '/services/floor-cleaning' },
        { name: 'Move In / Move Out Cleaning', nameAr: 'تنظيف الانتقال', href: '/services/move-cleaning' }
      ]
    }
  ];

  return (
    <nav className="bg-white-100 shadow-lg sticky top-0 z-[9998] relative">
     <div className="flex flex-col sm:flex-row justify-evenly items-center bg-red-800 text-white text-sm py-2 px-4">
      <div className="flex items-center gap-2">
        <Phone size={16} />
        <Link href="tel:+97455187619" className="hover:underline">
          +974 5518 7619
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <MapPin size={16} />
        <span>Madina Khalifa South, Doha</span>
      </div>

      <div className="flex items-center gap-2">
        <Mail size={16} />
        <Link href="mailto:info@fabtechqatar.com" className="hover:underline">
          info@fabtechqatar.com
        </Link>
      </div>
    </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span  className="text-2xl font-bold text-blue-600"> <Image className='rounded-full' src="/logo.png" alt="logo" width={200} height={200} /> </span>
            </Link>
          </div>
          
          {/* Desktop Navigation - Hidden below 1000px */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href === '/services' && pathname.startsWith('/services'));
              
              return (
                <div key={item.href} className="relative">
                  {item.hasDropdown ? (
                    <div 
                      className="relative group"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link
                        href={item.href}
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center ${
                          isActive 
                            ? 'text-orange-600 bg-orange-50' 
                            : 'text-gray-900 hover:text-orange-600 hover:bg-orange-50'
                        }`}
                      >
                        {language === 'en' ? item.label : item.labelAr}
                        <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </Link>
                      {/* Invisible bridge to prevent flickering */}
                      {isServicesOpen && (
                        <div className="absolute top-full left-0 right-0 h-2 bg-transparent"></div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        isActive 
                          ? 'text-orange-600 bg-orange-50' 
                          : 'text-gray-900 hover:text-orange-600 hover:bg-orange-50'
                      }`}
                    >
                      {language === 'en' ? item.label : item.labelAr}
                    </Link>
                  )}
                </div>
              );
            })}
            
            {/* Language Switcher */}
            <div className="flex items-center space-x-2 border-l border-gray-200 pl-6">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-sm font-medium rounded transition-colors duration-200 ${
                  language === 'en' 
                    ? 'bg-black text-white' 
                    : 'text-red-600 hover:text-black'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('ar')}
                className={`px-2 py-1 text-sm font-medium rounded transition-colors duration-200 ${
                  language === 'ar' 
                    ? 'bg-black text-white' 
                    : 'text-red-600 hover:text-black'
                }`}
              >
                عربي
              </button>
            </div>
          </div>

          {/* Mobile menu button - Show below 1000px */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Mobile Language Switcher */}
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-xs font-medium rounded ${
                  language === 'en' 
                  ? 'bg-black text-white' 
                    : 'text-red-600 hover:text-black'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('ar')}
                className={`px-2 py-1 text-xs font-medium rounded ${
                  language === 'ar' 
                     ? 'bg-black text-white' 
                    : 'text-red-600 hover:text-black'
                }`}
              >
                عربي
              </button>
            </div>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-yellow-600 hover:bg-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Services Dropdown - Outside navigation for proper mouse handling */}
      {isServicesOpen && (
        <div 
          className="absolute left-4 right-4 top-full mt-2 bg-white shadow-xl border border-gray-200 rounded-lg z-[9999] max-h-[80vh] overflow-y-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {serviceCategories.map((category, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wider border-b border-gray-200 pb-2">
                    {language === 'en' ? category.title : category.titleAr}
                  </h3>
                  <ul className="space-y-2">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex}>
                        <Link
                          href={service.href}
                          className="text-gray-600 hover:text-yellow-600 text-sm transition-colors duration-200 block py-1"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {language === 'en' ? service.name : service.nameAr}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Navigation Menu - Show below 1000px */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200 max-h-96 overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="text-black-700 hover:text-yellow block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {language === 'en' ? item.label : item.labelAr}
                </Link>
                
                {/* Mobile Services Submenu */}
                {item.hasDropdown && (
                  <div className="ml-4 space-y-1">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="py-2">
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                          {language === 'en' ? category.title : category.titleAr}
                        </div>
                        {category.services.map((service, serviceIndex) => (
                          <Link
                            key={serviceIndex}
                            href={service.href}
                            className="text-gray-600 hover:text-yellow-600 block px-2 py-1 text-sm transition-colors duration-200"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {language === 'en' ? service.name : service.nameAr}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
