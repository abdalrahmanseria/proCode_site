import { ref, computed, watch } from 'vue'

// Language state - shared across all instances
const currentLang = ref('en')
let isInitialized = false

// Translations
const translations = {
  en: {
    nav: {
      home: 'Company',
      about: 'About us',
      services: 'Services',
      portfolio: 'Projects',
      review: 'Clients',
      team: 'Our Team',
      pricing: 'Pricing',
      blog: 'Last Updates',
      contact: 'Contact us',
      suppliers: 'Suppliers',
      companyMenu: {
        overview: 'Overview',
        mission: 'Mission',
        vision: 'Vision',
        chairmanWord: 'Chairman Word'
      },
      servicesMenu: {
        aiLLM: 'AI & LLM Integration',
        digitalTransformation: 'Digital Transformation',
        appDevelopment: 'Custom App Development',
        healthcare: 'Healthcare Management',
        aiCoaching: 'AI Coaching Platforms',
        ecommerce: 'E-commerce & Payments'
      }
    },
    hero: {
      title: 'ProCode Solutions: Redefining the Future through Intelligent Code.',
      subtitle: 'We don\'t just build software; we create AI-driven ecosystems that transform businesses.',
      description: 'From AI pet care to smart clinic management, we bring your vision to life.',
      typewriterWords: ['AI Solutions', 'Digital Transformation', 'Healthcare Systems', 'App Development']
    },
    about: {
      whoWeAre: 'Who We Are ?',
      title: 'ProCode Solutions',
      description: 'We are a forward-thinking technology company specializing in AI-integrated software and digital transformation. We believe that technology should do more than just function—it should change lives for the better.',
      visionTitle: 'Vision',
      vision: 'To be a global leader in AI-driven innovation, empowering businesses to reach their full potential through smart automation.',
      missionTitle: 'Mission',
      mission: 'To provide high-quality, scalable digital solutions (Mobile, Web, AI) that solve real-world problems and bridge the gap between technology and daily life.',
      chairmanWord: {
        title: 'Chairman Word',
        greeting: 'Dear valued stakeholders,',
        paragraph1: 'As the chairman of our esteemed organization, I am delighted to address you. I am profoundly grateful for the trust you have bestowed upon us, enabling us to serve you and contribute to your prosperity.',
        paragraph2: 'Our strong vision and well-defined mission form the bedrock of our operations. We constantly innovate to surpass expectations and meet our customers\' evolving needs.',
        paragraph3: 'At ProCode Solutions, we believe success is built upon unwavering commitment, integrity, and excellence. Our exceptional team, coupled with cutting-edge AI technology, delivers solutions of exceptional quality that transform businesses.',
        paragraph4: 'We cherish our relationships with clients, partners, and stakeholders, committed to nurturing these connections for years to come. Your support inspires us to raise the bar even higher in AI-driven innovation.',
        paragraph5: 'Thank you for your continued support and trust in ProCode Solutions. Together, let us continue to build a future that is powered by intelligent code, innovation, and excellence.',
        closing: 'Warm regards,',
        ceoName: 'Dr. Eng. Ahmed Khaled',
        ceoTitle: 'CEO',
        ceoSubtitle: 'Lecturer at Faculty of Engineering, Menofia University'
      }
    },
    services: {
      whatWeDo: 'What We Do ?',
      title: 'Perfect Solution For Your Business',
      description: 'ProCode Solutions offers comprehensive AI-driven solutions tailored to meet your business needs and drive digital transformation.',
      readMore: 'Read More',
      workProcess: 'Work Process',
      digitalSystem: 'Digital Systems',
      digitalSystemDesc: 'Our digital systems and processes are designed to streamline your business operations and maximize efficiency through AI-powered automation.',
      aiLLMIntegration: {
        name: 'AI & LLM Integration',
        desc: 'Building smart systems like Dog Life AI that use Large Language Models to analyze behavior and provide deep insights.',
        fullDescription: 'Building smart systems like Dog Life AI that use Large Language Models to analyze behavior and provide deep insights. We leverage cutting-edge AI technology to create intelligent solutions that understand context, learn from data, and provide actionable insights for businesses across various industries.'
      },
      digitalTransformation: {
        name: 'Digital Transformation (LMENUS)',
        desc: 'Digitizing traditional businesses like restaurants with cloud-based ordering and management systems.',
        fullDescription: 'Digitizing traditional businesses like restaurants with cloud-based ordering and management systems. We transform legacy operations into modern, efficient digital ecosystems that streamline processes, reduce costs, and enhance customer experiences through innovative cloud-based solutions.'
      },
      customAppDevelopment: {
        name: 'Custom App Development',
        desc: 'Developing high-performance iOS and Android applications with secure payment integrations like Stripe.',
        fullDescription: 'Developing high-performance iOS and Android applications with secure payment integrations like Stripe. Our mobile apps are built with scalability, security, and user experience in mind, featuring seamless payment processing and robust backend infrastructure.'
      },
      healthcareManagement: {
        name: 'Healthcare Management',
        desc: 'Providing specialized systems like My Clinic System to manage patient data, scheduling, and medical records.',
        fullDescription: 'Providing specialized systems like My Clinic System to manage patient data, scheduling, and medical records. Our healthcare solutions ensure HIPAA compliance, secure data management, and streamlined workflows for medical professionals.'
      },
      aiCoachingPlatforms: {
        name: 'AI Coaching Platforms',
        desc: 'Creating personalized fitness and nutrition experiences powered by intelligent algorithms.',
        fullDescription: 'Creating personalized fitness and nutrition experiences powered by intelligent algorithms. Our AI coaching platforms analyze user data to provide customized workout plans, nutrition recommendations, and progress tracking for optimal health outcomes.'
      },
      ecommercePayments: {
        name: 'E-commerce & Payments',
        desc: 'Implementing robust financial integrations and in-app purchase systems for global markets.',
        fullDescription: 'Implementing robust financial integrations and in-app purchase systems for global markets. We integrate secure payment gateways, manage transactions across multiple currencies, and ensure compliance with international financial regulations.'
      },
      aiAnalysis: {
        name: 'AI Analysis & Data Science',
        desc: 'We utilize advanced AI to process data, whether it\'s pet behavior or fitness tracking.',
        fullDescription: 'We utilize advanced AI to process data, whether it\'s pet behavior or fitness tracking. Our data science team employs machine learning algorithms to extract meaningful patterns, predict trends, and provide actionable insights from complex datasets.'
      },
      cloudDashboards: {
        name: 'Real-time Cloud Dashboards',
        desc: 'We provide managers with full control over their business, from menu pricing to clinical financial reports.',
        fullDescription: 'We provide managers with full control over their business, from menu pricing to clinical financial reports. Our cloud-based dashboards offer real-time analytics, customizable reporting, and intuitive interfaces for comprehensive business management.'
      },
      paymentGateways: {
        name: 'Secure Payment Gateways',
        desc: 'Integration of Stripe and In-App purchases to ensure seamless global transactions.',
        fullDescription: 'Integration of Stripe and In-App purchases to ensure seamless global transactions. We implement secure, PCI-compliant payment processing systems that support multiple payment methods, currencies, and provide fraud protection for businesses worldwide.'
      }
    },
    portfolio: {
      title: 'Portfolio',
      subtitle: 'Our Portfolio',
      description: 'Explore our portfolio of successful projects and see how ProCode Solutions delivers excellence in AI-driven innovation.',
      viewPortfolio: 'View Portfolio',
      readyToStart: 'Ready to start your next project with ProCode Solutions?',
      contactToday: 'Contact us today and let ProCode Solutions help you achieve your goals with our expertise and innovative AI solutions.',
      projectName: 'Project',
      projectCategory: 'Category',
      previousProjects: 'Previous Projects',
      projects: [
        'Dog Life AI - Smart Pet Monitoring',
        'LMENUS - Digital Menu Ecosystem',
        'NutriFit - AI Personal Trainer',
        'My Clinic System - Healthcare Management',
        'Stripe & iOS Payment Integration modules',
        'Customized LLM Analysis Tools'
      ],
      projectDetails: {
        projectDetail: 'Project Detail',
        projectInfo: 'Project Info',
        location: 'Platform',
        scopeOfWork: 'Description',
        client: 'Client',
        category: 'Category',
        date: 'Date',
        haveQuestion: 'Have Question ? Get in touch!',
        contactUs: 'Contact us',
        dogLifeAI: {
          name: 'Dog Life AI',
          location: 'Mobile & Web Application',
          scopeOfWork: 'An AI pet care platform that analyzes barks and monitors health using LLM technology. The system provides deep insights into pet behavior and health patterns through advanced machine learning algorithms.'
        },
        lmenus: {
          name: 'LMENUS',
          location: 'Web & Mobile Application',
          scopeOfWork: 'A digital menu and management system for restaurants, eliminating paper costs and enabling online ordering. Features cloud-based ordering, real-time menu updates, and comprehensive restaurant management tools.'
        },
        nutriFit: {
          name: 'NutriFit',
          location: 'Mobile Application',
          scopeOfWork: 'An AI personal coach providing personalized workout and nutrition plans based on user data. The platform uses intelligent algorithms to create customized fitness experiences tailored to individual goals and preferences.'
        },
        myClinicSystem: {
          name: 'My Clinic System (سيستم عيادتي)',
          location: 'Web & Mobile Application',
          scopeOfWork: 'A comprehensive management tool for doctors to handle bookings, patient archives, and financial reports. The system streamlines clinic operations with secure patient data management and automated scheduling.'
        }
      }
    },
    buttons: {
      getStarted: 'Get Started',
      sendMessage: 'Send Message'
    },
    form: {
      name: 'Name :',
      email: 'Email :',
      subject: 'Subject :',
      message: 'Message :'
    },
    contact: {
      contactUs: 'Contact us',
      title: 'Get In Touch !',
      description: 'Get in touch with ProCode Solutions. We\'re here to help you with your projects and answer any questions you may have.',
      phone: 'Phone',
      email: 'Email',
      location: 'Location',
      whatsapp: 'Chat on WhatsApp'
    },
    footer: {
      copyright: 'ProCode Solutions. All rights reserved.'
    },
    clients: {
      title: 'Our Clients',
      subtitle: 'Trusted Partners',
      description: 'We are proud to work with leading companies and organizations across various industries.'
    },
    suppliersForm: {
      title: 'Supplier Registration',
      subtitle: 'Join our network of trusted suppliers',
      description: 'Fill out the form below to register your company as a potential supplier for ProCode Solutions.',
      companyName: 'Company Name',
      commercialRegister: 'Commercial Register Number',
      employeeName: 'Responsible Employee Name',
      jobTitle: 'Job Title',
      phone: 'Mobile Number',
      products: 'Products or Services',
      submit: 'Send Application',
      invalidPhone: 'Please enter a valid Egyptian phone number (e.g., 01012345678)'
    }
  },
  ar: {
    nav: {
      home: 'الشركة',
      about: 'من نحن',
      services: 'الخدمات',
      portfolio: 'المشاريع',
      review: 'العملاء',
      team: 'فريقنا',
      pricing: 'الأسعار',
      blog: 'آخر التحديثات',
      contact: 'اتصل بنا',
      suppliers: 'الموردين',
      companyMenu: {
        overview: 'نظرة عامة',
        mission: 'المهمة',
        vision: 'الرؤية',
        chairmanWord: 'كلمة رئيس مجلس الإدارة'
      },
      servicesMenu: {
        aiLLM: 'تكامل الذكاء الاصطناعي ونماذج اللغة الكبيرة',
        digitalTransformation: 'التحول الرقمي',
        appDevelopment: 'تطوير التطبيقات المخصصة',
        healthcare: 'إدارة الرعاية الصحية',
        aiCoaching: 'منصات التدريب بالذكاء الاصطناعي',
        ecommerce: 'التجارة الإلكترونية والمدفوعات'
      }
    },
    hero: {
      title: 'ProCode Solutions: إعادة تعريف المستقبل من خلال الكود الذكي.',
      subtitle: 'نحن لا نبني البرمجيات فحسب؛ بل نخلق أنظمة مدعومة بالذكاء الاصطناعي تحول الأعمال.',
      description: 'من رعاية الحيوانات الأليفة بالذكاء الاصطناعي إلى إدارة العيادات الذكية، نحقق رؤيتك.',
      typewriterWords: ['حلول الذكاء الاصطناعي', 'التحول الرقمي', 'أنظمة الرعاية الصحية', 'تطوير التطبيقات']
    },
    about: {
      whoWeAre: 'من نحن ؟',
      title: 'ProCode Solutions',
      description: 'نحن شركة تقنية متقدمة متخصصة في البرمجيات المدمجة بالذكاء الاصطناعي والتحول الرقمي. نؤمن أن التكنولوجيا يجب أن تفعل أكثر من مجرد العمل—يجب أن تغير الحياة للأفضل.',
      visionTitle: 'الرؤية',
      vision: 'أن نكون رائداً عالمياً في الابتكار المدعوم بالذكاء الاصطناعي، وتمكين الشركات من الوصول إلى إمكاناتها الكاملة من خلال الأتمتة الذكية.',
      missionTitle: 'الرسالة',
      mission: 'تقديم حلول رقمية عالية الجودة وقابلة للتطوير (موبايل، ويب، ذكاء اصطناعي) تحل المشاكل الحقيقية وتربط بين التكنولوجيا والحياة اليومية.',
      chairmanWord: {
        title: 'كلمة رئيس مجلس الإدارة',
        greeting: 'أعزائي أصحاب المصلحة الكرام،',
        paragraph1: 'بصفتي رئيس مجلس إدارة منظمتنا الموقرة، يسعدني أن أتحدث إليكم. أنا ممتن بعمق للثقة التي أوليتمونا إياها، مما مكننا من خدمتكم والمساهمة في ازدهاركم.',
        paragraph2: 'رؤيتنا القوية ومهمتنا المحددة بوضوح تشكلان الأساس لعملياتنا. نحن نبتكر باستمرار لتجاوز التوقعات وتلبية احتياجات عملائنا المتطورة.',
        paragraph3: 'في ProCode Solutions، نؤمن بأن النجاح يُبنى على الالتزام الثابت والنزاهة والتميز. فريقنا الاستثنائي، إلى جانب تكنولوجيا الذكاء الاصطناعي المتطورة، يقدم حلولاً بجودة استثنائية تحول الأعمال.',
        paragraph4: 'نحن نعتز بعلاقاتنا مع العملاء والشركاء وأصحاب المصلحة، ملتزمون برعاية هذه الروابط لسنوات قادمة. دعمكم يلهمنا لرفع المعايير إلى مستوى أعلى في الابتكار المدعوم بالذكاء الاصطناعي.',
        paragraph5: 'شكراً لكم على دعمكم المستمر وثقتكم في ProCode Solutions. معاً، دعونا نواصل بناء مستقبل مدعوم بالكود الذكي والابتكار والتميز.',
        closing: 'مع أطيب التحيات،',
        // ceoName: 'م.د / أحمد خالد',
        // ceoTitle: 'رئيس مجلس الإدارة',
        // ceoSubtitle: 'مدرس بكلية الهندسة، جامعة المنوفية'
      }
    },
    services: {
      whatWeDo: 'ماذا نفعل ؟',
      title: 'الحل المثالي لعملك',
      description: 'تقدم ProCode Solutions حلولاً شاملة مدعومة بالذكاء الاصطناعي مصممة خصيصاً لتلبية احتياجات عملك وتحقيق التحول الرقمي.',
      readMore: 'اقرأ المزيد',
      workProcess: 'عملية العمل',
      digitalSystem: 'الأنظمة الرقمية',
      digitalSystemDesc: 'تم تصميم أنظمتنا وعملياتنا الرقمية لتبسيط عمليات عملك وتعظيم الكفاءة من خلال الأتمتة المدعومة بالذكاء الاصطناعي.',
      aiLLMIntegration: {
        name: 'تكامل الذكاء الاصطناعي ونماذج اللغة الكبيرة',
        desc: 'بناء أنظمة ذكية مثل Dog Life AI التي تستخدم نماذج اللغة الكبيرة لتحليل السلوك وتقديم رؤى عميقة.',
        fullDescription: 'بناء أنظمة ذكية مثل Dog Life AI التي تستخدم نماذج اللغة الكبيرة لتحليل السلوك وتقديم رؤى عميقة. نستفيد من تكنولوجيا الذكاء الاصطناعي المتطورة لإنشاء حلول ذكية تفهم السياق وتتعلم من البيانات وتقدم رؤى قابلة للتنفيذ للشركات في مختلف الصناعات.'
      },
      digitalTransformation: {
        name: 'التحول الرقمي (LMENUS)',
        desc: 'رقمنة الأعمال التقليدية مثل المطاعم مع أنظمة الطلب والإدارة المستندة إلى السحابة.',
        fullDescription: 'رقمنة الأعمال التقليدية مثل المطاعم مع أنظمة الطلب والإدارة المستندة إلى السحابة. نحول العمليات القديمة إلى أنظمة رقمية حديثة وفعالة تبسط العمليات وتقلل التكاليف وتعزز تجارب العملاء من خلال حلول مبتكرة مستندة إلى السحابة.'
      },
      customAppDevelopment: {
        name: 'تطوير التطبيقات المخصصة',
        desc: 'تطوير تطبيقات iOS و Android عالية الأداء مع تكاملات دفع آمنة مثل Stripe.',
        fullDescription: 'تطوير تطبيقات iOS و Android عالية الأداء مع تكاملات دفع آمنة مثل Stripe. تطبيقاتنا المحمولة مبنية مع مراعاة قابلية التوسع والأمان وتجربة المستخدم، وتتميز بمعالجة دفع سلسة وبنية تحتية خلفية قوية.'
      },
      healthcareManagement: {
        name: 'إدارة الرعاية الصحية',
        desc: 'تقديم أنظمة متخصصة مثل My Clinic System لإدارة بيانات المرضى والجدولة والسجلات الطبية.',
        fullDescription: 'تقديم أنظمة متخصصة مثل My Clinic System لإدارة بيانات المرضى والجدولة والسجلات الطبية. حلول الرعاية الصحية لدينا تضمن الامتثال لـ HIPAA وإدارة آمنة للبيانات وسير عمل مبسط للمهنيين الطبيين.'
      },
      aiCoachingPlatforms: {
        name: 'منصات التدريب بالذكاء الاصطناعي',
        desc: 'إنشاء تجارب لياقة وتغذية مخصصة مدعومة بخوارزميات ذكية.',
        fullDescription: 'إنشاء تجارب لياقة وتغذية مخصصة مدعومة بخوارزميات ذكية. منصات التدريب بالذكاء الاصطناعي لدينا تحلل بيانات المستخدم لتقديم خطط تمرين مخصصة وتوصيات غذائية وتتبع التقدم للحصول على نتائج صحية مثالية.'
      },
      ecommercePayments: {
        name: 'التجارة الإلكترونية والمدفوعات',
        desc: 'تنفيذ تكاملات مالية قوية وأنظمة شراء داخل التطبيق للأسواق العالمية.',
        fullDescription: 'تنفيذ تكاملات مالية قوية وأنظمة شراء داخل التطبيق للأسواق العالمية. ندمج بوابات دفع آمنة وندير المعاملات عبر عملات متعددة ونتأكد من الامتثال للوائح المالية الدولية.'
      },
      aiAnalysis: {
        name: 'تحليل الذكاء الاصطناعي وعلوم البيانات',
        desc: 'نستخدم الذكاء الاصطناعي المتقدم لمعالجة البيانات، سواء كان ذلك سلوك الحيوانات الأليفة أو تتبع اللياقة البدنية.',
        fullDescription: 'نستخدم الذكاء الاصطناعي المتقدم لمعالجة البيانات، سواء كان ذلك سلوك الحيوانات الأليفة أو تتبع اللياقة البدنية. فريق علوم البيانات لدينا يستخدم خوارزميات التعلم الآلي لاستخراج أنماط ذات معنى والتنبؤ بالاتجاهات وتقديم رؤى قابلة للتنفيذ من مجموعات البيانات المعقدة.'
      },
      cloudDashboards: {
        name: 'لوحات المعلومات السحابية في الوقت الفعلي',
        desc: 'نوفر للمديرين سيطرة كاملة على أعمالهم، من تسعير القوائم إلى التقارير المالية السريرية.',
        fullDescription: 'نوفر للمديرين سيطرة كاملة على أعمالهم، من تسعير القوائم إلى التقارير المالية السريرية. لوحات المعلومات المستندة إلى السحابة لدينا تقدم تحليلات في الوقت الفعلي وإعداد تقارير قابلة للتخصيص وواجهات بديهية لإدارة الأعمال الشاملة.'
      },
      paymentGateways: {
        name: 'بوابات الدفع الآمنة',
        desc: 'تكامل Stripe والشراء داخل التطبيق لضمان معاملات عالمية سلسة.',
        fullDescription: 'تكامل Stripe والشراء داخل التطبيق لضمان معاملات عالمية سلسة. ننفذ أنظمة معالجة دفع آمنة ومتوافقة مع PCI تدعم طرق دفع متعددة وعملات وتوفر حماية من الاحتيال للشركات في جميع أنحاء العالم.'
      }
    },
    portfolio: {
      title: 'المشاريع',
      subtitle: 'محفظتنا',
      description: 'استكشف محفظة مشاريعنا الناجحة وشاهد كيف تقدم ProCode Solutions التميز في الابتكار المدعوم بالذكاء الاصطناعي.',
      viewPortfolio: 'عرض المشاريع',
      readyToStart: 'هل أنت مستعد لبدء مشروعك القادم مع ProCode Solutions؟',
      contactToday: 'اتصل بنا اليوم ودع ProCode Solutions تساعدك في تحقيق أهدافك بخبرتنا وحلول الذكاء الاصطناعي المبتكرة.',
      projectName: 'مشروع',
      projectCategory: 'فئة',
      previousProjects: 'المشاريع السابقة',
      projects: [
        'Dog Life AI - مراقبة الحيوانات الأليفة الذكية',
        'LMENUS - نظام القوائم الرقمية',
        'NutriFit - مدرب شخصي بالذكاء الاصطناعي',
        'My Clinic System - إدارة الرعاية الصحية',
        'وحدات تكامل Stripe و iOS للدفع',
        'أدوات تحليل LLM مخصصة'
      ],
      projectDetails: {
        projectDetail: 'تفاصيل المشروع',
        projectInfo: 'معلومات المشروع',
        location: 'المنصة',
        scopeOfWork: 'الوصف',
        client: 'العميل',
        category: 'الفئة',
        date: 'التاريخ',
        haveQuestion: 'هل لديك سؤال؟ تواصل معنا!',
        contactUs: 'اتصل بنا',
        dogLifeAI: {
          name: 'Dog Life AI',
          location: 'تطبيق موبايل ويب',
          scopeOfWork: 'منصة رعاية حيوانات أليفة بالذكاء الاصطناعي تحلل النباح وتراقب الصحة باستخدام تكنولوجيا LLM. يوفر النظام رؤى عميقة حول سلوك وصحة الحيوانات الأليفة من خلال خوارزميات التعلم الآلي المتقدمة.'
        },
        lmenus: {
          name: 'LMENUS',
          location: 'تطبيق ويب وموبايل',
          scopeOfWork: 'نظام قوائم وإدارة رقمي للمطاعم، يلغي تكاليف الورق ويمكن الطلب عبر الإنترنت. يتميز بالطلب المستند إلى السحابة وتحديثات القوائم في الوقت الفعلي وأدوات إدارة المطاعم الشاملة.'
        },
        nutriFit: {
          name: 'NutriFit',
          location: 'تطبيق موبايل',
          scopeOfWork: 'مدرب شخصي بالذكاء الاصطناعي يقدم خطط تمرين وتغذية مخصصة بناءً على بيانات المستخدم. تستخدم المنصة خوارزميات ذكية لإنشاء تجارب لياقة مخصصة مصممة خصيصاً للأهداف والتفضيلات الفردية.'
        },
        myClinicSystem: {
          name: 'My Clinic System (سيستم عيادتي)',
          location: 'تطبيق ويب وموبايل',
          scopeOfWork: 'أداة إدارة شاملة للأطباء للتعامل مع الحجوزات وأرشيفات المرضى والتقارير المالية. يبسط النظام عمليات العيادة مع إدارة آمنة لبيانات المرضى والجدولة الآلية.'
        }
      }
    },
    buttons: {
      getStarted: 'ابدأ الآن',
      sendMessage: 'إرسال الرسالة'
    },
    form: {
      name: 'الاسم :',
      email: 'البريد الإلكتروني :',
      subject: 'الموضوع :',
      message: 'الرسالة :'
    },
    contact: {
      contactUs: 'اتصل بنا',
      title: 'تواصل معنا !',
      description: 'تواصل مع ProCode Solutions. نحن هنا لمساعدتك في مشاريعك والإجابة على أي أسئلة قد تكون لديك.',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
      location: 'الموقع',
      whatsapp: 'تواصل عبر واتساب'
    },
    footer: {
      copyright: 'ProCode Solutions. جميع الحقوق محفوظة.'
    },
    clients: {
      title: 'عملاؤنا',
      subtitle: 'شركاؤنا الموثوقون',
      description: 'نفتخر بالعمل مع الشركات والمنظمات الرائدة في مختلف الصناعات.'
    },
    suppliersForm: {
      title: 'تسجيل الموردين',
      subtitle: 'انضم إلى شبكة موردينا المعتمدين',
      description: 'يرجى ملء النموذج أدناه لتسجيل شركتكم كمورد محتمل لـ ProCode Solutions.',
      companyName: 'اسم الشركة',
      commercialRegister: 'رقم السجل التجارى',
      employeeName: 'اسم الموظف المسئول',
      jobTitle: 'الوظيفة',
      phone: 'رقم الموبايل',
      products: 'المنتجات او الخدمات',
      submit: 'إرسال الطلب',
      invalidPhone: 'يرجى إدخال رقم موبايل مصري صحيح (مثال: 01012345678)'
    }
  }
}

// Helper function to update document direction
const updateDocumentDir = (lang) => {
  if (process.client) {
    const htmlTag = document.documentElement
    htmlTag.dir = lang === 'ar' ? 'rtl' : 'ltr'
    htmlTag.lang = lang
  }
}

export const useLanguage = () => {
  // Initialize from localStorage or default to 'en' (only once)
  if (process.client && !isInitialized) {
    const savedLang = localStorage.getItem('language') || 'en'
    currentLang.value = savedLang
    updateDocumentDir(savedLang)
    isInitialized = true
  }
  
  const isRTL = computed(() => currentLang.value === 'ar')

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[currentLang.value]
    
    for (const k of keys) {
      value = value?.[k]
      if (!value) break
    }
    
    return value || key
  }

  const setLanguage = (lang) => {
    currentLang.value = lang
    if (process.client) {
      localStorage.setItem('language', lang)
      updateDocumentDir(lang)
    }
  }

  const toggleLanguage = () => {
    const current = currentLang.value
    const newLang = current === 'en' ? 'ar' : 'en'
    console.log('Toggling language from', current, 'to', newLang)
    setLanguage(newLang)
  }

  // Watch for language changes and update document
  watch(currentLang, (newLang) => {
    if (process.client) {
      updateDocumentDir(newLang)
    }
  })

  return {
    currentLang: computed(() => currentLang.value),
    isRTL,
    t,
    setLanguage,
    toggleLanguage
  }
}

