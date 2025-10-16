export const metadata = {
  title: 'About Us',
  description: 'Learn about FabTech&apos;s 15+ years of experience in facility management. Our mission, values, and commitment to excellence in serving businesses nationwide.',
  openGraph: {
    title: 'About FabTech | Leading Facility Management Company',
    description: 'Discover our story, mission, and the experienced team behind FabTech&apos;s success in facility management.',
  },
};

export default function About() {
  const teamMembers = [
    {
      name: "John Smith",
      position: "Chief Executive Officer",
      experience: "20+ years in facility management",
      image: "👨‍💼"
    },
    {
      name: "Sarah Johnson",
      position: "Operations Director",
      experience: "15+ years in operations management",
      image: "👩‍💼"
    },
    {
      name: "Michael Brown",
      position: "Technical Services Manager",
      experience: "18+ years in maintenance and engineering",
      image: "👨‍🔧"
    },
    {
      name: "Lisa Davis",
      position: "Client Relations Manager",
      experience: "12+ years in customer service",
      image: "👩‍💻"
    }
  ];

  const milestones = [
    {
      year: "2008",
      title: "Company Founded",
      description: "FabTech was established with a vision to revolutionize facility management services."
    },
    {
      year: "2012",
      title: "100 Clients Milestone",
      description: "Reached our first major milestone of serving 100+ satisfied clients."
    },
    {
      year: "2016",
      title: "Regional Expansion",
      description: "Expanded operations to serve clients across multiple states."
    },
    {
      year: "2020",
      title: "Technology Integration",
      description: "Launched our smart facility management platform with IoT integration."
    },
    {
      year: "2023",
      title: "500+ Clients",
      description: "Proudly serving over 500 clients with comprehensive facility solutions."
    }
  ];

  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in every service we provide, exceeding client expectations consistently.",
      icon: "⭐"
    },
    {
      title: "Reliability",
      description: "Our clients depend on us, and we deliver reliable services 24/7, 365 days a year.",
      icon: "🛡️"
    },
    {
      title: "Innovation",
      description: "We embrace new technologies and innovative approaches to improve our services continuously.",
      icon: "💡"
    },
    {
      title: "Integrity",
      description: "We conduct business with the highest ethical standards and complete transparency.",
      icon: "🤝"
    },
    {
      title: "Sustainability",
      description: "We're committed to environmentally responsible practices and sustainable solutions.",
      icon: "🌱"
    },
    {
      title: "Partnership",
      description: "We view our clients as partners and work collaboratively to achieve their goals.",
      icon: "🤝"
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About FabTech
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Leading the industry in comprehensive facility management solutions 
              for over 15 years.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2008, FabTech began with a simple mission: to provide exceptional 
                facility management services that allow businesses to focus on what they do best. 
                What started as a small local operation has grown into a trusted partner for 
                over 500 businesses nationwide.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our success is built on a foundation of reliability, innovation, and an 
                unwavering commitment to client satisfaction. We&apos;ve continuously evolved our 
                services to meet the changing needs of modern businesses, incorporating the 
                latest technologies and best practices in facility management.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, FabTech stands as an industry leader, known for our comprehensive 
                service offerings, professional expertise, and dedication to creating 
                environments where businesses can thrive.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600">Years of Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Satisfied Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-600">Support Available</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide comprehensive, reliable, and innovative facility management 
                solutions that enable our clients to focus on their core business objectives 
                while we ensure their facilities operate at peak efficiency.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted and innovative facility management partner, 
                setting industry standards for service excellence while contributing 
                to sustainable and efficient business operations nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do and shape our relationships 
              with clients, employees, and partners.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our growth and evolution as a leading 
              facility management company.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who lead FabTech and drive 
              our commitment to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Partner with FabTech Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust FabTech for their 
            facility management needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Start Partnership
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
