import { motion } from 'framer-motion'
import { FaArrowDown } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t, i18n } = useTranslation()
  const isBulgarian = i18n.language === 'bg'
  
  const scrollToAbout = () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-primary-pink/20 rounded-full blur-3xl"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-primary-cyan/20 rounded-full blur-3xl"></div>
        
        {/* Animated squares like the logo */}
        {/* <motion.div
          className="absolute top-20 right-20 w-8 h-8 bg-gradient-primary opacity-50"
          animate={{
            y: [0, 20, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        /> */}
        {/* <motion.div
          className="absolute top-40 right-40 w-6 h-6 bg-gradient-primary opacity-40"
          animate={{
            y: [0, -15, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <motion.div
          className="absolute top-32 right-60 w-4 h-4 bg-gradient-primary opacity-30"
          animate={{
            y: [0, 10, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        /> */}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src="/logo.png"
            alt="Nova Reach"
            className="h-32 sm:h-40 md:h-48 w-auto mx-auto mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`font-bold mb-6 max-w-5xl mx-auto ${
            isBulgarian 
              ? 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl' 
              : 'text-4xl sm:text-5xl md:text-7xl'
          }`}
        >
          <span className="text-gradient">{t('hero.tagline')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={`text-gray-300 mb-12 max-w-3xl mx-auto ${
            isBulgarian 
              ? 'text-lg sm:text-xl md:text-2xl' 
              : 'text-xl sm:text-2xl md:text-3xl'
          }`}
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center"
        >
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-4 bg-gradient-primary rounded-full text-white font-semibold text-lg shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(217, 34, 130, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            {t('hero.requestQuote')}
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator - Hidden on short viewports */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="hide-on-short-viewport absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToAbout}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-400 hover:text-primary-cyan transition-colors"
        >
          <FaArrowDown className="text-3xl" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

