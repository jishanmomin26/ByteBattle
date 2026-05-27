import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal.jsx'

const problemStatements = [
  {
    title: 'Smart Community Solutions',
    description: 'Build innovative solutions that improve the quality of life in communities and create positive social impact. Participants can develop platforms that enhance communication between citizens and authorities, improve public accessibility, increase safety awareness, or solve local community challenges using technology. Ideas may include smart city applications, emergency support systems, awareness platforms, complaint management systems, or community engagement tools. The goal is to use innovation to make communities smarter, safer, more connected, and more efficient for everyone.',
    tags: ['Social impact', 'Smart governance', 'Public accessibility', 'Community engagement', 'Safety & awareness'],
    gradient: 'from-green-400 to-emerald-500',
    accentColor: 'border-green-400/20',
  },
  {
    title: 'Education & Student Life Innovation',
    description: 'Create technology-driven solutions that improve education, learning experiences, and student life. Participants can focus on EdTech platforms, productivity tools, skill development systems, career guidance platforms, or student wellness applications. Solutions may help students manage studies, improve learning efficiency, prepare for careers, or reduce academic stress. The aim is to make education more accessible, interactive, engaging, and beneficial for students of all backgrounds while solving real challenges faced in academic life.',
    tags: ['EdTech', 'Productivity', 'Career growth', 'Skill development', 'Student wellness'],
    gradient: 'from-yellow-400 to-orange-500',
    accentColor: 'border-yellow-400/20',
  },
  {
    title: 'Health & Wellness for Everyone',
    description: 'Develop accessible and impactful healthcare or wellness solutions that promote healthier lifestyles and better medical support. Participants can build applications related to mental health, fitness tracking, preventive healthcare, medical assistance, appointment systems, or healthcare accessibility for remote areas. Solutions should focus on improving overall well-being and making healthcare support easier, faster, and more affordable for people of all age groups. The theme encourages innovation that can positively impact both physical and mental health in everyday life.',
    tags: ['Healthcare accessibility', 'Mental health', 'Fitness & wellness', 'Preventive healthcare', 'Medical assistance'],
    gradient: 'from-red-400 to-pink-500',
    accentColor: 'border-red-400/20',
  },
  {
    title: 'Sustainability & Green Future',
    description: 'Build eco-friendly and sustainable innovations that contribute toward a cleaner, smarter, and greener future. Participants can create solutions related to climate action, renewable energy, recycling systems, waste management, green technology, or sustainable living practices. The goal is to encourage awareness and develop practical tools that help reduce environmental impact and promote sustainability. Projects under this theme should aim to solve environmental challenges while encouraging responsible and eco-conscious lifestyles through technology and innovation.',
    tags: ['Climate action', 'Renewable energy', 'Recycling & waste management', 'Green technology', 'Sustainable living'],
    gradient: 'from-cyan-400 to-blue-500',
    accentColor: 'border-cyan-400/20',
  },
  {
    title: 'Everyday Innovation & Problem Solving',
    description: 'Create practical solutions that solve common real-world problems faced in everyday life. Participants can focus on convenience, automation, productivity, smart utilities, or tools that improve efficiency in daily activities. The theme encourages building simple yet impactful applications that make life easier, save time, reduce effort, or improve user experiences in routine tasks. Solutions should prioritize usability, accessibility, and real-world implementation while addressing problems that people commonly face in their personal or professional lives.',
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
<div className="pt-3 mt-auto">
  <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-4 font-semibold">
    Focus Areas
  </p>

  {/* Tags */}
  <div className="flex flex-wrap gap-2 sm:gap-3">

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
  whitespace-nowrap
`}
      >
        {tag}
      </motion.span>
    ))}

  </div>
</div>

            </ScrollReveal>
          ))}

        </div>

      </div>
    </section>
  )
}
