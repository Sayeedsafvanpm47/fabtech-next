'use client';

import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

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
              <div className="p-1 h-full">
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="flex flex-col justify-between h-full p-6">
                    {/* Header */}
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="text-3xl mr-3" role="img" aria-label={`${service.title} icon`}>
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
                          <ul className="space-y-1">
                            {service.features.slice(0, 3).map((feature, featureIndex) => (
                              <li key={featureIndex} className="text-gray-600 text-xs flex items-start">
                                <span className="text-green-500 mr-2 mt-0.5 flex-shrink-0">✓</span>
                                <span>{feature}</span>
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
                    <div className="mt-auto space-y-2">
                      {service.href && (
                        <Link
                          href={service.href}
                          className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors duration-200 text-sm"
                        >
                          Learn More
                        </Link>
                      )}
                      <button className="w-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-2 px-4 rounded-lg font-medium transition-all duration-200 text-sm">
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
        <div className="flex items-center justify-center mt-6 space-x-4">
          <CarouselPrevious className="relative left-0 top-0 translate-y-0" />
          <div className="flex space-x-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === current - 1 ? 'bg-black' : 'bg-white'
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <CarouselNext className="relative right-0 top-0 translate-y-0" />
        </div>
      </Carousel>
    </div>
  );
}
