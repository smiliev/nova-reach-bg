import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would normally send the form data to a backend
    console.log('Form submitted:', formData)
    alert(t('contact.form.successMessage') || 'Thank you for your inquiry! We will contact you soon.')
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
    { icon: <FaFacebook className="text-2xl" />, link: '#', name: 'Facebook' },
    { icon: <FaInstagram className="text-2xl" />, link: '#', name: 'Instagram' },
    { icon: <FaLinkedin className="text-2xl" />, link: '#', name: 'LinkedIn' }
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
          >
            <h3 className="text-3xl font-bold mb-8 text-white">{t('contact.howToFind')}</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    {item.link ? (
                      <a href={item.link} className="text-gray-400 hover:text-primary-cyan transition-colors">
                        {item.info}
                      </a>
                    ) : (
                      <p className="text-gray-400">{item.info}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="font-semibold text-white mb-4">{t('contact.followUs')}</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-dark-700 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gradient-primary hover:text-white transition-all"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Decorative element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="hidden lg:block mt-12"
            >
              <div className="bg-gradient-primary p-1 rounded-2xl">
                <div className="bg-dark-800 rounded-2xl p-8">
                  <h4 className="text-2xl font-bold text-white mb-4">
                    {t('contact.readyTitle')} <span className="text-gradient">{t('contact.readyHighlight')}</span>?
                  </h4>
                  <p className="text-gray-400">
                    {t('contact.readyDesc')}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-dark-800 border border-dark-600 rounded-2xl p-8">
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

              <div className="mb-6">
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
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-cyan transition-colors resize-none"
                  placeholder={t('contact.form.messagePlaceholder')}
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-primary rounded-lg text-white font-semibold text-lg shadow-lg"
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(217, 34, 130, 0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                {t('contact.form.submit')}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

