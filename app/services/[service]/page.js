import HomeFAQ from '@/app/components/HomeFAQ';
import ServiceHeroImage from '@/app/components/ServiceHeroImage';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Service data structure
const servicesData = {
  'residential-deep-cleaning': {
    title: 'Residential Deep Cleaning',
    titleAr: 'التنظيف العميق للمنازل',
    category: 'Residential',
    categoryAr: 'السكني',
    heroImage: 'https://res.cloudinary.com/diunkrydn/image/upload/v1760529483/professional-cleaning-service-person-using-steam-cleaner-office_1_tfno1o.jpg',
    description: 'Thorough, top-to-bottom deep cleaning for homes and apartments, focusing on neglected areas.',
    descriptionAr: 'تنظيف عميق شامل للمنازل والشقق، مع التركيز على المناطق المهملة.',
    features: [
      { icon: '🌟', title: 'Detailed Clean', titleAr: 'تنظيف مفصل', description: 'Focus on baseboards, inside cabinets, and hard-to-reach spots', descriptionAr: 'التركيز على الألواح الجدارية، داخل الخزائن، والأماكن التي يصعب الوصول إليها' },
      { icon: '🧼', title: 'Kitchen & Bath Scrub', titleAr: 'تنظيف المطابخ والحمامات', description: 'Deep scrubbing and sanitization of kitchens and bathrooms', descriptionAr: 'تنظيف وتعقيم عميق للمطابخ والحمامات' },
      { icon: '🌬️', title: 'Air Quality', titleAr: 'جودة الهواء', description: 'Dusting and vent cleaning to improve indoor air quality', descriptionAr: 'إزالة الغبار وتنظيف فتحات التهوية لتحسين جودة الهواء الداخلي' },
      { icon: '🪟', title: 'Interior Windows', titleAr: 'النوافذ الداخلية', description: 'Cleaning of interior window glass and frames', descriptionAr: 'تنظيف الزجاج والإطارات الداخلية للنوافذ' }
    ],
    process: [
      { step: 1, title: 'Assessment', titleAr: 'التقييم', description: 'Determine scope and areas of focus', descriptionAr: 'تحديد النطاق ومناطق التركيز' },
      { step: 2, title: 'Pre-Treatment', titleAr: 'المعالجة المسبقة', description: 'Apply deep cleaning agents to soiled areas', descriptionAr: 'وضع مواد التنظيف العميق على المناطق المتسخة' },
      { step: 3, title: 'Deep Clean', titleAr: 'التنظيف العميق', description: 'Systematic cleaning of all surfaces and fixtures', descriptionAr: 'تنظيف منهجي لجميع الأسطح والتركيبات' },
      { step: 4, title: 'Client Walkthrough', titleAr: 'جولة مع العميل', description: 'Final inspection and client approval', descriptionAr: 'الفحص النهائي وموافقة العميل' }
    ],
    pricing: [
      { type: 'Studio/1 Bedroom', typeAr: 'استوديو/غرفة نوم واحدة', price: 'QAR 350', features: ['4-6 hours service', 'All chemicals included'] },
      { type: '2 Bedroom', typeAr: 'غرفتا نوم', price: 'QAR 500', features: ['6-8 hours service', 'Inside fridge/oven included'], popular: true },
      { type: 'Villa/Large House', typeAr: 'فيلا/منزل كبير', price: 'Custom Quote', features: ['Team of cleaners', 'Specialized equipment', 'Full day service'] }
    ],
    faqs: [
      {
        question: 'What is the difference between a residential deep cleaning and a commercial deep cleaning?',
        answer: 'A residential deep cleaning is a thorough cleaning of a home or apartment, focusing on neglected areas. A commercial deep cleaning is a thorough cleaning of a commercial property, focusing on neglected areas.'
      }, 
      {
        question: 'What is the difference between a residential deep cleaning and a commercial deep cleaning?',
        answer: 'A residential deep cleaning is a thorough cleaning of a home or apartment, focusing on neglected areas. A commercial deep cleaning is a thorough cleaning of a commercial property, focusing on neglected areas.'
      },
      {
        question: 'What is the difference between a residential deep cleaning and a commercial deep cleaning?',
        answer: 'A residential deep cleaning is a thorough cleaning of a home or apartment, focusing on neglected areas. A commercial deep cleaning is a thorough cleaning of a commercial property, focusing on neglected areas.'
      }
    ]
  },
  'commercial-deep-cleaning': {
    title: 'Commercial Deep Cleaning Services',
    titleAr: 'خدمات التنظيف العميق التجاري',
    category: 'Commercial',
    categoryAr: 'التجاري',
    heroImage: 'https://res.cloudinary.com/diunkrydn/image/upload/v1753270157/commercial-cleaning_hero.jpg',
    description: 'Intensive deep cleaning for commercial kitchens, industrial facilities, and large offices.',
    descriptionAr: 'تنظيف عميق مكثف للمطابخ التجارية والمرافق الصناعية والمكاتب الكبيرة.',
    features: [
      { icon: '⚙️', title: 'Heavy Duty', titleAr: 'تنظيف للأماكن الصناعية', description: 'Specialized equipment for industrial-grade dirt and grime', descriptionAr: 'معدات متخصصة للأوساخ والأتربة الصناعية' },
      { icon: '🔪', title: 'Kitchen Exhaust', titleAr: 'شفاطات المطبخ', description: 'Deep cleaning of commercial kitchen hoods and exhausts', descriptionAr: 'تنظيف عميق لأغطية وشفاطات المطابخ التجارية' },
      { icon: '📐', title: 'Floor Restoration', titleAr: 'تجديد الأرضيات', description: 'Stripping, waxing, and polishing of commercial flooring', descriptionAr: 'تجريد وتشميع وتلميع الأرضيات التجارية' },
      { icon: '🚨', title: 'Safety Compliance', titleAr: 'الامتثال للسلامة', description: 'Adherence to HACCP and local authority hygiene standards', descriptionAr: 'الالتزام بمعايير النظافة HACCP والسلطات المحلية' }
    ],
    process: [
      { step: 1, title: 'Hazard Assessment', titleAr: 'تقييم المخاطر', description: 'Identify and mitigate risks in the workspace', descriptionAr: 'تحديد وتخفيف المخاطر في مكان العمل' },
      { step: 2, title: 'Chemical Application', titleAr: 'تطبيق المواد الكيميائية', description: 'Use of industrial-strength, safe cleaning chemicals', descriptionAr: 'استخدام مواد تنظيف صناعية قوية وآمنة' },
      { step: 3, title: 'High-Pressure Cleaning', titleAr: 'تنظيف بالضغط العالي', description: 'Use of steam and pressure washers for deep penetration', descriptionAr: 'استخدام البخار وغسالات الضغط للتغلغل العميق' },
      { step: 4, title: 'Hygiene Certification', titleAr: 'شهادة النظافة', description: 'Post-service hygiene certificate and report', descriptionAr: 'تقرير وشهادة النظافة بعد الخدمة' }
    ],
    pricing: [
      { type: 'Retail Store', typeAr: 'متجر بيع بالتجزئة', price: 'QAR 1200+', features: ['Quarterly service', 'Window cleaning'] },
      { type: 'Restaurant Kitchen', typeAr: 'مطبخ مطعم', price: 'QAR 2500+', features: ['Monthly/Bi-annual service', 'Hood cleaning included'], popular: true },
      { type: 'Warehouse/Factory', typeAr: 'مستودع/مصنع', price: 'Custom Quote', features: ['Large scale machinery cleaning', 'Oil stain removal', 'Safety compliance'] }
    ],
    faqs: [
      {
        question: 'What is the difference between a residential deep cleaning and a commercial deep cleaning?',
        answer: 'A residential deep cleaning is a thorough cleaning of a home or apartment, focusing on neglected areas. A commercial deep cleaning is a thorough cleaning of a commercial property, focusing on neglected areas.'
      }
    ]
  },
  'general-cleaning': {
    title: 'General Cleaning & Maid Services',
    titleAr: 'خدمات التنظيف العامة والعمالة المنزلية',
    category: 'Commercial & Residential',
    categoryAr: 'التجاري والسكني',
    heroImage: 'https://res.cloudinary.com/diunkrydn/image/upload/v1753270157/general-cleaning_hero.jpg',
    description: 'Routine and recurring general cleaning services for homes and small businesses.',
    descriptionAr: 'خدمات تنظيف عامة روتينية ومتكررة للمنازل والشركات الصغيرة.',
    features: [
      { icon: '🗓️', title: 'Hourly Booking', titleAr: 'الحجز بالساعة', description: 'Flexible booking for a few hours of cleaning assistance', descriptionAr: 'حجز مرن لبضع ساعات من المساعدة في التنظيف' },
      { icon: '🪣', title: 'Standard Tasks', titleAr: 'المهام القياسية', description: 'Dusting, sweeping, mopping, and basic tidying', descriptionAr: 'إزالة الغبار، الكنس، المسح، والترتيب الأساسي' },
      { icon: '🧑‍💼', title: 'Trained Maids', titleAr: 'عاملات مدربات', description: 'Professional and reliable cleaning staff', descriptionAr: 'طاقم تنظيف محترف وموثوق' },
      { icon: '🧺', title: 'Light Laundry/Ironing', titleAr: 'غسيل/كي خفيف', description: 'Assistance with basic laundry and ironing upon request', descriptionAr: 'المساعدة في الغسيل والكي الأساسي عند الطلب' }
    ],
    process: [
      { step: 1, title: 'Booking', titleAr: 'الحجز', description: 'Select time, duration, and service location', descriptionAr: 'اختيار الوقت والمدة وموقع الخدمة' },
      { step: 2, title: 'Arrival', titleAr: 'الوصول', description: 'Cleaner arrives with necessary basic supplies', descriptionAr: 'وصول عامل التنظيف مع اللوازم الأساسية الضرورية' },
      { step: 3, title: 'Service Delivery', titleAr: 'تقديم الخدمة', description: 'Execution of agreed-upon cleaning tasks', descriptionAr: 'تنفيذ مهام التنظيف المتفق عليها' },
      { step: 4, title: 'Feedback', titleAr: 'الملاحظات', description: 'Quick check and feedback collection', descriptionAr: 'فحص سريع وجمع الملاحظات' }
    ],
    pricing: [
      { type: '2-hour Session', typeAr: 'جلسة ساعتين', price: 'QAR 70/hour', features: ['Quick clean', 'Focus on 1-2 areas'] },
      { type: '4-hour Session', typeAr: 'جلسة 4 ساعات', price: 'QAR 65/hour', features: ['Standard home clean', 'All rooms covered'], popular: true },
      { type: 'Full Day/Contract', typeAr: 'يوم كامل/عقد', price: 'Custom Quote', features: ['Discounted rates', 'Dedicated cleaner', 'Weekly/Bi-weekly schedule'] }
    ]
  },
  'cleaner-supply-commercial': {
    title: 'Commercial Cleaner Staffing & Supply',
    titleAr: 'توريد وتوظيف عمال النظافة التجاريين',
    category: 'Commercial',
    categoryAr: 'التجاري',
    heroImage: 'https://res.cloudinary.com/diunkrydn/image/upload/v1753270157/cleaner-supply-commercial_hero.jpg',
    description: 'Outsourcing and supply of dedicated, vetted cleaning staff for long-term commercial contracts.',
    descriptionAr: 'استعانة بمصادر خارجية وتوريد موظفي نظافة متخصصين وموثوقين للعقود التجارية طويلة الأجل.',
    features: [
      { icon: '📜', title: 'Vetted Staff', titleAr: 'موظفون موثوقون', description: 'Fully legal, insured, and background-checked personnel', descriptionAr: 'موظفين قانونيين ومؤمن عليهم ومفحوصين أمنياً بالكامل' },
      { icon: '🔄', title: 'Flexible Contracts', titleAr: 'عقود مرنة', description: 'Full-time, part-time, and shift-based deployment', descriptionAr: 'توظيف بدوام كامل، جزئي، وقائم على النوبات' },
      { icon: '🧑‍🎓', title: 'Trained Professionals', titleAr: 'محترفون مدربون', description: 'Staff trained in commercial hygiene and safety protocols', descriptionAr: 'موظفون مدربون على بروتوكولات النظافة والسلامة التجارية' },
      { icon: '⚕️', title: 'Medical Coverage', titleAr: 'تغطية طبية', description: 'We provide full medical and visa sponsorship', descriptionAr: 'نحن نقدم الكفالة الطبية والتأشيرة بالكامل' }
    ],
    process: [
      { step: 1, title: 'Requirement Analysis', titleAr: 'تحليل المتطلبات', description: 'Understand staffing needs, skills, and shift timings', descriptionAr: 'فهم احتياجات التوظيف والمهارات وتوقيتات المناوبة' },
      { step: 2, title: 'Candidate Selection', titleAr: 'اختيار المرشحين', description: 'Screening and shortlisting of qualified cleaners', descriptionAr: 'فرز واختيار المرشحين المؤهلين' },
      { step: 3, title: 'Deployment', titleAr: 'التوزيع', description: 'On-site placement of staff with necessary equipment', descriptionAr: 'توزيع الموظفين في الموقع مع المعدات الضرورية' },
      { step: 4, title: 'Management', titleAr: 'الإدارة', description: 'Ongoing management, payroll, and performance monitoring', descriptionAr: 'الإدارة المستمرة، كشوف المرتبات، ومراقبة الأداء' }
    ],
    pricing: [
      { type: 'Single Cleaner (Full-time)', typeAr: 'عامل نظافة واحد (دوام كامل)', price: 'QAR 3500/month', features: ['8 hours/day', '6 days/week', 'Client supervision'] },
      { type: 'Team of Cleaners', typeAr: 'فريق من عمال النظافة', price: 'QAR 12,000+/month', features: ['Dedicated supervisor', 'Shift coverage', 'All amenities covered'], popular: true },
      { type: 'Specialist Staff', typeAr: 'موظفون متخصصون', price: 'Custom Quote', features: ['Hygiene/technical cleaning focus', 'Special certification required'] }
    ]
  },
  'cleaner-supply-residential': {
    title: 'Residential Cleaner Supply (Live-out)',
    titleAr: 'توريد عمال النظافة السكنيين (غير مقيمين)',
    category: 'Residential',
    categoryAr: 'السكني',
    heroImage: 'https://res.cloudinary.com/diunkrydn/image/upload/v1753270157/cleaner-supply-residential_hero.jpg',
    description: 'Long-term supply of live-out domestic helpers/maids for residential clients on contract.',
    descriptionAr: 'توريد طويل الأجل لعاملات منازل غير مقيمات/مساعدات للمنازل للعملاء بعقود.',
    features: [
      { icon: '🤝', title: 'Contract Basis', titleAr: 'أساس تعاقدي', description: 'Long-term agreement for regular, dedicated service', descriptionAr: 'اتفاق طويل الأجل لخدمة مخصصة ومنتظمة' },
      { icon: '🛡️', title: 'Sponsorship Included', titleAr: 'الكفالة مشمولة', description: 'We handle visa, insurance, and medical requirements', descriptionAr: 'نتولى أمور التأشيرة والتأمين والمتطلبات الطبية' },
      { icon: '🏠', title: 'Daily/Weekly Service', titleAr: 'خدمة يومية/أسبوعية', description: 'Fixed schedule tailored to family needs', descriptionAr: 'جدول ثابت مصمم حسب احتياجات العائلة' },
      { icon: '🗣️', title: 'Language Match', titleAr: 'مطابقة اللغة', description: 'Attempt to match helpers based on language preference (English/Arabic/Other)', descriptionAr: 'محاولة مطابقة المساعدات بناءً على تفضيل اللغة (الإنجليزية/العربية/أخرى)' }
    ],
    process: [
      { step: 1, title: 'Family Interview', titleAr: 'مقابلة العائلة', description: 'Understand family routine and specific needs', descriptionAr: 'فهم الروتين العائلي والاحتياجات المحددة' },
      { step: 2, title: 'Helper Matching', titleAr: 'مطابقة المساعدة', description: 'Select suitable helper based on experience and language', descriptionAr: 'اختيار المساعدة المناسبة بناءً على الخبرة واللغة' },
      { step: 3, title: 'Contract Finalization', titleAr: 'إنهاء العقد', description: 'Formalize agreement, payment, and terms of service', descriptionAr: 'إضفاء الطابع الرسمي على الاتفاق والدفع وشروط الخدمة' },
      { step: 4, title: 'Onboarding', titleAr: 'الترحيب والبدء', description: 'Introduction to the household and service commencement', descriptionAr: 'التعريف بالمنزل وبدء الخدمة' }
    ],
    pricing: [
      { type: 'Part-Time Live-out', typeAr: 'دوام جزئي غير مقيمة', price: 'QAR 2500/month', features: ['4 hours/day', '5 days/week', 'Basic house help'] },
      { type: 'Full-Time Live-out', typeAr: 'دوام كامل غير مقيمة', price: 'QAR 4000/month', features: ['8 hours/day', '6 days/week', 'All household tasks'], popular: true },
      { type: 'Specialized Nanny/Elder Care', typeAr: 'متخصصة في رعاية الأطفال/كبار السن', price: 'Custom Quote', features: ['Specialized training required', 'Extended hours'] }
    ]
  },
  'sofa-cleaning': {
    title: 'Sofa & Upholstery Cleaning',
    titleAr: 'تنظيف الأرائك والمفروشات',
    category: 'Specialized Cleaning',
    categoryAr: 'التنظيف المتخصص',
    heroImage: 'https://res.cloudinary.com/diunkrydn/image/upload/v1753270157/sofa-cleaning_hero.jpg',
    description: 'Professional deep cleaning and sanitization for sofas, chairs, and all types of upholstery.',
    descriptionAr: 'تنظيف عميق وتعقيم احترافي للأرائك والكراسي وجميع أنواع المفروشات.',
    features: [
      { icon: '💧', title: 'Steam Extraction', titleAr: 'الاستخلاص بالبخار', description: 'Hot water extraction for deep dirt and stain removal', descriptionAr: 'استخلاص بالماء الساخن لإزالة الأوساخ والبقع العميقة' },
      { icon: '🔬', title: 'Fabric Safe', titleAr: 'آمن على الأقمشة', description: 'Use of non-toxic, fabric-specific cleaning solutions', descriptionAr: 'استخدام محاليل تنظيف غير سامة ومخصصة للأقمشة' },
      { icon: '👃', title: 'Odor Removal', titleAr: 'إزالة الروائح', description: 'Elimination of foul odors, including pet smells', descriptionAr: 'إزالة الروائح الكريهة، بما في ذلك روائح الحيوانات الأليفة' },
      { icon: '💨', title: 'Fast Drying', titleAr: 'تجفيف سريع', description: 'Use of powerful air movers to reduce drying time significantly', descriptionAr: 'استخدام منفاخ هواء قوي لتقليل وقت التجفيف بشكل كبير' }
    ],
    process: [
      { step: 1, title: 'Fabric Test', titleAr: 'اختبار القماش', description: 'Identify fabric type and color fastness', descriptionAr: 'تحديد نوع القماش وثبات اللون' },
      { step: 2, title: 'Pre-Treatment', titleAr: 'المعالجة المسبقة', description: 'Application of stain removers to problem areas', descriptionAr: 'تطبيق مزيلات البقع على المناطق التي تعاني من مشاكل' },
      { step: 3, title: 'Deep Cleaning', titleAr: 'التنظيف العميق', description: 'Full steam or dry cleaning process', descriptionAr: 'عملية تنظيف كاملة بالبخار أو التنظيف الجاف' },
      { step: 4, title: 'Quick Dry', titleAr: 'تجفيف سريع', description: 'Speed up drying time with specialized air movers', descriptionAr: 'تسريع وقت التجفيف باستخدام منفاخ هواء متخصص' }
    ],
    pricing: [
      { type: 'Single Seat/Armchair', typeAr: 'مقعد واحد/كرسي بذراعين', price: 'QAR 80-150', features: ['Spot treatment included'] },
      { type: '3-Seater Sofa', typeAr: 'أريكة 3 مقاعد', price: 'QAR 250-400', features: ['Full extraction cleaning', 'Basic deodorizer'], popular: true },
      { type: 'L-Shape/Set', typeAr: 'أريكة على شكل L/طقم', price: 'Custom Quote', features: ['Full living room set cleaning', 'Anti-dust mite treatment'] }
    ]
  },
  'carpet-cleaning': {
    title: 'Carpet Cleaning Services',
    titleAr: 'خدمات تنظيف السجاد والموكيت',
    category: 'Specialized Cleaning',
    categoryAr: 'التنظيف المتخصص',
    heroImage: 'https://res.cloudinary.com/diunkrydn/image/upload/v1753270157/carpet-cleaning_hero.jpg',
    description: 'Professional cleaning for all types of carpets and rugs, removing dirt, allergens, and stains.',
    descriptionAr: 'تنظيف احترافي لجميع أنواع السجاد والبسط، وإزالة الأوساخ والمواد المسببة للحساسية والبقع.',
    features: [
      { icon: '🦠', title: 'Allergen Removal', titleAr: 'إزالة مسببات الحساسية', description: 'Deep cleaning to remove dust mites and pet dander', descriptionAr: 'تنظيف عميق لإزالة عث الغبار ووبر الحيوانات الأليفة' },
      { icon: '🌈', title: 'Color Restoration', titleAr: 'استعادة الألوان', description: 'Revitalizing carpet fibers for brighter colors', descriptionAr: 'إنعاش ألياف السجاد للحصول على ألوان أكثر إشراقاً' },
      { icon: '🌱', title: 'Eco-Friendly', titleAr: 'صديق للبيئة', description: 'Use of green and non-toxic cleaning agents upon request', descriptionAr: 'استخدام مواد تنظيف خضراء وغير سامة عند الطلب' },
      { icon: '📏', title: 'Area Rug Drop-Off', titleAr: 'تسليم البساط للمغسلة', description: 'Collection and delivery service for delicate area rugs', descriptionAr: 'خدمة جمع وتسليم للبسط الصغيرة والحساسة' }
    ],
    process: [
      { step: 1, title: 'Vacuum & Pre-Spray', titleAr: 'الكنس والرش المسبق', description: 'High-powered vacuuming and pre-treatment application', descriptionAr: 'كنس عالي الطاقة وتطبيق المعالجة المسبقة' },
      { step: 2, title: 'Agitation', titleAr: 'الفرك والتحريك', description: 'Mechanical brushing to loosen embedded soil', descriptionAr: 'فرك ميكانيكي لتفكيك الأوساخ المدمجة' },
      { step: 3, title: 'Rinse & Extract', titleAr: 'الشطف والاستخلاص', description: 'Hot water rinse and powerful extraction of dirt and moisture', descriptionAr: 'شطف بالماء الساخن واستخلاص قوي للأوساخ والرطوبة' },
      { step: 4, title: 'Grooming', titleAr: 'التمشيط والتسريح', description: 'Setting the pile for faster drying and better appearance', descriptionAr: 'تجهيز الوبر لتجفيف أسرع ومظهر أفضل' }
    ],
    pricing: [
      { type: 'Small Area Rug', typeAr: 'بساط منطقة صغيرة', price: 'QAR 50-100', features: ['In-house/drop-off service'] },
      { type: 'Standard Room', typeAr: 'غرفة قياسية', price: 'QAR 150-300', features: ['Full deep cleaning', 'Quick drying'], popular: true },
      { type: 'Full House/Commercial', typeAr: 'منزل كامل/تجاري', price: 'Custom Quote', features: ['Volume discounts', 'Specialized rug handling', 'Stain protection'] }
    ]
  },
  'mattress-cleaning': {
    title: 'Mattress Deep Cleaning & Sanitization',
    titleAr: 'تنظيف وتعقيم المراتب العميق',
    category: 'Specialized Cleaning',
    categoryAr: 'التنظيف المتخصص',
    heroImage: 'https://res.cloudinary.com/diunkrydn/image/upload/v1753270157/mattress-cleaning_hero.jpg',
    description: 'Eliminate dust mites, allergens, dead skin, and stains from your mattress for a healthier sleep.',
    descriptionAr: 'القضاء على عث الغبار ومسببات الحساسية والجلد الميت والبقع من مرتبتك لنوم أكثر صحة.',
    features: [
      { icon: '👾', title: 'Mite Removal', titleAr: 'إزالة العث', description: 'Specialized UV light and vacuum to kill and remove dust mites', descriptionAr: 'ضوء فوق بنفسجي ومكنسة كهربائية متخصصة لقتل وإزالة عث الغبار' },
      { icon: '🛡️', title: 'Sanitization', titleAr: 'التعقيم', description: 'Hospital-grade sanitization to kill bacteria and viruses', descriptionAr: 'تعقيم بدرجة المستشفيات لقتل البكتيريا والفيروسات' },
      { icon: '☀️', title: 'Dry Process', titleAr: 'عملية جافة', description: 'Mostly dry process ensuring minimal downtime', descriptionAr: 'عملية جافة في الغالب تضمن الحد الأدنى من وقت التوقف' },
      { icon: '💧', title: 'Urine & Liquid Stain Removal', titleAr: 'إزالة بقع البول والسوائل', description: 'Targeted enzyme treatments for tough organic stains and odors', descriptionAr: 'معالجات إنزيمية مستهدفة للبقع والروائح العضوية الصعبة' }
    ],
    process: [
      { step: 1, title: 'High-Powered Vacuum', titleAr: 'مكنسة كهربائية عالية الطاقة', description: 'Removing surface debris and embedded dust', descriptionAr: 'إزالة الحطام السطحي والغبار المدمج' },
      { step: 2, title: 'UV Treatment', titleAr: 'معالجة بالأشعة فوق البنفسجية', description: 'Sterilizing the mattress surface', descriptionAr: 'تعقيم سطح المرتبة' },
      { step: 3, title: 'Stain & Odor Treatment', titleAr: 'معالجة البقع والروائح', description: 'Targeting specific stains and deep-set odors', descriptionAr: 'استهداف البقع المحددة والروائح العميقة' },
      { step: 4, title: 'Final Sanitization Spray', titleAr: 'رش التعقيم النهائي', description: 'Application of a residual anti-allergen spray', descriptionAr: 'تطبيق رذاذ مضاد للحساسية ومتبق' }
    ],
    pricing: [
      { type: 'Single Mattress', typeAr: 'مرتبة مفردة', price: 'QAR 150', features: ['Mite removal', 'Basic stain treatment'] },
      { type: 'Queen/King Mattress', typeAr: 'مرتبة كوين/كينج', price: 'QAR 250-350', features: ['Full sanitization', 'Deep stain removal'], popular: true },
      { type: 'Full Bedroom Set', typeAr: 'طقم غرفة نوم كامل', price: 'Custom Quote', features: ['Multi-mattress discount', 'Pillow treatment included'] }
    ]
  },
  'water-tank-cleaning': {
    title: 'Water Tank Cleaning & Disinfection',
    titleAr: 'تنظيف وتعقيم خزانات المياه',
    category: 'Essential Services',
    categoryAr: 'الخدمات الأساسية',
    heroImage: 'https://res.cloudinary.com/diunkrydn/image/upload/v1753270157/water-tank-cleaning_hero.jpg',
    description: 'Professional cleaning and sterilization of residential and commercial water storage tanks.',
    descriptionAr: 'تنظيف وتعقيم احترافي لخزانات تخزين المياه السكنية والتجارية.',
    features: [
      { icon: '🧪', title: 'Chlorination', titleAr: 'المعالجة بالكلور', description: 'Disinfection using approved chemicals and methods', descriptionAr: 'التطهير باستخدام مواد كيميائية وطرق معتمدة' },
      { icon: '✅', title: 'Municipality Standards', titleAr: 'معايير البلدية', description: 'Compliance with local health and safety regulations', descriptionAr: 'الامتثال للوائح الصحة والسلامة المحلية' },
      { icon: '🕳️', title: 'Sludge Removal', titleAr: 'إزالة الحمأة', description: 'Complete removal of sediment, silt, and bacterial build-up', descriptionAr: 'إزالة كاملة للرواسب والطمي والتراكم البكتيري' },
      { icon: '📷', title: 'Pre/Post Photos', titleAr: 'صور قبل/بعد', description: 'Providing visual proof of the tank interior cleanliness', descriptionAr: 'توفير دليل مرئي لنظافة الخزان الداخلية' }
    ],
    process: [
      { step: 1, title: 'Draining', titleAr: 'التفريغ', description: 'Complete draining of the old water', descriptionAr: 'التفريغ الكامل للمياه القديمة' },
      { step: 2, title: 'Scrubbing', titleAr: 'التنظيف بالفرك', description: 'Manual scrubbing of all interior walls and floor', descriptionAr: 'الفرك اليدوي لجميع الجدران الداخلية والأرضية' },
      { step: 3, title: 'High-Pressure Rinse', titleAr: 'الشطف بالضغط العالي', description: 'Rinsing to remove loosened residue', descriptionAr: 'الشطف لإزالة المخلفات المفكوكة' },
      { step: 4, title: 'Disinfection & Refill', titleAr: 'التطهير وإعادة التعبئة', description: 'Application of disinfectant and refilling with fresh water', descriptionAr: 'تطبيق المطهر وإعادة التعبئة بالمياه العذبة' }
    ],
    pricing: [
      { type: 'Small Tank (up to 500 Gal)', typeAr: 'خزان صغير (حتى 500 غالون)', price: 'QAR 400-600', features: ['Single service', 'Chlorination included'] },
      { type: 'Medium Tank (500-1500 Gal)', typeAr: 'خزان متوسط (500-1500 غالون)', price: 'QAR 700-1200', features: ['Full inspection report', 'Deep cleaning'], popular: true },
      { type: 'Large/Commercial Tank', typeAr: 'خزان كبير/تجاري', price: 'Custom Quote', features: ['Multiple tanks', 'Annual maintenance contract', 'Lab testing'] }
    ]
  },
  'majlis-cleaning': {
    title: 'Majlis & Traditional Seating Cleaning',
    titleAr: 'تنظيف المجالس والجلسات التقليدية',
    category: 'Specialized Cleaning',
    categoryAr: 'التنظيف المتخصص',
    heroImage: 'https://res.cloudinary.com/diunkrydn/image/upload/v1753270157/majlis-cleaning_hero.jpg',
    description: 'Expert cleaning and sanitization of traditional Majlis, Arabic seating, and cushions.',
    descriptionAr: 'تنظيف وتعقيم متخصص للمجالس التقليدية والجلسات العربية والوسائد.',
    features: [
      { icon: '✨', title: 'Fabric Brightening', titleAr: 'تفتيح الأقمشة', description: 'Specialized solutions to restore fabric color and texture', descriptionAr: 'محاليل متخصصة لاستعادة لون وملمس القماش' },
      { icon: '👃', title: 'Deep Deodorization', titleAr: 'إزالة الروائح العميقة', description: 'Effective removal of heavy odors from shisha, food, and spills', descriptionAr: 'إزالة فعالة للروائح الثقيلة من الشيشة والطعام والانسكابات' },
      { icon: '🚫', title: 'Stain Spotting', titleAr: 'معالجة البقع', description: 'Targeted treatment for oil, tea, and coffee stains', descriptionAr: 'معالجة مستهدفة لبقع الزيت والشاي والقهوة' },
      { icon: '🕌', title: 'Curtain & Drape Cleaning', titleAr: 'تنظيف الستائر والمفروشات المعلقة', description: 'Cleaning of heavy drapes and curtains in the Majlis area', descriptionAr: 'تنظيف الستائر والمفروشات المعلقة الثقيلة في منطقة المجلس' }
    ],
    process: [
      { step: 1, title: 'Pre-Vacuum', titleAr: 'الكنس المسبق', description: 'Thorough vacuuming of all cushions, pillows, and seating bases', descriptionAr: 'كنس شامل لجميع الوسائد والمقاعد والقواعد' },
      { step: 2, title: 'Spot Treatment', titleAr: 'معالجة البقع', description: 'Applying tailored solutions to stained areas', descriptionAr: 'تطبيق محاليل مخصصة على المناطق الملطخة' },
      { step: 3, title: 'Shampoo & Extract', titleAr: 'الغسيل والاستخلاص', description: 'Deep shampooing with hot water extraction for all upholstery', descriptionAr: 'غسيل عميق مع استخلاص بالماء الساخن لجميع المفروشات' },
      { step: 4, title: 'Drying & Grooming', titleAr: 'التجفيف والترتيب', description: 'Speed drying and fluffing of cushions for immediate use', descriptionAr: 'تجفيف سريع ونفش للوسائد للاستخدام الفوري' }
    ],
    pricing: [
      { type: 'Small Majlis (1 room)', typeAr: 'مجلس صغير (غرفة واحدة)', price: 'QAR 400-700', features: ['Cushions and carpet included'] },
      { type: 'Medium Majlis', typeAr: 'مجلس متوسط', price: 'QAR 800-1200', features: ['Sofa and curtain cleaning options'], popular: true },
      { type: 'Large/Full Floor Majlis', typeAr: 'مجلس كبير/طابق كامل', price: 'Custom Quote', features: ['Volume discount', 'Full room sanitization'] }
    ]
  },
  'marble-polishing': {
    title: 'Marble Floor Polishing & Restoration',
    titleAr: 'تلميع واستعادة أرضيات الرخام',
    category: 'Floor & Surface Care',
    categoryAr: 'العناية بالأرضيات والأسطح',
    heroImage: 'https://res.cloudinary.com/diunkrydn/image/upload/v1753270157/marble-polishing_hero.jpg',
    description: 'Professional grinding, honing, and polishing to restore the shine and beauty of marble floors.',
    descriptionAr: 'صقل وتنعيم وتلميع احترافي لاستعادة لمعان وجمال أرضيات الرخام.',
    features: [
      { icon: '✨', title: 'High Gloss Finish', titleAr: 'لمسة نهائية عالية اللمعان', description: 'Achieving a mirror-like shine through expert polishing', descriptionAr: 'الحصول على لمعان شبيه بالمرآة من خلال التلميع الخبير' },
      { icon: '🔨', title: 'Scratch & Etch Removal', titleAr: 'إزالة الخدوش والحفر', description: 'Grinding away surface damage and deep scratches', descriptionAr: 'طحن وإزالة التلف السطحي والخدوش العميقة' },
      { icon: '🛡️', title: 'Sealing', titleAr: 'الختم والحماية', description: 'Application of a protective sealant to prevent future staining', descriptionAr: 'تطبيق مادة مانعة للتسرب واقية لمنع التبقع في المستقبل' },
      { icon: '🔨', title: 'Grout Line Filling', titleAr: 'ملء خطوط الجص', description: 'Filling and leveling gaps between marble slabs for a seamless look', descriptionAr: 'ملء وتسوية الفجوات بين ألواح الرخام للحصول على مظهر سلس' }
    ],
    process: [
      { step: 1, title: 'Grinding', titleAr: 'الطحن', description: 'Removing the top layer to level the floor and remove deep scratches', descriptionAr: 'إزالة الطبقة العليا لتسوية الأرضية وإزالة الخدوش العميقة' },
      { step: 2, title: 'Honing', titleAr: 'التنعيم', description: 'Smoothing the surface with progressively finer abrasives', descriptionAr: 'تنعيم السطح باستخدام مواد كاشطة أدق تدريجياً' },
      { step: 3, title: 'Polishing', titleAr: 'التلميع', description: 'Using polishing powder and machinery to achieve the desired shine', descriptionAr: 'استخدام مسحوق التلميع والآلات لتحقيق اللمعان المطلوب' },
      { step: 4, title: 'Sealing', titleAr: 'الختم', description: 'Applying a high-quality impregnating sealer', descriptionAr: 'تطبيق مادة مانعة للتسرب عالية الجودة' }
    ],
    pricing: [
      { type: 'Basic Polishing (Light Shine)', typeAr: 'تلميع أساسي (لمعان خفيف)', price: 'QAR 15-20/sqm', features: ['Honing and basic polishing'] },
      { type: 'Full Restoration (High Gloss)', typeAr: 'استعادة كاملة (لمعان عالي)', price: 'QAR 25-40/sqm', features: ['Grinding, honing, and mirror polish'], popular: true },
      { type: 'Sealing & Maintenance', typeAr: 'الختم والصيانة', price: 'Custom Quote', features: ['Annual contract', 'Minor chip repair'] }
    ]
  },
  'granite-polishing': {
    title: 'Granite Polishing & Sealing',
    titleAr: 'تلميع وختم الجرانيت',
    category: 'Floor & Surface Care',
    categoryAr: 'العناية بالأرضيات والأسطح',
    heroImage: 'https://res.cloudinary.com/diunkrydn/image/upload/v1753270157/granite-polishing_hero.jpg',
    description: 'Specialized polishing and sealing for granite floors, countertops, and surfaces.',
    descriptionAr: 'تلميع وختم متخصص لأرضيات وأسطح الجرانيت والمطابخ.',
    features: [
      { icon: '💪', title: 'Hard Surface Treatment', titleAr: 'معالجة الأسطح الصلبة', description: 'Techniques optimized for the hardness of granite', descriptionAr: 'تقنيات مُحسَّنة لصلابة الجرانيت' },
      { icon: '💧', title: 'Stain Protection', titleAr: 'الحماية من البقع', description: 'Application of a penetrating sealer to resist liquids', descriptionAr: 'تطبيق مادة مانعة للتسرب متغلغلة لمقاومة السوائل' },
      { icon: '🚧', title: 'Chip Repair', titleAr: 'إصلاح الشقوق', description: 'Minor crack and chip repair using epoxy resin', descriptionAr: 'إصلاح الشقوق والكسور الصغيرة باستخدام راتنج الإيبوكسي' },
      { icon: '💎', title: 'Clarity Enhancement', titleAr: 'تعزيز الوضوح', description: 'Bringing out the natural depth and color of the granite stone', descriptionAr: 'إظهار العمق واللون الطبيعي لحجر الجرانيت' }
    ],
    process: [
      { step: 1, title: 'Deep Clean', titleAr: 'التنظيف العميق', description: 'Thorough cleaning to remove oil and grime build-up', descriptionAr: 'تنظيف شامل لإزالة تراكم الزيوت والأوساخ' },
      { step: 2, title: 'Grinding (if needed)', titleAr: 'الطحن (إذا لزم الأمر)', description: 'Light grinding for significant scratch removal', descriptionAr: 'طحن خفيف لإزالة الخدوش الكبيرة' },
      { step: 3, title: 'Polishing', titleAr: 'التلميع', description: 'Polishing with diamond pads to enhance natural shine', descriptionAr: 'التلميع باستخدام وسادات الألماس لتعزيز اللمعان الطبيعي' },
      { step: 4, title: 'Sealing', titleAr: 'الختم', description: 'Application of a high-performance granite sealer', descriptionAr: 'تطبيق مادة مانعة للتسرب عالية الأداء للجرانيت' }
    ],
    pricing: [
      { type: 'Countertop Polishing', typeAr: 'تلميع أسطح العمل', price: 'QAR 300+', features: ['Single countertop service'] },
      { type: 'Floor Polishing', typeAr: 'تلميع الأرضيات', price: 'QAR 20-35/sqm', features: ['Full floor treatment', 'Sealing included'], popular: true },
      { type: 'Maintenance Contract', typeAr: 'عقد صيانة', price: 'Custom Quote', features: ['Bi-annual check-up', 'Small repair included'] }
    ]
  },
  'marble-floor-cleaning': {
    title: 'Marble Floor Deep Cleaning (Non-Polishing)',
    titleAr: 'تنظيف أرضيات الرخام العميق (غير التلميع)',
    category: 'Floor & Surface Care',
    categoryAr: 'العناية بالأرضيات والأسطح',
    heroImage: 'https://res.cloudinary.com/diunkrydn/image/upload/v1753270157/marble-floor-cleaning_hero.jpg',
    description: 'Safe and effective deep cleaning for marble floors without the need for full re-polishing.',
    descriptionAr: 'تنظيف عميق آمن وفعال لأرضيات الرخام دون الحاجة إلى إعادة تلميع كاملة.',
    features: [
      { icon: 'pH', title: 'pH Neutral Cleaners', titleAr: 'منظفات محايدة لدرجة الحموضة', description: 'Use of specialized, non-acidic cleaners safe for marble', descriptionAr: 'استخدام منظفات متخصصة وغير حمضية وآمنة للرخام' },
      { icon: '🧹', title: 'Grout Line Cleaning', titleAr: 'تنظيف خطوط الجص', description: 'Detailed cleaning of the grout between marble tiles', descriptionAr: 'تنظيف مفصل للجص بين بلاط الرخام' },
      { icon: '🦠', title: 'Deep Sanitization', titleAr: 'التعقيم العميق', description: 'Sanitizing the surface without damaging the finish', descriptionAr: 'تعقيم السطح دون إتلاف اللمسة النهائية' },
      { icon: '✨', title: 'Restorative Waxing', titleAr: 'تشميع ترميمي', description: 'Optional application of a gentle, non-yellowing wax for subtle shine', descriptionAr: 'تطبيق اختياري لشمع لطيف وغير مصفر للمعان خفيف' }
    ],
    process: [
      { step: 1, title: 'Pre-Wet', titleAr: 'التبليل المسبق', description: 'Preparing the floor surface for cleaning', descriptionAr: 'تحضير سطح الأرضية للتنظيف' },
      { step: 2, title: 'Gentle Scrub', titleAr: 'فرك لطيف', description: 'Mechanical scrubbing with soft pads and neutral cleaner', descriptionAr: 'فرك ميكانيكي بوسادات ناعمة ومنظف محايد' },
      { step: 3, title: 'Wet Vacuum', titleAr: 'مكنسة كهربائية رطبة', description: 'Removing the dirty water and residue completely', descriptionAr: 'إزالة المياه القذرة والمخلفات بالكامل' },
      { step: 4, title: 'Neutral Rinse', titleAr: 'شطف محايد', description: 'Final rinse to ensure no cleaner residue remains', descriptionAr: 'شطف نهائي لضمان عدم بقاء أي بقايا منظف' }
    ],
    pricing: [
      { type: 'Small Area (up to 50 sqm)', typeAr: 'منطقة صغيرة (حتى 50 متر مربع)', price: 'QAR 8/sqm', features: ['Basic clean'] },
      { type: 'Medium Area (50-150 sqm)', typeAr: 'منطقة متوسطة (50-150 متر مربع)', price: 'QAR 10-15/sqm', features: ['Grout cleaning included'], popular: true },
      { type: 'Full Villa/Large Area', typeAr: 'فيلا كاملة/منطقة كبيرة', price: 'Custom Quote', features: ['Volume discount', 'Sealing check'] }
    ]
  },
  'post-construction-cleaning': {
    title: 'Post Construction & Renovation Cleaning',
    titleAr: 'تنظيف ما بعد البناء والتجديد',
    category: 'Specialized Cleaning',
    categoryAr: 'التنظيف المتخصص',
    heroImage: 'https://res.cloudinary.com/diunkrydn/image/upload/v1753270157/post-construction-cleaning_hero.jpg',
    description: 'Thorough cleaning and debris removal after construction or renovation projects for handover.',
    descriptionAr: 'تنظيف شامل وإزالة المخلفات بعد مشاريع البناء أو التجديد لتسليمها.',
    features: [
      { icon: '🗑️', title: 'Heavy Debris Removal', titleAr: 'إزالة المخلفات الثقيلة', description: 'Clearing of construction waste, dust, and materials', descriptionAr: 'إزالة نفايات البناء والغبار والمواد' },
      { icon: '🛡️', title: 'Window Scrapping', titleAr: 'كشط النوافذ', description: 'Removing paint, plaster, and stickers from glass surfaces', descriptionAr: 'إزالة الطلاء والجص والملصقات من الأسطح الزجاجية' },
      { icon: '🌬️', title: 'Fine Dust Mitigation', titleAr: 'تخفيف الغبار الناعم', description: 'Multi-stage cleaning to eliminate fine construction dust', descriptionAr: 'تنظيف متعدد المراحل للقضاء على غبار البناء الناعم' },
      { icon: '🪜', title: 'High Access Cleaning', titleAr: 'تنظيف الأماكن المرتفعة', description: 'Cleaning of high ceilings, fixtures, and exterior facades (where accessible)', descriptionAr: 'تنظيف الأسقف العالية والتجهيزات والواجهات الخارجية (حيث يمكن الوصول إليها)' }
    ],
    process: [
      { step: 1, title: 'Rough Clean', titleAr: 'تنظيف خشن', description: 'Removing large debris, trash, and protective coverings', descriptionAr: 'إزالة المخلفات الكبيرة والقمامة والأغطية الواقية' },
      { step: 2, title: 'Light Clean', titleAr: 'تنظيف خفيف', description: 'Wiping down surfaces, cleaning windows, and basic floor cleaning', descriptionAr: 'مسح الأسطح وتنظيف النوافذ والتنظيف الأساسي للأرضيات' },
      { step: 3, title: 'Final Detail Clean', titleAr: 'تنظيف التفاصيل النهائي', description: 'Sanitizing, polishing, and dusting for a move-in condition', descriptionAr: 'التعقيم والتلميع وإزالة الغبار لحالة جاهزة للسكن' },
      { step: 4, title: 'Client Inspection', titleAr: 'فحص العميل', description: 'Final walkthrough with the client or site manager', descriptionAr: 'جولة نهائية مع العميل أو مدير الموقع' }
    ],
    pricing: [
      { type: 'Studio/Apartment Renovation', typeAr: 'تجديد استوديو/شقة', price: 'QAR 800-1500', features: ['Single-day service', 'Small team'] },
      { type: 'Villa/Large Commercial', typeAr: 'فيلا/تجاري كبير', price: 'QAR 2500-8000', features: ['Large team and equipment', 'Multi-day service'], popular: true },
      { type: 'Full Building Handover', typeAr: 'تسليم مبنى كامل', price: 'Custom Quote', features: ['Long-term contract', 'Industrial cleaning equipment'] }
    ]
  },
  'move-in-move-out-cleaning': {
    title: 'Move-In / Move-Out Cleaning',
    titleAr: 'تنظيف عند الانتقال (دخول/خروج)',
    category: 'Residential',
    categoryAr: 'السكني',
    heroImage: 'https://res.cloudinary.com/diunkrydn/image/upload/v1753270157/move-in-move-out-cleaning_hero.jpg',
    description: 'Comprehensive, deep cleaning services essential for property handover or before moving into a new home.',
    descriptionAr: 'خدمات تنظيف عميقة وشاملة ضرورية لتسليم الممتلكات أو قبل الانتقال إلى منزل جديد.',
    features: [
      { icon: '🚪', title: 'Empty Home Focus', titleAr: 'التركيز على المنزل الفارغ', description: 'Deep cleaning with full access to empty rooms and closets', descriptionAr: 'تنظيف عميق مع وصول كامل للغرف والخزائن الفارغة' },
      { icon: '🔥', title: 'Kitchen Appliance Clean', titleAr: 'تنظيف أجهزة المطبخ', description: 'Deep cleaning inside the oven, fridge, and cabinets', descriptionAr: 'تنظيف عميق داخل الفرن والثلاجة والخزائن' },
      { icon: '💰', title: 'Security Deposit Ready', titleAr: 'جاهز لاسترداد التأمين', description: 'Ensuring cleanliness meets landlord/agency standards', descriptionAr: 'ضمان أن النظافة تلبي معايير المالك/الوكالة' },
      { icon: '🚿', title: 'Disinfection', titleAr: 'تطهير', description: 'Sanitization of all high-touch surfaces in bathrooms and kitchen', descriptionAr: 'تعقيم جميع الأسطح عالية التلامس في الحمامات والمطبخ' }
    ],
    process: [
      { step: 1, title: 'Pre-Clean Checklist', titleAr: 'قائمة مراجعة ما قبل التنظيف', description: 'Confirming all personal belongings are removed', descriptionAr: 'التأكد من إزالة جميع المتعلقات الشخصية' },
      { step: 2, title: 'High-Level Cleaning', titleAr: 'تنظيف المستوى العالي', description: 'Dusting ceilings, fixtures, and air vents', descriptionAr: 'إزالة الغبار عن الأسقف والتركيبات وفتحات التهوية' },
      { step: 3, title: 'Appliance & Wet Area Clean', titleAr: 'تنظيف الأجهزة والمناطق الرطبة', description: 'Intensive cleaning of bathrooms and kitchen appliances', descriptionAr: 'تنظيف مكثف للحمامات وأجهزة المطبخ' },
      { step: 4, title: 'Floor & Final Wipe Down', titleAr: 'الأرضيات والمسح النهائي', description: 'Floor scrubbing and final surface wipe-down', descriptionAr: 'فرك الأرضيات والمسح النهائي للأسطح' }
    ],
    pricing: [
      { type: 'Studio/1 BR', typeAr: 'استوديو/غرفة نوم واحدة', price: 'QAR 450-700', features: ['2 cleaners, 4-6 hours'] },
      { type: '2-3 BR Apartment', typeAr: 'شقة 2-3 غرف نوم', price: 'QAR 800-1400', features: ['Oven/Fridge deep clean included'], popular: true },
      { type: 'Villa/Townhouse', typeAr: 'فيلا/تاون هاوس', price: 'Custom Quote', features: ['Team of 4-6 cleaners', 'External areas cleaning'] }
    ]
  },
  'pest-control': {
    title: 'Pest Control & Extermination Services',
    titleAr: 'خدمات مكافحة الآفات والإبادة',
    category: 'Essential Services',
    categoryAr: 'الخدمات الأساسية',
    heroImage: 'https://res.cloudinary.com/diunkrydn/image/upload/v1753270157/pest-control_hero.jpg',
    description: 'Licensed and professional pest control for residential and commercial properties against common pests.',
    descriptionAr: 'مكافحة آفات مرخصة واحترافية للعقارات السكنية والتجارية ضد الآفات الشائعة.',
    features: [
      { icon: '🦎', title: 'General Pest Control', titleAr: 'مكافحة الآفات العامة', description: 'Treatment for cockroaches, ants, and common insects', descriptionAr: 'معالجة للصراصير والنمل والحشرات الشائعة' },
      { icon: '🐀', title: 'Rodent & Termite', titleAr: 'القوارض والنمل الأبيض', description: 'Targeted treatment and prevention for rats, mice, and termites', descriptionAr: 'معالجة ووقاية مستهدفة للفئران والجرذان والنمل الأبيض' },
      { icon: '🌿', title: 'Safe Chemicals', titleAr: 'مواد كيميائية آمنة', description: 'Use of non-toxic, government-approved pesticides', descriptionAr: 'استخدام مبيدات حشرية غير سامة ومعتمدة من الحكومة' },
      { icon: '🔑', title: 'Extended Guarantee', titleAr: 'ضمان ممتد', description: 'Follow-up service included in case of re-infestation within the guarantee period', descriptionAr: 'خدمة متابعة مضمنة في حالة إعادة الإصابة ضمن فترة الضمان' }
    ],
    process: [
      { step: 1, title: 'Inspection', titleAr: 'التفتيش', description: 'Identification of pest type, infestation level, and entry points', descriptionAr: 'تحديد نوع الآفة ومستوى الإصابة ونقاط الدخول' },
      { step: 2, title: 'Treatment Plan', titleAr: 'خطة العلاج', description: 'Development of a customized, targeted extermination plan', descriptionAr: 'تطوير خطة إبادة مخصصة ومستهدفة' },
      { step: 3, title: 'Application', titleAr: 'التطبيق', description: 'Professional application of gels, sprays, or baiting systems', descriptionAr: 'تطبيق احترافي للجل أو البخاخات أو أنظمة الطعم' },
      { step: 4, title: 'Follow-up', titleAr: 'المتابعة', description: 'Post-treatment inspection and guarantee period', descriptionAr: 'فحص ما بعد العلاج وفترة الضمان' }
    ],
    pricing: [
      { type: 'Apartment (General)', typeAr: 'شقة (عام)', price: 'QAR 250-400', features: ['Single treatment', '3-month guarantee'] },
      { type: 'Villa/Termite Control', typeAr: 'فيلا/مكافحة النمل الأبيض', price: 'QAR 500-1500', features: ['Full house treatment', 'Longer guarantee'], popular: true },
      { type: 'Commercial Annual Contract', typeAr: 'عقد سنوي تجاري', price: 'Custom Quote', features: ['Monthly/Quarterly visits', 'Full compliance reporting'] }
    ]
  },
  'interior-design': {
    title: 'Interior Design Consultancy & Execution',
    titleAr: 'استشارات وتصميم وتنفيذ الديكور الداخلي',
    category: 'Design & Fitout',
    categoryAr: 'التصميم والتجهيز',
    heroImage: 'https://res.cloudinary.com/diunkrydn/image/upload/v1753270157/interior-design_hero.jpg',
    description: 'Full-service interior design from concept creation to final execution for residential and commercial spaces.',
    descriptionAr: 'خدمة تصميم داخلي شاملة من إنشاء المفهوم إلى التنفيذ النهائي للمساحات السكنية والتجارية.',
    features: [
      { icon: '💡', title: 'Concept Development', titleAr: 'تطوير المفهوم', description: 'Mood boards, color palettes, and theme selection', descriptionAr: 'لوحات المزاج، لوحات الألوان، واختيار الموضوع' },
      { icon: '📐', title: '3D Visualization', titleAr: 'تصور ثلاثي الأبعاد', description: 'Realistic 3D renders to visualize the final design', descriptionAr: 'تصييرات ثلاثية الأبعاد واقعية لتصور التصميم النهائي' },
      { icon: '🛍️', title: 'Material Sourcing', titleAr: 'تأمين المواد', description: 'Sourcing and procurement of furniture, fixtures, and materials', descriptionAr: 'تأمين وشراء الأثاث والتجهيزات والمواد' },
      { icon: '🎨', title: 'Lighting & Color Theory', titleAr: 'نظرية الإضاءة والألوان', description: 'Expert consultation on ambient, task, and accent lighting', descriptionAr: 'استشارة متخصصة في الإضاءة المحيطة والعمل والتركيز' }
    ],
    process: [
      { step: 1, title: 'Briefing', titleAr: 'الاجتماع الأولي', description: 'Understanding client needs, budget, and timeline', descriptionAr: 'فهم احتياجات العميل والميزانية والجدول الزمني' },
      { step: 2, title: 'Design & Approvals', titleAr: 'التصميم والموافقات', description: 'Presenting initial designs, revisions, and final sign-off', descriptionAr: 'تقديم التصاميم الأولية والمراجعات والموافقة النهائية' },
      { step: 3, title: 'Execution', titleAr: 'التنفيذ', description: 'Project management, site supervision, and fit-out completion', descriptionAr: 'إدارة المشروع، والإشراف على الموقع، وإكمال التجهيز' },
      { step: 4, title: 'Handover', titleAr: 'التسليم', description: 'Final staging, quality check, and project handover', descriptionAr: 'التجهيز النهائي، فحص الجودة، وتسليم المشروع' }
    ],
    pricing: [
      { type: 'Consultation Only (Hourly)', typeAr: 'استشارة فقط (بالساعة)', price: 'QAR 450/hour', features: ['Design advice', 'Space planning'] },
      { type: 'Single Room Design', typeAr: 'تصميم غرفة واحدة', price: 'QAR 3000+', features: ['Full concept and 3D render', 'Shopping list provided'], popular: true },
      { type: 'Full Home/Office Project', typeAr: 'مشروع منزل/مكتب كامل', price: 'Custom Quote', features: ['Full execution and fit-out management', 'Premium material sourcing'] }
    ]
  },
  'interior-fitout': {
    title: 'Interior Fitout & Contracting',
    titleAr: 'تجهيزات وعقود الديكور الداخلي',
    category: 'Design & Fitout',
    categoryAr: 'التصميم والتجهيز',
    heroImage: 'https://res.cloudinary.com/diunkrydn/image/upload/v1753270157/interior-fitout_hero.jpg',
    description: 'Complete commercial and residential interior fitout services, including civil works, MEP, and finishes.',
    descriptionAr: 'خدمات تجهيز داخلي تجاري وسكني كاملة، بما في ذلك الأعمال المدنية، الميكانيكية والكهربائية والسباكة، والتشطيبات.',
    features: [
      { icon: '👷', title: 'Turnkey Solution', titleAr: 'حل متكامل (تسليم مفتاح)', description: 'Full project management from shell-and-core to final finish', descriptionAr: 'إدارة مشروع كاملة من الهيكل والأساس إلى التشطيب النهائي' },
      { icon: '🔌', title: 'MEP Works', titleAr: 'أعمال الميكانيكا والكهرباء والسباكة', description: 'Installation of electrical, plumbing, and HVAC systems', descriptionAr: 'تركيب أنظمة الكهرباء والسباكة والتدفئة والتهوية وتكييف الهواء' },
      { icon: '🔥', title: 'Authority Approvals', titleAr: 'موافقات السلطات', description: 'Handling all government approvals and NOCs (e.g., DM, DEWA)', descriptionAr: 'التعامل مع جميع الموافقات الحكومية وشهادات عدم الممانعة (مثل بلدية دبي، هيئة كهرباء ومياه دبي)' },
      { icon: '🪜', title: 'Civil & Partitions', titleAr: 'أعمال مدنية وقواطع', description: 'Construction of drywall, masonry, and gypsum ceilings', descriptionAr: 'بناء الجدران الجافة، أعمال البناء، والأسقف الجبسية' }
    ],
    process: [
      { step: 1, title: 'Technical Assessment', titleAr: 'التقييم الفني', description: 'Review of site conditions, drawings, and scope', descriptionAr: 'مراجعة شروط الموقع والرسومات والنطاق' },
      { step: 2, title: 'Permits & Planning', titleAr: 'التصاريح والتخطيط', description: 'Securing all necessary permits and detailed project scheduling', descriptionAr: 'تأمين جميع التصاريح اللازمة وجدولة المشروع التفصيلية' },
      { step: 3, title: 'Construction & Installation', titleAr: 'البناء والتركيب', description: 'Execution of civil works, installations, and finishes', descriptionAr: 'تنفيذ الأعمال المدنية والتركيبات والتشطيبات' },
      { step: 4, title: 'Testing & Handover', titleAr: 'الاختبار والتسليم', description: 'Commissioning, authority inspection, and project handover', descriptionAr: 'التكليف، فحص السلطة، وتسليم المشروع' }
    ],
    pricing: [
      { type: 'Small Commercial Refurbishment', typeAr: 'تجديد تجاري صغير', price: 'QAR 50,000+', features: ['Partitioning', 'Basic finishes'] },
      { type: 'Office/Retail Fitout', typeAr: 'تجهيز مكتب/محل تجاري', price: 'QAR 800-1500/sqm', features: ['MEP, Flooring, Ceiling, Walls'], popular: true },
      { type: 'Luxury Villa/Full Building', typeAr: 'فيلا فاخرة/مبنى كامل', price: 'Custom Quote', features: ['High-end finishes', 'Integrated smart home systems', 'Extended warranty'] }
    ]
  },
  'canopy-construction': {
    title: 'Canopy & Shade Structure Construction',
    titleAr: 'إنشاء مظلات وهياكل تظليل',
    category: 'Structural & Outdoor',
    categoryAr: 'هيكلية وخارجية',
    heroImage: 'https://res.cloudinary.com/diunkrydn/image/upload/v1753270157/canopy-construction_hero.jpg',
    description: 'Design and installation of custom canopies, pergolas, and outdoor shade structures for various applications.',
    descriptionAr: 'تصميم وتركيب مظلات مخصصة وعرشات وهياكل تظليل خارجية لمختلف الاستخدامات.',
    features: [
      { icon: '🌞', title: 'UV Protection', titleAr: 'حماية من الأشعة فوق البنفسجية', description: 'Use of high-grade, UV-stabilized fabric or materials', descriptionAr: 'استخدام قماش أو مواد عالية الجودة ومقاومة للأشعة فوق البنفسجية' },
      { icon: '🛠️', title: 'Variety of Materials', titleAr: 'تنوع المواد', description: 'Fabric, tensile, aluminum, and wooden structures available', descriptionAr: 'هياكل من القماش، الشد الإنشائي، الألومنيوم، والخشب متوفرة' },
      { icon: '🏗️', title: 'Engineered Design', titleAr: 'تصميم هندسي', description: 'Structurally certified designs to withstand local weather conditions', descriptionAr: 'تصاميم معتمدة إنشائياً لتحمل الظروف الجوية المحلية' },
      { icon: '✅', title: 'Municipality Approved', titleAr: 'معتمد من البلدية', description: 'Designs comply with local municipality building codes and standards', descriptionAr: 'التصاميم تتوافق مع قوانين ومعايير البناء البلدية المحلية' }
    ],
    process: [
      { step: 1, title: 'Site Survey & Design', titleAr: 'مسح الموقع والتصميم', description: 'Measuring the area and generating 2D/3D design proposals', descriptionAr: 'قياس المنطقة وتوليد مقترحات تصميم ثنائية/ثلاثية الأبعاد' },
      { step: 2, title: 'Material Fabrication', titleAr: 'تصنيع المواد', description: 'In-house or outsourced fabrication of the frame and covering material', descriptionAr: 'تصنيع الإطار ومادة التغطية داخلياً أو خارجياً' },
      { step: 3, title: 'Installation', titleAr: 'التركيب', description: 'On-site foundation work and structure assembly', descriptionAr: 'أعمال الأساس في الموقع وتجميع الهيكل' },
      { step: 4, title: 'Finishing & Handover', titleAr: 'الانتهاء والتسليم', description: 'Final tensioning, clean-up, and client handover', descriptionAr: 'الشد النهائي، التنظيف، وتسليم العميل' }
    ],
    pricing: [
      { type: 'Small Awning/Patio Shade', typeAr: 'مظلة صغيرة/تظليل فناء', price: 'QAR 5,000+', features: ['Basic aluminum frame'] },
      { type: 'Large Car Shade/Pergola', typeAr: 'مظلة سيارات كبيرة/عرشة', price: 'QAR 15,000+', features: ['Engineered design', 'PVC/HDPE fabric'], popular: true },
      { type: 'Commercial Tensile Structure', typeAr: 'هيكل شد إنشائي تجاري', price: 'Custom Quote', features: ['Large spans', 'P.T.F.E fabric', 'Full authority approval'] }
    ]
  },
  'car-shade-construction': {
    title: 'Car Shade Construction & Installation',
    titleAr: 'إنشاء وتركيب مظلات السيارات',
    category: 'Structural & Outdoor',
    categoryAr: 'هيكلية وخارجية',
    heroImage: 'https://res.cloudinary.com/diunkrydn/image/upload/v1753270157/car-shade-construction_hero.jpg',
    description: 'Dedicated service for the design and construction of durable, customized car parking shades.',
    descriptionAr: 'خدمة مخصصة لتصميم وإنشاء مظلات مواقف السيارات المتينة والمخصصة.',
    features: [
      { icon: '🅿️', title: 'Single/Multi-Bay', titleAr: 'موقف واحد/متعدد', description: 'Custom solutions for single villas or large residential/commercial lots', descriptionAr: 'حلول مخصصة للفلل الفردية أو قطع الأراضي السكنية/التجارية الكبيرة' },
      { icon: '☀️', title: 'Heat Reduction', titleAr: 'تقليل الحرارة', description: 'Materials chosen for maximum heat and UV light blockage', descriptionAr: 'اختيار المواد لأقصى قدر من حجب الحرارة والأشعة فوق البنفسجية' },
      { icon: '🛡️', title: 'Warranty', titleAr: 'الضمان', description: 'Structural and material warranty provided upon completion', descriptionAr: 'ضمان هيكلي ومادي مقدم عند الانتهاء' },
      { icon: '🏗️', title: 'Custom Styles', titleAr: 'أنماط مخصصة', description: 'Available in cantilever, arch, pyramid, and wave designs', descriptionAr: 'متوفرة بتصاميم الذراع المعلقة، القوس، الهرم، والموجة' }
    ],
    process: [
      { step: 1, title: 'Location Survey', titleAr: 'مسح الموقع', description: 'Assessing space, ground conditions, and entry/exit points', descriptionAr: 'تقييم المساحة، شروط الأرض، ونقاط الدخول/الخروج' },
      { step: 2, title: 'Design & Drawing', titleAr: 'التصميم والرسم', description: 'Producing stamped structural and elevation drawings', descriptionAr: 'إنتاج رسومات إنشائية وارتفاعات مختومة' },
      { step: 3, title: 'Civil & Fabrication', titleAr: 'المدني والتصنيع', description: 'Foundation casting and off-site steel fabrication', descriptionAr: 'صب الأساس وتصنيع الفولاذ خارج الموقع' },
      { step: 4, title: 'Installation & Finishing', titleAr: 'التركيب والانتهاء', description: 'Erecting the structure, fixing the canopy, and final touch-ups', descriptionAr: 'إقامة الهيكل، تثبيت المظلة، واللمسات النهائية' }
    ],
    pricing: [
      { type: 'Single Car Shade (Cantilever)', typeAr: 'مظلة سيارة واحدة (ذراع تعليق)', price: 'QAR 6,000-9,000', features: ['Galvanized steel frame', 'HDPE fabric'] },
      { type: 'Double Car Shade (Arch Design)', typeAr: 'مظلة سيارتين (تصميم قوسي)', price: 'QAR 12,000-18,000', features: ['Full engineering approval', 'Durable PVC fabric'], popular: true },
      { type: 'Multi-Bay Commercial Shade', typeAr: 'مظلة تجارية متعددة المواقف', price: 'Custom Quote', features: ['Volume discount', 'Lighting integration', 'Full project management'] }
    ]
  },
  'structural-maintenance': {
    title: 'Structural Repair & Maintenance',
    titleAr: 'صيانة وإصلاح الهياكل',
    category: 'Structural & Outdoor',
    categoryAr: 'هيكلية وخارجية',
    heroImage: 'https://res.cloudinary.com/diunkrydn/image/upload/v1753270157/structural-maintenance_hero.jpg',
    description: 'Expert repair and maintenance services for building structural components, including concrete, masonry, and steel.',
    descriptionAr: 'خدمات إصلاح وصيانة متخصصة للمكونات الهيكلية للمباني، بما في ذلك الخرسانة والبناء والصلب.',
    features: [
      { icon: '🩹', title: 'Concrete Repair', titleAr: 'إصلاح الخرسانة', description: 'Fixing cracks, spalling, and rebar corrosion treatment', descriptionAr: 'إصلاح التشققات، التآكل، ومعالجة صدأ حديد التسليح' },
      { icon: '💦', title: 'Waterproofing', titleAr: 'العزل المائي', description: 'Leak detection and application of protective waterproofing membranes', descriptionAr: 'كشف التسربات وتطبيق أغشية العزل المائي الواقية' },
      { icon: '🛡️', title: 'Structural Strengthening', titleAr: 'تقوية الهياكل', description: 'Carbon fiber wrapping and plate bonding for load-bearing elements', descriptionAr: 'تغليف بألياف الكربون وربط الألواح للعناصر الحاملة' },
      { icon: '🧱', title: 'Masonry & Plaster Repair', titleAr: 'إصلاح البناء والجبس', description: 'Repairing damaged blockwork, brickwork, and external/internal plaster', descriptionAr: 'إصلاح أعمال البلوك والطوب المتضررة والجبس الداخلي/الخارجي' }
    ],
    process: [
      { step: 1, title: 'Defect Assessment', titleAr: 'تقييم العيوب', description: 'Engineering inspection and root cause analysis of structural issues', descriptionAr: 'فحص هندسي وتحليل السبب الجذري للمشاكل الهيكلية' },
      { step: 2, title: 'Methodology & Approval', titleAr: 'المنهجية والموافقة', description: 'Proposing a repair methodology and getting client/authority approval', descriptionAr: 'اقتراح منهجية إصلاح والحصول على موافقة العميل/الجهة المختصة' },
      { step: 3, title: 'Execution', titleAr: 'التنفيذ', description: 'Specialized application of repair and protective materials by certified technicians', descriptionAr: 'تطبيق متخصص لمواد الإصلاح والحماية من قبل فنيين معتمدين' },
      { step: 4, title: 'Testing & Certification', titleAr: 'الاختبار والاعتماد', description: 'Quality control testing and issuance of a final structural certificate', descriptionAr: 'اختبار مراقبة الجودة وإصدار شهادة هيكلية نهائية' }
    ],
    pricing: [
      { type: 'Minor Concrete Repair (Balcony/Slab)', typeAr: 'إصلاح خرساني بسيط (شرفة/بلاطة)', price: 'QAR 3,000+', features: ['Localized repair', 'Epoxy injection'] },
      { type: 'Full Villa Structural Waterproofing', typeAr: 'عزل مائي هيكلي للفيلا بالكامل', price: 'QAR 15,000+', features: ['Roof, basement, and wet areas'], popular: true },
      { type: 'Facade/Industrial Structure Repair', typeAr: 'إصلاح الواجهة/الهياكل الصناعية', price: 'Custom Quote', features: ['High-rise access equipment', 'Engineering supervision', 'Long-term warranty'] }
    ]
  }
}
// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const service = servicesData[resolvedParams.service];
  
  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The requested service page could not be found.'
    };
  }

  return {
    title: service.title,
    description: service.description,
    keywords: [
      service.title.toLowerCase(),
      `${service.title.toLowerCase()} qatar`,
      `${service.title.toLowerCase()} doha`,
      service.category.toLowerCase(),
      'fabtech services',
      'professional cleaning',
      'facility management'
    ],
    alternates: {
      canonical: `https://fabtechqatar.com/services/${resolvedParams.service}`,
    },
    openGraph: {
      title: `${service.title} | FabTech Qatar`,
      description: service.description,
      url: `https://fabtechqatar.com/services/${resolvedParams.service}`,
      type: 'website',
      locale: 'en_US',
      siteName: 'FabTech Qatar',
      images: [
        {
          url: service.heroImage,
          width: 1200,
          height: 630,
          alt: `${service.title} - FabTech Qatar`,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | FabTech Qatar`,
      description: service.description,
      images: [service.heroImage],
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
}

// Generate static params for all services
export async function generateStaticParams() {
  return Object.keys(servicesData).map((service) => ({
    service: service,
  }));
}

export default async function ServicePage({ params }) {
  const resolvedParams = await params;
  const service = servicesData[resolvedParams.service];

  if (!service) {
    notFound();
  }

  // Auto-assign color schemes based on service category
  const getColorScheme = (category) => {
    const categoryColorMap = {
      'Residential': 'blue',
      'Commercial': 'orange', 
      'Specialized Cleaning': 'green',
      'Essential Services': 'purple',
      'Floor & Surface Care': 'blue',
      'Design & Fitout': 'orange',
      'Structural & Outdoor': 'green',
      'Commercial & Residential': 'purple'
    };
    return categoryColorMap[category] || 'blue';
  };

  // Generate structured data for this service
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "FabTech Services Trading & Contracting",
      "url": "https://fabtechqatar.com",
      "logo": "https://fabtechqatar.com/logo.png",
      "telephone": "+974-5518-7619",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Madina Khalifa (S) Building 138, Zone 34, Street 362",
        "addressLocality": "Doha",
        "addressCountry": "Qatar"
      }
    },
    "serviceType": service.category,
    "areaServed": {
      "@type": "Country",
      "name": "Qatar"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": `https://fabtechqatar.com/services/${resolvedParams.service}`
    },
    "offers": service.pricing.map(plan => ({
      "@type": "Offer",
      "name": plan.type,
      "price": plan.price,
      "priceCurrency": "QAR",
      "description": plan.features.join(", ")
    }))
  };

  return (
    <div className="">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }}
      />
      
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={service.heroImage}
            alt={`${service.title} Background`}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/85 via-red-800/80 to-red-700/85"></div>
          {/* Additional overlay for better contrast */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Service Category Badge */}
            <div className="mb-6">
              <span className="inline-block bg-white/95 text-red-800 px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm">
                {service.category}
              </span>
            </div>

            {/* Main Title - SEO Optimized H1 */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              {service.title}
            </h1>

            {/* Description - Clear and Readable */}
            <p className="text-xl sm:text-2xl md:text-3xl text-white/95 mb-10 leading-relaxed max-w-3xl mx-auto drop-shadow-md font-light">
              {service.description}
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href={`/booking?service=${resolvedParams.service}`}
                className="bg-white text-red-700 hover:bg-red-50 hover:text-red-800 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 min-w-[200px] text-center"
              >
                Book Service Now
              </Link>
              <Link 
                href="/contact"
                className="border-3 border-white text-white hover:bg-white hover:text-red-700 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 min-w-[200px] text-center"
              >
                Get Free Quote
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-semibold">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">24/7 Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600"></div>
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
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
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
      <section className="py-16 bg-gray-300/30">
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
              <div key={index} className={`bg-white rounded-lg p-6 shadow-lg text-center ${plan.popular ? 'border-2 border-red-600 relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-semibold text-black mb-4">{plan.type}</h3>
                <div className="text-3xl font-bold text-black mb-4">{plan.price}</div>
                <ul className="space-y-2 text-black mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                href={`/booking?service=${resolvedParams.service}`}
                className="bg-white text-red-700 hover:bg-red-50 hover:text-red-800 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 min-w-[200px] text-center"
              >
                Book Service Now
              </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience Professional {service.category}?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Book our professional {service.category.toLowerCase()} service today and enjoy 
            exceptional results with our expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
                href={`/booking?service=${resolvedParams.service}`}
                className="bg-white text-red-700 hover:bg-red-50 hover:text-red-800 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 min-w-[200px] text-center"
              >
                Book Service Now
              </Link>
            <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-5 rounded-lg font-semibold transition-all duration-200">
              Call (+974) 5518 7619
            </button>
          </div>
        </div>
      </section>
      <HomeFAQ customFaqs={service.faqs}/>
    </div>
  );
}
