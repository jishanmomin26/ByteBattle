import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { GOOGLE_FORM_URL } from '../App.jsx'

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState(calculate())

  function calculate() {
    const diff = new Date(targetDate) - new Date()
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    }
  }

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calculate()), 1000)
    return () => clearInterval(id)
  }, [])

  return timeLeft
}

function CountdownUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="glass-card w-[72px] h-[72px] sm:w-[88px] sm:h-[88px] flex items-center justify-center">
        <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-poppins)' }}>
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-[11px] sm:text-xs text-gray-500 mt-2 uppercase tracking-widest">{label}</span>
    </div>
  )
}

export default function Hero() {
  const countdown = useCountdown('2026-05-30T00:00:00')

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs sm:text-sm text-gray-400">Registration Opening Soon — 10 May 2026</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-4"
          style={{
            fontFamily: 'var(--font-poppins)',
            background: 'linear-gradient(135deg, #ffffff 0%, #a855f7 50%, #3b82f6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1.1,
          }}
        >
          ByteBattle
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm sm:text-lg tracking-[0.3em] uppercase text-gray-400 mb-3"
          style={{ fontFamily: 'var(--font-poppins)' }}
        >
          Innovate • Code • Compete • Conquer
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-base sm:text-xl text-gray-300 mb-12 font-light"
        >
          15-Hour Online Solo Hackathon
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center gap-3 sm:gap-5 mb-12"
        >
          <CountdownUnit value={countdown.days} label="Days" />
          <div className="flex items-center text-2xl text-purple-500/50 font-light">:</div>
          <CountdownUnit value={countdown.hours} label="Hours" />
          <div className="flex items-center text-2xl text-purple-500/50 font-light">:</div>
          <CountdownUnit value={countdown.minutes} label="Mins" />
          <div className="flex items-center text-2xl text-purple-500/50 font-light">:</div>
          <CountdownUnit value={countdown.seconds} label="Secs" />
        </motion.div>

        {/* CTA — opens Google Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
        >
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-btn text-lg px-10 py-4"
          >
            Register Now →
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 mx-auto rounded-full border-2 border-white/20 flex items-start justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
