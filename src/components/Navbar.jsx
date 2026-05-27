import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Details', href: '#details' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Rewards', href: '#rewards' },
  { label: 'Problem Statements', href: '#problem-statements' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()

    setMobileOpen(false)

    const element = document.querySelector(href)

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${
            scrolled
              ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/10'
              : 'bg-transparent'
          }
        `}
      >
        <div
          className="
            max-w-7xl mx-auto
            px-4 sm:px-6 lg:px-8
            h-[72px]
            flex items-center justify-between
          "
        >

          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleClick(e, '#hero')}
            className="flex items-center gap-3 z-50"
          >
            <div
              className="
                w-10 h-10
                rounded-xl
                bg-gradient-to-br
                from-purple-500 to-blue-500
                flex items-center justify-center
                text-white font-bold
              "
            >
              BB
            </div>

            <span
              className="
                text-2xl
                font-bold
                tracking-tight
                text-white
              "
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              ByteBattle
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="
                  text-sm
                  text-gray-400
                  hover:text-white
                  transition-colors
                "
              >
                {link.label}
              </a>
            ))}

            {/* Closed Button */}
            <button
              disabled
              className="
                px-6 py-3
                rounded-xl
                bg-gray-700/30
                border border-white/10
                text-gray-400
                cursor-not-allowed
                font-medium
              "
            >
              Registrations Closed
            </button>

          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="
              md:hidden
              relative
              z-50
              w-10 h-10
              flex items-center justify-center
            "
          >

            <div className="relative w-7 h-7">

              <motion.span
                animate={
                  mobileOpen
                    ? { rotate: 45, y: 10 }
                    : { rotate: 0, y: 0 }
                }
                className="
                  absolute top-1
                  w-7 h-0.5
                  bg-white
                  rounded-full
                "
              />

              <motion.span
                animate={
                  mobileOpen
                    ? { opacity: 0 }
                    : { opacity: 1 }
                }
                className="
                  absolute top-3
                  w-7 h-0.5
                  bg-white
                  rounded-full
                "
              />

              <motion.span
                animate={
                  mobileOpen
                    ? { rotate: -45, y: -10 }
                    : { rotate: 0, y: 0 }
                }
                className="
                  absolute top-5
                  w-7 h-0.5
                  bg-white
                  rounded-full
                "
              />

            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35 }}
            className="
              fixed inset-0 z-40
              md:hidden
              bg-[#050505]/98
              backdrop-blur-2xl
            "
          >

            <div
              className="
                pt-28
                px-6
                flex flex-col
              "
            >

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="
                    text-4xl
                    text-gray-200
                    py-6
                    border-b border-white/5
                    active:text-purple-400
                    transition-colors
                  "
                  style={{
                    fontFamily: 'var(--font-poppins)',
                  }}
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile Closed Button */}
              <button
                disabled
                className="
                  mt-10
                  w-full
                  py-5
                  rounded-3xl
                  bg-gray-700/30
                  border border-white/10
                  text-gray-400
                  text-lg
                  font-semibold
                  cursor-not-allowed
                "
              >
                Registrations Closed
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}