// SEO Configuration for FabTech Qatar
export const seoConfig = {
  baseUrl: 'https://fabtechqatar.com',
  siteName: 'FabTech Qatar',
  defaultTitle: 'FabTech - Professional Facility Management Services',
  defaultDescription: 'Professional facility management services including maintenance, cleaning, security, and property management. Trusted by businesses across Qatar.',
  
  // Social Media
  social: {
    twitter: '@fabtechqatar',
    facebook: 'fabtechqatar',
    linkedin: 'company/fabtech-qatar',
  },
  
  // Business Information
  business: {
    name: 'FabTech Services W.L.L',
    phone: '+974 5518 7619',
    emergencyPhone: '+974 7146 0844',
    email: 'fms@fabtechqatar.com',
    address: {
      street: 'Al Rabiah Building 1, Second floor S14',
      city: 'Doha',
      region: 'Madina Khalifa South',
      country: 'Qatar',
    },
  },
  
  // Services for structured data
  services: [
    'Facility Maintenance',
    'Commercial Cleaning', 
    'Security Services',
    'Property Management',
    'Landscaping & Grounds',
    'Energy Management',
    'Emergency Response',
    'HVAC Services',
    'Electrical Services',
    'Plumbing Services',
    'Pest Control',
    'Waste Management'
  ],
  
  // Keywords
  keywords: [
    'facility management Qatar',
    'property maintenance Doha',
    'commercial cleaning Qatar',
    'security services Qatar',
    'building management Qatar',
    'HVAC maintenance Qatar',
    'facility services Qatar',
    'property management Qatar',
    'maintenance services Doha',
    'facility management company Qatar'
  ],
};

// Generate structured data for organization
export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": seoConfig.business.name,
  "alternateName": "FabTech Qatar",
  "url": seoConfig.baseUrl,
  "logo": `${seoConfig.baseUrl}/logo.png`,
  "image": `${seoConfig.baseUrl}/logo.png`,
  "description": seoConfig.defaultDescription,
  "telephone": seoConfig.business.phone,
  "email": seoConfig.business.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": seoConfig.business.address.street,
    "addressLocality": seoConfig.business.address.city,
    "addressRegion": seoConfig.business.address.region,
    "addressCountry": seoConfig.business.address.country
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": seoConfig.business.phone,
      "contactType": "customer service",
      "availableLanguage": ["English", "Arabic"]
    },
    {
      "@type": "ContactPoint", 
      "telephone": seoConfig.business.emergencyPhone,
      "contactType": "emergency",
      "availableLanguage": ["English", "Arabic"]
    }
  ],
  "sameAs": [
    `https://facebook.com/${seoConfig.social.facebook}`,
    `https://linkedin.com/${seoConfig.social.linkedin}`,
    `https://twitter.com/${seoConfig.social.twitter}`
  ],
  "serviceArea": {
    "@type": "Country",
    "name": "Qatar"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Facility Management Services",
    "itemListElement": seoConfig.services.map((service, index) => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": service
      }
    }))
  }
});

// Generate local business schema
export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": seoConfig.business.name,
  "image": `${seoConfig.baseUrl}/logo.png`,
  "telephone": seoConfig.business.phone,
  "email": seoConfig.business.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": seoConfig.business.address.street,
    "addressLocality": seoConfig.business.address.city,
    "addressRegion": seoConfig.business.address.region,
    "addressCountry": seoConfig.business.address.country
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "25.2048",
    "longitude": "51.4442"
  },
  "url": seoConfig.baseUrl,
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "$$",
  "servesCuisine": "Facility Management Services"
});
