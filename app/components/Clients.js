'use client';
import { Suspense } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically import Slider with no SSR to avoid build issues
const Slider = dynamic(() => import('react-slick'), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center space-x-8 animate-pulse">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="w-24 h-12 bg-gray-200 rounded"></div>
      ))}
    </div>
  )
});

// Import CSS styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Optimized CSS-in-JS styles
const styles = {
  section: {
    padding: '4rem 0',
    backgroundColor: '#ffffff',
    overflow: 'hidden',
    maxWidth: '100%',
    borderRadius: '15px',
  },
  title: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '3rem',
    color: '#1f2937',
    fontWeight: 'bold',
  },
  container: {
    margin: '0 auto',
    maxWidth: '1400px',
    padding: '0 20px',
  },
  logoContainer: {
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

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
      }
    ]
  };

  // Loading component for slider
  const SliderLoading = () => (
    <div style={styles.container}>
      <div className="flex justify-center items-center space-x-8 animate-pulse">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-24 h-12 bg-gray-200 rounded"></div>
        ))}
      </div>
    </div>
  );

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Our Clients</h2>
      <div style={styles.container}>
        <Suspense fallback={<SliderLoading />}>
          <Slider {...settings}>
            {logos.map((logo, index) => (
              <div key={index} style={styles.logoContainer}>
                <Image
                  src={logo.url}
                  alt={logo.name}
                  title={logo.name}
                  width={120}
                  height={60}
                  loading="lazy"
                  className="max-w-[120px] h-[60px] object-contain filter grayscale opacity-70 transition-all duration-300 hover:filter-none hover:opacity-100 hover:scale-110"
                  sizes="(max-width: 768px) 100px, 120px"
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