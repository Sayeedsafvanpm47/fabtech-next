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
          question: "What types of facility and cleaning services do you provide?",
          questionAr: "ما هي أنواع خدمات التنظيف وإدارة المرافق التي تقدمونها؟",
          answer: "Fabtech Services provides a complete range of facility management and cleaning services in Qatar. Our services include deep cleaning, general cleaning, post-construction cleaning, pest control, disinfection, landscaping, manpower supply, and maintenance for residential, commercial, and industrial properties."
        },
        {
          question: "Do you serve both residential and commercial properties?",
          questionAr: "هل تخدمون العقارات السكنية والتجارية؟",
          answer: "Yes, we serve both. Fabtech provides cleaning and maintenance services for villas, apartments, offices, warehouses, malls, schools, and other facilities across Qatar."
        },
        {
          question: "Which areas in Qatar do you cover?",
          questionAr: "ما هي المناطق التي تغطونها في قطر؟",
          answer: "We provide services all across Qatar including Doha, Al Wakra, Al Rayyan, Lusail, Al Khor, Umm Salal, and industrial zones. Our teams are mobile and can reach any part of the country promptly."
        },
        {
          question: "Are your services available 24/7?",
          questionAr: "هل خدماتكم متاحة على مدار الساعة؟",
          answer: "Yes, Fabtech offers 24/7 support for emergency cleaning and maintenance needs. Regular cleaning and scheduled services are arranged according to customer preferences."
        }
      ]
    },
    {
      title: "Pricing & Contracts",
      titleAr: "التسعير والعقود",
      faqs: [
        {
          question: "How do you determine the pricing for your services?",
          questionAr: "كيف تحددون أسعار خدماتكم؟",
          answer: "Pricing is based on property size, service type, cleaning intensity, and frequency. We provide transparent quotations after a free site assessment and ensure competitive rates within the Qatar market."
        },
        {
          question: "Do you offer free quotations or site visits?",
          questionAr: "هل تقدمون عروض أسعار أو زيارات ميدانية مجانية؟",
          answer: "Yes, we provide free quotations and site assessments. Our supervisors will inspect the location, discuss your requirements, and share a detailed quotation with no hidden costs."
        },
        {
          question: "Do you offer long-term contracts or one-time services?",
          questionAr: "هل تقدمون عقودًا طويلة الأجل أو خدمات لمرة واحدة؟",
          answer: "Fabtech provides both options. You can book one-time deep cleaning or sign monthly, quarterly, or yearly maintenance contracts for ongoing services."
        },
        {
          question: "Can I modify the services after signing a contract?",
          questionAr: "هل يمكنني تعديل الخدمات بعد توقيع العقد؟",
          answer: "Yes, our contracts are flexible. You can upgrade, reduce, or modify the services at any time during the contract with proper notice."
        }
      ]
    },
    {
      title: "Quality & Standards",
      titleAr: "الجودة والمعايير",
      faqs: [
        {
          question: "How do you maintain quality in your services?",
          questionAr: "كيف تحافظون على جودة خدماتكم؟",
          answer: "Fabtech maintains high standards through professional supervision, trained staff, quality checks, and regular customer feedback. Each project is monitored to ensure it meets our quality benchmarks."
        },
        {
          question: "Are your cleaning materials safe and approved in Qatar?",
          questionAr: "هل مواد التنظيف التي تستخدمونها آمنة ومعتمدة في قطر؟",
          answer: "Yes, we use only government-approved, eco-friendly, and non-toxic cleaning materials that are safe for homes, offices, and the environment."
        },
        {
          question: "Are your staff trained and experienced?",
          questionAr: "هل موظفوكم مدربون وذوو خبرة؟",
          answer: "All Fabtech staff undergo regular training on cleaning techniques, equipment usage, safety standards, and customer service. Our team is experienced in handling all property types."
        },
        {
          question: "What if I am not satisfied with the service?",
          questionAr: "ماذا لو لم أكن راضياً عن الخدمة؟",
          answer: "Customer satisfaction is our top priority. If you are not satisfied, we will revisit the site, assess the issue, and re-do the service free of charge to ensure quality delivery."
        }
      ]
    },
    {
      title: "Safety & Insurance",
      titleAr: "السلامة والتأمين",
      faqs: [
        {
          question: "Is Fabtech licensed and insured in Qatar?",
          questionAr: "هل فابتك مرخصة ومؤمنة في قطر؟",
          answer: "Yes, Fabtech Services is a fully registered and licensed company under Qatari law. We carry insurance coverage for staff, public liability, and property safety."
        },
        {
          question: "What safety measures do your staff follow?",
          questionAr: "ما هي إجراءات السلامة التي يتبعها موظفوكم؟",
          answer: "Our staff strictly follow safety procedures such as wearing PPE, using safe cleaning products, following height and electrical safety protocols, and adhering to Qatar’s health and safety regulations."
        },
        {
          question: "Do you use eco-friendly and sustainable cleaning products?",
          questionAr: "هل تستخدمون منتجات تنظيف صديقة للبيئة؟",
          answer: "Yes, Fabtech promotes sustainability by using non-toxic, biodegradable cleaning agents wherever possible. We offer green cleaning options upon request."
        },
        {
          question: "How do you handle customer property and privacy?",
          questionAr: "كيف تتعاملون مع ممتلكات وخصوصية العملاء؟",
          answer: "We treat all client properties with utmost care and confidentiality. Our team members are verified, trained, and sign non-disclosure agreements when working in sensitive or private spaces."
        }
      ]
    },
    {
      title: "Specialized Services",
      titleAr: "الخدمات المتخصصة",
      faqs: [
        {
          question: "Do you offer post-construction or renovation cleaning?",
          questionAr: "هل تقدمون خدمات تنظيف ما بعد البناء أو التجديد؟",
          answer: "Yes, Fabtech specializes in post-construction cleaning including debris removal, paint and dust cleaning, glass and floor polishing, and site handover preparation."
        },
        {
          question: "Do you provide pest control services?",
          questionAr: "هل تقدمون خدمات مكافحة الحشرات؟",
          answer: "Yes, we provide pest control services for residential and commercial spaces using safe and effective methods. We handle cockroaches, bed bugs, ants, rodents, and termites using approved chemicals."
        },
        {
          question: "Do you offer sofa and carpet cleaning?",
          questionAr: "هل تقدمون خدمات تنظيف الكنب والسجاد؟",
          answer: "Yes, our deep cleaning team provides professional sofa, carpet, and mattress cleaning using advanced machines and fabric-safe solutions."
        },
        {
          question: "Do you provide manpower or staff supply?",
          questionAr: "هل تقدمون خدمات توريد الموظفين؟",
          answer: "Yes, Fabtech supplies trained manpower for cleaning, maintenance, and facility operations on daily, weekly, or monthly contracts depending on client requirements."
        }
      ]
    }
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
            Find answers to common questions about our facility management 
            services, processes, and policies.
          </p>
        </div>
      </section>

      {/* Search Section */}
     

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
              <p className="text-gray-600 mb-3">Speak with our experts</p>
              <p className="text-red-600 font-medium">(+974) 5518 7619</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl mb-4">✉️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-3">Get answers via email</p>
              <p className="text-red-600 font-medium">fms@fabtechqatar.com</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-3">Chat with us in real-time</p>
              <button className="text-red-600 font-medium hover:text-red-800">Start Chat</button>
            </div>
          </div>
          
       
        </div>
      </section>
    </div>
  );
}
