'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ServiceCard({ title, description, icon, features, href }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white cursor-pointer rounded-lg shadow-lg p-6 h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105">
      {/* Header */}
      <div className="flex items-center mb-4">
        <div className="text-4xl mr-4" role="img" aria-label={`${title} icon`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-4 flex-grow leading-relaxed">
        {description}
      </p>

      {/* Features (expandable) */}
      {features && features.length > 0 && (
        <div className="mb-4">
          <button
            onClick={toggleExpand}
            className="text-black hover:text-red-800 font-medium transition-colors duration-200 mb-2 flex items-center"
            aria-expanded={isExpanded}
          >
            {isExpanded ? 'Show Less' : 'Key Features'}
            <svg 
              className={`ml-1 h-4 w-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {isExpanded && (
            <div className="border-t pt-3 mt-2 animate-fadeIn">
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="text-gray-600 text-sm flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5 flex-shrink-0">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* CTA Buttons */}
      <div className="mt-auto space-y-2">
        {href && (
          <Link
            href={href}
            className="block w-full bg-black hover:bg-red-700 text-white text-center py-3 px-4 rounded-lg font-medium transition-colors duration-200"
          >
            Learn More
          </Link>
        )}
        
      </div>
    </div>
  );
}