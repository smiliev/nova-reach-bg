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
      icon: <FaRocket />,
      title: t('about.feature1Title'),
      description: t('about.feature1Desc'),
      color: 'bg-gradient-to-br from-pink-500 to-rose-600'
    },
    {
      icon: <FaChartLine />,
      title: t('about.feature2Title'),
      description: t('about.feature2Desc'),
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600'
    },
    {
      icon: <FaLightbulb />,
      title: t('about.feature3Title'),
      description: t('about.feature3Desc'),
      color: 'bg-gradient-to-br from-amber-500 to-orange-600'
    },
    {
      icon: <FaUsers />,
      title: t('about.feature4Title'),
      description: t('about.feature4Desc'),
      color: 'bg-gradient-to-br from-violet-500 to-purple-600'
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
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            {t('about.title')} <span className="text-gradient">{t('about.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('about.description')}
          </p>
        </motion.div>

        {/* Features - Compact horizontal layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start gap-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600 hover:border-dark-500 transition-all group"
            >
              <div className={`${feature.color} w-11 h-11 rounded-lg flex items-center justify-center text-white text-lg shrink-0 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-primary p-[1px] rounded-2xl max-w-3xl mx-auto"
        >
          <div className="bg-dark-700 rounded-2xl py-8 px-6">
            <div className="grid grid-cols-3 divide-x divide-dark-600">
              <div className="text-center px-4">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-1">80+</h3>
                <p className="text-gray-400 text-sm sm:text-base">{t('about.stat1')}</p>
              </div>
              <div className="text-center px-4">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-1">40+</h3>
                <p className="text-gray-400 text-sm sm:text-base">{t('about.stat2')}</p>
              </div>
              <div className="text-center px-4">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-1">3+</h3>
                <p className="text-gray-400 text-sm sm:text-base">{t('about.stat3')}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
