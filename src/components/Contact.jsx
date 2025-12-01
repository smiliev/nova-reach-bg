import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [submitStatus, setSubmitStatus] = useState('idle') // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitStatus('submitting')
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'c719e2cb-94ff-4cd7-bc4d-b7018b7573d9',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          subject: `Nova Reach - New inquiry from ${formData.name}`
        })
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    }
  }

  const resetForm = () => {
    setSubmitStatus('idle')
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
  }

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: t('contact.email'),
      info: 'novareach2025@gmail.com',
      link: 'mailto:novareach2025@gmail.com'
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: t('contact.phone'),
      info: '+359 895 613 162',
      link: 'tel:+359895613162'
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: t('contact.address'),
      info: t('contact.location'),
      link: null
    }
  ]

  const socialLinks = [
    { icon: <FaFacebook className="text-2xl" />, link: 'https://www.facebook.com/people/NovaReach/61581990145831/', name: 'Facebook' },
    { icon: <FaInstagram className="text-2xl" />, link: 'https://www.instagram.com/novareach.agency', name: 'Instagram' },
    { icon: <FaTiktok className="text-2xl" />, link: 'https://www.tiktok.com/@novareach.agency', name: 'TikTok' }
  ]

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-dark-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-pink rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-cyan rounded-full blur-3xl"></div>
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            {t('contact.title')} <span className="text-gradient">{t('contact.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex"
          >
            {/* Promotional Offer */}
            <div className="bg-gradient-primary p-1 rounded-2xl w-full flex flex-col">
              <div className="bg-dark-800 rounded-2xl p-8 flex-1 flex flex-col justify-between">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-3xl font-bold mb-6 text-white flex items-start gap-2">
                    <span className="text-4xl">🎁</span>
                    <span>{t('contact.promo.title')}</span>
                  </h3>
                  
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    {t('contact.promo.intro')}
                  </p>

                  <div className="space-y-4 mb-8">
                    <motion.div 
                      className="flex items-start gap-3 group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <span className="text-2xl mt-1">🎬</span>
                      <div className="flex-1">
                        <p className="text-gray-200">{t('contact.promo.service1')}</p>
                      </div>
                      <div className="text-right flex items-center gap-3">
                        <span className="line-through decoration-2 text-red-500 font-bold text-lg">
                          {t('contact.promo.service1Price')}
                        </span>
                        <span className="bg-gradient-to-r from-green-500 via-emerald-400 to-green-500 bg-clip-text text-transparent font-bold text-xl">
                          {t('contact.promo.freePrice')}
                        </span>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="flex items-start gap-3 group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <span className="text-2xl mt-1">📘</span>
                      <div className="flex-1">
                        <p className="text-gray-200">{t('contact.promo.service2')}</p>
                      </div>
                      <div className="text-right flex items-center gap-3">
                        <span className="line-through decoration-2 text-red-500 font-bold text-lg">
                          {t('contact.promo.service2Price')}
                        </span>
                        <span className="bg-gradient-to-r from-green-500 via-emerald-400 to-green-500 bg-clip-text text-transparent font-bold text-xl">
                          {t('contact.promo.freePrice')}
                        </span>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="flex items-start gap-3 group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <span className="text-2xl mt-1">🎨</span>
                      <div className="flex-1">
                        <p className="text-gray-200">{t('contact.promo.service3')}</p>
                      </div>
                      <div className="text-right flex items-center gap-3">
                        <span className="line-through decoration-2 text-red-500 font-bold text-lg">
                          {t('contact.promo.service3Price')}
                        </span>
                        <span className="bg-gradient-to-r from-green-500 via-emerald-400 to-green-500 bg-clip-text text-transparent font-bold text-xl">
                          {t('contact.promo.freePrice')}
                        </span>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="flex items-start gap-3 group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <span className="text-2xl mt-1">💬</span>
                      <div className="flex-1">
                        <p className="text-gray-200">{t('contact.promo.service4')}</p>
                      </div>
                      <div className="text-right flex items-center gap-3">
                        <span className="line-through decoration-2 text-red-500 font-bold text-lg">
                          {t('contact.promo.service4Price')}
                        </span>
                        <span className="bg-gradient-to-r from-green-500 via-emerald-400 to-green-500 bg-clip-text text-transparent font-bold text-xl">
                          {t('contact.promo.freePrice')}
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div 
                    className="border-t border-gray-600 pt-6 mt-6 space-y-4"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-xl font-semibold">{t('contact.promo.totalValue')}</span>
                      <span className="line-through decoration-2 text-red-500 font-bold text-2xl">
                        {t('contact.promo.totalPrice')}
                      </span>
                    </div>
                    
                    <motion.div 
                      className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-600/50 rounded-xl p-6"
                      initial={{ scale: 0.95 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="text-center">
                        <p className="text-gray-300 text-lg mb-3">{t('contact.promo.newPartnerPrice')}</p>
                        <p className="bg-gradient-to-r from-green-500 via-emerald-400 to-green-500 bg-clip-text text-transparent font-bold text-5xl mb-3">
                          {t('contact.promo.freePrice')}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex"
          >
            {submitStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-dark-800 border border-primary-cyan rounded-2xl p-8 text-center w-full flex flex-col justify-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t('contact.form.successTitle') || 'Благодарим ви!'}
                </h3>
                <p className="text-gray-300 mb-8">
                  {t('contact.form.successMessage')}
                </p>
                <motion.button
                  onClick={resetForm}
                  className="px-8 py-3 bg-gradient-primary rounded-lg text-white font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('contact.form.sendAnother') || 'Изпратете друго съобщение'}
                </motion.button>
              </motion.div>
            ) : submitStatus === 'error' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-dark-800 border border-red-500 rounded-2xl p-8 text-center w-full flex flex-col justify-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-20 h-20 bg-red-500/20 border-2 border-red-500 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t('contact.form.errorTitle') || 'Нещо се обърка'}
                </h3>
                <p className="text-gray-300 mb-8">
                  {t('contact.form.errorMessage')}
                </p>
                <motion.button
                  onClick={() => setSubmitStatus('idle')}
                  className="px-8 py-3 bg-gradient-primary rounded-lg text-white font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('contact.form.tryAgain') || 'Опитайте отново'}
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-dark-800 border border-dark-600 rounded-2xl p-8 w-full flex flex-col">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">
                  {t('contact.form.name')} {t('contact.form.required')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-cyan transition-colors"
                  placeholder={t('contact.form.namePlaceholder')}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">
                  {t('contact.form.email')} {t('contact.form.required')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-cyan transition-colors"
                  placeholder={t('contact.form.emailPlaceholder')}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-300 font-semibold mb-2">
                  {t('contact.form.phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-cyan transition-colors"
                  placeholder={t('contact.form.phonePlaceholder')}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="service" className="block text-gray-300 font-semibold mb-2">
                  {t('contact.form.service')}
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-cyan transition-colors"
                >
                  <option value="">{t('contact.form.selectService')}</option>
                  <option value="branding">{t('contact.form.services.branding')}</option>
                  <option value="web">{t('contact.form.services.web')}</option>
                  <option value="seo">{t('contact.form.services.seo')}</option>
                  <option value="social">{t('contact.form.services.social')}</option>
                  <option value="performance">{t('contact.form.services.performance')}</option>
                  <option value="email">{t('contact.form.services.email')}</option>
                  <option value="creative">{t('contact.form.services.creative')}</option>
                  <option value="other">{t('contact.form.services.other')}</option>
                </select>
              </div>

              <div className="mb-6 flex-grow flex flex-col">
                <label htmlFor="message" className="block text-gray-300 font-semibold mb-2">
                  {t('contact.form.message')} {t('contact.form.required')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-cyan transition-colors resize-none flex-grow"
                  placeholder={t('contact.form.messagePlaceholder')}
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={submitStatus === 'submitting'}
                className={`w-full px-8 py-4 rounded-lg text-white font-semibold text-lg shadow-lg transition-all ${
                  submitStatus === 'submitting' 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : 'bg-gradient-primary'
                }`}
                whileHover={submitStatus !== 'submitting' ? { scale: 1.02, boxShadow: "0 20px 40px rgba(217, 34, 130, 0.3)" } : {}}
                whileTap={submitStatus !== 'submitting' ? { scale: 0.98 } : {}}
              >
                {submitStatus === 'submitting' ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t('contact.form.sending') || 'Изпращане...'}
                  </span>
                ) : (
                  t('contact.form.submit')
                )}
              </motion.button>
            </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

