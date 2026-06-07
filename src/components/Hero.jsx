```jsx
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        {/* AIKTC Logo */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <img
            src="/aiktc-logo.png"
            alt="AIKTC Logo"
            className="h-20 sm:h-24 md:h-28 object-contain"
          />
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-purple-500/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400" />

          <span className="text-xs sm:text-sm text-gray-300 font-medium">
            ByteBattle 2026 Successfully Concluded
          </span>
        </motion.div>

        {/* College Name */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="
            text-[11px]
            sm:text-sm
            uppercase
            tracking-[0.35em]
            text-gray-400
            mb-2
          "
        >
          Anjuman-I-Islam's Kalsekar Technical Campus
        </motion.p>

        {/* Department */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm sm:text-base text-purple-300 mb-8"
        >
          Department of Computer Engineering
        </motion.p>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            text-5xl
            sm:text-7xl
            lg:text-8xl
            font-black
            tracking-tight
            mb-5
          "
          style={{
            fontFamily: 'var(--font-poppins)',
            background:
              'linear-gradient(135deg, #ffffff 0%, #a855f7 50%, #3b82f6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1.05,
          }}
        >
          ByteBattle
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="
            text-sm
            sm:text-lg
            uppercase
            tracking-[0.3em]
            text-gray-400
            mb-4
          "
          style={{ fontFamily: 'var(--font-poppins)' }}
        >
          Innovate • Code • Compete • Conquer
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="
            text-lg
            sm:text-2xl
            text-gray-300
            mb-10
            font-light
          "
        >
          15-Hour Online Solo Hackathon
        </motion.p>

        {/* Event Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="
            glass-card
            max-w-3xl
            mx-auto
            px-6
            sm:px-10
            py-6
            rounded-3xl
            border
            border-white/10
            mb-8
          "
        >
          <h3
            className="
              text-2xl
              sm:text-3xl
              font-bold
              text-purple-300
              mb-3
            "
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            🎉 Event Successfully Concluded
          </h3>

          <p
            className="
              text-gray-400
              text-sm
              sm:text-base
              leading-relaxed
            "
          >
            Thank you to all participants, mentors, judges,
            volunteers, and organizers for making ByteBattle 2026
            a remarkable success. Your innovation, dedication,
            and competitive spirit made this event truly memorable.
          </p>
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <button
            disabled
            className="
              px-10
              py-4
              rounded-2xl
              bg-gray-700/20
              border
              border-white/10
              text-gray-400
              cursor-not-allowed
              backdrop-blur-md
              font-semibold
              text-lg
            "
          >
            Event Concluded
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="
              w-6
              h-10
              mx-auto
              rounded-full
              border-2
              border-white/20
              flex
              items-start
              justify-center
              pt-2
            "
          >
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
```
