'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedGallery, setSelectedGallery] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const openLightbox = (gallery, index) => {
    console.log('Opening lightbox:', { gallery, index, imageUrl: gallery[index] });
    setSelectedGallery(gallery);
    setCurrentImageIndex(index);
    setSelectedImage(gallery[index]);
  };

  const closeLightbox = () => {
    console.log('Closing lightbox');
    setSelectedImage(null);
    setSelectedGallery([]);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedGallery.length === 0) return;
    const nextIndex = (currentImageIndex + 1) % selectedGallery.length;
    console.log('Next image:', { currentIndex: currentImageIndex, nextIndex, imageUrl: selectedGallery[nextIndex] });
    setCurrentImageIndex(nextIndex);
    setSelectedImage(selectedGallery[nextIndex]);
  };

  const prevImage = () => {
    if (selectedGallery.length === 0) return;
    const prevIndex = currentImageIndex === 0 ? selectedGallery.length - 1 : currentImageIndex - 1;
    console.log('Previous image:', { currentIndex: currentImageIndex, prevIndex, imageUrl: selectedGallery[prevIndex] });
    setCurrentImageIndex(prevIndex);
    setSelectedImage(selectedGallery[prevIndex]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          if (selectedGallery.length > 1) {
            prevImage();
          }
          break;
        case 'ArrowRight':
          if (selectedGallery.length > 1) {
            nextImage();
          }
          break;
      }
    };

    if (selectedImage) {
      window.addEventListener('keydown', handleKeyPress);
      // Prevent body scroll when lightbox is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  const projects = [
    {
      id: 1,
      title: "Dubai Mall Commercial Complex",
      category: "Commercial Cleaning",
      location: "Dubai, UAE",
      duration: "2022 - Ongoing",
      description: "Complete facility management for a 2.5 million sq ft commercial complex including daily cleaning, maintenance, and security services.",
      services: ["Commercial Cleaning", "HVAC Maintenance", "Security Services", "Pest Control"],
      image: "https://res.cloudinary.com/diunkrydn/image/upload/v1760530490/working-hard-building-man-construction-worker_1_dduedr.jpg",
      gallery: [
        "https://res.cloudinary.com/diunkrydn/image/upload/v1760530490/working-hard-building-man-construction-worker_1_dduedr.jpg",
        "https://res.cloudinary.com/diunkrydn/image/upload/v1760530490/working-hard-building-man-construction-worker_1_dduedr.jpg",
        "https://res.cloudinary.com/diunkrydn/image/upload/v1760530490/working-hard-building-man-construction-worker_1_dduedr.jpg",
        "https://res.cloudinary.com/diunkrydn/image/upload/v1760530490/working-hard-building-man-construction-worker_1_dduedr.jpg",
        "https://res.cloudinary.com/diunkrydn/image/upload/v1760530490/working-hard-building-man-construction-worker_1_dduedr.jpg",
        "https://res.cloudinary.com/diunkrydn/image/upload/v1760530490/working-hard-building-man-construction-worker_1_dduedr.jpg"
      ],
      results: [
        "99.8% client satisfaction rate",
        "30% reduction in maintenance costs",
        "Zero security incidents",
        "LEED Gold certification maintained"
      ]
    },
    {
      id: 2,
      title: "Luxury Residential Tower",
      category: "Residential Services",
      location: "Abu Dhabi, UAE",
      duration: "2021 - 2023",
      description: "Full-service facility management for a 45-story luxury residential tower with 300 units, including marble maintenance and premium cleaning services.",
      services: ["Marble Polishing", "Residential Cleaning", "Landscaping", "Property Management"],
      image: "https://res.cloudinary.com/diunkrydn/image/upload/v1760530490/working-hard-building-man-construction-worker_1_dduedr.jpg",
      gallery: [
        "https://res.cloudinary.com/diunkrydn/image/upload/v1760530490/working-hard-building-man-construction-worker_1_dduedr.jpg",
        "https://res.cloudinary.com/diunkrydn/image/upload/v1760530490/working-hard-building-man-construction-worker_1_dduedr.jpg",
        "https://res.cloudinary.com/diunkrydn/image/upload/v1760530490/working-hard-building-man-construction-worker_1_dduedr.jpg",
        "https://res.cloudinary.com/diunkrydn/image/upload/v1760530490/working-hard-building-man-construction-worker_1_dduedr.jpg",
        "https://res.cloudinary.com/diunkrydn/image/upload/v1760530490/working-hard-building-man-construction-worker_1_dduedr.jpg",
        "https://res.cloudinary.com/diunkrydn/image/upload/v1760530490/working-hard-building-man-construction-worker_1_dduedr.jpg"
      ],
      results: [
        "100% tenant retention",
        "25% increase in property value",
        "Award-winning landscaping",
        "Energy efficiency improved by 20%"
      ]
    },
    {
      id: 3,
      title: "Healthcare Facility Network",
      category: "Healthcare Cleaning",
      location: "Sharjah, UAE",
      duration: "2020 - Ongoing",
      description: "Specialized cleaning and maintenance services for a network of 5 healthcare facilities requiring strict hygiene and safety protocols.",
      services: ["Medical Grade Cleaning", "Infection Control", "Waste Management", "Emergency Response"],
      image: "https://res.cloudinary.com/diunkrydn/image/upload/v1760530490/working-hard-building-man-construction-worker_1_dduedr.jpg",
      gallery: [
        "https://res.cloudinary.com/diunkrydn/image/upload/v1760530490/working-hard-building-man-construction-worker_1_dduedr.jpg",
        "https://res.cloudinary.com/diunkrydn/image/upload/v1760530490/working-hard-building-man-construction-worker_1_dduedr.jpg",
        "https://res.cloudinary.com/diunkrydn/image/upload/v1760530490/working-hard-building-man-construction-worker_1_dduedr.jpg",
        "https://res.cloudinary.com/diunkrydn/image/upload/v1760530490/working-hard-building-man-construction-worker_1_dduedr.jpg",
        "https://res.cloudinary.com/diunkrydn/image/upload/v1760530490/working-hard-building-man-construction-worker_1_dduedr.jpg",
        "https://res.cloudinary.com/diunkrydn/image/upload/v1760530490/working-hard-building-man-construction-worker_1_dduedr.jpg"
      ],
      results: [
        "100% compliance with health regulations",
        "Zero infection incidents",
        "24/7 emergency response capability",
        "Staff training certification achieved"
      ]
    },
    {
      id: 4,
      title: "Industrial Manufacturing Plant",
      category: "Industrial Services",
      location: "Ajman, UAE",
      duration: "2019 - 2022",
      description: "Comprehensive facility management for a 500,000 sq ft manufacturing facility including specialized equipment maintenance and safety protocols.",
      services: ["Industrial Cleaning", "Equipment Maintenance", "Safety Management", "Waste Disposal"],
      image: "https://res.cloudinary.com/diunkrydn/image/upload/v1760530490/working-hard-building-man-construction-worker_1_dduedr.jpg",
      gallery: [
        "https://res.cloudinary.com/diunkrydn/image/upload/v1760530490/working-hard-building-man-construction-worker_1_dduedr.jpg",
        "https://res.cloudinary.com/diunkrydn/image/upload/v1760530490/working-hard-building-man-construction-worker_1_dduedr.jpg",
        "https://res.cloudinary.com/diunkrydn/image/upload/v1760530490/working-hard-building-man-construction-worker_1_dduedr.jpg",
        "https://res.cloudinary.com/diunkrydn/image/upload/v1760530490/working-hard-building-man-construction-worker_1_dduedr.jpg",
        "https://res.cloudinary.com/diunkrydn/image/upload/v1760530490/working-hard-building-man-construction-worker_1_dduedr.jpg",
        "https://res.cloudinary.com/diunkrydn/image/upload/v1760530490/working-hard-building-man-construction-worker_1_dduedr.jpg"
      ],
      results: [
        "Zero workplace accidents",
        "15% improvement in equipment efficiency",
        "Environmental compliance maintained",
        "Cost savings of AED 2.5M annually"
      ]
    },
    {
      id: 5,
      title: "Educational Campus",
      category: "Educational Services",
      location: "Ras Al Khaimah, UAE",
      duration: "2021 - Ongoing",
      description: "Complete facility management for a university campus serving 8,000 students, including dormitories, classrooms, and recreational facilities.",
      services: ["Campus Cleaning", "Dormitory Management", "Landscaping", "Pest Control"],
      image: "https://res.cloudinary.com/diunkrydn/image/upload/v1760530490/working-hard-building-man-construction-worker_1_dduedr.jpg",
      gallery: [
        "https://res.cloudinary.com/diunkrydn/image/upload/v1760530490/working-hard-building-man-construction-worker_1_dduedr.jpg",
        "https://res.cloudinary.com/diunkrydn/image/upload/v1760530490/working-hard-building-man-construction-worker_1_dduedr.jpg",
        "https://res.cloudinary.com/diunkrydn/image/upload/v1760530490/working-hard-building-man-construction-worker_1_dduedr.jpg",
        "https://res.cloudinary.com/diunkrydn/image/upload/v1760530490/working-hard-building-man-construction-worker_1_dduedr.jpg",
        "https://res.cloudinary.com/diunkrydn/image/upload/v1760530490/working-hard-building-man-construction-worker_1_dduedr.jpg",
        "https://res.cloudinary.com/diunkrydn/image/upload/v1760530490/working-hard-building-man-construction-worker_1_dduedr.jpg"
      ],
      results: [
        "95% student satisfaction rating",
        "Green campus certification",
        "40% reduction in pest incidents",
        "Improved air quality standards"
      ]
    },
    {
      id: 6,
      title: "Luxury Hotel Chain",
      category: "Hospitality Services",
      location: "Multiple Locations, UAE",
      duration: "2018 - Ongoing",
      description: "Premium facility management services for a 5-star hotel chain with 8 properties, ensuring exceptional guest experiences and operational efficiency.",
      services: ["Hospitality Cleaning", "Marble Restoration", "Landscaping", "Guest Services Support"],
      image: "https://res.cloudinary.com/diunkrydn/image/upload/v1760530490/working-hard-building-man-construction-worker_1_dduedr.jpg",
      gallery: [
        "https://res.cloudinary.com/diunkrydn/image/upload/v1760530490/working-hard-building-man-construction-worker_1_dduedr.jpg",
        "https://res.cloudinary.com/diunkrydn/image/upload/v1760530490/working-hard-building-man-construction-worker_1_dduedr.jpg",
        "https://res.cloudinary.com/diunkrydn/image/upload/v1760530490/working-hard-building-man-construction-worker_1_dduedr.jpg",
        "https://res.cloudinary.com/diunkrydn/image/upload/v1760530490/working-hard-building-man-construction-worker_1_dduedr.jpg",
        "https://res.cloudinary.com/diunkrydn/image/upload/v1760530490/working-hard-building-man-construction-worker_1_dduedr.jpg",
        "https://res.cloudinary.com/diunkrydn/image/upload/v1760530490/working-hard-building-man-construction-worker_1_dduedr.jpg"
      ],
      results: [
        "5-star rating maintained across all properties",
        "Guest satisfaction score: 4.8/5",
        "30% reduction in maintenance complaints",
        "Industry award for excellence"
      ]
    }
  ];

  const stats = [
    { number: "150+", label: "Completed Projects", labelAr: "مشروع مكتمل" },
    { number: "10M+", label: "Sq Ft Managed", labelAr: "قدم مربع مُدار" },
    { number: "99.5%", label: "Client Satisfaction", labelAr: "رضا العملاء" },
    { number: "10+", label: "Years Experience", labelAr: "سنة خبرة" }
  ];

  // Get unique categories from projects
  const categories = ['All', ...new Set(projects.map(project => project.category))];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  // Create filtered gallery items for display
  const filteredGalleryItems = filteredProjects.flatMap((project, projectIndex) => 
    project.gallery.map((image, imageIndex) => ({
      image,
      project,
      imageIndex,
      projectIndex
    }))
  );

  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Projects
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
            Discover our portfolio of successful facility management projects 
            across various industries and locations.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each project represents our commitment to excellence and innovation 
              in facility management solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.category}`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Overlay with category badge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                  {/* Location badge */}
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-black/70 text-white px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                      📍 {project.location}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Title and Duration */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-medium">
                      Duration: {project.duration}
                    </p>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Services */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Services:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.services.map((service, index) => (
                        <span key={index} className="bg-red-600 text-gray-100 px-2 py-1 rounded-md text-xs font-medium">
                          {service}
                        </span>
                      ))}
                     
                    </div>
                  </div>
                  
                  {/* Key Results */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Results:</h4>
                    <ul className="space-y-1">
                      {project.results.map((result, index) => (
                        <li key={index} className="text-gray-600 text-xs flex items-start">
                          <span className="text-green-500 mr-2 mt-0.5 flex-shrink-0">✓</span>
                          <span className="line-clamp-1">{result}</span>
                        </li>
                      ))}
                     
                    </ul>
                  </div>
                  
                  {/* Action Button */}
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* Project Gallery Section */}
        <section className="py-16 bg-gray-200 text-gray-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Project Gallery
              </h2>
              <p className="text-xl max-w-3xl mx-auto mb-8">
                Take a closer look at our work through our comprehensive project gallery showcasing 
                the quality and attention to detail in every facility management solution.
              </p>

              {/* Category Filter Bubbles */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 ${
                      selectedCategory === category
                        ? 'bg-red-600 text-white shadow-lg scale-105'
                        : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-600 shadow-md'
                    }`}
                  >
                    {category}
                    <span className="ml-2 text-xs opacity-75">
                      ({category === 'All' 
                        ? projects.reduce((total, project) => total + project.gallery.length, 0)
                        : projects
                            .filter(project => project.category === category)
                            .reduce((total, project) => total + project.gallery.length, 0)
                      })
                    </span>
                  </button>
                ))}
              </div>

              {/* Active Category Display */}
              <div className="mb-6">
                <p className="text-gray-600 text-sm">
                  Showing <span className="font-semibold text-red-600">{filteredGalleryItems.length}</span> images
                  {selectedCategory !== 'All' && (
                    <span> from <span className="font-semibold">{selectedCategory}</span> projects</span>
                  )}
                </p>
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredGalleryItems.length > 0 ? (
                filteredGalleryItems.map((item, index) => (
                  <div 
                    key={`${item.project.id}-${item.imageIndex}-${selectedCategory}`}
                    className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                    onClick={(e) => {
                      e.preventDefault();
                      openLightbox(item.project.gallery, item.imageIndex);
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={`${item.project.title} - Image ${item.imageIndex + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                    {/* Project label with category badge */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                      <div className="flex items-center justify-between">
                        <p className="text-white text-xs font-medium truncate flex-1">
                          {item.project.title}
                        </p>
                        <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full ml-2 flex-shrink-0">
                          {item.project.category}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-lg">No images found for this category</p>
                  <p className="text-gray-400 text-sm mt-2">Try selecting a different category</p>
                </div>
              )}
            </div>
          </div>
        </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button - Fixed position */}
          <button
            onClick={closeLightbox}
            className="fixed top-4 right-4 z-[10000] text-white hover:text-gray-300 transition-colors duration-200 bg-black/50 rounded-full p-2"
            aria-label="Close lightbox"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation buttons - Fixed position */}
          {selectedGallery.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="fixed left-4 top-1/2 transform -translate-y-1/2 z-[10000] text-white hover:text-gray-300 transition-colors duration-200 bg-black/50 rounded-full p-3"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="fixed right-4 top-1/2 transform -translate-y-1/2 z-[10000] text-white hover:text-gray-300 transition-colors duration-200 bg-black/50 rounded-full p-3"
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Image counter - Fixed position */}
          {selectedGallery.length > 1 && (
            <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-[10000] text-white text-sm bg-black/50 px-3 py-1 rounded-full">
              {currentImageIndex + 1} / {selectedGallery.length}
            </div>
          )}

          {/* Main image container */}
          <div 
            className="relative w-full h-full max-w-7xl max-h-full p-4 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full max-w-full max-h-full">
              <Image
                src={selectedImage}
                alt={`Gallery image ${currentImageIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
                quality={90}
                onError={(e) => {
                  console.error('Image failed to load:', selectedImage);
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Process Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Project Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery 
              and exceed client expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Assessment & Planning</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive site evaluation and customized solution design
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600 text-sm">
                Seamless deployment with minimal disruption to operations
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Monitoring</h3>
              <p className="text-gray-600 text-sm">
                Continuous performance tracking and quality assurance
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Optimization</h3>
              <p className="text-gray-600 text-sm">
                Ongoing improvements and efficiency enhancements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our growing list of satisfied clients and experience the 
            FabTech difference in facility management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              View All Projects
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
