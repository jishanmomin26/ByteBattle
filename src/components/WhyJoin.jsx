import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal.jsx'

const reasons = [
  { icon: '🌱', text: 'Beginner-friendly — no prior hackathon experience needed' },
  { icon: '🧩', text: 'Real-world problem solving to build practical skills' },
  { icon: '💻', text: 'Improve your coding skills under real constraints' },
  { icon: '🚀', text: 'Build an impactful project for your portfolio' },
  { icon: '🎁', text: 'Win exciting prizes and earn certificates' },
]

export default function WhyJoin() {
  return (
    <section className="relative py-24 sm:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="section-heading">Why Join ByteBattle?</h2>
            <p className="text-gray-500 mb-14 text-sm tracking-wide uppercase">5 reasons to register today</p>
          </div>
        </ScrollReveal>

        <div className="space-y-4 max-w-4xl mx-auto">
          {reasons.map((reason, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ x: 8 }}
                transition={{ type: 'spring', stiffness: 400 }}
                className="glass-card flex items-center gap-5 p-5 sm:p-6 group cursor-default"
              >
                <div className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                  {reason.icon}
                </div>
                <p className="text-gray-300 text-sm sm:text-base">{reason.text}</p>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-purple-400">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
