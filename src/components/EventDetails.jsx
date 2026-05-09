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
      className="relative py-20 sm:py-28"
    >
      {/* Outer spacing fix */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

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

        {/* Cards Container */}
        <div className="max-w-6xl mx-auto">

          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-4 sm:gap-6
          ">

            {details.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 250 }}
                  className="
                    glass-card
                    rounded-3xl
                    border border-white/10
                    p-5 sm:p-6
                    text-center
                    h-full
                    group
                  "
                >

                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className={`
                      w-14 h-14 sm:w-16 sm:h-16
                      rounded-2xl
                      flex items-center justify-center
                      text-2xl sm:text-3xl
                      bg-gradient-to-br ${item.gradient}
                      shadow-lg
                    `}>
                      {item.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-[0.25em] mb-2">
                    {item.title}
                  </p>

                  {/* Value */}
                  <h3
                    className={`
                      text-xl sm:text-2xl
                      font-bold
                      bg-gradient-to-r ${item.gradient}
                      bg-clip-text text-transparent
                    `}
                  >
                    {item.value}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs sm:text-sm text-gray-400 mt-2">
                    {item.sub}
                  </p>

                </motion.div>
              </ScrollReveal>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}
