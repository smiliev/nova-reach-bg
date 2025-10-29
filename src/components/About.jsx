import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaRocket, FaChartLine, FaLightbulb, FaUsers } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useTranslation()

  const features = [
    {
      icon: <FaRocket className="text-4xl" />,
      title: t('about.feature1Title'),
      description: t('about.feature1Desc')
    },
    {
      icon: <FaChartLine className="text-4xl" />,
      title: t('about.feature2Title'),
      description: t('about.feature2Desc')
    },
    {
      icon: <FaLightbulb className="text-4xl" />,
      title: t('about.feature3Title'),
      description: t('about.feature3Desc')
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: t('about.feature4Title'),
      description: t('about.feature4Desc')
    }
  ]

  return (
    <section id="about" className="relative py-20 md:py-32 bg-dark-800 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-pink rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-cyan rounded-full blur-3xl"></div>
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            {t('about.title')} <span className="text-gradient">{t('about.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('about.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-dark-700 p-6 rounded-2xl border border-dark-600 hover:border-primary-cyan transition-all"
            >
              <div className="text-gradient mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-primary p-1 rounded-3xl"
        >
          <div className="bg-dark-700 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-5xl font-bold text-gradient mb-2">80+</h3>
                <p className="text-gray-300">{t('about.stat1')}</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold text-gradient mb-2">40+</h3>
                <p className="text-gray-300">{t('about.stat2')}</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold text-gradient mb-2">3+</h3>
                <p className="text-gray-300">{t('about.stat3')}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

