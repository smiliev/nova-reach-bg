import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

const Portfolio = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [filter, setFilter] = useState('all')

  const categories = [
    { id: 'all', name: 'Всички' },
    { id: 'branding', name: 'Брандинг' },
    { id: 'web', name: 'Уеб дизайн' },
    { id: 'marketing', name: 'Маркетинг' },
  ]

  const projects = [
    {
      title: 'E-commerce ритейл',
      category: 'web',
      description: 'Модерен онлайн магазин с висока конверсия',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      tags: ['Web Design', 'E-commerce', 'SEO']
    },
    {
      title: 'Tech Startup Brand',
      category: 'branding',
      description: 'Пълна визуална идентичност за tech startup',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
      tags: ['Branding', 'Logo Design', 'Brand Strategy']
    },
    {
      title: 'Social Media кампания',
      category: 'marketing',
      description: 'Успешна кампания с 300% ROI',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
      tags: ['Social Media', 'Facebook Ads', 'Instagram']
    },
    {
      title: 'Корпоративен уебсайт',
      category: 'web',
      description: 'Професионален сайт за финансова компания',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      tags: ['Web Design', 'Corporate', 'WordPress']
    },
    {
      title: 'Ресторант брандинг',
      category: 'branding',
      description: 'Цялостна визуална концепция за ресторантска верига',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
      tags: ['Branding', 'Print Design', 'Photography']
    },
    {
      title: 'Google Ads кампания',
      category: 'marketing',
      description: 'Performance маркетинг за SaaS компания',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      tags: ['Google Ads', 'PPC', 'Analytics']
    }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section id="portfolio" className="relative py-20 md:py-32 bg-dark-800 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary-cyan rounded-full blur-3xl"></div>
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Нашето <span className="text-gradient">портфолио</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Вижте някои от нашите успешни проекти и как помагаме на клиентите си да постигнат целите си
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`
                  px-6 py-2 rounded-full font-semibold transition-all
                  ${filter === category.id 
                    ? 'bg-gradient-primary text-white' 
                    : 'bg-dark-700 text-gray-300 hover:bg-dark-600'}
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-dark-700 rounded-2xl overflow-hidden border border-dark-600 hover:border-primary-cyan transition-all"
              whileHover={{ y: -10 }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-700 via-dark-700/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                
                {/* Hover Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                    <FaExternalLinkAlt className="text-white text-2xl" />
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="text-xs px-3 py-1 bg-dark-600 text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg">
            Искате да видите повече примери? Свържете се с нас за пълното ни портфолио.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio

