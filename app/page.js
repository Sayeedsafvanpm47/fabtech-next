import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import ServiceCarousel from './components/ServiceCarousel';
import Image from 'next/image';
import FlipWord from './components/FlipWord';
import TypingTextContainer from './components/TypingTextContainer';
import IntroComponent from './components/IntroComponent';
import { WavyBackground } from '@/components/ui/shadcn-io/wavy-background';



import { cn } from "@/lib/utils";
export const metadata = {
  title: 'FabTech - Professional Facility Management Services | Maintenance, Cleaning & Security',
  description: 'Leading facility management company offering 24/7 maintenance, commercial cleaning, security services, and property management. Trusted by 500+ clients nationwide with 15 years of experience.',
  keywords: 'facility management, commercial cleaning, property maintenance, security services, building management, HVAC maintenance, property management services',
  openGraph: {
    title: 'FabTech - Professional Facility Management Services',
    description: 'Comprehensive facility management solutions for businesses nationwide. 24/7 support, 500+ satisfied clients.',
    type: 'website',
    url: 'https://fabtech-services.com',
    images: [
      {
        url: 'https://fabtech-services.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FabTech Facility Management Services',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FabTech - Professional Facility Management Services',
    description: 'Comprehensive facility management solutions for businesses nationwide.',
    images: ['https://fabtech-services.com/og-image.jpg'],
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
    canonical: 'https://fabtech-services.com',
  },
};

// Enhanced Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "FabTech Facility Management",
  "alternateName": "FabTech Services",
  "url": "https://fabtech-services.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://fabtech-services.com/logo.png",
    "width": "250",
    "height": "60"
  },
  "description": "Professional facility management services including maintenance, cleaning, security, and property management with over 15 years of experience serving 500+ clients.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Business Avenue, Suite 100",
    "addressLocality": "City",
    "addressRegion": "State",
    "postalCode": "12345",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-123-4567",
    "contactType": "customer service",
    "availableLanguage": ["English"],
    "areaServed": "US"
  },
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
            "serviceUrl": "https://fabtech-services.com/services/maintenance"
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
            "serviceUrl": "https://fabtech-services.com/services/cleaning"
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
            "serviceUrl": "https://fabtech-services.com/services/security"
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
            "serviceUrl": "https://fabtech-services.com/services/property-management"
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
      "item": "https://fabtech-services.com"
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
      title: "Deep Cleaning",
      description: "Comprehensive deep cleaning for homes and offices with professional-grade equipment and eco-friendly products.",
      icon: "🧼",
      href: "/services/deep-cleaning",
      features: [
        "Disinfection services",
        "Carpet shampooing", 
        "Window cleaning",
        "Floor polishing",
        "Sanitization protocols"
      ]
    },
    {
      title: "Landscaping",
      description: "Complete garden design, lawn care and regular maintenance to keep your outdoor spaces beautiful year-round.",
      icon: "🌿",
      href: "/services/landscaping",
      features: [
        "Lawn mowing & edging",
        "Hedge trimming",
        "Irrigation setup",
        "Seasonal planting",
        "Garden design"
      ]
    },
    {
      title: "Pest Control",
      description: "Safe and effective pest removal with comprehensive prevention plans to protect your property.",
      icon: "🐜",
      href: "/services/pest-control",
      features: [
        "Property inspection",
        "Custom treatment plan",
        "Follow-up visits",
        "Prevention advice",
        "Eco-friendly solutions"
      ]
    },
    {
      title: "Post Construction Cleanup",
      description: "Professional post-construction cleanup services to make your newly built or renovated space move-in ready.",
      icon: "🏗️",
      href: "/services/post-construction-cleanup",
      features: [
        "Debris removal",
        "Dust cleaning",
        "Final polishing",
        "Safety inspection",
        "Move-in preparation"
      ]
    },
    {
      title: "HVAC Services",
      description: "Complete heating, ventilation, and air conditioning services to maintain optimal indoor climate control.",
      icon: "❄️",
      href: "/services/hvac-services",
      features: [
        "System installation",
        "Regular maintenance",
        "Emergency repairs",
        "Energy efficiency optimization",
        "Air quality improvement"
      ]
    },
    {
      title: "Electrical Services",
      description: "Professional electrical services for commercial and residential properties with certified technicians.",
      icon: "⚡",
      href: "/services/electrical-services",
      features: [
        "Wiring installation",
        "Electrical repairs",
        "Safety inspections",
        "Lighting solutions",
        "Power system upgrades"
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
      <section className="py-16 bg-gray-50" aria-labelledby="intro-heading">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* THIS IS THE LINE TO CHANGE:
          - Default (mobile first): flex-col (stacked)
          - sm:flex-row: switches to row layout at the 'sm' breakpoint (640px by default, which is close to your 600px target)
        */}
        <div className="flex flex-col sm:flex-row items-center justify-center">
        
            {/* Lottie Component Container 
              - Default: w-full (for mobile)
              - sm:w-1/2: takes half the width on screens >= sm
            */}
            <div className="w-full sm:w-1/2">
                <IntroComponent
                    src={"https://res.cloudinary.com/diunkrydn/raw/upload/v1753185901/Meditation_u5y0oi.lottie"} 
                    width={500}
                    height={500}
                    loop={true}
                    autoplay={true}
                />
            </div>
        
            {/* Text Container 
              - Default: text-center and takes full width
            */}
            <div className="w-full sm:w-1/2 text-center mb-12 sm:mb-0 sm:pl-8"> 
                <TypingTextContainer text={introTextPhrases} />
              
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Since 2016, we've been transforming spaces across Qatar with expert services in Cleaning, Facility Management, Civil Works, Pest Control, Hospitality, and more. From spotless homes to smart buildings, we make spaces cleaner, safer, and more efficient, all with a team that gets things done right. Clean. Build. Manage. Simplify. That's Fabtech.
                </p>
            </div>
        </div>
    </div>
</section>



     <section className="py-16 bg-red-700 text-white" aria-labelledby="services-heading">
       
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         
         <div className="text-center mb-12">
           <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
             We Do It All, <FlipWord words={serviceFlipWords} />
           </h2>
           <p className="text-xl text-white max-w-3xl mx-auto">
             We provide comprehensive facility management solutions tailored to meet 
             the unique needs of your business across maintenance, cleaning, security, and property management.
           </p>
         </div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
          
            
          </div>
          
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
      containerClassName="h-[90vh] w-full rounded-lg border overflow-hidden"
      className="max-w-4xl"
    >
      {/* Why Choose Us Section */}
      <section className=" rounded-full" aria-labelledby="benefits-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="benefits-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose FabTech Facility Management?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With over 15 years of experience serving 500+ clients nationwide, we deliver exceptional facility management 
              services that exceed expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Excellence</h3>
              <p className="text-gray-600">
                Over 500+ satisfied clients and 15 years of industry experience delivering 
                exceptional facility management results with a 4.8-star rating.
              </p>
            </article>
            
            <article className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <span className="text-2xl">🕒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support & Emergency Response</h3>
              <p className="text-gray-600">
                Round-the-clock support and emergency response services to ensure your facilities 
                never skip a beat, day or night.
              </p>
            </article>
            
            <article className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost-Effective Solutions</h3>
              <p className="text-gray-600">
                Competitive pricing with transparent billing and no hidden costs. 
                Get more value for your facility management investment.
              </p>
            </article>
          </div>
        </div>
      </section>
      </WavyBackground>
      {/* CTA Section */}
      <section className="py-16 bg-blue-600" aria-labelledby="cta-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Facility Management?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how we can optimize 
            your facility operations with our comprehensive management services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-block"
              aria-label="Get a free quote for facility management services"
            >
              Get Free Quote
        </a>
        <a
              href="/contact" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200 inline-block"
              aria-label="Schedule a consultation with our facility management team"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}