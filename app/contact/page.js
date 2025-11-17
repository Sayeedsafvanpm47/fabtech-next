import ContactForm from '../components/ContactForm';
import GoToContact from '../components/GoToContact';

export const metadata = {
  title: 'Contact Us - FabTech Qatar | Get Free Quote for Facility Management Services',
  description: 'Contact FabTech Qatar for professional facility management and cleaning services. Call +974 5518 7619 or email fms@fabtechqatar.com for a free consultation and quote.',
  keywords: [
    'contact fabtech qatar',
    'facility management quote qatar',
    'cleaning services contact doha',
    'fabtech phone number',
    'facility management consultation qatar',
    'cleaning company contact qatar'
  ],
  alternates: {
    canonical: 'https://fabtechqatar.com/contact',
  },
  openGraph: {
    title: 'Contact FabTech Qatar | Get Your Free Facility Management Quote',
    description: 'Ready to optimize your facility operations? Contact FabTech Qatar today for expert facility management and cleaning services.',
    url: 'https://fabtechqatar.com/contact',
    siteName: 'FabTech Qatar',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://fabtechqatar.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'Contact FabTech Qatar',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact FabTech Qatar | Professional Facility Management',
    description: 'Get in touch with Qatar\'s leading facility management company for all your cleaning and maintenance needs.',
    images: ['https://fabtechqatar.com/logo.png'],
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
};

export default function Contact() {
  const contactInfo = [
    {
      title: "Phone",
      value: "(+974) 5518 7619",
      description: "Call us for immediate assistance",
      icon: "📞"
    },
    {
      title: "Email",
      value: "fms@fabtechqatar.com",
      description: "Send us your questions anytime",
      icon: "✉️"
    },
    {
      title: "Address",
      value: "Madina Khalifa South, Doha",
      description: "Al Rabiah Building 1  Second floor S14",
      icon: "📍"
    },
    {
      title: "Hours",
      value: "24/7 Emergency Support",
      description: "Sat-Thu: 8AM-6PM (Office)",
      icon: "🕒"
    }
  ];

  const officeLocations = [
    {
      city: "New York",
      address: "123 Business Ave, Suite 100, New York, NY 10001",
      phone: "(555) 123-4567",
      email: "ny@fabtech-services.com"
    },
    {
      city: "Los Angeles",
      address: "456 Corporate Blvd, Suite 200, Los Angeles, CA 90210",
      phone: "(555) 234-5678",
      email: "la@fabtech-services.com"
    },
    {
      city: "Chicago",
      address: "789 Commerce St, Suite 300, Chicago, IL 60601",
      phone: "(555) 345-6789",
      email: "chicago@fabtech-services.com"
    },
    {
      city: "Houston",
      address: "321 Industry Way, Suite 400, Houston, TX 77001",
      phone: "(555) 456-7890",
      email: "houston@fabtech-services.com"
    }
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Fabtech Services
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
            Ready to optimize your facility operations? Get in touch with our experts 
            for a free consultation and customized solution.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re here to help with all your facility management needs. 
              Reach out to us through any of the following channels.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{info.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-blue-600 font-medium mb-1">{info.value}</p>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </div>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            
            <div className="space-y-8">
              {/* Emergency Contact */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                  🚨 Emergency Services
                </h3>
                <p className="text-red-700 mb-4">
                  For urgent facility emergencies requiring immediate attention:
                </p>
                <div className="space-y-2">
                  <p className="text-red-800 font-semibold">Emergency Hotline: (+974) 7146 0844</p>
                  <p className="text-red-700 text-sm">Available 24/7 for critical facility issues</p>
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-4">
                  Our Response Promise
                </h3>
                <ul className="space-y-2 text-blue-700">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Email responses within 2 hours
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Phone calls returned within 1 hour
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Emergency response within 30 minutes
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Free consultation scheduling within 24 hours
                  </li>
                </ul>
              </div>

              {/* Service Areas */}
              <div className="bg-gray-100 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Service Areas
                </h3>
                <p className="text-gray-600 mb-4">
                  We proudly serve businesses across Qatar with 
                  comprehensive facility management solutions.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
  <div>• Doha</div>
  <div>• Al Rayyan</div>
  <div>• Al Wakrah</div>
  <div>• Lusail</div>
  <div>• Umm Salal</div>
  <div>• Al Khor</div>
  <div>• Al Thumama</div>
  <div>• The Pearl Qatar</div>
  <div>• Industrial Area</div>
  <div>• Ain Khaled</div>
  <div>• Abu Hamour</div>
  <div>• Al Gharafa</div>
  <div>• Al Sadd</div>
  <div>• Al Waab</div>
  <div>• Al Messila</div>
  <div>• And More Across Qatar...</div>
</div>
              </div>
            </div>
          </div>
        </div>
      </section>

   

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about our services and processes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How quickly can you respond to service requests?
              </h3>
              <p className="text-gray-600">
                We respond to standard requests within 2 hours and emergency 
                situations within 30 minutes. Our 24/7 support ensures you&apos;re 
                never left waiting.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you provide services for small businesses?
              </h3>
              <p className="text-gray-600">
                Yes! We work with businesses of all sizes, from small offices 
                to large corporate campuses. Our services are scalable and 
                customized to fit your needs.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What&apos;s included in a free consultation?
              </h3>
              <p className="text-gray-600">
                Our free consultation includes a facility assessment, needs 
                analysis, service recommendations, and a detailed proposal 
                with transparent pricing.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Are your technicians licensed and insured?
              </h3>
              <p className="text-gray-600">
                Absolutely. All our technicians are fully licensed, bonded, 
                and insured. We maintain comprehensive liability coverage 
                for your peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Don&apos;t wait - contact us today and discover how Fabtech can transform 
            your facility management operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Call (+974) 5518 7619
            </button>
            <GoToContact  name="Schedule Free Consultation" href="/contact" />
          </div>
        </div>
      </section>
    </div>
  );
}
