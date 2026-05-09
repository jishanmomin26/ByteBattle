import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import EventDetails from './components/EventDetails.jsx'
import Timeline from './components/Timeline.jsx'
import Rewards from './components/Rewards.jsx'
import WhyJoin from './components/WhyJoin.jsx'
import FAQ from './components/FAQ.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'
import ParticleBackground from './components/ParticleBackground.jsx'

export const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeJOG14Wuvt-dzLNr0L5zxyjFR5Ju5sqpWqCOYTIQwvx2lqzg/viewform?usp=header'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Loader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0a]"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center gap-6">
              <div className="loader-ring" />
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg font-semibold tracking-widest bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                BYTEBATTLE
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main App */}
      {!loading && (
        <motion.div
          className="relative bg-[#0a0a0a] text-white overflow-x-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Background */}
          <div className="fixed inset-0 -z-10 pointer-events-none">
            <ParticleBackground />
          </div>

          {/* Navbar */}
          <Navbar />

          {/* Content */}
          <div className="flex flex-col gap-20 sm:gap-28">
  <About />
  <EventDetails />
  <Timeline />
  <Rewards />
  <WhyJoin />
  <FAQ />
</div>
          {/* Footer */}
          <Footer />
        </motion.div>
      )}
    </>
  )
}

export default App
