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
        py-24 sm:py-32 xl:py-40
        overflow-hidden
      "
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* ================= HEADING ================= */}
        <ScrollReveal>
          <div className="text-center mb-16 sm:mb-20 xl:mb-24">

            <h2 className="section-heading">
              Event Details
            </h2>

            <p className="
              text-gray-500
              mt-4
              text-[11px] sm:text-sm
              tracking-[0.35em]
              uppercase
            ">
              Everything You Need To Know
            </p>

          </div>
        </ScrollReveal>

        {/* ================= DETAILS CARDS ================= */}

        {/* MOBILE VIEW */}
        <div className="grid grid-cols-1 sm:hidden gap-5">

          {details.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                className="
                  glass-card
                  rounded-3xl
                  border border-white/10
                  p-6
                  text-center
                  relative
                  overflow-hidden
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
                      w-16 h-16
                      rounded-2xl
                      flex items-center justify-center
                      text-3xl
                      bg-gradient-to-br ${item.gradient}
                    `}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Title */}
                <p className="
                  text-[11px]
                  uppercase
                  tracking-[0.3em]
                  text-gray-500
                  mb-2
                ">
                  {item.title}
                </p>

                {/* Value */}
                <h3
                  className={`
                    text-3xl
                    font-bold
                    bg-gradient-to-r ${item.gradient}
                    bg-clip-text
                    text-transparent
                  `}
                  style={{
                    fontFamily: 'var(--font-poppins)',
                  }}
                >
                  {item.value}
                </h3>

                {/* Subtitle */}
                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                  {item.sub}
                </p>

              </motion.div>
            </ScrollReveal>
          ))}

        </div>

        {/* DESKTOP VIEW */}
        <div className="hidden sm:grid sm:grid-cols-2 xl:grid-cols-4 gap-7 xl:gap-10">

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
                  rounded-[32px]
                  border border-white/10
                  p-8 xl:p-9
                  text-center
                  relative
                  overflow-hidden
                  min-h-[320px]
                  flex flex-col justify-center
                "
              >

                {/* Top Gradient */}
                <div
                  className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${item.gradient}`}
                />

                {/* Icon */}
                <div className="flex justify-center mb-7">
                  <div
                    className={`
                      w-20 h-20 xl:w-24 xl:h-24
                      rounded-3xl
                      flex items-center justify-center
                      text-4xl xl:text-5xl
                      bg-gradient-to-br ${item.gradient}
                      shadow-2xl
                    `}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Title */}
                <p className="
                  text-xs
                  uppercase
                  tracking-[0.35em]
                  text-gray-500
                  mb-4
                ">
                  {item.title}
                </p>

                {/* Value */}
                <h3
                  className={`
                    text-4xl xl:text-5xl
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
                  text-base
                  mt-5
                  leading-relaxed
                ">
                  {item.sub}
                </p>

              </motion.div>
            </ScrollReveal>
          ))}

        </div>

        {/* ================= ROUNDS SECTION ================= */}

        <div className="mt-24 sm:mt-32 xl:mt-40">

          <ScrollReveal>
            <div className="text-center mb-14 sm:mb-16 xl:mb-20">

              <h3 className="
                text-4xl sm:text-5xl xl:text-6xl
                font-bold
                bg-gradient-to-r from-purple-400 to-blue-500
                bg-clip-text
                text-transparent
              ">
                Competition Rounds
              </h3>

              <p className="
                text-gray-500
                mt-4
                text-[11px] sm:text-sm
                tracking-[0.3em]
                uppercase
              ">
                Selection & Final Presentation Process
              </p>

            </div>
          </ScrollReveal>

          {/* MOBILE ROUNDS */}
          <div className="grid grid-cols-1 lg:hidden gap-6">

            {rounds.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="
                    glass-card
                    rounded-3xl
                    border border-white/10
                    p-6
                  "
                >

                  <div className="
                    inline-flex
                    items-center
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

                  <h4
                    className="
                      text-2xl
                      font-bold
                      text-white
                      mb-4
                    "
                    style={{
                      fontFamily: 'var(--font-poppins)',
                    }}
                  >
                    {item.title}
                  </h4>

                  <p className="
                    text-sm
                    text-gray-400
                    leading-7
                  ">
                    {item.desc}
                  </p>

                </motion.div>
              </ScrollReveal>
            ))}

          </div>

          {/* DESKTOP ROUNDS */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-8 xl:gap-10 max-w-6xl mx-auto">

            {rounds.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{
                    y: -6,
                    scale: 1.01,
                  }}
                  className="
                    glass-card
                    rounded-[32px]
                    border border-white/10
                    p-10 xl:p-12
                    min-h-[300px]
                    flex flex-col justify-center
                    relative
                    overflow-hidden
                  "
                >

                  {/* Background Glow */}
                  <div className="
                    absolute
                    top-0 right-0
                    w-40 h-40
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
                    px-5 py-2.5
                    rounded-full
                    bg-purple-500/10
                    border border-purple-500/20
                    text-purple-300
                    text-sm
                    uppercase
                    tracking-[0.2em]
                    mb-7
                  ">
                    {item.round}
                  </div>

                  {/* Title */}
                  <h4
                    className="
                      relative
                      text-4xl
                      xl:text-5xl
                      font-bold
                      text-white
                      mb-6
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
                    text-lg
                    leading-9
                  ">
                    {item.desc}
                  </p>

                </motion.div>
              </ScrollReveal>
            ))}

          </div>

        </div>

        {/* Bottom spacing before timeline */}
        <div className="h-12 sm:h-20 xl:h-28" />

      </div>
    </section>
  )
}
