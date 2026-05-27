import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GOOGLE_FORM_URL } from '../App.jsx'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Details', href: '#details' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Rewards', href: '#rewards' },
  { label: 'Problem-Statements', href: '#problem-statements' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-x-hidden ${
        scrolled
          ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-purple-500/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between w-full">
        {/* Logo */}
        <a href="#hero" onClick={(e) => handleClick(e, '#hero')} className="flex items-center gap-2 group flex-shrink-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center font-bold text-white text-xs sm:text-sm" style={{ fontFamily: 'var(--font-poppins)' }}>
            BB
          </div>
          <span className="text-base sm:text-xl font-bold tracking-tight group-hover:text-purple-400 transition-colors whitespace-nowrap" style={{ fontFamily: 'var(--font-poppins)' }}>
            ByteBattle
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-xs lg:text-sm text-gray-400 hover:text-white transition-colors relative group whitespace-nowrap"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          {/* Desktop Register Button */}
          <button
            disabled
            className="
              py-2 px-4 lg:py-2.5 lg:px-6 text-xs lg:text-sm
              rounded-xl
              bg-gray-700/30
              border border-white/10
              text-gray-400
              cursor-not-allowed
              backdrop-blur-md
              font-medium
              whitespace-nowrap
            "
          >
            Registrations Closed
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1.5 hover:bg-white/5 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          <motion.span animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="w-5 h-0.5 bg-white block transition-all" />
          <motion.span animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} className="w-5 h-0.5 bg-white block transition-all" />
          <motion.span animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="w-5 h-0.5 bg-white block transition-all" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/5 overflow-hidden w-full"
          >
            <div className="px-4 sm:px-6 py-4 sm:py-6 flex flex-col gap-3 sm:gap-4 max-h-[calc(100vh-70px)] overflow-y-auto">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-sm sm:text-base text-gray-300 hover:text-white py-2 sm:py-3 px-2 sm:px-3 border-b border-white/5 transition-colors rounded-lg hover:bg-white/5"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {link.label}
                </motion.a>
              ))}
              {/* Mobile Closed Button */}
              <button
                disabled
                className="
                  text-center mt-3 sm:mt-4
                  rounded-xl
                  py-3 sm:py-4 px-4 sm:px-6
                  bg-gray-700/30
                  border border-white/10
                  text-gray-400
                  cursor-not-allowed
                  backdrop-blur-md
                  font-semibold
                  text-sm sm:text-base
                "
              >
                Registrations Closed
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
