'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function HomeFAQ({ 
  title = "Frequently Asked Questions",
  subtitle = "Get quick answers to common questions about our services",
  maxItems = 6,
  showViewAllButton = true,
  customFaqs = null 
}) {
  const [openItems, setOpenItems] = useState(new Set());
  const [heights, setHeights] = useState({});
  const contentRefs = useRef({});

  useEffect(() => {
    // Calculate heights for all content
    const newHeights = {};
    Object.keys(contentRefs.current).forEach(key => {
      if (contentRefs.current[key]) {
        newHeights[key] = contentRefs.current[key].scrollHeight;
      }
    });
    setHeights(newHeights);
  }, []);

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  // Default FAQs for home page - most common questions
  const defaultFaqs = [
    {
      question: "What types of facility management services do you provide?",
      answer:
        "Fabtech Services in Qatar provides complete facility management solutions including commercial and residential cleaning, deep cleaning, post-construction cleaning, general maintenance, civil works, MEP services, pest control, landscaping, manpower supply, and renovation works such as painting, flooring, and glass partition installation."
    },
    {
      question: "Do you serve both commercial and residential properties?",
      answer:
        "Yes, we serve both commercial and residential clients across Qatar. Our services cover villas, apartments, offices, retail shops, warehouses, hotels, restaurants, and large commercial buildings."
    },
    {
      question: "How do you determine pricing for your services?",
      answer:
        "Pricing is based on several factors including the size of the property, scope of work, materials required, manpower needed, and service frequency. We provide transparent and competitive quotations after a detailed site assessment."
    },
    {
      question: "Do you offer free consultations and quotes?",
      answer:
        "Yes, Fabtech offers free site visits, consultations, and quotations anywhere in Qatar. Our team assesses your requirements and prepares a detailed proposal with clear pricing and timelines."
    },
    {
      question: "Are your services available 24/7?",
      answer:
        "We offer flexible scheduling based on customer needs and provide 24/7 emergency support for urgent cleaning, maintenance, and repair works."
    },
    {
      question: "Are you licensed and insured?",
      answer:
        "Yes, Fabtech Services is fully licensed in Qatar and complies with all local regulations. We maintain necessary insurance coverage including liability and worker protection, ensuring safe and reliable service delivery."
    },
    {
      question: "What quality standards do you follow?",
      answer:
        "We follow Qatar’s health, safety, and environmental regulations and adhere to industry best practices. Our team is trained to maintain high standards of professionalism, safety compliance, and service quality."
    },
    {
      question: "Do you use eco-friendly products?",
      answer:
        "Yes, wherever possible we use eco-friendly and non-toxic cleaning materials that are safe for homes, offices, children, and pets. Eco-friendly cleaning can be provided upon request."
    }
  ];
  const faqs = customFaqs || defaultFaqs.slice(0, maxItems);

  return (
    <section className="py-16 bg-red-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-8">
          {faqs.map((faq, index) => {
            const isOpen = openItems.has(index);
            
            return (
              <div 
                key={index} 
                className="bg-white border-2 border-gray-200 rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:border-red-500"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-900 pr-4 text-lg">
                    {faq.question}
                  </span>
                  <svg
                    className={`h-5 w-5 text-red-600 transform transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div
                  ref={el => contentRefs.current[index] = el}
                  style={{
                    maxHeight: isOpen ? `${heights[index]}px` : '0px',
                    opacity: isOpen ? 1 : 0
                  }}
                  className="transition-all duration-300 ease-in-out overflow-hidden"
                >
                  <div className="px-6 pb-4">
                    <div className="text-gray-600 leading-relaxed border-t border-gray-200 pt-4">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        {showViewAllButton && (
          <div className="text-center">
            <Link
              href="/faq"
              className="inline-flex items-center px-6 py-3 border-2 border-transparent text-base font-medium rounded-lg text-white bg-red-600 hover:bg-red-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              View All FAQs
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}