import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Videos from './components/Videos'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'

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
      <Services />
      {/* <Portfolio /> */}
      <Videos />
      <Reviews />
      <Contact />
      <About />
      <Footer />
      <CookieConsent />
    </div>
  )
}

export default App

