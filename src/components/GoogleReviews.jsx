import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { FaStar, FaGoogle } from 'react-icons/fa'

const GoogleReviews = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useTranslation()

  // Replace with your actual Google reviews
  const reviews = [
    {
      id: 1,
      name: 'Иван Петров',
      rating: 5,
      date: '2 months ago',
      text: 'Страхотна агенция! Професионално отношение и отлични резултати. Препоръчвам!',
      avatar: 'https://ui-avatars.com/api/?name=Ivan+Petrov&background=D92282&color=fff'
    },
    {
      id: 2,
      name: 'Maria Georgieva',
      rating: 5,
      date: '1 month ago',
      text: 'Excellent service and great communication. They helped us grow our online presence significantly.',
      avatar: 'https://ui-avatars.com/api/?name=Maria+Georgieva&background=1EBBEC&color=fff'
    },
    {
      id: 3,
      name: 'Георги Димитров',
      rating: 5,
      date: '3 weeks ago',
      text: 'Много съм доволен от работата им. Екипът е креативен и винаги отговаря бързо на нашите нужди.',
      avatar: 'https://ui-avatars.com/api/?name=Georgi+Dimitrov&background=D92282&color=fff'
    },
    {
      id: 4,
      name: 'Elena Ivanova',
      rating: 5,
      date: '2 weeks ago',
      text: 'Professional team with great expertise in digital marketing. Highly recommend their services!',
      avatar: 'https://ui-avatars.com/api/?name=Elena+Ivanova&background=1EBBEC&color=fff'
    }
  ]

  const averageRating = 5.0
  const totalReviews = reviews.length

  return (
    <section id="reviews" className="relative py-20 md:py-32 bg-dark-800 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-cyan rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-pink rounded-full blur-3xl"></div>
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            {t('reviews.title')} <span className="text-gradient">{t('reviews.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {t('reviews.description')}
          </p>

          {/* Google Rating Summary */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-4 bg-dark-700 px-8 py-4 rounded-full border border-dark-600"
          >
            <FaGoogle className="text-4xl text-white" />
            <div className="text-left">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-3xl font-bold text-white">{averageRating}</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-lg" />
                  ))}
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                {t('reviews.basedOn')} {totalReviews} {t('reviews.reviews')}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-700 border border-dark-600 rounded-2xl p-6 hover:border-primary-cyan transition-all"
            >
              {/* Review Header */}
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <h3 className="text-white font-semibold">{review.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-sm" />
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm">{review.date}</span>
                  </div>
                </div>
                <FaGoogle className="text-gray-500 text-xl" />
              </div>

              {/* Review Text */}
              <p className="text-gray-300 leading-relaxed">{review.text}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA to leave review */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">{t('reviews.cta')}</p>
          <motion.a
            href="https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review" // Replace with your actual Google review link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 rounded-lg text-dark-900 font-semibold transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGoogle className="text-xl" />
            {t('reviews.leaveReview')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default GoogleReviews

