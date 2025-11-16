import Hero from './components/Hero';

import ServiceCarousel from './components/ServiceCarousel';
import Image from 'next/image';
import FlipWord from './components/FlipWord';
import TypingTextContainer from './components/TypingTextContainer';
import IntroComponent from './components/IntroComponent';
import GoogleReviews from './components/GoogleReviews';
import { WavyBackground } from '@/components/ui/shadcn-io/wavy-background';
import { clientLogos } from './constants/Clientlogos';
import { 
  OptimizedTrustSignals,
  OptimizedHomeFAQ,
  OptimizedClients,
  OptimizedContactEmergencySection,
  OptimizedFloatingCTA
} from './components/LazyWrapper';



import { cn } from "@/lib/utils";
export const metadata = {
  title: 'FabTech Qatar - Professional Facility Management Services | Deep Cleaning & Maintenance',
  description: 'Leading facility management company in Qatar offering 24/7 maintenance, deep cleaning, commercial cleaning, pest control, and property management. Trusted by 500+ clients with 9+ years of experience.',
  keywords: [
    'facility management qatar',
    'deep cleaning qatar', 
    'commercial cleaning doha',
    'property maintenance qatar',
    'pest control qatar',
    'building management qatar',
    'cleaning services qatar',
    'facility services doha',
    'maintenance services qatar',
    'property management doha'
  ],
  openGraph: {
    title: 'FabTech Qatar - Professional Facility Management Services',
    description: 'Leading facility management company in Qatar offering deep cleaning, maintenance, pest control, and property management services. Trusted by 500+ clients.',
    type: 'website',
    url: 'https://fabtechqatar.com',
    siteName: 'FabTech Qatar',
    locale: 'en_US',
    images: [
      {
        url: 'https://fabtechqatar.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FabTech Qatar - Professional Facility Management Services',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FabTech Qatar - Professional Facility Management Services',
    description: 'Leading facility management company in Qatar offering deep cleaning, maintenance, pest control, and property management services.',
    images: ['https://fabtechqatar.com/logo.png'],
    creator: '@fabtechqatar',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://fabtechqatar.com',
  },
};

// Enhanced Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "FabTech Facility Management",
  "alternateName": "FabTech Services",
  "url": "https://fabtechqatar.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://fabtechqatar.com/logo.png",
    "width": "250",
    "height": "60"
  },
  "description": "Professional facility management services including maintenance, cleaning, security, and property management with over 15 years of experience serving 500+ clients.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Al Rabiah Building 1, Second floor S14",
    "addressLocality": "Doha",
    "addressRegion": "Madina Khalifa South",
    "addressCountry": "Qatar"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+974-5518-7619",
      "contactType": "customer service",
      "availableLanguage": ["English", "Arabic"],
      "areaServed": "Qatar"
    },
    {
      "@type": "ContactPoint",
      "telephone": "+974-7146-0844",
      "contactType": "emergency",
      "availableLanguage": ["English", "Arabic"],
      "areaServed": "Qatar"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/fabtech",
    "https://www.linkedin.com/company/fabtech",
    "https://twitter.com/fabtech"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "500"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Facility Management Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Facility Maintenance",
          "description": "Comprehensive maintenance services including preventive maintenance, emergency repairs, HVAC systems, electrical and plumbing services, and equipment lifecycle management.",
          "provider": {
            "@type": "Organization",
            "name": "FabTech Facility Management"
          },
          "areaServed": "US",
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": "https://fabtechqatar.com/services/maintenance"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Commercial Cleaning",
          "description": "Professional cleaning services including daily office cleaning, deep cleaning, carpet care, window cleaning, and sanitization services.",
          "provider": {
            "@type": "Organization",
            "name": "FabTech Facility Management"
          },
          "areaServed": "US",
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": "https://fabtechqatar.com/services/cleaning"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Security Services", 
          "description": "Comprehensive security solutions with 24/7 monitoring, access control, security guards, CCTV systems, and emergency response protocols.",
          "provider": {
            "@type": "Organization",
            "name": "FabTech Facility Management"
          },
          "areaServed": "US",
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": "https://fabtechqatar.com/services/security"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Property Management",
          "description": "Complete property management solutions including tenant relations, lease administration, financial reporting, vendor management, and compliance monitoring.",
          "provider": {
            "@type": "Organization",
            "name": "FabTech Facility Management"
          },
          "areaServed": "US",
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": "https://fabtechqatar.com/services/property-management"
          }
        }
      }
    ]
  }
};

const serviceFlipWords = ["Facility Maintenance","Commercial Cleaning","Security Services","Property Management"];
const introTextPhrases = ["Step Into Fabtech Qatar","Your Ultimate FM Partner","We Got You Covered"];
// Breadcrumb structured data
const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://fabtechqatar.com"
    }
  ]
};

// FAQ structured data
const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What facility management services does FabTech provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FabTech provides comprehensive facility management services including facility maintenance, commercial cleaning, security services, and property management. Our services cover preventive maintenance, emergency repairs, HVAC systems, daily cleaning, security monitoring, and complete property management solutions."
      }
    },
    {
      "@type": "Question",
      "name": "Does FabTech offer 24/7 support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, FabTech offers 24/7 support and emergency response services to ensure your facilities are always protected and operational."
      }
    },
    {
      "@type": "Question",
      "name": "How many clients does FabTech serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FabTech has served over 500 satisfied clients nationwide with 15 years of industry experience delivering exceptional facility management results."
      }
    }
  ]
};

export default function Home() {

  const carouselServices = [
    {
      title: "Residential Deep Cleaning",
      description: "Detailed home deep cleaning ensuring every corner is spotless using eco-friendly products and modern tools.",
      href: "/services/residential-deep-cleaning",
      features: [
        "Kitchen and bathroom deep cleaning",
        "Floor scrubbing and polishing",
        "Window and glass cleaning",
        "Sanitization and disinfection",
        "Odor removal"
      ]
    },
    {
      title: "Commercial Deep Cleaning",
      description: "Professional deep cleaning for offices, shops, and commercial facilities to maintain hygiene and presentation.",
      href: "/services/commercial-deep-cleaning",
      features: [
        "Office and workspace detailing",
        "Carpet and upholstery cleaning",
        "Restroom sanitization",
        "Window and facade cleaning",
        "Scheduled maintenance plans"
      ]
    },
    {
      title: "General Cleaning",
      description: "Regular cleaning service designed to keep your spaces consistently clean and fresh.",
      href: "/services/general-cleaning",
      features: [
        "Daily and weekly cleaning options",
        "Dusting and mopping",
        "Garbage disposal",
        "Restroom maintenance",
        "Surface sanitization"
      ]
    },
    {
      title: "Cleaner Supply - Commercial",
      description: "Reliable, trained, and professional cleaning staff for commercial buildings and facilities.",
      href: "/services/cleaner-supply-commercial",
      features: [
        "Trained and experienced cleaners",
        "Flexible shift availability",
        "Uniformed and supervised staff",
        "On-site quality monitoring",
        "Custom workforce planning"
      ]
    },
    {
      title: "Cleaner Supply - Residential",
      description: "Experienced residential cleaners available on demand for part-time or full-time services.",
      href: "/services/cleaner-supply-residential",
      features: [
        "Verified and trained cleaners",
        "Flexible hourly or monthly plans",
        "All cleaning equipment provided",
        "Eco-friendly cleaning products",
        "Reliable and punctual staff"
      ]
    },
    {
      title: "Sofa Cleaning",
      description: "Deep sofa cleaning and stain removal using safe, fabric-friendly techniques.",
      href: "/services/sofa-cleaning",
      features: [
        "Steam and dry cleaning",
        "Stain and odor removal",
        "Leather and fabric care",
        "Dust mite elimination",
        "Quick drying process"
      ]
    },
    {
      title: "Carpet Cleaning",
      description: "Professional carpet shampooing and steam cleaning for a renewed, fresh look.",
      href: "/services/carpet-cleaning",
      features: [
        "Deep shampooing and extraction",
        "Stain and odor removal",
        "Allergen control treatment",
        "Quick drying process",
        "Safe for all fabric types"
      ]
    },
    {
      title: "Mattress Cleaning",
      description: "Steam cleaning and sanitization to remove dust mites, stains, and bacteria for a healthier sleep.",
      href: "/services/mattress-cleaning",
      features: [
        "Steam sanitization",
        "Allergen and mite removal",
        "Stain and odor treatment",
        "UV disinfection available",
        "Eco-friendly process"
      ]
    },
    {
      title: "Water Tank Cleaning",
      description: "Professional cleaning and disinfection of water tanks to ensure water purity and safety.",
      href: "/services/water-tank-cleaning",
      features: [
        "Tank draining and sludge removal",
        "Scrubbing and pressure washing",
        "Disinfection with approved chemicals",
        "Final inspection and rinse",
        "Safe and certified process"
      ]
    },
    {
      title: "Majlis Cleaning",
      description: "Specialized cleaning for majlis areas with attention to upholstery, carpets, and decor.",
      href: "/services/majlis-cleaning",
      features: [
        "Carpet and sofa cleaning",
        "Curtain and drapery washing",
        "Perfumed finishing",
        "Spot and stain removal",
        "Detailed dusting and vacuuming"
      ]
    },
    {
      title: "Marble Polishing",
      description: "Expert marble polishing services to restore shine and remove dullness or scratches.",
      href: "/services/marble-polishing",
      features: [
        "Surface grinding and buffing",
        "Gloss and crystal finish",
        "Scratch and stain removal",
        "Sealing and protection",
        "Shine restoration"
      ]
    },
    {
      title: "Granite Polishing",
      description: "Professional granite polishing to restore its natural shine and smooth finish.",
      href: "/services/granite-polishing",
      features: [
        "Surface refinement",
        "Scratch removal",
        "Buffing and sealing",
        "Gloss finish restoration",
        "Durability enhancement"
      ]
    },
    {
      title: "Marble Floor Cleaning",
      description: "Comprehensive marble floor cleaning and maintenance to preserve its natural elegance.",
      href: "/services/marble-floor-cleaning",
      features: [
        "Dust and grime removal",
        "Mopping and buffing",
        "Polishing treatment",
        "Sealing and protection",
        "Slip-resistant finish"
      ]
    },
    {
      title: "Post Construction Cleaning",
      description: "Thorough cleaning after construction or renovation to make your space ready for use.",
      href: "/services/post-construction-cleaning",
      features: [
        "Dust and debris removal",
        "Floor and wall polishing",
        "Window and glass cleaning",
        "Final inspection cleanup",
        "Move-in readiness"
      ]
    },
    {
      title: "Move In / Move Out Cleaning",
      description: "Detailed cleaning for homes or apartments before moving in or after moving out.",
      href: "/services/move-in-move-out-cleaning",
      features: [
        "Full home cleaning",
        "Appliance and cabinet cleaning",
        "Bathroom and kitchen detailing",
        "Floor polishing",
        "Odor and stain removal"
      ]
    },
    {
      title: "Pest Control",
      description: "Safe and effective pest control services for homes and commercial spaces.",
      href: "/services/pest-control",
      features: [
        "Inspection and assessment",
        "Customized treatment plan",
        "Eco-friendly chemicals",
        "Rodent and insect removal",
        "Follow-up treatments"
      ]
    },
    {
      title: "Interior Design",
      description: "Creative interior design solutions to transform your spaces with style and functionality.",
      href: "/services/interior-design",
      features: [
        "3D visualization and layout",
        "Furniture and decor selection",
        "Color and lighting planning",
        "Customized design themes",
        "Project consultation"
      ]
    },
    {
      title: "Interior Fitout",
      description: "Complete interior fitout services from planning to finishing for homes and offices.",
      href: "/services/interior-fitout",
      features: [
        "Partition and ceiling works",
        "Flooring and lighting setup",
        "Custom joinery and furniture",
        "Electrical and HVAC integration",
        "Turnkey project delivery"
      ]
    },
    {
      title: "Canopy Construction",
      description: "Durable and stylish canopy construction for shading and protection.",
      href: "/services/canopy-construction",
      features: [
        "Steel and fabric structures",
        "Custom size and design",
        "UV and weather protection",
        "Professional installation",
        "Maintenance support"
      ]
    },
    {
      title: "Car Shade Construction",
      description: "High-quality car shade solutions for residential and commercial properties.",
      href: "/services/car-shade-construction",
      features: [
        "Steel and tensile structures",
        "UV-resistant materials",
        "Custom design options",
        "Fast installation",
        "Durable and long-lasting"
      ]
    },
    {
      title: "Structural Maintenance",
      description: "Comprehensive structural maintenance and repair services for buildings and facilities.",
      href: "/services/structural-maintenance",
      features: [
        "Crack and leak repairs",
        "Preventive maintenance",
        "Waterproofing solutions",
        "Painting and coating",
        "Inspection and reporting"
      ]
    }
  ];
  
  return (
    <div>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      
      {/* Hero Section */}
      <Hero />

      {/* intro section */}
      <section className="py-8 sm:py-16 bg-gray-50" aria-labelledby="intro-heading">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
        
            {/* Lottie Component Container */}
            <div className="w-full sm:w-1/2 order-2 sm:order-1">
                <IntroComponent
                    src={"https://res.cloudinary.com/diunkrydn/raw/upload/v1753185901/Meditation_u5y0oi.lottie"} 
                    width={400}
                    height={400}
                    loop={true}
                    autoplay={true}
                />
            </div>
        
            {/* Text Container */}
            <div className="w-full sm:w-1/2 text-center sm:text-left order-1 sm:order-2 mb-6 sm:mb-0"> 
                <TypingTextContainer text={introTextPhrases} />
              
                <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto sm:mx-0 leading-relaxed">
                    Since 2016, we&apos;ve been transforming spaces across Qatar with expert services in Cleaning, Facility Management, Civil Works, Pest Control, Hospitality, and more. From spotless homes to smart buildings, we make spaces cleaner, safer, and more efficient, all with a team that gets things done right. Clean. Build. Manage. Simplify. That&apos;s Fabtech.
                </p>
            </div>
        </div>
    </div>
</section>



     <section className="py-8 sm:py-16 bg-white text-black" aria-labelledby="services-heading">
       
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         
         <div className="text-center mb-8 sm:mb-12">
           <h2 id="services-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
             We Do It All, <FlipWord words={serviceFlipWords} />
           </h2>
           <p className="text-base sm:text-xl text-black max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
             We provide comprehensive facility management solutions tailored to meet 
             the unique needs of your business across maintenance, cleaning, security, and property management.
           </p>
         </div>
         
         <div className="max-w-7xl mx-auto">
          <ServiceCarousel services={carouselServices} />
        </div>
       </div>
     </section>

   
     
      
      {/* Services Section */}
     
      <WavyBackground
      backgroundFill="white"
      waveWidth={30}
      blur={8}
      speed="fast"
      waveOpacity={0.3}
      containerClassName="min-h-[60vh] sm:h-[90vh] w-full rounded-lg border overflow-hidden"
      className="max-w-4xl"
    >
      {/* Why Choose Us Section */}
      <section className="py-8 sm:py-16" aria-labelledby="benefits-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 id="benefits-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose FabTech Facility Management?
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              With over 10 years of experience serving 500+ clients nationwide, we deliver exceptional facility management 
              services that exceed expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <article className="text-center">
              <div className="bg-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <span className="text-xl sm:text-2xl">⭐</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Proven Excellence</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Over 500+ satisfied clients and 15 years of industry experience delivering 
                exceptional facility management results with a 4.8-star rating.
              </p>
            </article>
            
            <article className="text-center">
              <div className="bg-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <span className="text-xl sm:text-2xl">🕒</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">24/7 Support & Emergency Response</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Round-the-clock support and emergency response services to ensure your facilities 
                never skip a beat, day or night.
              </p>
            </article>
            
            <article className="text-center sm:col-span-2 md:col-span-1">
              <div className="bg-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <span className="text-xl sm:text-2xl">💰</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Cost-Effective Solutions</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Competitive pricing with transparent billing and no hidden costs. 
                Get more value for your facility management investment.
              </p>
            </article>
          </div>
        </div>
      </section>
      </WavyBackground>

      {/* <GoogleReviews />     */}
      <section className="py-8 sm:py-16 bg-yellow-300">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 mb-4 text-center px-4">Reviews on Google</h2> 
      <GoogleReviews /> 
      </section>

      {/* Trust Signals & Credentials */}
      <OptimizedTrustSignals />

      {/* FAQ Section */}
      <OptimizedHomeFAQ />

      {/* Clients Section */}
      <OptimizedClients logos={clientLogos} />

      {/* Contact & Emergency Information */}
      <OptimizedContactEmergencySection />

    

      {/* Floating CTA Components */}
      <OptimizedFloatingCTA />
    </div>
  );
}