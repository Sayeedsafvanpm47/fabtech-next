'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactEmergencySection() {
  const [activeTab, setActiveTab] = useState('contact');

  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 via-red-800 to-red-900 text-white relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          animation: 'float 20s ease-in-out infinite'
        }}></div>
      </div>

      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-2 h-2 bg-white/20 rounded-full animate-bounce" style={{
          top: '20%',
          left: '10%',
          animationDelay: '0s',
          animationDuration: '3s'
        }}></div>
        <div className="absolute w-1 h-1 bg-blue-300/30 rounded-full animate-bounce" style={{
          top: '60%',
          right: '15%',
          animationDelay: '1s',
          animationDuration: '4s'
        }}></div>
        <div className="absolute w-3 h-3 bg-white/10 rounded-full animate-bounce" style={{
          bottom: '30%',
          left: '80%',
          animationDelay: '2s',
          animationDuration: '5s'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Emergency Banner with enhanced animations */}
        <div className="bg-gradient-to-br from-red-900 via-red-800 to-red-900 rounded-xl p-6 mb-12 text-center shadow-2xl transform hover:scale-105 transition-all duration-300 border border-red-500/30">
          <div className="flex items-center justify-center mb-3">
            <div className="relative">
              <svg className="h-7 w-7 mr-3 text-white animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <div className="absolute -inset-1 bg-white/20 rounded-full animate-ping"></div>
            </div>
            <span className="text-xl font-bold tracking-wide">24/7 EMERGENCY SERVICES</span>
          </div>
          <p className="text-red-100 mb-4 text-base">Immediate response for critical facility issues</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+97444123456" 
              className="group bg-white text-red-600 hover:bg-red-50 px-8 py-3 rounded-xl font-bold transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg className="h-6 w-6 mr-3 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +974 4412 3456
            </a>
            <div className="flex items-center bg-yellow-400/20 px-4 py-2 rounded-lg">
              <span className="text-yellow-200 font-semibold flex items-center">
                <span className="animate-pulse mr-2">⚡</span>
                Average Response: 15 minutes
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto lg:mx-0 rounded-full"></div>
            </div>
            
            {/* Enhanced Tab Navigation */}
            <div className="bg-blue-800/50 backdrop-blur-sm rounded-xl p-2 border border-blue-700/50">
              <div className="flex">
                {[
                  { key: 'contact', label: 'Contact Info', icon: '📞' },
                  { key: 'hours', label: 'Business Hours', icon: '🕒' },
                  { key: 'areas', label: 'Service Areas', icon: '📍' }
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                      activeTab === tab.key 
                        ? 'bg-white text-blue-900 shadow-lg transform scale-105' 
                        : 'text-blue-200 hover:text-white hover:bg-blue-700/50'
                    }`}
                  >
                    <span>{tab.icon}</span>
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Enhanced Tab Content */}
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 border border-white/20 shadow-xl">
              <div className="min-h-[300px]">
                {activeTab === 'contact' && (
                  <div className="space-y-6 animate-in slide-in-from-left duration-500">
                    {[
                      {
                        icon: (
                          <svg className="h-7 w-7 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        ),
                        label: 'Phone',
                        content: (
                          <a href="tel:+97444123456" className="text-blue-200 hover:text-white transition-colors duration-200 font-medium">
                            +974 4412 3456
                          </a>
                        )
                      },
                      {
                        icon: (
                          <svg className="h-7 w-7 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        ),
                        label: 'Email',
                        content: (
                          <a href="mailto:info@fabtech-qatar.com" className="text-blue-200 hover:text-white transition-colors duration-200 font-medium">
                            info@fabtech-qatar.com
                          </a>
                        )
                      },
                      {
                        icon: (
                          <svg className="h-7 w-7 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        ),
                        label: 'Address',
                        content: (
                          <div className="text-blue-200">
                            <p>Building 123, Street 45</p>
                            <p>Al Sadd, Doha, Qatar</p>
                          </div>
                        )
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/5 transition-colors duration-200">
                        <div className="flex-shrink-0 p-2 bg-blue-600/30 rounded-lg">
                          {item.icon}
                        </div>
                        <div>
                          <p className="font-semibold text-white mb-1">{item.label}</p>
                          {item.content}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'hours' && (
                  <div className="space-y-4 animate-in slide-in-from-left duration-500">
                    {[
                      { day: 'Monday - Thursday', time: '8:00 AM - 5:00 PM', isOpen: true },
                      { day: 'Saturday', time: '8:00 AM - 5:00 PM', isOpen: true },
                      { day: 'Sunday', time: '8:00 AM - 5:00 PM', isOpen: true },
                      { day: 'Friday', time: 'Closed', isOpen: false }
                    ].map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-3 px-4 rounded-lg hover:bg-white/5 transition-colors duration-200 border-b border-white/10 last:border-b-0">
                        <span className="font-medium text-white">{schedule.day}</span>
                        <span className={`font-semibold ${schedule.isOpen ? 'text-blue-200' : 'text-red-300'}`}>
                          {schedule.time}
                        </span>
                      </div>
                    ))}
                    <div className="mt-6 p-4 bg-green-600/20 rounded-xl border border-green-500/30">
                      <p className="text-green-200 font-medium flex items-center">
                        <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                        Emergency services available 24/7
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'areas' && (
                  <div className="space-y-6 animate-in slide-in-from-left duration-500">
                    <p className="text-blue-200 text-lg font-medium">We proudly serve all areas across Qatar:</p>
                    <div className="grid grid-cols-2 gap-4">
                      {['Doha', 'Al Rayyan', 'Al Wakrah', 'Lusail', 'Al Khor', 'Mesaieed'].map((area, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-200">
                          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-white font-medium">{area}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-blue-600/20 rounded-xl border border-blue-500/30">
                      <p className="text-blue-200 flex items-center">
                        <span className="mr-2">📍</span>
                        Nationwide coverage with local teams in each region
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Enhanced Quick Actions */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold text-white mb-4">
                Quick Actions
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto lg:mx-0 rounded-full"></div>
            </div>
            
            <div className="space-y-6">
              {/* Free Quote CTA */}
              <div className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-green-100 rounded-xl mr-4">
                    <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Get Free Quote</h4>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Get a detailed estimate for your facility management needs in under 24 hours.
                </p>
                <Link
                  href="/contact"
                  className="group w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Get Quote
                  <svg className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Schedule Consultation */}
              <div className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-xl mr-4">
                    <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Schedule Consultation</h4>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Book a free facility assessment with our expert team.
                </p>
                <Link
                  href="/contact"
                  className="group w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Book Now
                  <svg className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </Link>
              </div>

              {/* Enhanced Value Proposition */}
              <div className="bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-2xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
                <h4 className="text-xl font-bold mb-6 flex items-center">
                  <span className="mr-3">🛡️</span>
                  Our Guarantee
                </h4>
                <ul className="space-y-4">
                  {[
                    '100% Satisfaction Guarantee',
                    '15-minute Emergency Response',
                    'Up to 30% Cost Savings'
                  ].map((guarantee, index) => (
                    <li key={index} className="flex items-center group">
                      <div className="p-1 bg-white/20 rounded-full mr-3 group-hover:bg-white/30 transition-colors duration-200">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-medium">{guarantee}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        
        .animate-in {
          animation: slideIn 0.5s ease-out forwards;
        }
        
        .slide-in-from-left {
          transform: translateX(-20px);
          opacity: 0;
        }
        
        @keyframes slideIn {
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .hover\\:shadow-3xl:hover {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
}