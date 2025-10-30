'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import BookingForm from '../components/BookingForm';

function BookingContent() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get('service');
  const [selectedService, setSelectedService] = useState(serviceParam || '');
  const [showAllServices, setShowAllServices] = useState(false);

  // Service pricing data
  const servicePricing = {
    'residential-deep-cleaning': {
      name: 'Residential Deep Cleaning',
      options: [
        { id: '1bhk', name: '1 BHK Apartment', basePrice: 150, description: 'Up to 700 sq ft' },
        { id: '2bhk', name: '2 BHK Apartment', basePrice: 250, description: 'Up to 1200 sq ft' },
        { id: '3bhk', name: '3 BHK Apartment', basePrice: 350, description: 'Up to 1800 sq ft' },
        { id: 'villa', name: 'Villa/House', basePrice: 500, description: 'Above 2000 sq ft' },
      ],
      addOns: [
        { id: 'carpet', name: 'Carpet Deep Cleaning', price: 50 },
        { id: 'sofa', name: 'Sofa Cleaning', price: 75 },
        { id: 'kitchen-deep', name: 'Kitchen Deep Clean', price: 100 },
        { id: 'balcony', name: 'Balcony Cleaning', price: 30 },
      ]
    },
    'commercial-deep-cleaning': {
      name: 'Commercial Deep Cleaning',
      options: [
        { id: 'small-office', name: 'Small Office', basePrice: 200, description: 'Up to 1000 sq ft' },
        { id: 'medium-office', name: 'Medium Office', basePrice: 400, description: 'Up to 3000 sq ft' },
        { id: 'large-office', name: 'Large Office', basePrice: 800, description: 'Up to 5000 sq ft' },
        { id: 'warehouse', name: 'Warehouse/Factory', basePrice: 1200, description: 'Above 5000 sq ft' },
      ],
      addOns: [
        { id: 'window-cleaning', name: 'Window Cleaning', price: 100 },
        { id: 'floor-polishing', name: 'Floor Polishing', price: 150 },
        { id: 'restroom-sanitization', name: 'Restroom Deep Sanitization', price: 80 },
        { id: 'carpet-commercial', name: 'Commercial Carpet Cleaning', price: 120 },
      ]
    },
    'general-cleaning': {
      name: 'General Cleaning',
      options: [
        { id: 'weekly', name: 'Weekly Cleaning', basePrice: 80, description: 'Regular maintenance' },
        { id: 'bi-weekly', name: 'Bi-weekly Cleaning', basePrice: 120, description: 'Every 2 weeks' },
        { id: 'monthly', name: 'Monthly Cleaning', basePrice: 200, description: 'Once a month' },
        { id: 'one-time', name: 'One-time Cleaning', basePrice: 150, description: 'Single service' },
      ],
      addOns: [
        { id: 'inside-fridge', name: 'Inside Fridge Cleaning', price: 25 },
        { id: 'inside-oven', name: 'Inside Oven Cleaning', price: 35 },
        { id: 'window-cleaning-regular', name: 'Window Cleaning', price: 40 },
      ]
    },
    'pest-control': {
      name: 'Pest Control',
      options: [
        { id: 'apartment', name: 'Apartment Treatment', basePrice: 120, description: 'Up to 1500 sq ft' },
        { id: 'villa-pest', name: 'Villa Treatment', basePrice: 200, description: 'Up to 3000 sq ft' },
        { id: 'commercial-pest', name: 'Commercial Treatment', basePrice: 300, description: 'Commercial spaces' },
        { id: 'garden-pest', name: 'Garden Treatment', basePrice: 150, description: 'Outdoor areas' },
      ],
      addOns: [
        { id: 'follow-up', name: 'Follow-up Treatment', price: 50 },
        { id: 'warranty', name: '6-Month Warranty', price: 80 },
        { id: 'eco-friendly', name: 'Eco-Friendly Products', price: 30 },
      ]
    },
    'marble-polishing': {
      name: 'Marble Polishing',
      options: [
        { id: 'small-area', name: 'Small Area', basePrice: 100, description: 'Up to 500 sq ft' },
        { id: 'medium-area', name: 'Medium Area', basePrice: 200, description: 'Up to 1000 sq ft' },
        { id: 'large-area', name: 'Large Area', basePrice: 350, description: 'Up to 2000 sq ft' },
        { id: 'full-villa', name: 'Full Villa', basePrice: 600, description: 'Complete villa flooring' },
      ],
      addOns: [
        { id: 'sealing', name: 'Marble Sealing', price: 100 },
        { id: 'stain-removal', name: 'Stain Removal', price: 75 },
        { id: 'crack-repair', name: 'Minor Crack Repair', price: 120 },
      ]
    },
    'cleaner-supply-commercial': {
      name: 'Commercial Cleaner Staffing',
      options: [
        { id: 'single-cleaner', name: 'Single Cleaner (Full-time)', basePrice: 3500, description: '8 hours/day, 6 days/week' },
        { id: 'team-cleaners', name: 'Team of Cleaners (3-4)', basePrice: 12000, description: 'Dedicated supervisor included' },
        { id: 'part-time', name: 'Part-time Cleaner', basePrice: 2000, description: '4-5 hours/day' },
        { id: 'specialist', name: 'Specialist Staff', basePrice: 4500, description: 'Technical/hygiene specialist' },
      ],
      addOns: [
        { id: 'supervisor', name: 'Additional Supervisor', price: 1500 },
        { id: 'equipment', name: 'Cleaning Equipment Package', price: 800 },
        { id: 'uniform', name: 'Premium Uniforms', price: 200 },
      ]
    },
    'cleaner-supply-residential': {
      name: 'Residential Cleaner Supply',
      options: [
        { id: 'part-time', name: 'Part-Time Live-out', basePrice: 2500, description: '4 hours/day, 5 days/week' },
        { id: 'full-time', name: 'Full-Time Live-out', basePrice: 4000, description: '8 hours/day, 6 days/week' },
        { id: 'nanny', name: 'Specialized Nanny', basePrice: 5000, description: 'Child care specialist' },
        { id: 'elder-care', name: 'Elder Care', basePrice: 5500, description: 'Senior care specialist' },
      ],
      addOns: [
        { id: 'cooking', name: 'Cooking Services', price: 500 },
        { id: 'language-training', name: 'Language Training (English/Arabic)', price: 300 },
        { id: 'first-aid', name: 'First Aid Certification', price: 400 },
      ]
    },
    'sofa-cleaning': {
      name: 'Sofa & Upholstery Cleaning',
      options: [
        { id: 'single-seat', name: 'Single Seat/Armchair', basePrice: 80, description: 'One chair' },
        { id: '2-seater', name: '2-Seater Sofa', basePrice: 150, description: 'Small sofa' },
        { id: '3-seater', name: '3-Seater Sofa', basePrice: 250, description: 'Standard sofa' },
        { id: 'l-shape', name: 'L-Shape/Full Set', basePrice: 400, description: 'Large sectional' },
      ],
      addOns: [
        { id: 'fabric-protection', name: 'Fabric Protection Treatment', price: 80 },
        { id: 'odor-removal', name: 'Pet Odor Removal', price: 50 },
        { id: 'cushion-cleaning', name: 'Extra Cushion Cleaning', price: 30 },
      ]
    },
    'carpet-cleaning': {
      name: 'Carpet Cleaning',
      options: [
        { id: 'small-rug', name: 'Small Area Rug', basePrice: 50, description: 'Up to 6x4 feet' },
        { id: 'medium-rug', name: 'Medium Rug', basePrice: 100, description: 'Up to 10x8 feet' },
        { id: 'standard-room', name: 'Standard Room', basePrice: 150, description: 'Up to 200 sq ft' },
        { id: 'full-house', name: 'Full House Carpets', basePrice: 500, description: 'Multiple rooms' },
      ],
      addOns: [
        { id: 'stain-protection', name: 'Stain Protection', price: 100 },
        { id: 'deodorizing', name: 'Deep Deodorizing', price: 60 },
        { id: 'anti-allergen', name: 'Anti-Allergen Treatment', price: 80 },
      ]
    },
    'mattress-cleaning': {
      name: 'Mattress Cleaning',
      options: [
        { id: 'single', name: 'Single Mattress', basePrice: 150, description: 'Twin/single size' },
        { id: 'double', name: 'Double Mattress', basePrice: 200, description: 'Full/double size' },
        { id: 'queen', name: 'Queen Mattress', basePrice: 250, description: 'Queen size' },
        { id: 'king', name: 'King Mattress', basePrice: 350, description: 'King size' },
      ],
      addOns: [
        { id: 'uv-sanitization', name: 'UV Sanitization', price: 50 },
        { id: 'pillow-cleaning', name: 'Pillow Cleaning (per 2)', price: 40 },
        { id: 'stain-removal', name: 'Deep Stain Removal', price: 80 },
      ]
    },
    'water-tank-cleaning': {
      name: 'Water Tank Cleaning',
      options: [
        { id: 'small-tank', name: 'Small Tank (up to 500 Gal)', basePrice: 400, description: 'Apartment tank' },
        { id: 'medium-tank', name: 'Medium Tank (500-1500 Gal)', basePrice: 700, description: 'Villa tank' },
        { id: 'large-tank', name: 'Large Tank (1500-3000 Gal)', basePrice: 1200, description: 'Large villa/small building' },
        { id: 'commercial-tank', name: 'Commercial Tank', basePrice: 2000, description: 'Building/commercial' },
      ],
      addOns: [
        { id: 'lab-testing', name: 'Water Lab Testing', price: 300 },
        { id: 'filter-replacement', name: 'Filter Replacement', price: 150 },
        { id: 'annual-contract', name: 'Annual Maintenance (2 visits)', price: 500 },
      ]
    },
    'majlis-cleaning': {
      name: 'Majlis Cleaning',
      options: [
        { id: 'small-majlis', name: 'Small Majlis (1 room)', basePrice: 400, description: 'Single room majlis' },
        { id: 'medium-majlis', name: 'Medium Majlis', basePrice: 800, description: '2 rooms or large single' },
        { id: 'large-majlis', name: 'Large/Full Floor Majlis', basePrice: 1200, description: 'Multiple rooms/full floor' },
        { id: 'curtains', name: 'Curtain Cleaning Add-on', basePrice: 200, description: 'Heavy curtains/drapes' },
      ],
      addOns: [
        { id: 'carpet-included', name: 'Majlis Carpet Deep Clean', price: 150 },
        { id: 'cushion-extra', name: 'Extra Cushions (per 5)', price: 50 },
        { id: 'deodorizing', name: 'Shisha Odor Removal', price: 100 },
      ]
    },
    'granite-polishing': {
      name: 'Granite Polishing',
      options: [
        { id: 'countertop', name: 'Countertop Polishing', basePrice: 300, description: 'Kitchen/bathroom countertop' },
        { id: 'small-floor', name: 'Small Floor Area', basePrice: 500, description: 'Up to 500 sq ft' },
        { id: 'medium-floor', name: 'Medium Floor Area', basePrice: 1000, description: 'Up to 1000 sq ft' },
        { id: 'full-villa', name: 'Full Villa Granite', basePrice: 2000, description: 'Complete granite flooring' },
      ],
      addOns: [
        { id: 'sealing', name: 'Granite Sealing', price: 150 },
        { id: 'chip-repair', name: 'Chip/Crack Repair', price: 200 },
        { id: 'maintenance', name: 'Bi-Annual Maintenance', price: 400 },
      ]
    },
    'marble-floor-cleaning': {
      name: 'Marble Floor Cleaning',
      options: [
        { id: 'small-area', name: 'Small Area (up to 50 sqm)', basePrice: 400, description: 'Basic deep clean' },
        { id: 'medium-area', name: 'Medium Area (50-150 sqm)', basePrice: 800, description: 'Grout cleaning included' },
        { id: 'large-area', name: 'Large Area (150-300 sqm)', basePrice: 1500, description: 'Full villa cleaning' },
        { id: 'commercial', name: 'Commercial Building', basePrice: 3000, description: 'Large commercial space' },
      ],
      addOns: [
        { id: 'waxing', name: 'Restorative Waxing', price: 200 },
        { id: 'grout-restoration', name: 'Grout Line Restoration', price: 300 },
        { id: 'quarterly-maintenance', name: 'Quarterly Maintenance Plan', price: 1000 },
      ]
    },
    'post-construction-cleaning': {
      name: 'Post Construction Cleaning',
      options: [
        { id: 'studio', name: 'Studio/1BR Renovation', basePrice: 800, description: 'Small apartment' },
        { id: '2-3br', name: '2-3BR Apartment', basePrice: 1500, description: 'Medium apartment' },
        { id: 'villa', name: 'Villa/Townhouse', basePrice: 3500, description: 'Complete villa' },
        { id: 'commercial', name: 'Commercial Space', basePrice: 5000, description: 'Office/retail/warehouse' },
      ],
      addOns: [
        { id: 'window-scraping', name: 'Window Paint Scraping', price: 300 },
        { id: 'floor-polishing', name: 'Floor Polishing', price: 500 },
        { id: 'exterior-cleaning', name: 'Exterior Facade Cleaning', price: 800 },
      ]
    },
    'move-in-move-out-cleaning': {
      name: 'Move-In / Move-Out Cleaning',
      options: [
        { id: 'studio', name: 'Studio/1 BR', basePrice: 450, description: '2 cleaners, 4-6 hours' },
        { id: '2br', name: '2 BR Apartment', basePrice: 800, description: '2-3 cleaners, full day' },
        { id: '3br', name: '3 BR Apartment', basePrice: 1200, description: '3-4 cleaners, full day' },
        { id: 'villa', name: 'Villa/Townhouse', basePrice: 2000, description: '4-6 cleaners, 1-2 days' },
      ],
      addOns: [
        { id: 'inside-cabinets', name: 'Inside Cabinet Deep Clean', price: 150 },
        { id: 'balcony-clean', name: 'Balcony/Terrace Cleaning', price: 100 },
        { id: 'garage', name: 'Garage Cleaning', price: 200 },
      ]
    },
    'interior-design': {
      name: 'Interior Design',
      options: [
        { id: 'consultation', name: 'Consultation (Hourly)', basePrice: 450, description: 'Design advice' },
        { id: 'single-room', name: 'Single Room Design', basePrice: 3000, description: 'Full concept + 3D render' },
        { id: 'full-apartment', name: 'Full Apartment Design', basePrice: 8000, description: '2-3BR complete design' },
        { id: 'villa-design', name: 'Villa Interior Design', basePrice: 20000, description: 'Full villa project' },
      ],
      addOns: [
        { id: 'additional-renders', name: 'Additional 3D Renders (per room)', price: 800 },
        { id: 'material-sourcing', name: 'Material Sourcing Service', price: 1500 },
        { id: 'site-supervision', name: 'Site Supervision (per visit)', price: 500 },
      ]
    },
    'interior-fitout': {
      name: 'Interior Fitout',
      options: [
        { id: 'small-refurb', name: 'Small Commercial Refurbishment', basePrice: 50000, description: 'Basic partitioning + finishes' },
        { id: 'office-fitout', name: 'Office Fitout (per sqm)', basePrice: 800, description: 'Full MEP + finishes' },
        { id: 'retail-fitout', name: 'Retail Fitout (per sqm)', basePrice: 1200, description: 'Premium finishes' },
        { id: 'luxury-villa', name: 'Luxury Villa Fitout', basePrice: 150000, description: 'High-end complete fitout' },
      ],
      addOns: [
        { id: 'smart-home', name: 'Smart Home Integration', price: 15000 },
        { id: 'hvac-upgrade', name: 'HVAC System Upgrade', price: 20000 },
        { id: 'extended-warranty', name: 'Extended Warranty (2 years)', price: 5000 },
      ]
    },
    'canopy-construction': {
      name: 'Canopy Construction',
      options: [
        { id: 'small-awning', name: 'Small Awning/Patio Shade', basePrice: 5000, description: 'Basic aluminum frame' },
        { id: 'large-pergola', name: 'Large Pergola/Car Shade', basePrice: 15000, description: 'Engineered design + fabric' },
        { id: 'multi-bay', name: 'Multi-Bay Structure', basePrice: 30000, description: 'Multiple parking spaces' },
        { id: 'tensile', name: 'Commercial Tensile Structure', basePrice: 50000, description: 'Large span tensile' },
      ],
      addOns: [
        { id: 'lighting', name: 'Integrated Lighting System', price: 2000 },
        { id: 'premium-fabric', name: 'Premium PTFE Fabric', price: 5000 },
        { id: 'maintenance-contract', name: 'Annual Maintenance Contract', price: 1500 },
      ]
    },
    'car-shade-construction': {
      name: 'Car Shade Construction',
      options: [
        { id: 'single-cantilever', name: 'Single Car Shade (Cantilever)', basePrice: 6000, description: 'Galvanized steel + HDPE' },
        { id: 'double-arch', name: 'Double Car Shade (Arch)', basePrice: 12000, description: 'Engineering approved + PVC' },
        { id: 'triple', name: 'Triple Car Shade', basePrice: 18000, description: 'Three parking spaces' },
        { id: 'commercial-multi', name: 'Commercial Multi-Bay', basePrice: 40000, description: '10+ parking spaces' },
      ],
      addOns: [
        { id: 'solar-panels', name: 'Solar Panel Integration', price: 8000 },
        { id: 'side-panels', name: 'Side Wind Panels', price: 2500 },
        { id: 'premium-color', name: 'Premium Color Fabric', price: 1000 },
      ]
    },
    'structural-maintenance': {
      name: 'Structural Maintenance',
      options: [
        { id: 'minor-repair', name: 'Minor Concrete Repair', basePrice: 3000, description: 'Balcony/slab repair' },
        { id: 'waterproofing', name: 'Villa Waterproofing', basePrice: 15000, description: 'Roof + wet areas' },
        { id: 'facade-repair', name: 'Facade Repair', basePrice: 25000, description: 'External wall repair' },
        { id: 'full-restoration', name: 'Full Structural Restoration', basePrice: 50000, description: 'Complete building repair' },
      ],
      addOns: [
        { id: 'engineering-report', name: 'Structural Engineering Report', price: 2000 },
        { id: 'carbon-fiber', name: 'Carbon Fiber Strengthening', price: 8000 },
        { id: 'extended-warranty', name: 'Extended Warranty (5 years)', price: 5000 },
      ]
    }
  };

  const availableServices = Object.keys(servicePricing);
  const INITIAL_SERVICES_COUNT = 8; // Show 8 services initially
  const displayedServices = showAllServices 
    ? availableServices 
    : availableServices.slice(0, INITIAL_SERVICES_COUNT);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Book Your Service
            </h1>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              Get an instant quote and book your preferred service with our easy-to-use booking system
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Service Selection */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Service</h2>
              
              <div className="space-y-3">
                {displayedServices.map((serviceKey) => {
                  const service = servicePricing[serviceKey];
                  return (
                    <button
                      key={serviceKey}
                      onClick={() => setSelectedService(serviceKey)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                        selectedService === serviceKey
                          ? 'border-red-500 bg-red-50 text-red-700'
                          : 'border-gray-200 hover:border-red-300 hover:bg-red-50'
                      }`}
                    >
                      <div className="font-semibold">{service.name}</div>
                      <div className="text-sm text-gray-600 mt-1">
                        Starting from QAR {Math.min(...service.options.map(opt => opt.basePrice))}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Show More/Less Button */}
              {availableServices.length > INITIAL_SERVICES_COUNT && (
                <div className="mt-4">
                  <button
                    onClick={() => setShowAllServices(!showAllServices)}
                    className="w-full py-3 px-4 text-center text-red-600 hover:text-red-700 hover:bg-red-50 border border-red-200 rounded-lg transition-all duration-200 font-medium"
                  >
                    {showAllServices ? (
                      <div className="flex items-center justify-center">
                        <span>Show Less Services</span>
                        <svg className="ml-2 h-4 w-4 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <span>Show More Services ({availableServices.length - INITIAL_SERVICES_COUNT} more)</span>
                        <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    )}
                  </button>
                </div>
              )}

              {/* Service Image */}
              {selectedService && (
                <div className="mt-6">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={`https://res.cloudinary.com/diunkrydn/image/upload/v1760530490/working-hard-building-man-construction-worker_1_dduedr.jpg`}
                      alt={servicePricing[selectedService].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            {selectedService ? (
              <BookingForm 
                service={servicePricing[selectedService]}
                serviceKey={selectedService}
              />
            ) : (
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Select a Service to Continue
                </h3>
                <p className="text-gray-600">
                  Choose from our available services to get started with your booking and see pricing options.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading booking page...</p>
      </div>
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <BookingContent />
    </Suspense>
  );
}