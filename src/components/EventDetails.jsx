import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal.jsx'

const details = [
  {
    icon: '📅',
    title: 'Date',
    value: '30 May 2026',
    sub: 'Saturday',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: '⏱️',
    title: 'Duration',
    value: '15 Hours',
    sub: 'Non-stop coding',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: '🌐',
    title: 'Mode',
    value: 'Online',
    sub: 'Participate from anywhere',
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    icon: '👤',
    title: 'Participation',
    value: 'Solo',
    sub: 'Individual challenge',
    gradient: 'from-pink-500 to-purple-500',
  },
]

export default function EventDetails() {
  return (
    <section
  id="details"
  className="relative mt-16 sm:mt-24 pt-20 pb-32 sm:pt-28 sm:pb-40 px-4 sm:px-6 overflow-hidden"
>
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">

        {/* Heading */}
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="section-heading">
              Event Details
            </h2>

            <p className="text-gray-500 mt-3 text-[11px] sm:text-sm tracking-[0.25em] uppercase">
              Everything You Need To Know
            </p>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6 max-w-6xl mx-auto mb-6 sm:mb-10">
          {details.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 250,
                }}
                className="
                  glass-card
                  relative
                  overflow-hidden
                  rounded-3xl
                  border border-white/10
                  p-6 sm:p-7
                  text-center
                  h-full
                  group
                "
              >

                {/* Top Glow */}
                <div
                  className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${item.gradient}`}
                />

                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div
                    className={`
                      w-16 h-16
                      rounded-2xl
                      flex items-center justify-center
                      text-3xl
                      bg-gradient-to-br ${item.gradient}
                      shadow-lg
                    `}
                  >
                    <span className="drop-shadow-lg">
                      {item.icon}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <p className="text-[11px] sm:text-xs text-gray-500 uppercase tracking-[0.25em] mb-3">
                  {item.title}
                </p>

                {/* Main Value */}
                <h3
                  className={`
                    text-2xl sm:text-3xl
                    font-bold
                    bg-gradient-to-r ${item.gradient}
                    bg-clip-text
                    text-transparent
                    leading-tight
                  `}
                  style={{
                    fontFamily: 'var(--font-poppins)',
                  }}
                >
                  {item.value}
                </h3>

                {/* Subtitle */}
                <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                  {item.sub}
                </p>

                {/* Hover Glow */}
                <div
                  className={`
                    absolute bottom-0 left-1/2
                    -translate-x-1/2
                    h-[3px]
                    w-0
                    group-hover:w-3/4
                    bg-gradient-to-r ${item.gradient}
                    rounded-full
                    transition-all duration-500
                  `}
                />

              </motion.div>
            </ScrollReveal>
          ))}

        </div>
      </div>
    </section>
  )
}
