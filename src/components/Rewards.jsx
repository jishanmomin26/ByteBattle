import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal.jsx'

const rewards = [
  {
    icon: '🏆',
    title: 'Winner Rewards',
    items: ['Winner Certificate', 'Cash Prizes', 'Recognition & Spotlight'],
    gradient: 'from-yellow-400 via-amber-500 to-orange-500',
    glow: 'shadow-amber-500/20',
  },
  {
    icon: '🎖️',
    title: 'All Participants',
    items: ['Participation Certificate', 'Learning Experience', 'Portfolio Project'],
    gradient: 'from-purple-400 via-purple-500 to-blue-500',
    glow: 'shadow-purple-500/20',
  },
]

export default function Rewards() {
  return (
    <section id="rewards" className="relative py-24 sm:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="section-heading">Rewards & Prizes</h2>
            <p className="text-gray-500 mb-14 text-sm tracking-wide uppercase">What you stand to win</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {rewards.map((reward, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className={`glass-card p-8 sm:p-10 text-center h-full shadow-lg ${reward.glow}`}
              >
                <div className="text-5xl mb-5">{reward.icon}</div>
                <h3
                  className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${reward.gradient} bg-clip-text text-transparent mb-6`}
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  {reward.title}
                </h3>
                <ul className="space-y-3">
                  {reward.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-gray-300 text-sm sm:text-base justify-center">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${reward.gradient} flex-shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
