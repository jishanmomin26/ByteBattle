import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal.jsx'
import { GOOGLE_FORM_URL } from '../App.jsx'

export default function CTA() {
  return (
    <section id="cta" className="relative py-24 sm:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          {/* Background glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />
          </div>

          <div className="relative glass-card max-w-4xl mx-auto p-12 sm:p-16 overflow-hidden text-center">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-purple-500/30 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-blue-500/30 rounded-br-2xl" />

            <motion.p
              className="text-xs sm:text-sm uppercase tracking-[0.3em] text-purple-400 mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Are you ready?
            </motion.p>

            <h2
              className="text-3xl sm:text-5xl font-black mb-4"
              style={{
                fontFamily: 'var(--font-poppins)',
                background: 'linear-gradient(135deg, #ffffff, #a855f7, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Join ByteBattle Now
            </h2>

            <p className="text-gray-400 text-base sm:text-lg mb-10 max-w-lg mx-auto">
              Limited Slots. Big Impact.<br />
              <span className="text-sm text-gray-500">Don't miss your chance to innovate, learn, and compete.</span>
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-btn text-lg px-12 py-4"
              >
                Register Now 🚀
              </a>
            </motion.div>

            <p className="text-xs text-gray-600 mt-6">Registration opens 10 May 2026</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
