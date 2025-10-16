'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
        title: "Maintenance Excellence",
        subtitle: "Keeping your facilities running smoothly 24/7",
        image: "https://res.cloudinary.com/diunkrydn/image/upload/v1760529483/professional-cleaning-service-person-using-steam-cleaner-office_1_tfno1o.jpg"
      },
    {
      title: "Deep Cleaning Services",
      subtitle: "Comprehensive solutions for your business needs",
      image: "https://res.cloudinary.com/diunkrydn/image/upload/v1760529201/modern-minimalist-office_1_xragmo.jpg"
    },
    
    {
      title: "Trusted by Industry Leaders",
      subtitle: "Over 500+ satisfied clients nationwide",
      image: "https://res.cloudinary.com/diunkrydn/image/upload/v1760529754/man-spraying-powder-paint-full-shot_1_d3s4n5.jpg"
    },
    {
        title: "Construction Services",
        subtitle: "Handles all your construction projects with passion and precision",
        image: "https://res.cloudinary.com/diunkrydn/image/upload/v1760530490/working-hard-building-man-construction-worker_1_dduedr.jpg"
      }
    
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-red-600/60 z-10"></div>
          <Image  
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority={index === 0}
          />
          <div className="relative z-20 flex items-center justify-center h-full">
            <div className="text-center text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-3xl mx-auto">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => window.location.href = '/services'} 
                  className="bg-red-600 hover:bg-black text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors duration-200 text-sm sm:text-base"
                >
                  Get Started
                </button>
                <button 
                  onClick={() => window.location.href = '/about'} 
                  className="border-2 border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
