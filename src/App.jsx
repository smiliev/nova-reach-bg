import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import VideoPortfolio from './components/VideoPortfolio'
import GoogleReviews from './components/GoogleReviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative">
      <Navbar scrolled={scrolled} />
      <Hero />
      <About />
      <Services />
      <VideoPortfolio />
      <GoogleReviews />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

