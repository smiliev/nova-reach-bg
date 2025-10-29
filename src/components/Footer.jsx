import { motion } from 'framer-motion'
import { FaFacebook, FaInstagram, FaLinkedin, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Услуги',
      links: [
        { name: 'Branding', href: '#services' },
        { name: 'Web Development', href: '#services' },
        { name: 'SEO оптимизация', href: '#services' },
        { name: 'Social Media', href: '#services' }
      ]
    },
    {
      title: 'Компания',
      links: [
        { name: 'За нас', href: '#about' },
        { name: 'Портфолио', href: '#portfolio' },
        { name: 'Контакти', href: '#contact' }
      ]
    },
    {
      title: 'Контакти',
      links: [
        { name: 'novareach2025@gmail.com', href: 'mailto:novareach2025@gmail.com' },
        { name: '+359 895 613 162', href: 'tel:+359895613162' },
        { name: 'Кюстендил, България', href: null }
      ]
    }
  ]

  const socialLinks = [
    { icon: <FaFacebook className="text-xl" />, link: '#', name: 'Facebook' },
    { icon: <FaInstagram className="text-xl" />, link: '#', name: 'Instagram' },
    { icon: <FaLinkedin className="text-xl" />, link: '#', name: 'LinkedIn' }
  ]

  return (
    <footer className="relative bg-dark-800 border-t border-dark-700 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute -bottom-48 left-1/4 w-96 h-96 bg-primary-pink rounded-full blur-3xl"></div>
        <div className="absolute -bottom-48 right-1/4 w-96 h-96 bg-primary-cyan rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <motion.img
              src="/logo.png"
              alt="Nova Reach"
              className="h-16 w-auto mb-4"
              whileHover={{ scale: 1.05 }}
            />
            <p className="text-gray-400 mb-4">
              Expand. Evolve. Explode.
            </p>
            <p className="text-gray-500 text-sm">
              Вашият доверен партньор за дигитален маркетинг и брандинг.
            </p>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="text-white font-bold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href ? (
                      <a
                        href={link.href}
                        onClick={(e) => {
                          if (link.href.startsWith('#')) {
                            e.preventDefault()
                            const element = document.querySelector(link.href)
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' })
                            }
                          }
                        }}
                        className="text-gray-400 hover:text-primary-cyan transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <span className="text-gray-400">{link.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-dark-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Nova Reach. Всички права запазени. 
            
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-10 h-10 bg-dark-700 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gradient-primary hover:text-white transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

