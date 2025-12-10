import { ref, computed, watch } from 'vue'

// Language state - shared across all instances
const currentLang = ref('en')
let isInitialized = false

// Translations
const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About us',
      services: 'Services',
      portfolio: 'Portfolio',
      review: 'Review',
      pricing: 'Pricing',
      blog: 'Blog',
      contact: 'Contact us'
    },
    hero: {
      title: 'Welcome to ELSHARQUE',
      subtitle: 'Leading in MEP',
      description: 'We are one of the most prominent and leading companies in the MEP contracting and maintenance sector. We have successfully delivered major projects across the Egyptian market.'
    },
    about: {
      whoWeAre: 'Who We Are ?',
      title: 'ELSHARQUE FOR General Contracting and Maintenance',
      description: 'We are one of the most prominent and leading companies in the MEP contracting and maintenance sector. We have successfully delivered major projects across the Egyptian market, supported by a strong portfolio, an exceptional workforce, and outstanding after-sales service.',
      visionTitle: 'Vision',
      vision: 'Our vision is to always remain one of the national companies supporting the advancement of sustainable development in the field of construction and building.',
      missionTitle: 'Mission',
      mission: 'Assist in the development and construction of strategic, logistical, educational, residential, and commercial projects by recruiting and training a highly skilled and qualified workforce, helping to reduce unemployment in Egyptian society.',
      chairmanWord: {
        title: 'Chairman Word',
        greeting: 'Dear valued stakeholders,',
        paragraph1: 'As the chairman of our esteemed organization, I am delighted to address you. I am profoundly grateful for the trust you have bestowed upon us, enabling us to serve you and contribute to your prosperity.',
        paragraph2: 'Our strong vision and well-defined mission form the bedrock of our operations. We constantly innovate to surpass expectations and meet our customers\' evolving needs.',
        paragraph3: 'At EL-SHARQUE COMPANY, we believe success is built upon unwavering commitment, integrity, and excellence. Our exceptional team, coupled with cutting-edge technology, delivers projects of exceptional quality, on time and within budget.',
        paragraph4: 'We cherish our relationships with clients, partners, and stakeholders, committed to nurturing these connections for years to come. Your support inspires us to raise the bar even higher.',
        paragraph5: 'Thank you for your continued support and trust in EL-SHARQUE COMPANY. Together, let us continue to build a future that is powered by innovation, reliability, and excellence.',
        closing: 'Warm regards,',
        ceoName: 'Dr. ٍSara Eldaly ',
        ceoTitle: 'CEO',
        ceoSubtitle: 'Lecturer at Cairo University faculty of medicine'
      }
    },
    services: {
      whatWeDo: 'What We Do ?',
      title: 'Perfect Solution For Your Business',
      description: 'ELSHARQUE offers comprehensive solutions tailored to meet your business needs and drive success.',
      readMore: 'Read More',
      workProcess: 'Work Process',
      digitalSystem: 'Digital System For Our Business',
      digitalSystemDesc: 'Our digital systems and processes are designed to streamline your business operations and maximize efficiency.',
      electricalSystems: {
        name: 'Electrical Systems',
        desc: 'Supply, installation, commissioning, start-up, operation, and maintenance of all electrical systems (Power and light current).'
      },
      mechanicalSystems: {
        name: 'Mechanical Systems',
        desc: 'Supply, installation, commissioning, start-up, operation, and maintenance of all mechanical systems (HVAC, Firefighting, Plumbing and Medical Gas).'
      },
      buildingConstruction: {
        name: 'Building Construction',
        desc: 'Building construction and interior finishes with a commitment to quality and client satisfaction.'
      },
      infrastructureLandscaping: {
        name: 'Infrastructure & Landscaping',
        desc: 'Our company specializes in infrastructure networks and landscaping, providing comprehensive solutions with expertise and innovation.',
        fullDescription: 'Our company specializes in infrastructure networks and landscaping, providing comprehensive solutions with expertise and innovation.\n\nELSHARQUE is a leading specialist in the design and implementation of efficient and reliable plumbing systems. Our expertise covers a wide range of services, including: Domestic Water Supply network (incl. pumps, pipe network, heaters, fixtures), Drainage system (submersible pumps, pipe networks, fixtures, inspection chambers, manholes, Drain Points etc.), Swimming pool and water features.'
      },
      mepDesignBOQ: {
        name: 'MEP Design & BOQ',
        desc: 'Prepare all MEP design, Specs and BOQ with professional expertise and attention to detail.'
      },
      bim3DModeling: {
        name: 'BIM 3D Modeling',
        desc: 'Prepare all BIM 3D models from LOD 100 up to LOD 500 for comprehensive project visualization and planning.'
      },
      electricalLightCurrent: {
        name: 'Electrical & Light Current Systems',
        desc: 'ELSHARQUE is a premier provider of electrical and light current systems, offering cutting-edge solutions for a wide range of applications. Our expertise includes the design, installation, and maintenance of power distribution systems, lighting solutions, and advanced light current systems such as fire alarm, CCTV, access control, and data networks.',
        fullDescription: 'ELSHARQUE is a premier provider of electrical and light current systems, offering cutting-edge solutions for a wide range of applications. Our expertise includes the design, installation, and maintenance of power distribution systems, lighting solutions, and advanced light current systems such as fire alarm, CCTV, access control, and data networks. With a focus on innovation, safety, and efficiency, we deliver tailored solutions that meet the unique demands of residential, commercial, and industrial projects.'
      },
      hvacFirefighting: {
        name: 'HVAC & Firefighting Systems',
        desc: 'ELSHARQUE company is a leading provider of comprehensive HVAC solutions, specializing in the design, installation, and maintenance of advanced climate control systems. We are also a trusted leader in the design, installation, and maintenance of advanced fire-fighting systems, providing comprehensive solutions tailored to meet the highest safety standards.',
        fullDescription: 'ELSHARQUE company is a leading provider of comprehensive HVAC solutions, specializing in the design, installation, and maintenance of advanced climate control systems. Our expertise spans a wide range of technologies, including: DX split units, chilled water systems, VRV/VRF systems, Smoke control, Ventilation systems, ETS system.\n\nELSHARQUE is a trusted leader in the design, installation, and maintenance of advanced fire-fighting systems. We specialize in providing comprehensive solutions tailored to meet the highest safety standards, including water-based systems such as sprinklers and fire hose cabinets, clean agent systems like: FM200 and CO2, water mist, foam systems, Water sprinkler system, AEROSOL SYSTEM.'
      },
      plumbingInfrastructure: {
        name: 'Plumbing & Infrastructure',
        desc: 'ELSHARQUE is a leading specialist in the design and implementation of efficient and reliable plumbing systems. Our expertise covers domestic water supply networks, drainage systems, swimming pools, and water features. We also specialize in infrastructure networks and landscaping, providing comprehensive solutions with expertise and innovation.'
      }
    },
    portfolio: {
      title: 'Portfolio',
      subtitle: 'Elsharque Works & Projects',
      description: 'Explore our portfolio of successful projects and see how Elsharque delivers excellence in every endeavor.',
      viewPortfolio: 'View Portfolio',
      readyToStart: 'Ready to start your next project with Elsharque?',
      contactToday: 'Contact us today and let Elsharque help you achieve your goals with our expertise and innovative solutions.',
      projectName: 'Project',
      projectCategory: 'Category',
      previousProjects: 'Previous Projects',
      projects: [
        'Onion Factory - Dabaa - Mostakbal Misr Agency',
        'Andalus Garage (Monorail Garage) - Fifth Settlement - National Company',
        'Administrative Building - 90th Street - Fifth Settlement - National Company',
        'Electromechanical Networks - Mostakbal Misr Agency Management - Dabaa - Mostakbal Misr Agency',
        'Officers Hotel - Dabaa - Mostakbal Misr Agency',
        'Taj City Mall - Nasr City',
        'Fustat Garden Pumps',
        'Administrative Building - Kinda - Taj City',
        'Public Service Building - New Valley',
        'Court Complex Pumps - New Valley',
        'Residential Towers - New Administrative Capital',
        'Basements and Residential Towers - Nasr City',
        'National Bank - Maadi',
        'Residential Towers - Fifth Settlement',
        'Residential Towers - El Alamein'
      ],
      projectDetails: {
        projectDetail: 'Project Detail',
        projectInfo: 'Project Info',
        location: 'Location',
        scopeOfWork: 'Scope of Work',
        client: 'Client',
        category: 'Category',
        date: 'Date',
        haveQuestion: 'Have Question ? Get in touch!',
        contactUs: 'Contact us',
        mostakbalMasr: {
          name: 'Mostakbal Massr, Dabaa, Egypt',
          location: 'Mostakbal Massr, Dabaa, Egypt',
          scope1: {
            title: 'Site Networks',
            items: [
              'SEWAGE NETWORK AND MANHOLES',
              'WATER NETWORK',
              'IRRIGATION NETWORK',
              'FIRE FIGHTING NETWORK',
              'ALL VALVE CHAMBER'
            ]
          },
          scope2: {
            title: 'Building Firefighting Works',
            description: 'Supply, install, commissioning, start-up and operation all building firefighting works.'
          },
          scope3: {
            title: 'Hotel Building - Firefighting Works',
            description: 'Supply, install, commissioning, start-up and operation all building firefighting works.'
          }
        },
        monorailGarage: {
          name: 'Monorail Garage, Cairo, Egypt',
          location: 'Monorail Garage, Cairo, Egypt',
          scopeOfWork: 'Supply, install, commissioning, start-up and operation of fire alarm and firefighting works in the site.'
        },
        administration90th: {
          name: 'Administration building, 90th Street Fifth Settlement, Egypt',
          location: 'Administration building, 90th Street Fifth Settlement, Egypt',
          scopeOfWork: 'Supply, install, commissioning, start-up and operation of Aerosol system including fire alarm system.'
        },
        newAdminCapital: {
          name: 'New Administrative Capital, Egypt',
          location: 'New Administrative Capital, Egypt',
          scopeOfWork: 'Supply, install, commissioning, start-up and operation of firefighting works in the site layout with total piping length 5000 m. all pipes from HDPE PN 16. The project was consisting of 48 dry fire hydrant (3-way).'
        },
        newDamietta: {
          name: 'New Damietta, Egypt',
          location: 'New Damietta, Egypt',
          scopeOfWork: 'Supply, install, commissioning, start-up and operation of all infrastructure works (Sewage, Irrigation and Firefighting) in the site layout with total piping length 2150 m. firefighting pipes from HDPE PN 16. Sewage pipes from UPVC PN 10. The project was consisting of 79 sewage manhole and 15 catch basins.'
        },
        newAdminCapitalPumps: {
          name: 'New Administrative Capital, Egypt',
          location: 'New Administrative Capital, Egypt',
          scopeOfWork: 'Supply, install, commissioning, start-up and operation of 5 set of booster pumps and 11 set of submersible pumps.'
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
      description: 'Get in touch with Elsharque. We\'re here to help you with your projects and answer any questions you may have.',
      phone: 'Phone',
      email: 'Email',
      location: 'Location'
    },
    footer: {
      copyright: 'ELSHARQUE FOR General Contracting and Maintenance. All rights reserved.'
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'الخدمات',
      portfolio: 'المشاريع',
      review: 'التقييمات',
      pricing: 'الأسعار',
      blog: 'المدونة',
      contact: 'اتصل بنا'
    },
    hero: {
      title: 'مرحباً بكم في الشرق',
      subtitle: 'الريادة في الميكانيكا والكهرباء',
      description: 'نحن واحدة من أبرز الشركات الرائدة في قطاع المقاولات والصيانة للميكانيكا والكهرباء. لقد نجحنا في تنفيذ مشاريع كبرى في السوق المصري.'
    },
    about: {
      whoWeAre: 'من نحن ؟',
      title: 'الشرق للمقاولات العامة والصيانة',
      description: 'نحن واحدة من أبرز الشركات الرائدة في قطاع المقاولات والصيانة للميكانيكا والكهرباء. لقد نجحنا في تنفيذ مشاريع كبرى في السوق المصري، مدعومين بمحفظة قوية، وقوة عاملة استثنائية، وخدمة ما بعد البيع المتميزة.',
      visionTitle: 'الرؤية',
      vision: 'رؤيتنا هي أن نبقى دائماً واحدة من الشركات الوطنية التي تدعم تقدم التنمية المستدامة في مجال البناء والتشييد.',
      missionTitle: 'الرسالة',
      mission: 'المساعدة في تطوير وبناء المشاريع الاستراتيجية واللوجستية والتعليمية والسكنية والتجارية من خلال تجنيد وتدريب قوة عاملة عالية المهارة ومؤهلة، مما يساعد على تقليل البطالة في المجتمع المصري.',
      chairmanWord: {
        title: 'كلمة رئيس مجلس الإدارة',
        greeting: 'أعزائي أصحاب المصلحة الكرام،',
        paragraph1: 'بصفتي رئيس مجلس إدارة منظمتنا الموقرة، يسعدني أن أتحدث إليكم. أنا ممتن بعمق للثقة التي أوليتمونا إياها، مما مكننا من خدمتكم والمساهمة في ازدهاركم.',
        paragraph2: 'رؤيتنا القوية ومهمتنا المحددة بوضوح تشكلان الأساس لعملياتنا. نحن نبتكر باستمرار لتجاوز التوقعات وتلبية احتياجات عملائنا المتطورة.',
        paragraph3: 'في شركة الشرق، نؤمن بأن النجاح يُبنى على الالتزام الثابت والنزاهة والتميز. فريقنا الاستثنائي، إلى جانب التكنولوجيا المتطورة، يقدم مشاريع بجودة استثنائية، في الوقت المحدد وفي حدود الميزانية.',
        paragraph4: 'نحن نعتز بعلاقاتنا مع العملاء والشركاء وأصحاب المصلحة، ملتزمون برعاية هذه الروابط لسنوات قادمة. دعمكم يلهمنا لرفع المعايير إلى مستوى أعلى.',
        paragraph5: 'شكراً لكم على دعمكم المستمر وثقتكم في شركة الشرق. معاً، دعونا نواصل بناء مستقبل مدعوم بالابتكار والموثوقية والتميز.',
        closing: 'مع أطيب التحيات،',
        ceoName: 'م.د / أحمد خالد',
        ceoTitle: 'رئيس مجلس الإدارة',
        ceoSubtitle: 'مدرس بكلية الهندسة، جامعة المنوفية'
      }
    },
    services: {
      whatWeDo: 'ماذا نفعل ؟',
      title: 'الحل المثالي لعملك',
      description: 'تقدم الشرق حلولاً شاملة مصممة خصيصاً لتلبية احتياجات عملك وتحقيق النجاح.',
      readMore: 'اقرأ المزيد',
      workProcess: 'عملية العمل',
      digitalSystem: 'النظام الرقمي لأعمالنا',
      digitalSystemDesc: 'تم تصميم أنظمتنا وعملياتنا الرقمية لتبسيط عمليات عملك وتعظيم الكفاءة.',
      electricalSystems: {
        name: 'الأنظمة الكهربائية',
        desc: 'توريد وتركيب وتشغيل وبدء التشغيل والتشغيل والصيانة لجميع الأنظمة الكهربائية (الطاقة والتيار الضعيف).'
      },
      mechanicalSystems: {
        name: 'الأنظمة الميكانيكية',
        desc: 'توريد وتركيب وتشغيل وبدء التشغيل والتشغيل والصيانة لجميع الأنظمة الميكانيكية (التكييف، مكافحة الحرائق، السباكة والغاز الطبي).'
      },
      buildingConstruction: {
        name: 'بناء المباني',
        desc: 'بناء المباني والتشطيبات الداخلية مع الالتزام بالجودة ورضا العملاء.'
      },
      infrastructureLandscaping: {
        name: 'البنية التحتية والمسطحات الخضراء',
        desc: 'تتخصص شركتنا في شبكات البنية التحتية والمسطحات الخضراء، وتقديم حلول شاملة بخبرة وابتكار.',
        fullDescription: 'تتخصص شركتنا في شبكات البنية التحتية والمسطحات الخضراء، وتقديم حلول شاملة بخبرة وابتكار.\n\nالشرق هي متخصص رائد في تصميم وتنفيذ أنظمة السباكة الفعالة والموثوقة. تشمل خبرتنا مجموعة واسعة من الخدمات، بما في ذلك: شبكة إمداد المياه المنزلية (بما في ذلك المضخات، شبكة الأنابيب، السخانات، التركيبات)، نظام الصرف (المضخات الغاطسة، شبكات الأنابيب، التركيبات، غرف التفتيش، فتحات التفتيش، نقاط الصرف، إلخ)، المسابح والميزات المائية.'
      },
      mepDesignBOQ: {
        name: 'تصميم الميكانيكا والكهرباء وقائمة الكميات',
        desc: 'إعداد جميع تصميمات الميكانيكا والكهرباء والمواصفات وقوائم الكميات بخبرة مهنية واهتمام بالتفاصيل.'
      },
      bim3DModeling: {
        name: 'النمذجة ثلاثية الأبعاد BIM',
        desc: 'إعداد جميع نماذج BIM ثلاثية الأبعاد من LOD 100 حتى LOD 500 لتصور وتخطيط شامل للمشروع.'
      },
      electricalLightCurrent: {
        name: 'الأنظمة الكهربائية والتيار الضعيف',
        desc: 'الشرق هي مزود رائد للأنظمة الكهربائية والتيار الضعيف، وتقدم حلولاً متطورة لمجموعة واسعة من التطبيقات. تشمل خبرتنا تصميم وتركيب وصيانة أنظمة توزيع الطاقة، وحلول الإضاءة، والأنظمة المتقدمة للتيار الضعيف مثل إنذار الحريق، والكاميرات، والتحكم في الوصول، وشبكات البيانات.',
        fullDescription: 'الشرق هي مزود رائد للأنظمة الكهربائية والتيار الضعيف، وتقدم حلولاً متطورة لمجموعة واسعة من التطبيقات. تشمل خبرتنا تصميم وتركيب وصيانة أنظمة توزيع الطاقة، وحلول الإضاءة، والأنظمة المتقدمة للتيار الضعيف مثل إنذار الحريق، والكاميرات، والتحكم في الوصول، وشبكات البيانات. مع التركيز على الابتكار والسلامة والكفاءة، نقدم حلولاً مخصصة تلبي المتطلبات الفريدة للمشاريع السكنية والتجارية والصناعية.'
      },
      hvacFirefighting: {
        name: 'أنظمة التكييف ومكافحة الحرائق',
        desc: 'شركة الشرق هي مزود رائد لحلول التكييف الشاملة، متخصصة في تصميم وتركيب وصيانة أنظمة التحكم في المناخ المتقدمة. نحن أيضاً قائد موثوق في تصميم وتركيب وصيانة أنظمة مكافحة الحرائق المتقدمة، وتقديم حلول شاملة مصممة خصيصاً لتلبية أعلى معايير السلامة.',
        fullDescription: 'شركة الشرق هي مزود رائد لحلول التكييف الشاملة، متخصصة في تصميم وتركيب وصيانة أنظمة التحكم في المناخ المتقدمة. تمتد خبرتنا عبر مجموعة واسعة من التقنيات، بما في ذلك: وحدات DX المنفصلة، أنظمة المياه المبردة، أنظمة VRV/VRF، التحكم في الدخان، أنظمة التهوية، نظام ETS.\n\nالشرق هي قائد موثوق في تصميم وتركيب وصيانة أنظمة مكافحة الحرائق المتقدمة. نتخصص في تقديم حلول شاملة مصممة خصيصاً لتلبية أعلى معايير السلامة، بما في ذلك الأنظمة القائمة على الماء مثل الرشاشات وخزانات خراطيم الحريق، وأنظمة العوامل النظيفة مثل: FM200 و CO2، رذاذ الماء، أنظمة الرغوة، نظام رشاشات الماء، نظام الهباء الجوي.'
      },
      plumbingInfrastructure: {
        name: 'السباكة والبنية التحتية',
        desc: 'الشرق هي متخصص رائد في تصميم وتنفيذ أنظمة السباكة الفعالة والموثوقة. تشمل خبرتنا شبكات إمداد المياه المنزلية، وأنظمة الصرف، والمسابح، والنوافير. كما نتخصص في شبكات البنية التحتية والمسطحات الخضراء، وتقديم حلول شاملة بخبرة وابتكار.'
      }
    },
    portfolio: {
      title: 'المشاريع',
      subtitle: 'أعمال ومشاريع الشرق',
      description: 'استكشف محفظة مشاريعنا الناجحة وشاهد كيف تقدم الشرق التميز في كل مسعى.',
      viewPortfolio: 'عرض المشاريع',
      readyToStart: 'هل أنت مستعد لبدء مشروعك القادم مع الشرق؟',
      contactToday: 'اتصل بنا اليوم ودع الشرق تساعدك في تحقيق أهدافك بخبرتنا وحلولنا المبتكرة.',
      projectName: 'مشروع',
      projectCategory: 'فئة',
      previousProjects: 'المشاريع السابقة',
      projects: [
        'مصنع البصل – الضبعة – جهاز مستقبل مصر',
        'جراج الأندلس (جراج المونوريل) – التجمع الخامس – شركة وطنية',
        'مبنى إداري شارع التسعين – التجمع الخامس – شركة وطنية',
        'شبكات كهروميكانيك إدارة جهاز مستقبل مصر – الضبعة – جهاز مستقبل مصر',
        'فندق الضباط – الضبعة – جهاز مستقبل مصر',
        'مول تاج سيتي – مدينة نصر',
        'طلمبات حديقة الفسطاط',
        'مبنى إداري – كيندا – تاج سيتي',
        'مبنى التعامل مع الجمهور – الوادي الجديد',
        'طلمبات مجمع المحاكم – الوادي الجديد',
        'أبراج سكنية – العاصمة الإدارية',
        'بدرومات وأبراج سكنية – مدينة نصر',
        'البنك الأهلي – المعادي',
        'أبراج سكنية – التجمع الخامس',
        'أبراج سكنية – العلمين'
      ],
      projectDetails: {
        projectDetail: 'تفاصيل المشروع',
        projectInfo: 'معلومات المشروع',
        location: 'الموقع',
        scopeOfWork: 'نطاق العمل',
        client: 'العميل',
        category: 'الفئة',
        date: 'التاريخ',
        haveQuestion: 'هل لديك سؤال؟ تواصل معنا!',
        contactUs: 'اتصل بنا',
        mostakbalMasr: {
          name: 'مستقبل مصر، الضبعة، مصر',
          location: 'مستقبل مصر، الضبعة، مصر',
          scope1: {
            title: 'شبكات الموقع',
            items: [
              'شبكة الصرف الصحي والفتحات',
              'شبكة المياه',
              'شبكة الري',
              'شبكة مكافحة الحرائق',
              'جميع غرف الصمامات'
            ]
          },
          scope2: {
            title: 'أعمال مكافحة الحرائق للمباني',
            description: 'توريد وتركيب وتشغيل وبدء التشغيل والتشغيل لجميع أعمال مكافحة الحرائق للمباني.'
          },
          scope3: {
            title: 'مبنى الفندق - أعمال مكافحة الحرائق',
            description: 'توريد وتركيب وتشغيل وبدء التشغيل والتشغيل لجميع أعمال مكافحة الحرائق للمباني.'
          }
        },
        monorailGarage: {
          name: 'جراج المونوريل، القاهرة، مصر',
          location: 'جراج المونوريل، القاهرة، مصر',
          scopeOfWork: 'توريد وتركيب وتشغيل وبدء التشغيل والتشغيل لأعمال إنذار الحريق ومكافحة الحرائق في الموقع.'
        },
        administration90th: {
          name: 'مبنى إداري، شارع التسعين، التجمع الخامس، مصر',
          location: 'مبنى إداري، شارع التسعين، التجمع الخامس، مصر',
          scopeOfWork: 'توريد وتركيب وتشغيل وبدء التشغيل والتشغيل لنظام الهباء الجوي بما في ذلك نظام إنذار الحريق.'
        },
        newAdminCapital: {
          name: 'العاصمة الإدارية الجديدة، مصر',
          location: 'العاصمة الإدارية الجديدة، مصر',
          scopeOfWork: 'توريد وتركيب وتشغيل وبدء التشغيل والتشغيل لأعمال مكافحة الحرائق في تخطيط الموقع بطول إجمالي للأنابيب 5000 متر. جميع الأنابيب من HDPE PN 16. يتكون المشروع من 48 صنبور حريق جاف (3 اتجاهات).'
        },
        newDamietta: {
          name: 'دمياط الجديدة، مصر',
          location: 'دمياط الجديدة، مصر',
          scopeOfWork: 'توريد وتركيب وتشغيل وبدء التشغيل والتشغيل لجميع أعمال البنية التحتية (الصرف الصحي والري ومكافحة الحرائق) في تخطيط الموقع بطول إجمالي للأنابيب 2150 متر. أنابيب مكافحة الحرائق من HDPE PN 16. أنابيب الصرف الصحي من UPVC PN 10. يتكون المشروع من 79 فتحة صرف صحي و 15 حوض تجميع.'
        },
        newAdminCapitalPumps: {
          name: 'العاصمة الإدارية الجديدة، مصر',
          location: 'العاصمة الإدارية الجديدة، مصر',
          scopeOfWork: 'توريد وتركيب وتشغيل وبدء التشغيل والتشغيل لـ 5 مجموعات من المضخات المعززة و 11 مجموعة من المضخات الغاطسة.'
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
      description: 'تواصل مع الشرق. نحن هنا لمساعدتك في مشاريعك والإجابة على أي أسئلة قد تكون لديك.',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
      location: 'الموقع'
    },
    footer: {
      copyright: 'الشرق للمقاولات العامة والصيانة. جميع الحقوق محفوظة.'
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

