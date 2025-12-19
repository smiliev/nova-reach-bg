import { motion, AnimatePresence } from 'framer-motion'
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
  FaMobile,
  FaChevronDown,
  FaCheck
} from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [expandedIndex, setExpandedIndex] = useState(null)
  const { t } = useTranslation()

  const services = [
    {
      icon: <FaPalette />,
      title: t('services.branding.title'),
      description: t('services.branding.desc'),
      features: [t('services.branding.feature1'), t('services.branding.feature2'), t('services.branding.feature3'), t('services.branding.feature4')],
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: <FaCode />,
      title: t('services.web.title'),
      description: t('services.web.desc'),
      features: [t('services.web.feature1'), t('services.web.feature2'), t('services.web.feature3'), t('services.web.feature4')],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: <FaSearch />,
      title: t('services.seo.title'),
      description: t('services.seo.desc'),
      features: [t('services.seo.feature1'), t('services.seo.feature2'), t('services.seo.feature3'), t('services.seo.feature4')],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FaFacebook />,
      title: t('services.social.title'),
      description: t('services.social.desc'),
      features: [t('services.social.feature1'), t('services.social.feature2'), t('services.social.feature3'), t('services.social.feature4')],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: <FaGoogle />,
      title: t('services.performance.title'),
      description: t('services.performance.desc'),
      features: [t('services.performance.feature1'), t('services.performance.feature2'), t('services.performance.feature3'), t('services.performance.feature4')],
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: <FaEnvelope />,
      title: t('services.email.title'),
      description: t('services.email.desc'),
      features: [t('services.email.feature1'), t('services.email.feature2'), t('services.email.feature3'), t('services.email.feature4')],
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: <FaVideo />,
      title: t('services.creative.title'),
      description: t('services.creative.desc'),
      features: [t('services.creative.feature1'), t('services.creative.feature2'), t('services.creative.feature3'), t('services.creative.feature4')],
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <FaMobile />,
      title: t('services.digital.title'),
      description: t('services.digital.desc'),
      features: [t('services.digital.feature1'), t('services.digital.feature2'), t('services.digital.feature3'), t('services.digital.feature4')],
      color: 'from-teal-500 to-cyan-500'
    }
  ]

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section id="services" className="relative py-20 md:py-32 bg-dark-800 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-pink rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-cyan rounded-full blur-3xl"></div>
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            {t('services.title')} <span className="text-gradient">{t('services.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('services.description')}
          </p>
        </motion.div>

        {/* Accordion Services */}
        <div className="space-y-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div
                className={`
                  bg-dark-800 border rounded-xl overflow-hidden transition-all duration-300
                  ${expandedIndex === index ? 'border-primary-cyan' : 'border-dark-600 hover:border-dark-500'}
                `}
              >
                {/* Header - Always visible */}
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-lg shrink-0`}>
                      {service.icon}
                    </div>
                    <h3 className="font-semibold text-white text-base sm:text-lg">{service.title}</h3>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-gray-400"
                  >
                    <FaChevronDown />
                  </motion.div>
                </button>

                {/* Expandable Content */}
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pt-0">
                        <p className="text-gray-400 text-sm mb-4 pl-14">
                          {service.description}
                        </p>
                        <div className="grid grid-cols-2 gap-2 pl-14">
                          {service.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                              <FaCheck className={`text-xs bg-gradient-to-br ${service.color} bg-clip-text text-transparent shrink-0`} />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
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
