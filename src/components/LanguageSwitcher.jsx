import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FaGlobe } from 'react-icons/fa'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'bg' ? 'en' : 'bg'
    i18n.changeLanguage(newLang)
  }

  return (
    <motion.button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-dark-700 hover:bg-dark-600 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title="Change Language / Смени език"
    >
      <FaGlobe className="text-primary-cyan" />
      <span className="text-white font-semibold uppercase">
        {i18n.language === 'bg' ? 'EN' : 'BG'}
      </span>
    </motion.button>
  )
}

export default LanguageSwitcher

