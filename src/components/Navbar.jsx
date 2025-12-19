import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

const Navbar = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()

  const navItems = [
    { name: t('nav.home'), href: '#hero' },
    { name: t('nav.services'), href: '#services' },
    // { name: t('nav.portfolio'), href: '#portfolio' },
    { name: t('nav.videos'), href: '#videos' },
    { name: t('nav.reviews'), href: '#reviews' },
    { name: t('nav.contact'), href: '#contact' },
    { name: t('nav.about'), href: '#about' },
  ]

  const scrollToSection = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/logo.png" alt="Nova Reach" className="h-14 w-auto" />
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-gray-200 hover:text-white transition-colors relative group font-medium text-base"
                whileHover={{ y: -2 }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="px-7 py-2.5 bg-gradient-primary rounded-full text-white font-semibold text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('nav.contactUs')}
            </motion.a>
          </div>

          {/* Language Switcher - Separate on the right */}
          <div className="hidden lg:block">
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button & Language Switcher */}
          <div className="lg:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <button
              className="text-white text-3xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dark-800/95 backdrop-blur-md"
          >
            <div className="px-6 py-8 space-y-5">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="block text-gray-200 hover:text-white transition-colors py-2 font-medium text-xl"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="block w-full px-6 py-4 bg-gradient-primary rounded-full text-white font-semibold text-center text-lg mt-4"
              >
                {t('nav.contactUs')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar

