import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal.jsx'

const steps = [
  {
    date: '10 May 2026',
    title: 'Registration Opens',
    description: 'Sign up and secure your spot for ByteBattle.',
    icon: '🚀',
    active: true,
  },
  {
    date: '25 May 2026',
    title: 'Registration Closes',
    description: "Last day to register. Don't miss out!",
    icon: '🔒',
    active: false,
  },
  {
    date: '29 May 2026',
    title: 'Problem Statement Revealed',
    description: 'Theme and problem statement shared with all participants.',
    icon: '📋',
    active: false,
  },
  {
    date: '30 May 2026',
    title: 'Hackathon Day!',
    description: '15 hours of intense coding, building, and innovating.',
    icon: '⚡',
    active: false,
  },
]

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-24 sm:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="section-heading">Registration Timeline</h2>
            <p className="text-gray-500 mb-16 text-sm tracking-wide uppercase">Mark your calendar</p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-blue-500/50 to-transparent sm:-translate-x-px" />

          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className={`relative flex items-start mb-12 last:mb-0 ${
                i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
              }`}>
                {/* Dot */}
                <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-lg ${
                      step.active
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg shadow-purple-500/30'
                        : 'bg-[#1a1a2e] border border-white/10'
                    }`}
                  >
                    {step.icon}
                  </motion.div>
                </div>

                {/* Content */}
                <div className={`ml-20 sm:ml-0 sm:w-[calc(50%-40px)] ${
                  i % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:text-left'
                }`}>
                  <span className="text-xs text-purple-400 uppercase tracking-widest font-medium">{step.date}</span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-1 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400">{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
