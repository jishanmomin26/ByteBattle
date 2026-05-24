import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal.jsx'

const details = [
  {
    icon: '📅',
    title: 'Hackathon Date',
    value: '1 June 2026',
    sub: 'Monday',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: '⏱️',
    title: 'Duration',
    value: '15 Hours',
    sub: 'Non-stop innovation',
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

const rounds = [
  {
    round: 'Round 1',
    title: 'Project Submission',
    description:
      'All participants will build and submit their projects online within 15 hours.',
  },
  {
    round: 'Round 2',
    title: 'Final Presentation',
    description:
      'Top 10 selected teams will present their projects online in front of judges.',
  },
]

export default function EventDetails() {
  return (
    <section
      id="details"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Heading */}
        <ScrollReveal>
          <div className="text-center mb-14 sm:mb-20">
            <h2 className="section-heading">
              Event Details
            </h2>

            <p className="text-gray-500 mt-4 text-[11px] sm:text-sm tracking-[0.28em] uppercase">
              Everything You Need To Know
            </p>
          </div>
        </ScrollReveal>

        {/* Main Detail Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-7">

          {details.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 220,
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
                  className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${item.gradient}`}
                />

                {/* Icon */}
                <div className="flex justify-center mb-5">
                  <div
                    className={`
                      w-16 h-16 sm:w-20 sm:h-20
                      rounded-2xl
                      flex items-center justify-center
                      text-3xl sm:text-4xl
                      bg-gradient-to-br ${item.gradient}
                      shadow-lg
                    `}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Title */}
                <p className="text-[11px] sm:text-xs text-gray-500 uppercase tracking-[0.28em] mb-3">
                  {item.title}
                </p>

                {/* Main Value */}
                <h3
                  className={`
                    text-2xl sm:text-3xl
                    font-bold
                    bg-gradient-to-r ${item.gradient}
                    bg-clip-text text-transparent
                  `}
                  style={{
                    fontFamily: 'var(--font-poppins)',
                  }}
                >
                  {item.value}
                </h3>

                {/* Subtitle */}
                <p className="text-sm sm:text-base text-gray-400 mt-3 leading-relaxed">
                  {item.sub}
                </p>

              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Rounds Section */}
        <div className="mt-20 sm:mt-28">

          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-14">
              <h3 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                Competition Rounds
              </h3>

              <p className="text-gray-500 mt-4 text-[11px] sm:text-sm tracking-[0.25em] uppercase">
                Selection & Final Presentation Process
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">

            {rounds.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <motion.div
                  whileHover={{
                    y: -6,
                    scale: 1.01,
                  }}
                  className="
                    glass-card
                    rounded-3xl
                    border border-white/10
                    p-6 sm:p-8
                    relative
                    overflow-hidden
                  "
                >

                  {/* Round Badge */}
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs sm:text-sm tracking-wider uppercase mb-5">
                    {item.round}
                  </div>

                  {/* Title */}
                  <h4
                    className="text-2xl sm:text-3xl font-bold text-white mb-4"
                    style={{
                      fontFamily: 'var(--font-poppins)',
                    }}
                  >
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-400 leading-8 text-sm sm:text-base">
                    {item.description}
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
