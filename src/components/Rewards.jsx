import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal.jsx'

const rewards = [
  {
    icon: '🏆',
    title: 'Winner Rewards',
    items: [
      'Winner Certificate',
      'Cash Prizes',
      'Recognition & Spotlight',
    ],
    gradient: 'from-yellow-400 via-amber-500 to-orange-500',
    glow: 'shadow-amber-500/20',
  },
  {
    icon: '🎖️',
    title: 'All Participants',
    items: [
      'Participation Certificate',
      'Learning Experience',
      'Portfolio Project',
    ],
    gradient: 'from-purple-400 via-purple-500 to-blue-500',
    glow: 'shadow-purple-500/20',
  },
]

export default function Rewards() {
  return (
    <section
  id="rewards"
  className="relative pt-20 pb-32 sm:pt-28 sm:pb-40 px-4 sm:px-6 overflow-hidden"
>
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="section-heading">
              Rewards & Prizes
            </h2>

            <p className="text-gray-500 mt-3 text-[11px] sm:text-sm tracking-[0.25em] uppercase">
              What You Stand To Win
            </p>
          </div>
        </ScrollReveal>

        {/* Reward Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 max-w-5xl mx-auto">

          {rewards.map((reward, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>

              <motion.div
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 250,
                }}
                className={`
                  glass-card
                  relative
                  overflow-hidden
                  rounded-3xl
                  border border-white/10
                  p-6 sm:p-8 md:p-10
                  text-center
                  h-full
                  shadow-xl
                  ${reward.glow}
                  group
                `}
              >

                {/* Top Gradient Line */}
                <div
                  className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${reward.gradient}`}
                />

                {/* Icon */}
                <div className="flex justify-center mb-5">
                  <div
                    className={`
                      w-20 h-20
                      rounded-2xl
                      flex items-center justify-center
                      text-4xl
                      bg-gradient-to-br ${reward.gradient}
                      shadow-lg
                    `}
                  >
                    {reward.icon}
                  </div>
                </div>

                {/* Title */}
                <h3
                  className={`
                    text-2xl sm:text-3xl
                    font-bold
                    bg-gradient-to-r ${reward.gradient}
                    bg-clip-text
                    text-transparent
                    mb-8
                  `}
                  style={{
                    fontFamily: 'var(--font-poppins)',
                  }}
                >
                  {reward.title}
                </h3>

                {/* Items */}
                <ul className="space-y-4 max-w-xs mx-auto">

                  {reward.items.map((item, j) => (
                    <li
                      key={j}
                      className="
                        flex items-center
                        gap-3
                        text-gray-300
                        text-sm sm:text-base
                        text-left
                      "
                    >

                      {/* Dot */}
                      <span
                        className={`
                          w-2 h-2
                          rounded-full
                          bg-gradient-to-r ${reward.gradient}
                          flex-shrink-0
                        `}
                      />

                      {/* Text */}
                      <span className="leading-relaxed">
                        {item}
                      </span>

                    </li>
                  ))}

                </ul>

                {/* Bottom Hover Glow */}
                <div
                  className={`
                    absolute bottom-0 left-1/2
                    -translate-x-1/2
                    h-[3px]
                    w-0
                    group-hover:w-3/4
                    bg-gradient-to-r ${reward.gradient}
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