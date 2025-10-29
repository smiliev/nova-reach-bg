import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
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
    alert('Благодарим ви за запитването! Ще се свържем с вас скоро.')
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
  }

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: 'Email',
      info: 'novareach2025@gmail.com',
      link: 'mailto:novareach2025@gmail.com'
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: 'Телефон',
      info: '+359 895 613 162',
      link: 'tel:+359895613162'
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: 'Адрес',
      info: 'Кюстендил, България',
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
            Свържете се <span className="text-gradient">с нас</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Готови сме да обсъдим вашия проект и да ви помогнем да постигнете целите си
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-white">Как да ни намерите</h3>
            
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
              <h4 className="font-semibold text-white mb-4">Последвайте ни</h4>
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
                    Готови за <span className="text-gradient">експанзия</span>?
                  </h4>
                  <p className="text-gray-400">
                    Свържете се с нас днес и нека започнем да работим заедно върху вашия успех!
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
                  Име *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-cyan transition-colors"
                  placeholder="Вашето име"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-cyan transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-300 font-semibold mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-cyan transition-colors"
                  placeholder="+359 888 123 456"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="service" className="block text-gray-300 font-semibold mb-2">
                  Интересувате се от
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-cyan transition-colors"
                >
                  <option value="">Изберете услуга</option>
                  <option value="branding">Branding</option>
                  <option value="web">Web Development</option>
                  <option value="seo">SEO оптимизация</option>
                  <option value="social">Social Media Marketing</option>
                  <option value="performance">Performance Marketing</option>
                  <option value="email">Email Marketing</option>
                  <option value="creative">Creative Production</option>
                  <option value="other">Друго</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 font-semibold mb-2">
                  Съобщение *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-cyan transition-colors resize-none"
                  placeholder="Разкажете ни за вашия проект..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-primary rounded-lg text-white font-semibold text-lg shadow-lg"
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(217, 34, 130, 0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                Изпратете запитване
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

