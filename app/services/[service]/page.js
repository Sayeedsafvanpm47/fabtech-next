import { notFound } from 'next/navigation';

// Service data structure
const servicesData = {
  // CLEANING SERVICES
  'sofa-cleaning': {
    title: 'Professional Sofa Cleaning Services',
    titleAr: 'خدمات تنظيف الأرائك المهنية',
    category: 'Cleaning',
    categoryAr: 'التنظيف',
    heroIcon: '🛋️',
    description: 'Expert sofa cleaning services in UAE. Deep cleaning, stain removal, and fabric protection for all types of sofas and upholstery.',
    descriptionAr: 'خدمات تنظيف الأرائك المتخصصة في الإمارات. تنظيف عميق وإزالة البقع وحماية الأقمشة لجميع أنواع الأرائك والمفروشات.',
    features: [
      { icon: '🧽', title: 'Deep Steam Cleaning', titleAr: 'التنظيف العميق بالبخار', description: 'Advanced steam cleaning technology removes deep-seated dirt and allergens', descriptionAr: 'تقنية التنظيف بالبخار المتقدمة تزيل الأوساخ والمواد المسببة للحساسية' },
      { icon: '🛡️', title: 'Fabric Protection', titleAr: 'حماية الأقمشة', description: 'Protective coating application to prevent future stains and wear', descriptionAr: 'تطبيق طلاء واقي لمنع البقع والتآكل المستقبلي' },
      { icon: '🌿', title: 'Eco-Friendly Products', titleAr: 'منتجات صديقة للبيئة', description: 'Safe, non-toxic cleaning solutions that are gentle on fabrics and family', descriptionAr: 'حلول تنظيف آمنة وغير سامة لطيفة على الأقمشة والعائلة' },
      { icon: '⚡', title: 'Quick Drying', titleAr: 'تجفيف سريع', description: 'Fast-drying techniques minimize disruption to your daily routine', descriptionAr: 'تقنيات التجفيف السريع تقلل من تعطيل روتينك اليومي' }
    ],
    process: [
      { step: 1, title: 'Inspection & Assessment', titleAr: 'الفحص والتقييم', description: 'Thorough examination of fabric type, stains, and cleaning requirements', descriptionAr: 'فحص شامل لنوع القماش والبقع ومتطلبات التنظيف' },
      { step: 2, title: 'Pre-Treatment', titleAr: 'المعالجة المسبقة', description: 'Targeted treatment of stains and heavily soiled areas', descriptionAr: 'معالجة مستهدفة للبقع والمناطق شديدة الاتساخ' },
      { step: 3, title: 'Deep Cleaning', titleAr: 'التنظيف العميق', description: 'Professional steam cleaning or dry cleaning based on fabric type', descriptionAr: 'تنظيف احترافي بالبخار أو التنظيف الجاف حسب نوع القماش' },
      { step: 4, title: 'Protection & Finishing', titleAr: 'الحماية واللمسة الأخيرة', description: 'Application of fabric protector and final quality inspection', descriptionAr: 'تطبيق واقي القماش والفحص النهائي للجودة' }
    ],
    pricing: [
      { type: 'Single Seater', typeAr: 'مقعد واحد', price: 'AED 150', features: ['Deep steam cleaning', 'Stain treatment', 'Deodorizing', 'Basic protection'] },
      { type: '3-Seater Sofa', typeAr: 'أريكة 3 مقاعد', price: 'AED 350', features: ['Deep steam cleaning', 'Advanced stain removal', 'Deodorizing', 'Fabric protection', 'Cushion cleaning'], popular: true },
      { type: 'L-Shaped Sofa', typeAr: 'أريكة على شكل L', price: 'AED 500', features: ['Complete deep cleaning', 'Premium stain removal', 'Sanitization', 'Advanced protection', 'All cushions included'] }
    ]
  },

  'carpet-cleaning': {
    title: 'Professional Carpet Cleaning Services',
    titleAr: 'خدمات تنظيف السجاد المهنية',
    category: 'Cleaning',
    categoryAr: 'التنظيف',
    heroIcon: '🏠',
    description: 'Expert carpet cleaning services using advanced techniques to remove stains, odors, and allergens from all types of carpets.',
    descriptionAr: 'خدمات تنظيف السجاد المتخصصة باستخدام تقنيات متقدمة لإزالة البقع والروائح والمواد المسببة للحساسية من جميع أنواع السجاد.',
    features: [
      { icon: '🌊', title: 'Hot Water Extraction', titleAr: 'استخراج الماء الساخن', description: 'Deep cleaning method that removes embedded dirt and bacteria', descriptionAr: 'طريقة تنظيف عميقة تزيل الأوساخ والبكتيريا المتراكمة' },
      { icon: '🦠', title: 'Sanitization', titleAr: 'التعقيم', description: 'Eliminates bacteria, viruses, and allergens for a healthier environment', descriptionAr: 'يقضي على البكتيريا والفيروسات والمواد المسببة للحساسية لبيئة أكثر صحة' },
      { icon: '🎯', title: 'Stain Removal', titleAr: 'إزالة البقع', description: 'Specialized treatments for different types of stains and spills', descriptionAr: 'علاجات متخصصة لأنواع مختلفة من البقع والانسكابات' },
      { icon: '💨', title: 'Odor Elimination', titleAr: 'إزالة الروائح', description: 'Complete removal of pet odors, smoke, and other unpleasant smells', descriptionAr: 'إزالة كاملة لروائح الحيوانات الأليفة والدخان والروائح الكريهة الأخرى' }
    ],
    process: [
      { step: 1, title: 'Pre-Inspection', titleAr: 'الفحص المسبق', description: 'Assessment of carpet condition, fiber type, and stain identification', descriptionAr: 'تقييم حالة السجاد ونوع الألياف وتحديد البقع' },
      { step: 2, title: 'Vacuuming', titleAr: 'الشفط', description: 'Thorough vacuuming to remove loose dirt and debris', descriptionAr: 'شفط شامل لإزالة الأوساخ والحطام السائب' },
      { step: 3, title: 'Treatment', titleAr: 'المعالجة', description: 'Application of cleaning solutions and stain treatments', descriptionAr: 'تطبيق محاليل التنظيف وعلاجات البقع' },
      { step: 4, title: 'Extraction & Drying', titleAr: 'الاستخراج والتجفيف', description: 'Hot water extraction and professional drying techniques', descriptionAr: 'استخراج الماء الساخن وتقنيات التجفيف المهنية' }
    ],
    pricing: [
      { type: 'Small Room (up to 200 sq ft)', typeAr: 'غرفة صغيرة (حتى 200 قدم مربع)', price: 'AED 200', features: ['Deep cleaning', 'Stain treatment', 'Deodorizing'] },
      { type: 'Medium Room (200-400 sq ft)', typeAr: 'غرفة متوسطة (200-400 قدم مربع)', price: 'AED 350', features: ['Deep cleaning', 'Stain removal', 'Sanitization', 'Protection'], popular: true },
      { type: 'Large Room (400+ sq ft)', typeAr: 'غرفة كبيرة (400+ قدم مربع)', price: 'AED 500', features: ['Complete cleaning', 'Advanced treatment', 'Full sanitization', 'Carpet protection'] }
    ]
  },

  'mattress-cleaning': {
    title: 'Professional Mattress Cleaning Services',
    titleAr: 'خدمات تنظيف المراتب المهنية',
    category: 'Cleaning',
    categoryAr: 'التنظيف',
    heroIcon: '🛏️',
    description: 'Deep mattress cleaning services to eliminate dust mites, allergens, and stains for a healthier sleep environment.',
    descriptionAr: 'خدمات تنظيف المراتب العميقة للقضاء على عث الغبار والمواد المسببة للحساسية والبقع لبيئة نوم أكثر صحة.',
    features: [
      { icon: '🦠', title: 'Dust Mite Elimination', titleAr: 'القضاء على عث الغبار', description: 'Removes dust mites and their allergens for better sleep quality', descriptionAr: 'يزيل عث الغبار والمواد المسببة للحساسية لجودة نوم أفضل' },
      { icon: '🌡️', title: 'UV Sanitization', titleAr: 'التعقيم بالأشعة فوق البنفسجية', description: 'UV light treatment kills bacteria and viruses effectively', descriptionAr: 'علاج الأشعة فوق البنفسجية يقتل البكتيريا والفيروسات بفعالية' },
      { icon: '💧', title: 'Stain & Odor Removal', titleAr: 'إزالة البقع والروائح', description: 'Specialized treatment for sweat stains, spills, and odors', descriptionAr: 'علاج متخصص لبقع العرق والانسكابات والروائح' },
      { icon: '🌬️', title: 'Anti-Allergen Treatment', titleAr: 'علاج مضاد للحساسية', description: 'Application of anti-allergen solutions for sensitive individuals', descriptionAr: 'تطبيق محاليل مضادة للحساسية للأشخاص الحساسين' }
    ],
    process: [
      { step: 1, title: 'Mattress Assessment', titleAr: 'تقييم المرتبة', description: 'Inspection for stains, odors, and overall condition', descriptionAr: 'فحص البقع والروائح والحالة العامة' },
      { step: 2, title: 'Vacuuming', titleAr: 'الشفط', description: 'Deep vacuuming to remove surface dirt and debris', descriptionAr: 'شفط عميق لإزالة الأوساخ والحطام السطحي' },
      { step: 3, title: 'Steam Cleaning', titleAr: 'التنظيف بالبخار', description: 'High-temperature steam cleaning for deep sanitization', descriptionAr: 'تنظيف بالبخار عالي الحرارة للتعقيم العميق' },
      { step: 4, title: 'UV Treatment & Drying', titleAr: 'علاج الأشعة فوق البنفسجية والتجفيف', description: 'UV sanitization and professional drying process', descriptionAr: 'تعقيم بالأشعة فوق البنفسجية وعملية تجفيف مهنية' }
    ],
    pricing: [
      { type: 'Single Mattress', typeAr: 'مرتبة مفردة', price: 'AED 180', features: ['Deep cleaning', 'Dust mite removal', 'Basic sanitization'] },
      { type: 'Double/Queen Mattress', typeAr: 'مرتبة مزدوجة/كوين', price: 'AED 250', features: ['Complete cleaning', 'UV treatment', 'Stain removal', 'Anti-allergen'], popular: true },
      { type: 'King Size Mattress', typeAr: 'مرتبة كينج سايز', price: 'AED 320', features: ['Premium cleaning', 'Full sanitization', 'Odor elimination', 'Protection treatment'] }
    ]
  },

  // MARBLE SERVICES
  'marble-polishing': {
    title: 'Professional Marble Polishing & Restoration',
    titleAr: 'تلميع وترميم الرخام المهني',
    category: 'Marble',
    categoryAr: 'الرخام',
    heroIcon: '✨',
    description: 'Expert marble polishing and restoration services to bring back the natural shine and beauty of your marble surfaces.',
    descriptionAr: 'خدمات تلميع وترميم الرخام المتخصصة لإعادة اللمعان والجمال الطبيعي لأسطح الرخام الخاصة بك.',
    features: [
      { icon: '💎', title: 'Diamond Polishing', titleAr: 'التلميع بالماس', description: 'Professional diamond pad polishing for mirror-like finish', descriptionAr: 'تلميع احترافي بوسائد الماس للحصول على لمسة نهائية تشبه المرآة' },
      { icon: '🔧', title: 'Crack Repair', titleAr: 'إصلاح الشقوق', description: 'Expert repair of cracks and chips in marble surfaces', descriptionAr: 'إصلاح متخصص للشقوق والرقائق في أسطح الرخام' },
      { icon: '🛡️', title: 'Sealing & Protection', titleAr: 'الختم والحماية', description: 'Application of protective sealers to prevent future damage', descriptionAr: 'تطبيق مواد مانعة للتسرب الواقية لمنع الأضرار المستقبلية' },
      { icon: '🎨', title: 'Color Restoration', titleAr: 'استعادة اللون', description: 'Restoration of original marble color and patterns', descriptionAr: 'استعادة لون وأنماط الرخام الأصلية' }
    ],
    process: [
      { step: 1, title: 'Surface Assessment', titleAr: 'تقييم السطح', description: 'Detailed inspection of marble condition and damage assessment', descriptionAr: 'فحص مفصل لحالة الرخام وتقييم الأضرار' },
      { step: 2, title: 'Grinding & Honing', titleAr: 'الطحن والصقل', description: 'Removal of scratches and surface imperfections', descriptionAr: 'إزالة الخدوش وعيوب السطح' },
      { step: 3, title: 'Polishing', titleAr: 'التلميع', description: 'Multi-stage polishing process for high-gloss finish', descriptionAr: 'عملية تلميع متعددة المراحل للحصول على لمسة نهائية عالية اللمعان' },
      { step: 4, title: 'Sealing & Protection', titleAr: 'الختم والحماية', description: 'Application of protective coating and final inspection', descriptionAr: 'تطبيق طلاء واقي وفحص نهائي' }
    ],
    pricing: [
      { type: 'Basic Polishing (per sq m)', typeAr: 'تلميع أساسي (لكل متر مربع)', price: 'AED 25', features: ['Surface cleaning', 'Basic polishing', 'Light scratch removal'] },
      { type: 'Premium Restoration (per sq m)', typeAr: 'ترميم متميز (لكل متر مربع)', price: 'AED 45', features: ['Deep restoration', 'Crack repair', 'High-gloss polish', 'Sealing'], popular: true },
      { type: 'Complete Renovation (per sq m)', typeAr: 'تجديد كامل (لكل متر مربع)', price: 'AED 65', features: ['Full restoration', 'Color matching', 'Premium sealing', 'Long-term warranty'] }
    ]
  },

  // PEST CONTROL SERVICES
  'cockroach-control': {
    title: 'Professional Cockroach Control Services',
    titleAr: 'خدمات مكافحة الصراصير المهنية',
    category: 'Pest Control',
    categoryAr: 'مكافحة الآفات',
    heroIcon: '🪳',
    description: 'Effective cockroach elimination and prevention services using safe, proven methods to protect your property.',
    descriptionAr: 'خدمات فعالة للقضاء على الصراصير ومنعها باستخدام طرق آمنة ومثبتة لحماية ممتلكاتك.',
    features: [
      { icon: '🎯', title: 'Targeted Treatment', titleAr: 'علاج مستهدف', description: 'Precise application of treatments in cockroach hiding spots', descriptionAr: 'تطبيق دقيق للعلاجات في أماكن اختباء الصراصير' },
      { icon: '🛡️', title: 'Safe Methods', titleAr: 'طرق آمنة', description: 'Child and pet-safe pest control solutions', descriptionAr: 'حلول مكافحة الآفات الآمنة للأطفال والحيوانات الأليفة' },
      { icon: '🔄', title: 'Long-lasting Results', titleAr: 'نتائج طويلة المدى', description: 'Extended protection with residual effect treatments', descriptionAr: 'حماية ممتدة مع علاجات ذات تأثير متبقي' },
      { icon: '📊', title: 'Monitoring System', titleAr: 'نظام المراقبة', description: 'Regular monitoring and follow-up treatments as needed', descriptionAr: 'مراقبة منتظمة وعلاجات متابعة حسب الحاجة' }
    ],
    process: [
      { step: 1, title: 'Inspection & Assessment', titleAr: 'الفحص والتقييم', description: 'Thorough inspection to identify infestation level and entry points', descriptionAr: 'فحص شامل لتحديد مستوى الإصابة ونقاط الدخول' },
      { step: 2, title: 'Treatment Plan', titleAr: 'خطة العلاج', description: 'Customized treatment strategy based on infestation severity', descriptionAr: 'استراتيجية علاج مخصصة بناءً على شدة الإصابة' },
      { step: 3, title: 'Application', titleAr: 'التطبيق', description: 'Professional application of pest control treatments', descriptionAr: 'تطبيق احترافي لعلاجات مكافحة الآفات' },
      { step: 4, title: 'Follow-up & Prevention', titleAr: 'المتابعة والوقاية', description: 'Regular monitoring and preventive measures', descriptionAr: 'مراقبة منتظمة وتدابير وقائية' }
    ],
    pricing: [
      { type: 'Single Treatment', typeAr: 'علاج واحد', price: 'AED 300', features: ['Initial inspection', 'One-time treatment', 'Basic warranty'] },
      { type: 'Quarterly Package', typeAr: 'باقة ربع سنوية', price: 'AED 800', features: ['4 treatments per year', 'Regular monitoring', 'Extended warranty'], popular: true },
      { type: 'Annual Contract', typeAr: 'عقد سنوي', price: 'AED 1200', features: ['Monthly monitoring', 'Unlimited treatments', 'Full guarantee', 'Emergency service'] }
    ]
  },

  // CAR SERVICES
  'car-interior-detailing': {
    title: 'Professional Car Interior Detailing',
    titleAr: 'تفصيل داخلي احترافي للسيارة',
    category: 'Car',
    categoryAr: 'السيارات',
    heroIcon: '🚗',
    description: 'Complete car interior detailing services including deep cleaning, leather treatment, and fabric protection.',
    descriptionAr: 'خدمات تفصيل داخلي كاملة للسيارة تشمل التنظيف العميق وعلاج الجلد وحماية الأقمشة.',
    features: [
      { icon: '🧽', title: 'Deep Cleaning', titleAr: 'تنظيف عميق', description: 'Thorough cleaning of all interior surfaces and components', descriptionAr: 'تنظيف شامل لجميع الأسطح والمكونات الداخلية' },
      { icon: '🪑', title: 'Leather Care', titleAr: 'العناية بالجلد', description: 'Professional leather cleaning, conditioning, and protection', descriptionAr: 'تنظيف وترطيب وحماية الجلد بشكل احترافي' },
      { icon: '🌟', title: 'Stain Removal', titleAr: 'إزالة البقع', description: 'Specialized treatment for stubborn stains and spills', descriptionAr: 'علاج متخصص للبقع العنيدة والانسكابات' },
      { icon: '💨', title: 'Odor Elimination', titleAr: 'إزالة الروائح', description: 'Complete removal of smoke, food, and other odors', descriptionAr: 'إزالة كاملة لروائح الدخان والطعام والروائح الأخرى' }
    ],
    process: [
      { step: 1, title: 'Pre-Inspection', titleAr: 'الفحص المسبق', description: 'Assessment of interior condition and specific cleaning needs', descriptionAr: 'تقييم الحالة الداخلية واحتياجات التنظيف المحددة' },
      { step: 2, title: 'Vacuuming & Preparation', titleAr: 'الشفط والتحضير', description: 'Thorough vacuuming and removal of personal items', descriptionAr: 'شفط شامل وإزالة الأغراض الشخصية' },
      { step: 3, title: 'Deep Cleaning', titleAr: 'التنظيف العميق', description: 'Detailed cleaning of all surfaces, seats, and components', descriptionAr: 'تنظيف مفصل لجميع الأسطح والمقاعد والمكونات' },
      { step: 4, title: 'Protection & Finishing', titleAr: 'الحماية واللمسة الأخيرة', description: 'Application of protectants and final quality check', descriptionAr: 'تطبيق المواد الواقية والفحص النهائي للجودة' }
    ],
    pricing: [
      { type: 'Basic Interior Clean', typeAr: 'تنظيف داخلي أساسي', price: 'AED 200', features: ['Vacuuming', 'Surface cleaning', 'Basic protection'] },
      { type: 'Premium Detailing', typeAr: 'تفصيل متميز', price: 'AED 400', features: ['Deep cleaning', 'Leather treatment', 'Stain removal', 'Odor elimination'], popular: true },
      { type: 'Luxury Treatment', typeAr: 'علاج فاخر', price: 'AED 600', features: ['Complete restoration', 'Premium products', 'Extended protection', 'Ceramic coating'] }
    ]
  },

  // COMMERCIAL & RESIDENTIAL CLEANING
  'commercial-cleaning': {
    title: 'Professional Commercial Cleaning Services',
    titleAr: 'خدمات التنظيف التجاري المهنية',
    category: 'Commercial & Residential',
    categoryAr: 'التنظيف التجاري والسكني',
    heroIcon: '🏢',
    description: 'Comprehensive commercial cleaning services for offices, retail spaces, and business facilities of all sizes.',
    descriptionAr: 'خدمات تنظيف تجارية شاملة للمكاتب والمساحات التجارية والمرافق التجارية من جميع الأحجام.',
    features: [
      { icon: '🕐', title: 'Flexible Scheduling', titleAr: 'جدولة مرنة', description: 'Cleaning services scheduled around your business hours', descriptionAr: 'خدمات التنظيف مجدولة حول ساعات عملك' },
      { icon: '🧹', title: 'Comprehensive Cleaning', titleAr: 'تنظيف شامل', description: 'Complete cleaning of all areas including offices, restrooms, and common areas', descriptionAr: 'تنظيف كامل لجميع المناطق بما في ذلك المكاتب ودورات المياه والمناطق المشتركة' },
      { icon: '🦠', title: 'Sanitization', titleAr: 'التعقيم', description: 'Professional sanitization and disinfection services', descriptionAr: 'خدمات التعقيم والتطهير المهنية' },
      { icon: '✅', title: 'Quality Assurance', titleAr: 'ضمان الجودة', description: 'Regular quality checks and customer satisfaction monitoring', descriptionAr: 'فحوصات جودة منتظمة ومراقبة رضا العملاء' }
    ],
    process: [
      { step: 1, title: 'Site Assessment', titleAr: 'تقييم الموقع', description: 'Evaluation of facility size, cleaning requirements, and scheduling needs', descriptionAr: 'تقييم حجم المرفق ومتطلبات التنظيف واحتياجات الجدولة' },
      { step: 2, title: 'Custom Plan', titleAr: 'خطة مخصصة', description: 'Development of tailored cleaning plan and schedule', descriptionAr: 'تطوير خطة وجدولة تنظيف مخصصة' },
      { step: 3, title: 'Implementation', titleAr: 'التنفيذ', description: 'Professional cleaning service delivery by trained staff', descriptionAr: 'تقديم خدمة تنظيف احترافية من قبل موظفين مدربين' },
      { step: 4, title: 'Quality Control', titleAr: 'مراقبة الجودة', description: 'Regular inspections and performance monitoring', descriptionAr: 'فحوصات منتظمة ومراقبة الأداء' }
    ],
    pricing: [
      { type: 'Small Office (up to 2000 sq ft)', typeAr: 'مكتب صغير (حتى 2000 قدم مربع)', price: 'AED 800/month', features: ['Daily cleaning', 'Restroom maintenance', 'Trash removal'] },
      { type: 'Medium Office (2000-5000 sq ft)', typeAr: 'مكتب متوسط (2000-5000 قدم مربع)', price: 'AED 1500/month', features: ['Comprehensive cleaning', 'Sanitization', 'Window cleaning', 'Floor care'], popular: true },
      { type: 'Large Facility (5000+ sq ft)', typeAr: 'مرفق كبير (5000+ قدم مربع)', price: 'Custom Quote', features: ['Full facility management', 'Specialized cleaning', '24/7 support', 'Custom schedule'] }
    ]
  }
};

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const service = servicesData[params.service];
  
  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The requested service page could not be found.'
    };
  }

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: `${service.title} | FabTech`,
      description: service.description,
    },
  };
}

// Generate static params for all services
export async function generateStaticParams() {
  return Object.keys(servicesData).map((service) => ({
    service: service,
  }));
}

export default function ServicePage({ params }) {
  const service = servicesData[params.service];

  if (!service) {
    notFound();
  }

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {service.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                {service.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Book Now
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
                  Get Quote
                </button>
              </div>
            </div>
            <div className="text-center">
              <div className="text-9xl">{service.heroIcon}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our {service.category} Service?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use advanced techniques and premium products to ensure 
              exceptional results for your {service.category.toLowerCase()} needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure thorough service 
              and optimal results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No hidden costs. Fair pricing based on service requirements and complexity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.pricing.map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg p-6 shadow-lg text-center ${plan.popular ? 'border-2 border-blue-600 relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{plan.type}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">{plan.price}</div>
                <ul className="space-y-2 text-gray-600 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors duration-200">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience Professional {service.category}?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Book our professional {service.category.toLowerCase()} service today and enjoy 
            exceptional results with our expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Book Service Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Call (555) 123-4567
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
