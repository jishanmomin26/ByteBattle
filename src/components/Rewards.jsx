import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal.jsx'

const rewards = [
  {
    icon: '🏆',
    title: 'Winner Rewards',
    items: [
      'Trophy',
      'Winner Certificate',
      'Cash Prize',
    ],
    gradient: 'from-yellow-400 via-amber-500 to-orange-500',
    glow: 'shadow-yellow-500/20',
  },
  {
    icon: '🎖️',
    title: 'All Participants',
    items: [
      'Participation Certificate',
      'Learning Experience',
    ],
    gradient: 'from-purple-400 via-purple-500 to-blue-500',
    glow: 'shadow-purple-500/20',
  },
]

export default function Rewards() {
  return (
    <section
      id="rewards"
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
              Rewards & Prizes
            </h2>

            <p className="
              text-gray-500
              mt-3
              text-[11px] sm:text-sm
              tracking-[0.3em]
              uppercase
            ">
              What You Stand To Win
            </p>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-6 sm:gap-8 lg:gap-10
          max-w-5xl
          mx-auto
          items-stretch
        ">

          {rewards.map((reward, i) => (
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
                className={`
                  relative
                  glass-card
                  rounded-[28px]
                  border border-white/10
                  overflow-hidden
                  h-full
                  p-6 sm:p-8 lg:p-10
                  shadow-2xl
                  ${reward.glow}
                  group
                `}
              >

                {/* Top Gradient Border */}
                <div
                  className={`
                    absolute
                    top-0 left-0
                    w-full h-[3px]
                    bg-gradient-to-r ${reward.gradient}
                  `}
                />

                {/* Mobile Layout */}
                <div className="flex flex-col items-center text-center">

                  {/* Icon */}
                  <div
                    className={`
                      w-16 h-16
                      sm:w-20 sm:h-20
                      rounded-2xl
                      flex items-center justify-center
                      text-3xl sm:text-4xl
                      bg-gradient-to-br ${reward.gradient}
                      shadow-xl
                      mb-5 sm:mb-6
                    `}
                  >
                    {reward.icon}
                  </div>

                  {/* Title */}
                  <h3
                    className={`
                      text-2xl sm:text-3xl
                      font-bold
                      bg-gradient-to-r ${reward.gradient}
                      bg-clip-text
                      text-transparent
                      mb-6 sm:mb-8
                    `}
                    style={{
                      fontFamily: 'var(--font-poppins)',
                    }}
                  >
                    {reward.title}
                  </h3>

                  {/* Reward List */}
                  <ul className="
                    w-full
                    max-w-xs
                    space-y-4
                  ">

                    {reward.items.map((item, j) => (
                      <li
                        key={j}
                        className="
                          flex items-start
                          gap-3
                          text-left
                        "
                      >

                        {/* Dot */}
                        <span
                          className={`
                            mt-2
                            w-2 h-2
                            rounded-full
                            bg-gradient-to-r ${reward.gradient}
                            flex-shrink-0
                          `}
                        />

                        {/* Text */}
                        <span className="
                          text-sm sm:text-base
                          text-gray-300
                          leading-relaxed
                        ">
                          {item}
                        </span>

                      </li>
                    ))}

                  </ul>

                </div>

                {/* Bottom Glow */}
                <div
                  className={`
                    absolute
                    bottom-0
                    left-1/2
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

        {/* Extra Bottom Spacing */}
        <div className="h-6 sm:h-10" />

      </div>
    </section>
  )
}
