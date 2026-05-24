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
    date: '27 May 2026',
    title: 'Registration Closes',
    description: "Last day to register. Don't miss out!",
    icon: '🔒',
    active: false,
  },
  {
    date: '28 May 2026',
    title: 'Problem Statement Revealed',
    description: 'Theme and problem statement shared with all participants.',
    icon: '📋',
    active: false,
  },
  {
    date: '1st June 2026',
    title: 'Hackathon Day!',
    description: '15 hours of intense coding, building, and innovating.',
    icon: '⚡',
    active: false,
  },
]

export default function Timeline() {
  return (
    <section
  id="timeline"
  className="relative mt-20 sm:mt-28 py-20 sm:py-28 px-4 sm:px-6 overflow-hidden"
>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <ScrollReveal>
          <div className="text-center mb-14 sm:mb-20">
            <h2 className="section-heading">
              Registration Timeline
            </h2>

            <p className="text-gray-500 text-xs sm:text-sm tracking-[0.3em] uppercase mt-3">
              Mark Your Calendar
            </p>
          </div>
        </ScrollReveal>

        {/* ================= MOBILE VIEW ================= */}
        <div className="block md:hidden relative">
          {/* Left Line */}
          <div className="absolute left-5 top-0 h-full w-[2px] bg-gradient-to-b from-purple-500 via-blue-500 to-transparent" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative flex items-start gap-5"
                >
                  {/* Icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center text-lg border ${
                        step.active
                          ? 'bg-gradient-to-r from-purple-500 to-blue-500 border-purple-400 shadow-lg shadow-purple-500/30'
                          : 'bg-[#151525] border-white/10'
                      }`}
                    >
                      {step.icon}
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`flex-1 rounded-2xl border p-5 backdrop-blur-xl transition-all duration-300 ${
                      step.active
                        ? 'bg-white/[0.06] border-purple-500/30 shadow-[0_0_25px_rgba(168,85,247,0.15)]'
                        : 'bg-white/[0.03] border-white/10'
                    }`}
                  >
                    <span className="text-[11px] uppercase tracking-[0.25em] text-purple-400 font-semibold">
                      {step.date}
                    </span>

                    <h3
                      className="text-lg font-bold text-white mt-2"
                      style={{ fontFamily: 'var(--font-poppins)' }}
                    >
                      {step.title}
                    </h3>

                    <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* ================= DESKTOP VIEW ================= */}
        <div className="hidden md:block relative max-w-5xl mx-auto">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-purple-500/60 via-blue-500/60 to-transparent" />

          <div className="space-y-20">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div
                  className={`relative flex items-center ${
                    i % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-20">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl border ${
                        step.active
                          ? 'bg-gradient-to-r from-purple-500 to-blue-500 border-purple-300 shadow-[0_0_35px_rgba(168,85,247,0.45)]'
                          : 'bg-[#151525] border-white/10'
                      }`}
                    >
                      {step.icon}
                    </motion.div>
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -6 }}
                    className={`w-[42%] rounded-3xl border p-7 backdrop-blur-xl transition-all duration-300 ${
                      step.active
                        ? 'bg-white/[0.06] border-purple-500/30 shadow-[0_0_35px_rgba(168,85,247,0.15)]'
                        : 'bg-white/[0.03] border-white/10'
                    } ${
                      i % 2 === 0
                        ? 'mr-auto text-right'
                        : 'ml-auto text-left'
                    }`}
                  >
                    <span className="text-xs uppercase tracking-[0.3em] text-purple-400 font-semibold">
                      {step.date}
                    </span>

                    <h3
                      className="text-2xl font-bold text-white mt-3"
                      style={{ fontFamily: 'var(--font-poppins)' }}
                    >
                      {step.title}
                    </h3>

                    <p className="text-gray-400 mt-3 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
