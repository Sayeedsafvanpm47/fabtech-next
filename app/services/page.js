import ServiceCard from '../components/ServiceCard';
import TypingTextContainer from '../components/TypingTextContainer';

export const metadata = {
  title: 'Services',
  description: 'Comprehensive facility management services including maintenance, cleaning, security, and property management. Professional solutions for businesses of all sizes.',
  openGraph: {
    title: 'Our Services | FabTech Facility Management',
    description: 'Explore our comprehensive range of facility management services designed to keep your business running smoothly.',
  },
};
const serviceTitles = ["We Do It All","Comprehensive Facility Management","Fabulous Interior Designing","Professional Cleaning Services","Post Construction Cleaning","Move-In / Move-Out Cleaning","Pest Control","Interior Design","Interior Fit-Out","Canopy Construction","Car Shade Construction","Structural Maintenance"];

export default function Services() {


  const mainServices = [
    {
      title: "Residential Deep Cleaning",
      description: "Thorough top-to-bottom cleaning for homes, villas, and apartments — ensuring spotless hygiene and a fresh living environment.",
      icon: "🏠",
      features: [
        "Complete home deep cleaning",
        "Kitchen and bathroom sanitization",
        "Floor, wall, and ceiling cleaning",
        "Furniture dusting and polishing",
        "Appliance and switchboard cleaning",
        "Door, window, and glass cleaning",
        "Balcony and outdoor cleaning",
        "Eco-friendly cleaning materials"
      ],
      href: "/services/residential-deep-cleaning"
    },
    {
      title: "Commercial Deep Cleaning",
      description: "Comprehensive cleaning for offices, malls, and commercial spaces to maintain a hygienic, professional, and productive environment.",
      icon: "🏢",
      features: [
        "Office deep cleaning and sanitization",
        "Carpet and upholstery deep cleaning",
        "Window and glass façade cleaning",
        "Restroom and pantry sanitization",
        "Floor scrubbing and polishing",
        "High-dust and air vent cleaning",
        "Post-renovation and event cleanup",
        "Scheduled maintenance cleaning"
      ],
      href: "/services/commercial-deep-cleaning"
    },
    {
      title: "General Cleaning",
      description: "Regular cleaning solutions to keep your home or office neat, fresh, and presentable every day.",
      icon: "🧹",
      features: [
        "Daily and weekly cleaning services",
        "Dusting and mopping",
        "Kitchen and restroom cleaning",
        "Trash removal and deodorizing",
        "Furniture and glass cleaning",
        "Custom schedules available"
      ],
      href: "/services/general-cleaning"
    },
    {
      title: "Cleaner Supply – Commercial",
      description: "Reliable supply of trained professional cleaners for offices, malls, and commercial establishments.",
      icon: "👷‍♂️",
      features: [
        "Trained and uniformed cleaners",
        "Flexible contract durations",
        "Full-time and part-time availability",
        "Supervised workforce management",
        "Health and safety compliant staff"
      ],
      href: "/services/cleaner-supply-commercial"
    },
    {
      title: "Cleaner Supply – Residential",
      description: "Dedicated and experienced housekeepers for villas, apartments, and residential properties.",
      icon: "🧑‍🔧",
      features: [
        "Daily, weekly, or monthly hiring options",
        "Background-verified staff",
        "Cleaning tools and materials available",
        "Flexible scheduling",
        "Replacement guarantee available"
      ],
      href: "/services/cleaner-supply-residential"
    },
    {
      title: "Sofa Cleaning",
      description: "Professional sofa and upholstery cleaning to remove stains, dust, and odors — restoring comfort and freshness.",
      icon: "🛋️",
      features: [
        "Steam and dry cleaning methods",
        "Fabric-safe and eco-friendly products",
        "Odor and stain removal",
        "Leather sofa care and polishing"
      ],
      href: "/services/sofa-cleaning"
    },
    {
      title: "Carpet Cleaning",
      description: "Deep carpet cleaning using steam extraction and advanced tools to revive colors and remove allergens.",
      icon: "🧶",
      features: [
        "Hot water extraction cleaning",
        "Spot and stain treatment",
        "Odor removal and deodorization",
        "Fast drying technology"
      ],
      href: "/services/carpet-cleaning"
    },
    {
      title: "Mattress Cleaning",
      description: "Deep sanitization service to eliminate dust mites, bacteria, and odors for a healthier sleep environment.",
      icon: "🛏️",
      features: [
        "Vacuum and steam sanitization",
        "Anti-allergen treatment",
        "Odor and stain removal",
        "Quick drying system"
      ],
      href: "/services/mattress-cleaning"
    },
    {
      title: "Water Tank Cleaning",
      description: "Safe and hygienic cleaning of overhead and underground water tanks using non-toxic disinfectants.",
      icon: "🚰",
      features: [
        "Tank draining and sludge removal",
        "High-pressure cleaning",
        "Disinfection and rinsing",
        "Water quality safety check"
      ],
      href: "/services/water-tank-cleaning"
    },
    {
      title: "Majlis Cleaning",
      description: "Premium cleaning for majlis spaces — restoring carpets, sofas, and interiors to pristine condition.",
      icon: "🕌",
      features: [
        "Fabric and carpet cleaning",
        "Odor removal and disinfection",
        "Detailed furniture cleaning",
        "Gentle care for luxury materials"
      ],
      href: "/services/majlis-cleaning"
    },
    {
      title: "Marble Polishing",
      description: "Restore the shine and elegance of marble surfaces through professional polishing and buffing.",
      icon: "💎",
      features: [
        "Crystallization and grinding",
        "Scratch and stain removal",
        "Shine restoration and sealing",
        "Marble maintenance plans"
      ],
      href: "/services/marble-polishing"
    },
    {
      title: "Granite Polishing",
      description: "Enhance the natural beauty of granite floors and surfaces with expert polishing techniques.",
      icon: "🧱",
      features: [
        "Deep cleaning and restoration",
        "Scratch removal and sealing",
        "Gloss and finish enhancement",
        "Long-lasting protective layer"
      ],
      href: "/services/granite-polishing"
    },
    {
      title: "Marble Floor Cleaning",
      description: "Professional cleaning for marble floors to preserve their shine and durability.",
      icon: "🧽",
      features: [
        "Stain and dirt removal",
        "Buffing and gloss restoration",
        "Eco-safe cleaning materials",
        "Regular maintenance options"
      ],
      href: "/services/marble-floor-cleaning"
    },
    {
      title: "Post-Construction Cleaning",
      description: "Detailed cleaning after construction or renovation — removing dust, paint marks, and debris for a move-in-ready finish.",
      icon: "🏗️",
      features: [
        "Debris and dust removal",
        "Window and glass cleaning",
        "Floor and surface polishing",
        "Final inspection-ready finish"
      ],
      href: "/services/post-construction-cleaning"
    },
    {
      title: "Move-In / Move-Out Cleaning",
      description: "Comprehensive cleaning for tenants and property owners during relocation — ensuring spotless transitions.",
      icon: "🚚",
      features: [
        "Full property cleaning and sanitization",
        "Cabinet and wardrobe cleaning",
        "Wall mark and stain removal",
        "Appliance and fixture cleaning"
      ],
      href: "/services/move-in-move-out-cleaning"
    },
    {
      title: "Pest Control",
      description: "Safe and effective pest control services for homes and businesses — protecting your space from unwanted guests.",
      icon: "🐜",
      features: [
        "General pest control treatments",
        "Bed bug and cockroach control",
        "Rodent and termite management",
        "Eco-safe and odorless solutions"
      ],
      href: "/services/pest-control"
    },
    {
      title: "Interior Design",
      description: "Creative and functional interior design services that bring your vision to life with style and comfort.",
      icon: "🎨",
      features: [
        "Residential and commercial design",
        "Space planning and 3D visualization",
        "Material and furniture selection",
        "Turnkey project management"
      ],
      href: "/services/interior-design"
    },
    {
      title: "Interior Fit-Out",
      description: "Professional interior fit-out services covering design, construction, and finishing for commercial and residential spaces.",
      icon: "🛠️",
      features: [
        "Full project execution and management",
        "Custom furniture and joinery work",
        "Electrical, HVAC, and plumbing fit-out",
        "Turnkey office and retail solutions"
      ],
      href: "/services/interior-fitout"
    },
    {
      title: "Canopy Construction",
      description: "Durable and aesthetic canopy solutions for parking areas, walkways, and outdoor spaces.",
      icon: "⛺",
      features: [
        "Custom design and fabrication",
        "Metal and tensile structure options",
        "UV and weather protection materials",
        "Installation and maintenance services"
      ],
      href: "/services/canopy-construction"
    },
    {
      title: "Car Shade Construction",
      description: "High-quality car shade structures that combine protection, style, and durability.",
      icon: "🚗",
      features: [
        "Steel and tensile fabric shades",
        "Custom size and color options",
        "UV protection and ventilation",
        "Residential and commercial installation"
      ],
      href: "/services/car-shade-construction"
    },
    {
      title: "Structural Maintenance",
      description: "Reliable maintenance and repair services to preserve the structural integrity of buildings and facilities.",
      icon: "🏗️",
      features: [
        "Concrete crack repair and waterproofing",
        "Painting and coating maintenance",
        "Facade restoration and sealing",
        "Preventive inspection and upkeep"
      ],
      href: "/services/structural-maintenance"
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
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-800 to-red-600 text-white py-20">
        <div className="max-w-8xl mx-auto px-8 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 ">
            <TypingTextContainer text={serviceTitles} colors={['#ffffff', '#ffffff', '#ffffff']} />
       
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
            From maintenance and cleaning to interior designing and property management, 
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
                href={service.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-100">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer">
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
      <section className="py-16 bg-gray-300">
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
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600">
                We conduct a thorough assessment of your facility and requirements.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600">
                We develop a customized service plan tailored to your specific needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600">
                Our trained professionals execute the service plan with precision.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
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
            <button className="bg-red-600 hover:bg-white text-white hover:text-black px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
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
