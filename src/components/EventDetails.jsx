import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal.jsx'

const details = [
  {
    icon: '📅',
    title: 'Hackathon Date',
    value: '1 June 2026',
    sub: 'Monday',
    gradient: 'from-pink-500 to-purple-500',
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
    gradient: 'from-purple-500 to-pink-500',
  },
]

const rounds = [
  {
    round: 'Round 1',
    title: 'Project Submission',
    desc: 'All participants will build and submit their projects online within 15 hours.',
  },
  {
    round: 'Round 2',
    title: 'Final Presentation',
    desc: 'Top 10 selected participants will present their projects online in front of judges.',
  },
]

export default function EventDetails() {
  return (
    <section
      id="details"
      className="
        relative
        py-20 sm:py-28
        overflow-hidden
      "
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* ================= HEADING ================= */}
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">

            <h2 className="section-heading">
              Event Details
            </h2>

            <p className="
              text-gray-500
              mt-3
              text-[11px] sm:text-sm
              tracking-[0.3em]
              uppercase
            ">
              Everything You Need To Know
            </p>

          </div>
        </ScrollReveal>

        {/* ================= EVENT CARDS ================= */}

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-5 sm:gap-6
        ">

          {details.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{
                  y: -5,
                  scale: 1.01,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 220,
                }}
                className="
                  glass-card
                  rounded-3xl
                  border border-white/10
                  p-6 sm:p-7
                  text-center
                  relative
                  overflow-hidden
                  min-h-[240px]
                  flex flex-col justify-center
                "
              >

                {/* Top Gradient */}
                <div
                  className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${item.gradient}`}
                />

                {/* Icon */}
                <div className="flex justify-center mb-5">
                  <div
                    className={`
                      w-16 h-16 xl:w-20 xl:h-20
                      rounded-2xl
                      flex items-center justify-center
                      text-3xl xl:text-4xl
                      bg-gradient-to-br ${item.gradient}
                      shadow-lg
                    `}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Title */}
                <p className="
                  text-[10px] sm:text-xs
                  uppercase
                  tracking-[0.3em]
                  text-gray-500
                  mb-3
                ">
                  {item.title}
                </p>

                {/* Value */}
                <h3
                  className={`
                    text-3xl xl:text-4xl
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
                <p className="
                  text-gray-400
                  text-sm sm:text-base
                  mt-3
                  leading-relaxed
                ">
                  {item.sub}
                </p>

              </motion.div>
            </ScrollReveal>
          ))}

        </div>

        {/* ================= SPACING FIX ================= */}

        <div className="mt-16 sm:mt-20" />

        {/* ================= COMPETITION ROUNDS ================= */}

        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-12">

            <h3 className="
              text-4xl sm:text-5xl
              font-bold
              bg-gradient-to-r from-purple-400 to-blue-500
              bg-clip-text
              text-transparent
            ">
              Competition Rounds
            </h3>

            <p className="
              text-gray-500
              mt-3
              text-[11px] sm:text-sm
              tracking-[0.25em]
              uppercase
            ">
              Selection & Final Presentation Process
            </p>

          </div>
        </ScrollReveal>

        {/* ================= ROUND CARDS ================= */}

        <div className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-6 sm:gap-7
          max-w-6xl
          mx-auto
        ">

          {rounds.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{
                  y: -5,
                  scale: 1.01,
                }}
                className="
                  glass-card
                  rounded-3xl
                  border border-white/10
                  p-7 xl:p-8
                  min-h-[220px]
                  flex flex-col justify-center
                  relative
                  overflow-hidden
                "
              >

                {/* Background Glow */}
                <div className="
                  absolute
                  top-0 right-0
                  w-32 h-32
                  bg-purple-500/10
                  blur-3xl
                  rounded-full
                " />

                {/* Badge */}
                <div className="
                  relative
                  inline-flex
                  items-center
                  w-fit
                  px-4 py-2
                  rounded-full
                  bg-purple-500/10
                  border border-purple-500/20
                  text-purple-300
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  mb-5
                ">
                  {item.round}
                </div>

                {/* Title */}
                <h4
                  className="
                    relative
                    text-3xl xl:text-4xl
                    font-bold
                    text-white
                    mb-4
                    leading-tight
                  "
                  style={{
                    fontFamily: 'var(--font-poppins)',
                  }}
                >
                  {item.title}
                </h4>

                {/* Description */}
                <p className="
                  relative
                  text-gray-400
                  text-sm sm:text-base
                  leading-8
                ">
                  {item.desc}
                </p>

              </motion.div>
            </ScrollReveal>
          ))}

        </div>

        {/* Bottom Spacing */}
        <div className="h-10 sm:h-16" />

      </div>
    </section>
  )
}
