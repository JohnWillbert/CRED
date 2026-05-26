import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import NeoPopCards from './components/NeoPopCards'
import Testimonials from './components/Testimonials'
import Security from './components/Security'
import Footer from './components/Footer'
import Loader from './components/Loader'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Loader loading={loading} />
      <ScrollProgress />
      <ScrollToTop /> 
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <NeoPopCards />
        <Testimonials />
        <Security />
      </main>
      <Footer />
    </>
  )
}

export default App
