import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal.jsx'

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      
      {/* ✅ Global container fix */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="section-heading">About ByteBattle</h2>
            <p className="text-gray-500 mt-3 text-sm tracking-wide uppercase">
              What makes this hackathon special
            </p>
          </ScrollReveal>
        </div>

        {/* Content */}
        <div className="mt-12 max-w-4xl mx-auto">
          <ScrollReveal delay={0.2}>
            <div className="glass-card p-8 sm:p-12 space-y-6 text-gray-300 leading-relaxed text-[15px] sm:text-base">
              
              <p>
                <span className="text-white font-semibold">ByteBattle</span> is a 15-hour online solo hackathon designed to encourage innovation, learning, and real-world problem-solving.
              </p>

              <p>
                This hackathon is completely <span className="text-purple-400 font-medium">beginner-friendly</span>, making it perfect for students who are just starting their journey in development, as well as those who want to improve their skills.
              </p>

              <p>
                Participants will build projects individually within 15 hours. The problem statement or theme will be revealed after registration ends to ensure fairness and creativity.
              </p>

              <p>
                Throughout the hackathon, guidance and support will be provided to help participants overcome challenges and successfully complete their projects.
              </p>

              <p className="text-white font-medium border-l-2 border-purple-500 pl-4">
                The goal of ByteBattle is not just to compete, but to learn, build, and grow.
              </p>

            </div>
          </ScrollReveal>
        </div>

        {/* Stats */}
        <div className="mt-12 max-w-4xl mx-auto">
          <ScrollReveal delay={0.35}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
                  <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    {stat.num}
                  </p>
                  <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
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