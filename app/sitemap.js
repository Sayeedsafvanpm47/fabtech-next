export default function sitemap() {
  const baseUrl = 'https://fabtechqatar.com';
  const currentDate = new Date().toISOString();
  
  // Define all service pages (ensure these match your actual service routes)
  const services = [
    'residential-deep-cleaning',
    'commercial-deep-cleaning', 
    'general-cleaning',
    'cleaner-supply-commercial',
    'cleaner-supply-residential',
    'sofa-cleaning',
    'carpet-cleaning',
    'mattress-cleaning',
    'water-tank-cleaning',
    'majlis-cleaning',
    'marble-polishing',
    'granite-polishing',
    'marble-floor-cleaning',
    'post-construction-cleaning',
    'move-in-move-out-cleaning',
    'pest-control',
    'interior-design',
    'interior-fitout',
    'canopy-construction',
    'car-shade-construction',
    'structural-maintenance'
  ];

  // Main pages with proper Next.js sitemap format
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/booking`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    }
  ];

  // Service pages with proper format
  const servicePages = services.map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Return the array - Next.js will automatically convert to XML
  return [...mainPages, ...servicePages];
}
