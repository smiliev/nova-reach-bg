import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  FaPalette, 
  FaCode, 
  FaSearch, 
  FaFacebook, 
  FaGoogle, 
  FaEnvelope,
  FaVideo,
  FaMobile
} from 'react-icons/fa'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const services = [
    {
      icon: <FaPalette className="text-5xl" />,
      title: 'Branding',
      description: 'Създаваме силна визуална идентичност и стратегия за вашия бранд',
      features: ['Лого дизайн', 'Brand Identity', 'Brand Strategy', 'Визуални материали']
    },
    {
      icon: <FaCode className="text-5xl" />,
      title: 'Web Development',
      description: 'Разработваме модерни, бързи и отзивчиви уебсайтове',
      features: ['Уеб дизайн', 'WordPress сайтове', 'E-commerce', 'Поддръжка']
    },
    {
      icon: <FaSearch className="text-5xl" />,
      title: 'SEO оптимизация',
      description: 'Подобряваме видимостта на вашия сайт в търсачките',
      features: ['On-Page SEO', 'Off-Page SEO', 'SEO одит', 'Копирайтинг']
    },
    {
      icon: <FaFacebook className="text-5xl" />,
      title: 'Social Media Marketing',
      description: 'Управление и реклама в социалните мрежи',
      features: ['Facebook реклама', 'Instagram реклама', 'Content creation', 'Community management']
    },
    {
      icon: <FaGoogle className="text-5xl" />,
      title: 'Performance Marketing',
      description: 'Ефективни рекламни кампании с измерими резултати',
      features: ['Google Ads', 'YouTube реклама', 'Ремаркетинг', 'Аналитика']
    },
    {
      icon: <FaEnvelope className="text-5xl" />,
      title: 'Email Marketing',
      description: 'Персонализирани имейл кампании за вашата аудитория',
      features: ['Имейл кампании', 'Автоматизация', 'Сегментация', 'A/B тестване']
    },
    {
      icon: <FaVideo className="text-5xl" />,
      title: 'Creative Production',
      description: 'Производство на висококачествено визуално съдържание',
      features: ['Видео продукция', 'Фотография', 'Графичен дизайн', 'Анимации']
    },
    {
      icon: <FaMobile className="text-5xl" />,
      title: 'Digital Innovations',
      description: 'Иновативни решения за вашия бизнес',
      features: ['Мобилни приложения', 'AR/VR опит', 'Чатботове', 'AI решения']
    }
  ]

  return (
    <section id="services" className="relative py-20 md:py-32 bg-dark-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-pink rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-cyan rounded-full blur-3xl"></div>
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Нашите <span className="text-gradient">услуги</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Предлагаме цялостни дигитални решения за вашия бизнес - от стратегия до изпълнение
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group"
            >
              <div className={`
                h-full bg-dark-800 border border-dark-600 rounded-2xl p-6
                transition-all duration-300
                ${hoveredIndex === index ? 'border-transparent' : ''}
              `}>
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="hoverBackground"
                    className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
                <div className="relative z-10">
                  <div className="text-gradient mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-500 flex items-center">
                        <span className="w-1.5 h-1.5 bg-gradient-primary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-block px-8 py-4 bg-gradient-primary rounded-full text-white font-semibold text-lg shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(217, 34, 130, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Свържи се за безплатна консултация
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services

