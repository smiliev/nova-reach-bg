import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000)
    } else if (consent === 'accepted' && window.fbq) {
      // If previously accepted, grant consent to Meta Pixel
      window.fbq('consent', 'grant')
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setShowBanner(false)
    
    // Grant consent to Meta Pixel
    if (window.fbq) {
      window.fbq('consent', 'grant')
      // Re-track PageView with consent
      window.fbq('track', 'PageView')
    }
  }

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setShowBanner(false)
    
    // Keep consent revoked for Meta Pixel (already set in index.html)
    if (window.fbq) {
      window.fbq('consent', 'revoke')
    }
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-dark-800/95 backdrop-blur-md border-t border-dark-600 p-4 shadow-2xl"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex-1">
                <p className="text-gray-300 text-sm sm:text-base">
                  🍪 {t('cookies.message')}
                </p>
              </div>
              <div className="flex gap-3 w-full sm:w-auto">
                <motion.button
                  onClick={declineCookies}
                  className="flex-1 sm:flex-none px-6 py-2.5 border border-gray-600 rounded-lg text-white hover:bg-dark-700 transition-colors text-sm font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t('cookies.decline')}
                </motion.button>
                <motion.button
                  onClick={acceptCookies}
                  className="flex-1 sm:flex-none px-6 py-2.5 bg-gradient-primary rounded-lg text-white font-semibold hover:opacity-90 transition-opacity text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t('cookies.accept')}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CookieConsent

