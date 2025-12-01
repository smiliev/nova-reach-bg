import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <div className="flex items-center gap-1 p-1 bg-dark-700/50 rounded-lg border border-dark-600">
      <motion.button
        onClick={() => changeLanguage('bg')}
        className={`w-9 h-9 rounded flex items-center justify-center text-2xl transition-all ${
          i18n.language === 'bg'
            ? 'bg-gradient-primary'
            : 'opacity-50 hover:opacity-100'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Български"
      >
        🇧🇬
      </motion.button>
      <motion.button
        onClick={() => changeLanguage('en')}
        className={`w-9 h-9 rounded flex items-center justify-center text-2xl transition-all ${
          i18n.language === 'en'
            ? 'bg-gradient-primary'
            : 'opacity-50 hover:opacity-100'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="English"
      >
      🇪🇳
      </motion.button>
    </div>
  )
}

export default LanguageSwitcher

