'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {/* Floating Emergency Button */}
      <div className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex flex-col space-y-3">
          {/* Emergency Call Button */}
          <a
            href="tel:+97444123456"
            className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group animate-pulse"
            title="Emergency Hotline"
          >
            <svg className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </a>

          {/* Chat Button */}
          <button
            onClick={() => setShowChat(!showChat)}
            className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            title="Live Chat"
          >
            <svg className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>

          {/* Quick Quote Button */}
          <Link
            href="/contact"
            className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            title="Get Quick Quote"
          >
            <svg className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Chat Widget */}
      {showChat && (
        <div className="fixed bottom-20 right-4 z-50 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Live Chat Support</h3>
              <p className="text-xs text-blue-100">We&apos;re online now!</p>
            </div>
            <button
              onClick={() => setShowChat(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="p-4">
            <div className="mb-4">
              <div className="bg-gray-100 rounded-lg p-3 mb-2">
                <p className="text-sm text-gray-700">
                  👋 Hi! How can we help you with your facility management needs today?
                </p>
              </div>
            </div>
            
            <div className="space-y-2">
              <button className="w-full text-left p-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                💬 Get a free quote
              </button>
              <button className="w-full text-left p-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                📅 Schedule consultation
              </button>
              <button className="w-full text-left p-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                🚨 Emergency service
              </button>
              <button className="w-full text-left p-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                ❓ General questions
              </button>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center text-xs text-gray-500">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                Typically responds in a few minutes
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Emergency Banner for Mobile */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-red-600 text-white p-2 text-center text-sm md:hidden">
        <a href="tel:+97444123456" className="flex items-center justify-center">
          <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          Emergency: +974 5518 7619
        </a>
      </div>
    </>
  );
}
