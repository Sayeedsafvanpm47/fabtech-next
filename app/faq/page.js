import FAQAccordion from '../components/FAQAccordion';

export const metadata = {
  title: 'Frequently Asked Questions',
  description: 'Find answers to common questions about FabTech\'s facility management services, pricing, processes, and more.',
  openGraph: {
    title: 'FAQ | FabTech Facility Management',
    description: 'Get answers to frequently asked questions about our facility management services.',
  },
};

export default function FAQ() {

  const faqCategories = [
    {
      title: "General Services",
      titleAr: "الخدمات العامة",
      faqs: [
        {
          question: "What types of facility management services do you provide?",
          questionAr: "ما هي أنواع خدمات إدارة المرافق التي تقدمونها؟",
          answer: "We provide comprehensive facility management services including cleaning (commercial, residential, specialized), maintenance (HVAC, electrical, plumbing), security services, property management, pest control, marble and stone care, landscaping, and emergency response services."
        },
        {
          question: "Do you serve both commercial and residential properties?",
          questionAr: "هل تخدمون العقارات التجارية والسكنية؟",
          answer: "Yes, we serve both commercial and residential properties. Our services are scalable and can be customized for small offices, large commercial complexes, individual homes, residential towers, and mixed-use developments."
        },
        {
          question: "What areas do you serve?",
          questionAr: "ما هي المناطق التي تخدمونها؟",
          answer: "We provide services across the UAE including Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain. We also have expansion plans for other GCC countries."
        },
        {
          question: "Are your services available 24/7?",
          questionAr: "هل خدماتكم متاحة على مدار الساعة؟",
          answer: "Yes, we offer 24/7 emergency response services. Our regular services are scheduled based on your needs, but emergency support is always available for critical issues."
        }
      ]
    },
    {
      title: "Pricing & Contracts",
      titleAr: "التسعير والعقود",
      faqs: [
        {
          question: "How do you determine pricing for your services?",
          questionAr: "كيف تحددون أسعار خدماتكم؟",
          answer: "Our pricing is based on several factors including property size, service frequency, complexity of requirements, and specific client needs. We provide transparent, competitive pricing with no hidden costs after a thorough assessment."
        },
        {
          question: "Do you offer free consultations and quotes?",
          questionAr: "هل تقدمون استشارات وعروض أسعار مجانية؟",
          answer: "Yes, we provide free initial consultations and detailed quotes. Our team will assess your facility, understand your requirements, and provide a comprehensive proposal with transparent pricing."
        },
        {
          question: "What are your contract terms?",
          questionAr: "ما هي شروط العقد؟",
          answer: "We offer flexible contract terms ranging from short-term projects to long-term partnerships. Contracts can be monthly, quarterly, or annual based on your preferences and requirements."
        },
        {
          question: "Can I modify services during the contract period?",
          questionAr: "هل يمكنني تعديل الخدمات خلال فترة العقد؟",
          answer: "Absolutely! We understand that business needs change. Our contracts are flexible and allow for service modifications, additions, or reductions with proper notice."
        }
      ]
    },
    {
      title: "Quality & Standards",
      titleAr: "الجودة والمعايير",
      faqs: [
        {
          question: "What quality standards do you follow?",
          questionAr: "ما هي معايير الجودة التي تتبعونها؟",
          answer: "We follow international quality standards including ISO 9001 for quality management, ISO 14001 for environmental management, and OHSAS 18001 for health and safety. We also comply with UAE municipal regulations and industry best practices."
        },
        {
          question: "How do you ensure consistent service quality?",
          questionAr: "كيف تضمنون جودة الخدمة المستمرة؟",
          answer: "We maintain quality through regular training programs, standardized procedures, quality audits, customer feedback systems, and performance monitoring. Our supervisors conduct regular inspections and our management team reviews performance metrics monthly."
        },
        {
          question: "Are your staff trained and certified?",
          questionAr: "هل موظفوكم مدربون ومعتمدون؟",
          answer: "Yes, all our staff undergo comprehensive training programs and hold relevant certifications for their specialized areas. We provide ongoing training to keep them updated with the latest techniques and safety protocols."
        },
        {
          question: "What happens if I'm not satisfied with the service?",
          questionAr: "ماذا يحدث إذا لم أكن راضياً عن الخدمة؟",
          answer: "Customer satisfaction is our priority. If you're not satisfied, we'll immediately investigate the issue, take corrective action, and if necessary, redo the work at no additional cost. We also have a formal complaint resolution process."
        }
      ]
    },
    {
      title: "Safety & Insurance",
      titleAr: "السلامة والتأمين",
      faqs: [
        {
          question: "Are you licensed and insured?",
          questionAr: "هل أنتم مرخصون ومؤمنون؟",
          answer: "Yes, we are fully licensed by relevant UAE authorities and carry comprehensive insurance including general liability, professional indemnity, and workers' compensation. We can provide certificates upon request."
        },
        {
          question: "What safety protocols do you follow?",
          questionAr: "ما هي بروتوكولات السلامة التي تتبعونها؟",
          answer: "We follow strict safety protocols including risk assessments, safety training, use of appropriate PPE, adherence to OSHA guidelines, and regular safety audits. All our staff are trained in safety procedures and emergency response."
        },
        {
          question: "Do you use eco-friendly products?",
          questionAr: "هل تستخدمون منتجات صديقة للبيئة؟",
          answer: "Yes, we prioritize the use of eco-friendly, non-toxic cleaning products and sustainable practices. We're committed to environmental responsibility and can provide green cleaning solutions upon request."
        },
        {
          question: "How do you handle confidential or sensitive areas?",
          questionAr: "كيف تتعاملون مع المناطق السرية أو الحساسة؟",
          answer: "We understand the importance of confidentiality and security. Our staff sign confidentiality agreements, undergo background checks, and follow strict protocols when working in sensitive areas. We can also provide security clearances when required."
        }
      ]
    },
    {
      title: "Specialized Services",
      titleAr: "الخدمات المتخصصة",
      faqs: [
        {
          question: "Do you provide marble restoration and polishing?",
          questionAr: "هل تقدمون خدمات ترميم وتلميع الرخام؟",
          answer: "Yes, we specialize in marble, granite, and natural stone care including polishing, restoration, stain removal, crystallization, and protective treatments. Our technicians are trained in advanced stone care techniques."
        },
        {
          question: "What pest control methods do you use?",
          questionAr: "ما هي طرق مكافحة الآفات التي تستخدمونها؟",
          answer: "We use integrated pest management (IPM) approaches including inspection, identification, prevention, and targeted treatment. We use safe, effective methods and can provide organic or chemical-free options when requested."
        },
        {
          question: "Do you handle post-construction cleaning?",
          questionAr: "هل تتعاملون مع تنظيف ما بعد البناء؟",
          answer: "Yes, we provide comprehensive post-construction cleaning services including debris removal, deep cleaning, window cleaning, floor care, and final detailing to prepare spaces for occupancy."
        },
        {
          question: "Can you maintain swimming pools and water features?",
          questionAr: "هل يمكنكم صيانة أحواض السباحة والمعالم المائية؟",
          answer: "Yes, we provide pool and water feature maintenance including cleaning, chemical balancing, equipment maintenance, and seasonal services. Our technicians are certified in pool maintenance and water treatment."
        }
      ]
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Find answers to common questions about our facility management 
            services, processes, and policies.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for answers..."
              className="w-full px-6 py-4 pl-12 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 bg-white">
        <FAQAccordion faqCategories={faqCategories} />
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Can&apos;t find the answer you&apos;re looking for? Our team is here to help.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-3">Speak directly with our experts</p>
              <p className="text-blue-600 font-medium">(555) 123-4567</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl mb-4">✉️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-3">Get detailed answers via email</p>
              <p className="text-blue-600 font-medium">info@fabtech-services.com</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-3">Chat with us in real-time</p>
              <button className="text-blue-600 font-medium hover:text-blue-800">Start Chat</button>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Contact Support
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
