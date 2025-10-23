'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Link from 'next/link';

export default function ServiceCarousel({ services }) {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const scrollNext = useCallback(() => {
    if (api) {
      api.scrollNext();
    }
  }, [api]);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Separate autoplay effect
  useEffect(() => {
    if (!api) {
      return;
    }

    const autoplayInterval = setInterval(() => {
      scrollNext();
    }, 3000);

    return () => {
      clearInterval(autoplayInterval);
    };
  }, [api, scrollNext]);

  const defaultServices = [
    { 
      title: 'Deep Cleaning', 
      description: 'Comprehensive deep cleaning for homes and offices with professional-grade equipment and eco-friendly products.', 
      icon: '🧼', 
      features: ['Disinfection services', 'Carpet shampooing', 'Window cleaning', 'Floor polishing'],
      href: '/services/deep-cleaning'
    },
    { 
      title: 'Landscaping', 
      description: 'Complete garden design, lawn care and regular maintenance to keep your outdoor spaces beautiful year-round.', 
      icon: '🌿', 
      features: ['Lawn mowing & edging', 'Hedge trimming', 'Irrigation setup', 'Seasonal planting'],
      href: '/services/landscaping'
    },
    { 
      title: 'Pest Control', 
      description: 'Safe and effective pest removal with comprehensive prevention plans to protect your property.', 
      icon: '🐜', 
      features: ['Property inspection', 'Custom treatment plan', 'Follow-up visits', 'Prevention advice'],
      href: '/services/pest-control'
    },
    { 
      title: 'Post Construction Cleanup', 
      description: 'Professional post-construction cleanup services to make your newly built or renovated space move-in ready.', 
      icon: '🏗️', 
      features: ['Debris removal', 'Dust cleaning', 'Final polishing', 'Safety inspection'],
      href: '/services/post-construction-cleanup'
    },
    { 
      title: 'Facility Management', 
      description: 'Comprehensive facility management services including maintenance, staffing, and vendor coordination.', 
      icon: '🏢', 
      features: ['Preventive maintenance', 'Staff coordination', 'Vendor management', '24/7 support'],
      href: '/services/facility-management'
    },
  ];

  const serviceList = services || defaultServices;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {serviceList.map((service, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full perspective-1000">
                <Card className="h-full transition-all duration-500 ease-out hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.3)] hover:-translate-y-3 hover:rotate-y-2 border-2 border-gray-100 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20 backdrop-blur-sm transform-gpu">
                  <CardContent className="flex flex-col justify-between h-full p-6 relative">
                    {/* Decorative gradient overlay */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Header */}
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="text-4xl mr-3 transition-all duration-500 hover:scale-125 hover:rotate-12 filter drop-shadow-lg" role="img" aria-label={`${service.title} icon`}>
                          {service.icon}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 leading-tight">
                          {service.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      {service.features && service.features.length > 0 && (
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features:</h4>
                          <ul className="space-y-1.5">
                            {service.features.slice(0, 3).map((feature, featureIndex) => (
                              <li key={featureIndex} className="text-gray-600 text-xs flex items-start group">
                                <span className="text-green-500 mr-2 mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-125">✓</span>
                                <span className="group-hover:text-gray-900 transition-colors duration-200">{feature}</span>
                              </li>
                            ))}
                            {service.features.length > 3 && (
                              <li className="text-gray-500 text-xs italic">
                                +{service.features.length - 3} more features
                              </li>
                            )}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* CTA Buttons */}
                    <div className="mt-auto space-y-2.5">
                      {service.href && (
                        <Link
                          href={service.href}
                          className="block w-full bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-700 hover:via-red-800 hover:to-red-900 text-white text-center py-2.5 px-4 rounded-lg font-semibold transition-all duration-300 text-sm shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95"
                        >
                          Learn More
                        </Link>
                      )}
                      <button className="w-full border-2 border-white-600 text-white-600 hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 hover:text-white py-2.5 px-4 rounded-lg font-semibold transition-all duration-300 text-sm hover:shadow-lg hover:scale-105 active:scale-95 hover:border-transparent">
                        Get Quote
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation */}
        <div className="flex items-center justify-center mt-10 space-x-8">
          <CarouselPrevious className="relative left-0 top-0 translate-y-0 h-14 w-14 rounded-full bg-white text-black hover:bg-black hover:text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-125 active:scale-95 backdrop-blur-sm" />
          
          <div className="flex space-x-2.5 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  index === current 
                    ? 'w-10 bg-gradient-to-r from-gray-400 to-black shadow-lg scale-110' 
                    : 'w-2.5 bg-black hover:bg-black hover:scale-125'
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <CarouselNext className="relative right-0 top-0 translate-y-0 h-14 w-14 rounded-full bg-white text-black  hover:bg-black hover:text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-125 active:scale-95 backdrop-blur-sm" />
        </div>
      </Carousel>
    </div>
  );
}