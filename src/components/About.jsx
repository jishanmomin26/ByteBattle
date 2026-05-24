import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal.jsx'

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="section-heading">
              About ByteBattle
            </h2>

            <p className="text-gray-500 mt-3 text-[11px] sm:text-sm tracking-[0.25em] uppercase">
              What Makes This Hackathon Special
            </p>
          </ScrollReveal>
        </div>

        {/* CONTENT GRID */}
        <div className="mt-12 sm:mt-16 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* LEFT - TEXT */}
          <ScrollReveal delay={0.2}>
            <div className="glass-card p-6 sm:p-8 md:p-10">

              <div className="
                space-y-5
                text-gray-300
                text-sm sm:text-base
                leading-7 sm:leading-8
                text-center lg:text-left
              ">

                <p>
                  <span className="text-white font-semibold">
                    ByteBattle
                  </span>{' '}
                  is a 15-hour online solo hackathon designed to encourage
                  innovation, learning, and real-world problem-solving.
                </p>

                <p>
                  This hackathon is completely{' '}
                  <span className="text-purple-400 font-medium">
                    beginner-friendly
                  </span>
                  , making it perfect for students who are just starting
                  their journey in development.
                </p>

                <p>
                  Participants will build projects individually within
                  15 hours. The problem statement will be revealed after
                  registration ends to ensure fairness and creativity.
                </p>

                <p>
                  Guidance and support will be provided throughout the
                  hackathon to help participants succeed.
                </p>

                {/* Highlight */}
                <div className="
                  mt-6
                  border border-purple-500/30
                  bg-purple-500/5
                  rounded-2xl
                  p-4 sm:p-5
                ">
                  <p className="text-white font-medium text-center lg:text-left">
                    The goal of ByteBattle is not just to compete,
                    but to learn, build, and grow.
                  </p>
                </div>

              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT - STATS */}
          <ScrollReveal delay={0.3}>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 sm:gap-6">

              {[
                { num: '15', label: 'Hours' },
                { num: '1', label: 'Solo Participant' },
                { num: '∞', label: 'Possibilities' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-6 text-center"
                >
                  <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    {stat.num}
                  </h3>

                  <p className="text-xs text-gray-500 mt-2 uppercase tracking-[0.2em]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}

            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  )
}
