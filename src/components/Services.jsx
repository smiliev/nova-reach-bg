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
import { useTranslation } from 'react-i18next'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const { t } = useTranslation()

  const services = [
    {
      icon: <FaPalette className="text-5xl" />,
      title: t('services.branding.title'),
      description: t('services.branding.desc'),
      features: [t('services.branding.feature1'), t('services.branding.feature2'), t('services.branding.feature3'), t('services.branding.feature4')]
    },
    {
      icon: <FaCode className="text-5xl" />,
      title: t('services.web.title'),
      description: t('services.web.desc'),
      features: [t('services.web.feature1'), t('services.web.feature2'), t('services.web.feature3'), t('services.web.feature4')]
    },
    {
      icon: <FaSearch className="text-5xl" />,
      title: t('services.seo.title'),
      description: t('services.seo.desc'),
      features: [t('services.seo.feature1'), t('services.seo.feature2'), t('services.seo.feature3'), t('services.seo.feature4')]
    },
    {
      icon: <FaFacebook className="text-5xl" />,
      title: t('services.social.title'),
      description: t('services.social.desc'),
      features: [t('services.social.feature1'), t('services.social.feature2'), t('services.social.feature3'), t('services.social.feature4')]
    },
    {
      icon: <FaGoogle className="text-5xl" />,
      title: t('services.performance.title'),
      description: t('services.performance.desc'),
      features: [t('services.performance.feature1'), t('services.performance.feature2'), t('services.performance.feature3'), t('services.performance.feature4')]
    },
    {
      icon: <FaEnvelope className="text-5xl" />,
      title: t('services.email.title'),
      description: t('services.email.desc'),
      features: [t('services.email.feature1'), t('services.email.feature2'), t('services.email.feature3'), t('services.email.feature4')]
    },
    {
      icon: <FaVideo className="text-5xl" />,
      title: t('services.creative.title'),
      description: t('services.creative.desc'),
      features: [t('services.creative.feature1'), t('services.creative.feature2'), t('services.creative.feature3'), t('services.creative.feature4')]
    },
    {
      icon: <FaMobile className="text-5xl" />,
      title: t('services.digital.title'),
      description: t('services.digital.desc'),
      features: [t('services.digital.feature1'), t('services.digital.feature2'), t('services.digital.feature3'), t('services.digital.feature4')]
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
            {t('services.title')} <span className="text-gradient">{t('services.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('services.description')}
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
            {t('services.cta')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services

