import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal.jsx'

const problemStatements = [
  {
    title: 'Smart Community Solutions',
    description: 'Build solutions that improve communities, public services, and social impact.',
    tags: ['Social impact', 'Smart governance', 'Public accessibility', 'Community engagement', 'Safety & awareness'],
    gradient: 'from-green-400 to-emerald-500',
    accentColor: 'border-green-400/20',
  },
  {
    title: 'Education & Student Life Innovation',
    description: 'Create solutions that improve learning, productivity, and student experiences.',
    tags: ['EdTech', 'Productivity', 'Career growth', 'Skill development', 'Student wellness'],
    gradient: 'from-yellow-400 to-orange-500',
    accentColor: 'border-yellow-400/20',
  },
  {
    title: 'Health & Wellness for Everyone',
    description: 'Build accessible healthcare and wellness solutions for people of all ages.',
    tags: ['Healthcare accessibility', 'Mental health', 'Fitness & wellness', 'Preventive healthcare', 'Medical assistance'],
    gradient: 'from-red-400 to-pink-500',
    accentColor: 'border-red-400/20',
  },
  {
    title: 'Sustainability & Green Future',
    description: 'Develop eco-friendly innovations for a cleaner and smarter future.',
    tags: ['Climate action', 'Renewable energy', 'Recycling & waste management', 'Green technology', 'Sustainable living'],
    gradient: 'from-cyan-400 to-blue-500',
    accentColor: 'border-cyan-400/20',
  },
  {
    title: 'Daily Life Problem Solvers',
    description: 'Solve real-world everyday problems using technology and innovation.',
    tags: ['Convenience', 'Automation', 'Productivity', 'Everyday efficiency', 'Real-world usability'],
    gradient: 'from-purple-400 to-indigo-500',
    accentColor: 'border-purple-400/20',
  },
]

export default function ProblemStatements() {
  return (
    <section
      id="problem-statements"
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
              Problem Statements
            </h2>

            <p
              className="
                text-gray-500
                mt-3
                text-[11px] sm:text-sm
                tracking-[0.3em]
                uppercase
              "
            >
              Choose a domain and build impactful solutions.
            </p>

          </div>
        </ScrollReveal>

        {/* Cards Grid */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
            lg:gap-8
          "
        >

          {problemStatements.map((problem, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>

              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 250,
                }}
                className={`
                  relative
                  glass-card
                  rounded-2xl
                  border border-white/10
                  overflow-hidden
                  h-full
                  p-6
                  sm:p-7
                  lg:p-8
                  group
                  flex flex-col
                `}
              >

                {/* Top Gradient Border */}
                <div
                  className={`
                    absolute
                    top-0 left-0
                    w-full h-[3px]
                    bg-gradient-to-r ${problem.gradient}
                  `}
                />

                {/* Content Container */}
                <div className="flex flex-col h-full gap-4">

                  {/* Title */}
                  <h3
                    className={`
                      text-lg
                      sm:text-xl
                      font-bold
                      bg-gradient-to-r ${problem.gradient}
                      bg-clip-text
                      text-transparent
                    `}
                    style={{ fontFamily: 'var(--font-poppins)' }}
                  >
                    {problem.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {problem.description}
                  </p>

                  {/* Focus Areas Label */}
                  <div className="pt-2">
                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-3 font-semibold">
                      Focus Areas
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {problem.tags.map((tag, tagIdx) => (
                        <motion.span
                          key={tagIdx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, margin: '-50px' }}
                          transition={{
                            duration: 0.3,
                            delay: 0.1 + tagIdx * 0.05,
                          }}
                          className={`
                            px-3
                            py-1.5
                            rounded-full
                            text-[11px]
                            sm:text-xs
                            font-medium
                            bg-gradient-to-r ${problem.gradient}
                            bg-opacity-10
                            border border-white/10
                            text-gray-200
                            backdrop-blur-sm
                            transition-all
                            duration-300
                            hover:border-white/20
                            hover:bg-opacity-20
                          `}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                </div>

              </motion.div>

            </ScrollReveal>
          ))}

        </div>

      </div>
    </section>
  )
}
