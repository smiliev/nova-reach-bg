import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  bg: {
    translation: {
      nav: {
        home: "Начало",
        about: "За нас",
        services: "услуги",
        portfolio: "Портфолио",
        contact: "Контакти",
        contactUs: "Свържи се с нас"
      },
      hero: {
        tagline: "Expand. Evolve. Explode.",
        subtitle: "Вашият доверен партньор за дигитален маркетинг и брандинг",
        requestQuote: "Заявка за оферта",
        ourServices: "Нашите услуги"
      },
      about: {
        title: "За",
        titleHighlight: "Nova Reach",
        description: "Ние сме дигитална маркетинг агенция, специализирана в създаването на иновативни решения, които помагат на бизнеса да расте и да се развива в съвременния дигитален свят.",
        feature1Title: "Иновативни решения",
        feature1Desc: "Използваме най-новите технологии и стратегии за максимален резултат",
        feature2Title: "Измерими резултати",
        feature2Desc: "Фокусираме се върху данните и постигаме конкретни бизнес цели",
        feature3Title: "Креативен подход",
        feature3Desc: "Създаваме уникално съдържание, което привлича и ангажира аудиторията",
        feature4Title: "Персонален подход",
        feature4Desc: "Работим в близка връзка с вас, като разбираме вашите цели и нужди",
        stat1: "Успешни проекта",
        stat2: "Доволни клиенти",
        stat3: "Години опит"
      },
      services: {
        title: "Нашите",
        titleHighlight: "услуги",
        description: "Предлагаме цялостни дигитални решения за вашия бизнес - от стратегия до изпълнение",
        cta: "Свържи се за безплатна консултация",
        branding: {
          title: "Branding",
          desc: "Създаваме силна визуална идентичност и стратегия за вашия бранд",
          feature1: "Лого дизайн",
          feature2: "Brand Identity",
          feature3: "Brand Strategy",
          feature4: "Визуални материали"
        },
        web: {
          title: "Web Development",
          desc: "Разработваме модерни, бързи и отзивчиви уебсайтове",
          feature1: "Уеб дизайн",
          feature2: "WordPress сайтове",
          feature3: "E-commerce",
          feature4: "Поддръжка"
        },
        seo: {
          title: "SEO оптимизация",
          desc: "Подобряваме видимостта на вашия сайт в търсачките",
          feature1: "On-Page SEO",
          feature2: "Off-Page SEO",
          feature3: "SEO одит",
          feature4: "Копирайтинг"
        },
        social: {
          title: "Social Media Marketing",
          desc: "Управление и реклама в социалните мрежи",
          feature1: "Facebook реклама",
          feature2: "Instagram реклама",
          feature3: "Content creation",
          feature4: "Community management"
        },
        performance: {
          title: "Performance Marketing",
          desc: "Ефективни рекламни кампании с измерими резултати",
          feature1: "Google Ads",
          feature2: "YouTube реклама",
          feature3: "Ремаркетинг",
          feature4: "Аналитика"
        },
        email: {
          title: "Email Marketing",
          desc: "Персонализирани имейл кампании за вашата аудитория",
          feature1: "Имейл кампании",
          feature2: "Автоматизация",
          feature3: "Сегментация",
          feature4: "A/B тестване"
        },
        creative: {
          title: "Creative Production",
          desc: "Производство на висококачествено визуално съдържание",
          feature1: "Видео продукция",
          feature2: "Фотография",
          feature3: "Графичен дизайн",
          feature4: "Анимации"
        },
        digital: {
          title: "Digital Innovations",
          desc: "Иновативни решения за вашия бизнес",
          feature1: "Мобилни приложения",
          feature2: "AR/VR опит",
          feature3: "Чатботове",
          feature4: "AI решения"
        }
      },
      portfolio: {
        title: "Нашето",
        titleHighlight: "портфолио",
        description: "Вижте някои от нашите успешни проекти и как помагаме на клиентите си да постигнат целите си",
        filterAll: "Всички",
        filterBranding: "Брандинг",
        filterWeb: "Уеб дизайн",
        filterMarketing: "Маркетинг",
        moreInfo: "Искате да видите повече примери? Свържете се с нас за пълното ни портфолио.",
        project1: {
          title: "E-commerce ритейл",
          desc: "Модерен онлайн магазин с висока конверсия"
        },
        project2: {
          title: "Tech Startup Brand",
          desc: "Пълна визуална идентичност за tech startup"
        },
        project3: {
          title: "Social Media кампания",
          desc: "Успешна кампания с 300% ROI"
        },
        project4: {
          title: "Корпоративен уебсайт",
          desc: "Професионален сайт за финансова компания"
        },
        project5: {
          title: "Ресторант брандинг",
          desc: "Цялостна визуална концепция за ресторантска верига"
        },
        project6: {
          title: "Google Ads кампания",
          desc: "Performance маркетинг за SaaS компания"
        }
      },
      contact: {
        title: "Свържете се",
        titleHighlight: "с нас",
        description: "Готови сме да обсъдим вашия проект и да ви помогнем да постигнете целите си",
        howToFind: "Как да ни намерите",
        email: "Email",
        phone: "Телефон",
        address: "Адрес",
        location: "Кюстендил, България",
        followUs: "Последвайте ни",
        readyTitle: "Готови за",
        readyHighlight: "експанзия",
        readyDesc: "Свържете се с нас днес и нека започнем да работим заедно върху вашия успех!",
        form: {
          name: "Име",
          email: "Email",
          phone: "Телефон",
          service: "Интересувате се от",
          selectService: "Изберете услуга",
          message: "Съобщение",
          namePlaceholder: "Вашето име",
          emailPlaceholder: "your@email.com",
          phonePlaceholder: "+359 888 123 456",
          messagePlaceholder: "Разкажете ни за вашия проект...",
          submit: "Изпратете запитване",
          sending: "Изпращане...",
          required: "*",
          successTitle: "Благодарим ви!",
          successMessage: "Вашето запитване беше изпратено успешно. Ще се свържем с вас скоро.",
          errorTitle: "Нещо се обърка",
          errorMessage: "Вашето съобщение не можа да бъде изпратено. Моля, опитайте отново или се свържете с нас директно.",
          sendAnother: "Изпратете друго съобщение",
          tryAgain: "Опитайте пак",
          services: {
            branding: "Branding",
            web: "Web Development",
            seo: "SEO оптимизация",
            social: "Social Media Marketing",
            performance: "Performance Marketing",
            email: "Email Marketing",
            creative: "Creative Production",
            other: "Друго"
          }
        }
      },
      footer: {
        tagline: "Вашият доверен партньор за дигитален маркетинг и брандинг.",
        services: "Услуги",
        company: "Компания",
        contacts: "Контакти",
        copyright: "Всички права запазени."
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        services: "Services",
        portfolio: "Portfolio",
        contact: "Contact",
        contactUs: "Contact Us"
      },
      hero: {
        tagline: "Expand. Evolve. Explode.",
        subtitle: "Your trusted partner for digital marketing and branding",
        requestQuote: "Request a Quote",
        ourServices: "Our Services"
      },
      about: {
        title: "About",
        titleHighlight: "Nova Reach",
        description: "We are a digital marketing agency specialized in creating innovative solutions that help businesses grow and thrive in the modern digital world.",
        feature1Title: "Innovative Solutions",
        feature1Desc: "We use the latest technologies and strategies for maximum results",
        feature2Title: "Measurable Results",
        feature2Desc: "We focus on data and achieve concrete business goals",
        feature3Title: "Creative Approach",
        feature3Desc: "We create unique content that attracts and engages the audience",
        feature4Title: "Personal Approach",
        feature4Desc: "We work closely with you, understanding your goals and needs",
        stat1: "Successful Projects",
        stat2: "Happy Clients",
        stat3: "Years of Experience"
      },
      services: {
        title: "Our",
        titleHighlight: "Services",
        description: "We offer comprehensive digital solutions for your business - from strategy to execution",
        cta: "Contact us for a free consultation",
        branding: {
          title: "Branding",
          desc: "We create strong visual identity and strategy for your brand",
          feature1: "Logo Design",
          feature2: "Brand Identity",
          feature3: "Brand Strategy",
          feature4: "Visual Materials"
        },
        web: {
          title: "Web Development",
          desc: "We develop modern, fast and responsive websites",
          feature1: "Web Design",
          feature2: "WordPress Sites",
          feature3: "E-commerce",
          feature4: "Maintenance"
        },
        seo: {
          title: "SEO Optimization",
          desc: "We improve your site's visibility in search engines",
          feature1: "On-Page SEO",
          feature2: "Off-Page SEO",
          feature3: "SEO Audit",
          feature4: "Copywriting"
        },
        social: {
          title: "Social Media Marketing",
          desc: "Social media management and advertising",
          feature1: "Facebook Ads",
          feature2: "Instagram Ads",
          feature3: "Content Creation",
          feature4: "Community Management"
        },
        performance: {
          title: "Performance Marketing",
          desc: "Effective advertising campaigns with measurable results",
          feature1: "Google Ads",
          feature2: "YouTube Ads",
          feature3: "Remarketing",
          feature4: "Analytics"
        },
        email: {
          title: "Email Marketing",
          desc: "Personalized email campaigns for your audience",
          feature1: "Email Campaigns",
          feature2: "Automation",
          feature3: "Segmentation",
          feature4: "A/B Testing"
        },
        creative: {
          title: "Creative Production",
          desc: "High-quality visual content production",
          feature1: "Video Production",
          feature2: "Photography",
          feature3: "Graphic Design",
          feature4: "Animations"
        },
        digital: {
          title: "Digital Innovations",
          desc: "Innovative solutions for your business",
          feature1: "Mobile Apps",
          feature2: "AR/VR Experience",
          feature3: "Chatbots",
          feature4: "AI Solutions"
        }
      },
      portfolio: {
        title: "Our",
        titleHighlight: "Portfolio",
        description: "See some of our successful projects and how we help our clients achieve their goals",
        filterAll: "All",
        filterBranding: "Branding",
        filterWeb: "Web Design",
        filterMarketing: "Marketing",
        moreInfo: "Want to see more examples? Contact us for our full portfolio.",
        project1: {
          title: "E-commerce Retail",
          desc: "Modern online store with high conversion"
        },
        project2: {
          title: "Tech Startup Brand",
          desc: "Complete visual identity for tech startup"
        },
        project3: {
          title: "Social Media Campaign",
          desc: "Successful campaign with 300% ROI"
        },
        project4: {
          title: "Corporate Website",
          desc: "Professional site for financial company"
        },
        project5: {
          title: "Restaurant Branding",
          desc: "Complete visual concept for restaurant chain"
        },
        project6: {
          title: "Google Ads Campaign",
          desc: "Performance marketing for SaaS company"
        }
      },
      contact: {
        title: "Get in",
        titleHighlight: "Touch",
        description: "We're ready to discuss your project and help you achieve your goals",
        howToFind: "How to Find Us",
        email: "Email",
        phone: "Phone",
        address: "Address",
        location: "Kyustendil, Bulgaria",
        followUs: "Follow Us",
        readyTitle: "Ready for",
        readyHighlight: "expansion",
        readyDesc: "Contact us today and let's start working together on your success!",
        form: {
          name: "Name",
          email: "Email",
          phone: "Phone",
          service: "Interested in",
          selectService: "Select a service",
          message: "Message",
          namePlaceholder: "Your name",
          emailPlaceholder: "your@email.com",
          phonePlaceholder: "+359 888 123 456",
          messagePlaceholder: "Tell us about your project...",
          submit: "Send Inquiry",
          sending: "Sending...",
          required: "*",
          successTitle: "Thank You!",
          successMessage: "Your inquiry has been sent successfully. We will contact you soon.",
          errorTitle: "Something Went Wrong",
          errorMessage: "Your message could not be sent. Please try again or contact us directly.",
          sendAnother: "Send Another Message",
          tryAgain: "Try Again",
          services: {
            branding: "Branding",
            web: "Web Development",
            seo: "SEO Optimization",
            social: "Social Media Marketing",
            performance: "Performance Marketing",
            email: "Email Marketing",
            creative: "Creative Production",
            other: "Other"
          }
        }
      },
      footer: {
        tagline: "Your trusted partner for digital marketing and branding.",
        services: "Services",
        company: "Company",
        contacts: "Contacts",
        copyright: "All rights reserved."
      }
    }
  }
}

// Get stored language or default to 'bg'
const storedLanguage = localStorage.getItem('language') || 'bg'

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: storedLanguage, // Use stored language or default
    fallbackLng: 'bg',
    interpolation: {
      escapeValue: false
    }
  })

// Save language to localStorage whenever it changes
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng)
})

export default i18n

