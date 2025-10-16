export const metadata = {
  title: 'Our Projects',
  description: 'Explore FabTech\'s successful facility management projects. From commercial buildings to residential complexes, see how we deliver excellence.',
  openGraph: {
    title: 'Our Projects | FabTech Facility Management',
    description: 'Discover our portfolio of successful facility management projects across various industries.',
  },
};

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Dubai Mall Commercial Complex",
      category: "Commercial Cleaning",
      location: "Dubai, UAE",
      duration: "2022 - Ongoing",
      description: "Complete facility management for a 2.5 million sq ft commercial complex including daily cleaning, maintenance, and security services.",
      services: ["Commercial Cleaning", "HVAC Maintenance", "Security Services", "Pest Control"],
      image: "🏢",
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
      image: "🏠",
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
      image: "🏥",
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
      image: "🏭",
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
      image: "🎓",
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
      image: "🏨",
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
    { number: "50M+", label: "Sq Ft Managed", labelAr: "قدم مربع مُدار" },
    { number: "99.5%", label: "Client Satisfaction", labelAr: "رضا العملاء" },
    { number: "15+", label: "Years Experience", labelAr: "سنة خبرة" }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Projects
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
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
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{project.image}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium mr-2">
                          {project.category}
                        </span>
                        <span>{project.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Services Provided:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {project.results.map((result, index) => (
                        <li key={index} className="text-gray-600 text-sm flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <span className="text-sm text-gray-500">
                      Duration: {project.duration}
                    </span>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
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
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our growing list of satisfied clients and experience the 
            FabTech difference in facility management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              View All Projects
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
