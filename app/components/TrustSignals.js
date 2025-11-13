'use client';

import { useState } from 'react';

export default function TrustSignals() {
  const [activeCredential, setActiveCredential] = useState(0);

  const credentials = [
    {
      title: "ISO 9001:2015",
      subtitle: "Quality Management",
      description: "Certified quality management system ensuring consistent service delivery",
      icon: "🏆"
    }
  ];

  const stats = [
    { number: "10+", label: "Years Experience", icon: "📅" },
    { number: "500+", label: "Satisfied Clients", icon: "👥" },
    { number: "24/7", label: "Emergency Support", icon: "🚨" },
    { number: "99.8%", label: "Client Retention", icon: "💯" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted & Certified Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Over a decade of proven expertise with industry-leading certifications and an unmatched track record
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-red-600 mb-1">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Industry Certifications
            </h3>
            
            <div className="space-y-3">
              {credentials.map((credential, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                    activeCredential === index
                      ? 'border-red-500 bg-red-50 shadow-md'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                  onClick={() => setActiveCredential(index)}
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{credential.icon}</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900">{credential.title}</h4>
                      <p className="text-sm text-gray-600">{credential.subtitle}</p>
                    </div>
                    <svg 
                      className={`h-5 w-5 text-gray-400 transform transition-transform duration-200 ${
                        activeCredential === index ? 'rotate-180' : ''
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  
                  {activeCredential === index && (
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <p className="text-gray-600 text-sm">{credential.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

 
          </div>

          {/* Awards & Recognition */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Awards & Recognition
            </h3>

            <div className="space-y-4">
              {/* Award 1 */}
              <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-yellow-400">
                <div className="flex items-start">
                  <div className="text-3xl mr-4">🥇</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                    Ranked Among the Top 5 Companies on ILoveQatar.com 
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">Featured by ILoveQatar.com</p>
                    <p className="text-xs text-gray-500">
                      Recognized for outstanding service quality and client satisfaction
                    </p>
                  </div>
                </div>
              </div>

      
            </div>

            {/* Professional Memberships */}
           
          </div>
        </div>
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
              <h4 className="font-bold text-blue-900 mb-4 flex items-center">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
                Professional Memberships
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  BNI QATAR 
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                 
                  Maverick 365 
                </div>
               
              </div>
            </div>

        {/* Service Level Agreement Preview */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Our Service Level Agreement
            </h3>
            <p className="text-white max-w-2xl mx-auto">
              We stand behind our work with industry-leading guarantees and response times
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white/10 rounded-lg p-4 mb-3">
                <div className="text-3xl mb-2">⚡</div>
                <div className="text-2xl font-bold">15 min</div>
              </div>
              <h4 className="font-semibold mb-1">Emergency Response</h4>
              <p className="text-sm text-white-200">Critical issues addressed within 15 minutes</p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 rounded-lg p-4 mb-3">
                <div className="text-3xl mb-2">💰</div>
                <div className="text-2xl font-bold">30%</div>
              </div>
              <h4 className="font-semibold mb-1">Cost Savings</h4>
              <p className="text-sm text-white-200">Average cost reduction vs. in-house teams</p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 rounded-lg p-4 mb-3">
                <div className="text-3xl mb-2">🎯</div>
                <div className="text-2xl font-bold">99.8%</div>
              </div>
              <h4 className="font-semibold mb-1">Uptime Guarantee</h4>
              <p className="text-sm text-white-200">Facility systems operational guarantee</p>
            </div>
          </div>
        </div>
       
       
      </div>
      
    </section>
  );
}

