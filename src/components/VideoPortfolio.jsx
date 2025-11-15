import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaPlay } from 'react-icons/fa'

const VideoPortfolio = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useTranslation()
  const [activeVideo, setActiveVideo] = useState(null)

  // Placeholder videos - replace with your actual video URLs
  const videos = [
    {
      id: 1,
      title: 'Social Media Campaign',
      thumbnail: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video
      description: 'Successful social media campaign for retail brand'
    },
    {
      id: 2,
      title: 'Brand Identity Video',
      thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video
      description: 'Complete brand identity presentation'
    },
    {
      id: 3,
      title: 'Product Launch',
      thumbnail: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video
      description: 'Product launch campaign video'
    },
    {
      id: 4,
      title: 'Client Testimonial',
      thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video
      description: 'Happy client testimonial video'
    }
  ]

  return (
    <section id="video-portfolio" className="relative py-20 md:py-32 bg-dark-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-primary-pink rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-primary-cyan rounded-full blur-3xl"></div>
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            {t('videoPortfolio.title')} <span className="text-gradient">{t('videoPortfolio.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('videoPortfolio.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {activeVideo === video.id ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="relative aspect-video rounded-2xl overflow-hidden bg-dark-800"
                >
                  <iframe
                    src={video.videoUrl}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <button
                    onClick={() => setActiveVideo(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-dark-900/80 hover:bg-dark-900 rounded-full flex items-center justify-center text-white transition-colors"
                  >
                    ✕
                  </button>
                </motion.div>
              ) : (
                <div
                  onClick={() => setActiveVideo(video.id)}
                  className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer"
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent"></div>
                  
                  {/* Play Button */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg">
                      <FaPlay className="text-white text-2xl ml-1" />
                    </div>
                  </motion.div>

                  {/* Video Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{video.title}</h3>
                    <p className="text-gray-300 text-sm">{video.description}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VideoPortfolio

