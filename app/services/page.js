import ServiceCard from '../components/ServiceCard';

export const metadata = {
  title: 'Services',
  description: 'Comprehensive facility management services including maintenance, cleaning, security, and property management. Professional solutions for businesses of all sizes.',
  openGraph: {
    title: 'Our Services | FabTech Facility Management',
    description: 'Explore our comprehensive range of facility management services designed to keep your business running smoothly.',
  },
};

export default function Services() {
  const mainServices = [
    {
      title: "Facility Maintenance",
      description: "Comprehensive maintenance services including preventive, corrective, and emergency repairs to ensure optimal facility performance.",
      icon: "🔧",
      features: [
        "Preventive maintenance programs",
        "Emergency repair services 24/7",
        "HVAC system maintenance and repair",
        "Electrical system maintenance",
        "Plumbing services and repairs",
        "Equipment lifecycle management",
        "Energy efficiency optimization",
        "Compliance and safety inspections"
      ]
    },
    {
      title: "Commercial Cleaning",
      description: "Professional cleaning services that create healthy, productive work environments while maintaining the highest standards of cleanliness.",
      icon: "🧹",
      features: [
        "Daily office cleaning services",
        "Deep cleaning and sanitization",
        "Carpet and upholstery cleaning",
        "Window cleaning (interior/exterior)",
        "Floor care and maintenance",
        "Restroom sanitization",
        "Kitchen and break room cleaning",
        "Post-construction cleanup"
      ]
    },
    {
      title: "Security Services",
      description: "Comprehensive security solutions to protect your property, assets, and personnel with state-of-the-art technology and trained professionals.",
      icon: "🛡️",
      features: [
        "24/7 security monitoring",
        "Access control systems",
        "Professional security guards",
        "CCTV installation and monitoring",
        "Alarm system management",
        "Emergency response protocols",
        "Visitor management systems",
        "Security risk assessments"
      ]
    },
    {
      title: "Property Management",
      description: "Complete property management services designed to maximize property value while minimizing operational costs and administrative burden.",
      icon: "🏢",
      features: [
        "Tenant relations and communication",
        "Lease administration and renewals",
        "Financial reporting and budgeting",
        "Vendor management and coordination",
        "Compliance and regulatory monitoring",
        "Property inspections and assessments",
        "Maintenance coordination",
        "Emergency response management"
      ]
    },
    {
      title: "Landscaping & Grounds",
      description: "Professional landscaping and grounds maintenance services to enhance your property's curb appeal and create welcoming outdoor spaces.",
      icon: "🌿",
      features: [
        "Lawn care and maintenance",
        "Seasonal landscaping design",
        "Tree and shrub care",
        "Irrigation system management",
        "Snow removal and ice management",
        "Parking lot maintenance",
        "Outdoor lighting maintenance",
        "Pest control services"
      ]
    },
    {
      title: "Energy Management",
      description: "Comprehensive energy management solutions to reduce costs, improve efficiency, and support your sustainability goals.",
      icon: "⚡",
      features: [
        "Energy audits and assessments",
        "Utility bill analysis and optimization",
        "LED lighting upgrades",
        "Smart building automation",
        "HVAC optimization programs",
        "Renewable energy solutions",
        "Energy monitoring systems",
        "Sustainability reporting"
      ]
    }
  ];

  const additionalServices = [
    {
      title: "Emergency Response",
      description: "24/7 emergency response services for critical facility issues.",
      icon: "🚨"
    },
    {
      title: "Project Management",
      description: "Professional project management for facility improvements and renovations.",
      icon: "📋"
    },
    {
      title: "Compliance Management",
      description: "Ensure your facility meets all regulatory and safety requirements.",
      icon: "✅"
    },
    {
      title: "Technology Integration",
      description: "Smart building solutions and IoT integration for modern facilities.",
      icon: "💻"
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive Facility Management Services
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            From maintenance and cleaning to security and property management, 
            we provide end-to-end solutions for all your facility needs.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive suite of facility management services designed 
              to keep your business running smoothly and efficiently.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Specialized Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond our core offerings, we provide specialized services to address 
              unique facility management challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven process to ensure exceptional service delivery 
              and client satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600">
                We conduct a thorough assessment of your facility and requirements.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600">
                We develop a customized service plan tailored to your specific needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600">
                Our trained professionals execute the service plan with precision.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Monitoring</h3>
              <p className="text-gray-600">
                We continuously monitor and optimize our services for best results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Optimize Your Facility Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your facility management needs and receive 
            a customized solution proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Request Service Quote
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
