import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {

  return (
    <section
      id="hero"
      className="
        relative
        min-h-screen
        flex items-center justify-center
        overflow-hidden
        px-4 sm:px-6
      "
    >

      {/* Gradient Orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div className="relative z-10 text-center max-w-5xl mx-auto">

        {/* STATUS BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            inline-flex
            items-center gap-2
            px-4 sm:px-5
            py-2
            rounded-full
            bg-red-500/10
            border border-red-500/20
            mb-8 sm:mb-10
          "
        >

          <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />

          <span className="text-xs sm:text-sm text-red-300 font-medium">
            Registrations Closed
          </span>

        </motion.div>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="
            text-5xl
            sm:text-7xl
            lg:text-8xl
            font-black
            tracking-tight
            mb-4
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

        {/* TAGLINE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="
            text-[11px]
            sm:text-lg
            tracking-[0.3em]
            uppercase
            text-gray-400
            mb-4
            leading-relaxed
          "
          style={{
            fontFamily: 'var(--font-poppins)',
          }}
        >
          Innovate • Code • Compete • Conquer
        </motion.p>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="
            text-base
            sm:text-2xl
            text-gray-300
            mb-8 sm:mb-10
            font-light
          "
        >
          15-Hour Online Solo Hackathon
        </motion.p>

        {/* HACKATHON INFO CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="
            glass-card
            border border-white/10
            rounded-3xl
            p-6 sm:p-8
            max-w-2xl
            mx-auto
            mb-10
          "
        >

          <div className="
            grid
            grid-cols-2
            sm:grid-cols-4
            gap-5 sm:gap-6
          ">

            {/* Date */}
            <div className="text-center">
              <p className="text-2xl sm:text-3xl mb-2">📅</p>

              <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-[0.2em] mb-2">
                Date
              </p>

              <h3 className="text-white font-bold text-sm sm:text-lg">
                1 June 2026
              </h3>

              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                Monday
              </p>
            </div>

            {/* Duration */}
            <div className="text-center">
              <p className="text-2xl sm:text-3xl mb-2">⏱️</p>

              <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-[0.2em] mb-2">
                Duration
              </p>

              <h3 className="text-white font-bold text-sm sm:text-lg">
                15 Hours
              </h3>

              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                Non-stop Coding
              </p>
            </div>

            {/* Mode */}
            <div className="text-center">
              <p className="text-2xl sm:text-3xl mb-2">🌐</p>

              <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-[0.2em] mb-2">
                Mode
              </p>

              <h3 className="text-white font-bold text-sm sm:text-lg">
                Online
              </h3>

              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                Participate Anywhere
              </p>
            </div>

            {/* Participation */}
            <div className="text-center">
              <p className="text-2xl sm:text-3xl mb-2">👤</p>

              <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-[0.2em] mb-2">
                Participation
              </p>

              <h3 className="text-white font-bold text-sm sm:text-lg">
                Solo
              </h3>

              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                Individual
              </p>
            </div>

          </div>

        </motion.div>

        {/* CLOSED BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
        >

          <button
            disabled
            className="
              cursor-not-allowed
              rounded-2xl
              px-10 py-4
              text-lg
              font-semibold
              bg-gray-700/40
              border border-white/10
              text-gray-400
              backdrop-blur-md
            "
          >
            Registrations Closed
          </button>

        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-14 sm:mt-16"
        >

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="
              w-6 h-10
              mx-auto
              rounded-full
              border-2 border-white/20
              flex items-start justify-center
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