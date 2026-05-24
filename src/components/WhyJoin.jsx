import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal.jsx'

const reasons = [
  {
    icon: '🌱',
    title: 'Beginner Friendly',
    text: 'No prior hackathon experience needed',
    gradient: 'from-green-400 to-emerald-500',
  },
  {
    icon: '🧩',
    title: 'Real-World Problem Solving',
    text: 'Build practical and industry-ready skills',
    gradient: 'from-yellow-400 to-orange-500',
  },
  {
    icon: '💻',
    title: 'Coding Experience',
    text: 'Improve your coding under real constraints',
    gradient: 'from-cyan-400 to-blue-500',
  },
  {
    icon: '🚀',
    title: 'Portfolio Project',
    text: 'Create impactful projects for your resume',
    gradient: 'from-pink-400 to-purple-500',
  },
  {
    icon: '🎁',
    title: 'Rewards & Certificates',
    text: 'Win exciting prizes and certificates',
    gradient: 'from-purple-400 to-indigo-500',
  },
]

export default function WhyJoin() {
  return (
    <section
      id="whyjoin"
      className="
        relative
        py-20 sm:py-28 lg:py-32
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Heading */}
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">

            <h2 className="section-heading">
              Why Join ByteBattle?
            </h2>

            <p
              className="
                text-gray-500
                mt-3
                text-[11px] sm:text-sm
                tracking-[0.28em]
                uppercase
              "
            >
              5 Reasons To Register Today
            </p>

          </div>
        </ScrollReveal>

        {/* MOBILE VIEW */}
        <div className="flex flex-col gap-4 sm:hidden">

          {reasons.map((reason, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{
                  type: 'spring',
                  stiffness: 250,
                }}
                className="
                  glass-card
                  rounded-2xl
                  border border-white/10
                  p-5
                  flex items-start gap-4
                  relative overflow-hidden
                  group
                "
              >

                {/* Glow Line */}
                <div
                  className={`
                    absolute top-0 left-0
                    w-full h-[2px]
                    bg-gradient-to-r ${reason.gradient}
                  `}
                />

                {/* Icon */}
                <div
                  className={`
                    w-14 h-14
                    rounded-2xl
                    flex items-center justify-center
                    text-2xl
                    bg-gradient-to-br ${reason.gradient}
                    shadow-lg
                    flex-shrink-0
                  `}
                >
                  {reason.icon}
                </div>

                {/* Text */}
                <div>

                  <h3 className="text-white text-base font-semibold mb-1">
                    {reason.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed">
                    {reason.text}
                  </p>

                </div>

              </motion.div>

            </ScrollReveal>
          ))}

        </div>

        {/* DESKTOP VIEW */}
        <div
          className="
            hidden sm:grid
            grid-cols-2 lg:grid-cols-3
            gap-6 lg:gap-8
          "
        >

          {reasons.map((reason, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>

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
                  p-7 lg:p-8
                  h-full
                  group
                "
              >

                {/* Top Gradient */}
                <div
                  className={`
                    absolute top-0 left-0
                    w-full h-[3px]
                    bg-gradient-to-r ${reason.gradient}
                  `}
                />

                {/* Icon */}
                <div
                  className={`
                    w-16 h-16 lg:w-18 lg:h-18
                    rounded-2xl
                    flex items-center justify-center
                    text-3xl
                    bg-gradient-to-br ${reason.gradient}
                    shadow-xl
                    mb-6
                  `}
                >
                  {reason.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                  {reason.text}
                </p>

                {/* Hover Glow */}
                <div
                  className={`
                    absolute bottom-0 left-1/2
                    -translate-x-1/2
                    h-[3px]
                    w-0
                    group-hover:w-3/4
                    bg-gradient-to-r ${reason.gradient}
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
