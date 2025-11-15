'use client';
import { Suspense } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically import Slider with no SSR to avoid build issues
const Slider = dynamic(() => import('react-slick'), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center space-x-2 sm:space-x-4 md:space-x-8 animate-pulse px-4">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="w-16 h-8 sm:w-20 sm:h-10 md:w-24 md:h-12 bg-gray-200 rounded"></div>
      ))}
      <div className="hidden sm:block w-20 h-10 md:w-24 md:h-12 bg-gray-200 rounded"></div>
      <div className="hidden md:block w-24 h-12 bg-gray-200 rounded"></div>
      <div className="hidden lg:block w-24 h-12 bg-gray-200 rounded"></div>
    </div>
  )
});

// Import CSS styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Clients = ({ logos = [] }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    swipe: false,
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          speed: 4000,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          speed: 3000,
        }
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          speed: 2500,
        }
      }
    ]
  };

  // Loading component for slider
  const SliderLoading = () => (
    <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
      <div className="flex justify-center items-center space-x-2 sm:space-x-4 md:space-x-8 animate-pulse">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="w-16 h-8 sm:w-20 sm:h-10 md:w-24 md:h-12 bg-gray-200 rounded"></div>
        ))}
        <div className="hidden sm:block w-20 h-10 md:w-24 md:h-12 bg-gray-200 rounded"></div>
        <div className="hidden md:block w-24 h-12 bg-gray-200 rounded"></div>
        <div className="hidden lg:block w-24 h-12 bg-gray-200 rounded"></div>
      </div>
    </div>
  );

  return (
    <section className="py-8 sm:py-16 bg-white overflow-hidden max-w-full rounded-2xl">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6 sm:mb-12 px-4">Our Clients</h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <Suspense fallback={<SliderLoading />}>
          <Slider {...settings}>
            {logos.map((logo, index) => (
              <div key={index} className="p-2 sm:p-4 flex justify-center items-center">
                <Image
                  src={logo.url}
                  alt={logo.name}
                  title={logo.name}
                  width={120}
                  height={60}
                  loading="lazy"
                  className="w-16 h-8 sm:w-20 sm:h-10 md:max-w-[120px] md:h-[60px] object-contain filter grayscale opacity-70 transition-all duration-300 hover:filter-none hover:opacity-100 hover:scale-110"
                  sizes="(max-width: 480px) 64px, (max-width: 768px) 80px, 120px"
                />
              </div>
            ))}
          </Slider>
        </Suspense>
      </div>
    </section>
  );
};

export default Clients; 