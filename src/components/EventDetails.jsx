import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal.jsx'

const details = [
  {
    icon: '📅',
    title: 'Date',
    value: '30 May 2026',
    sub: 'Saturday',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: '⏱️',
    title: 'Duration',
    value: '15 Hours',
    sub: 'Non-stop coding',
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
    gradient: 'from-pink-500 to-purple-500',
  },
]

export default function EventDetails() {
  return (
    <section id="details" className="relative py-24 sm:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="section-heading">Event Details</h2>
            <p className="text-gray-500 mb-14 text-sm tracking-wide uppercase">Everything you need to know</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {details.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.04, y: -6 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="glass-card p-8 text-center group cursor-default h-full"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">{item.title}</p>
                <p className={`text-2xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`} style={{ fontFamily: 'var(--font-poppins)' }}>
                  {item.value}
                </p>
                <p className="text-sm text-gray-500 mt-2">{item.sub}</p>
                {/* Glow line */}
                <div className={`h-0.5 w-0 group-hover:w-full mx-auto mt-6 bg-gradient-to-r ${item.gradient} transition-all duration-500 rounded-full`} />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
