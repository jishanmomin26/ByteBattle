import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from './ScrollReveal.jsx'

const faqs = [
  {
    q: 'Is ByteBattle free to participate?',
    a: 'Yes, ByteBattle is completely free for all participants.',
  },
  {
    q: 'Can beginners participate?',
    a: 'Absolutely! ByteBattle is designed for beginners as well as experienced developers.',
  },
  {
    q: 'Is it a solo or team hackathon?',
    a: 'It is a solo hackathon. Every participant will compete individually.',
  },
  {
    q: 'When will the problem statement be revealed?',
    a: 'The problem statement will be revealed after registration closes.',
  },
  {
    q: 'How do I submit my project?',
    a: 'Submission instructions will be shared during the hackathon.',
  },
  {
    q: 'What technologies can I use?',
    a: 'You are free to use any programming language or tech stack.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section
      id="faq"
      className="
        relative
        pt-20 sm:pt-28
        pb-28 sm:pb-40
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Heading */}
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">

            <h2 className="section-heading">
              Frequently Asked Questions
            </h2>

            <p
              className="
                text-gray-500
                mt-3
                text-[11px] sm:text-sm
                tracking-[0.28em]
                uppercase
              "
            >
              Got Questions? We’ve Got Answers
            </p>

          </div>
        </ScrollReveal>

        {/* MOBILE VIEW */}
        <div className="sm:hidden flex flex-col gap-4">

          {faqs.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>

              <div
                className="
                  glass-card
                  border border-white/10
                  rounded-2xl
                  overflow-hidden
                "
              >

                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="
                    w-full
                    flex items-center justify-between
                    gap-4
                    px-5 py-4
                    text-left
                  "
                >

                  <span className="text-sm text-white font-medium leading-relaxed">
                    {item.q}
                  </span>

                  <div
                    className="
                      w-7 h-7
                      rounded-full
                      bg-purple-500/10
                      flex items-center justify-center
                      text-purple-400
                      flex-shrink-0
                    "
                  >
                    {open === i ? '−' : '+'}
                  </div>

                </button>

                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >

                      <div className="px-5 pb-5 text-sm text-gray-400 leading-relaxed">
                        {item.a}
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>

              </div>

            </ScrollReveal>
          ))}

        </div>

        {/* DESKTOP VIEW */}
        <div
          className="
            hidden sm:flex
            flex-col
            gap-5
            max-w-4xl
            mx-auto
          "
        >

          {faqs.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>

              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{
                  type: 'spring',
                  stiffness: 250,
                }}
                className="
                  glass-card
                  border border-white/10
                  rounded-3xl
                  overflow-hidden
                  group
                "
              >

                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="
                    w-full
                    flex items-center justify-between
                    px-7 py-6
                    text-left
                  "
                >

                  <span className="text-base lg:text-lg text-white font-medium">
                    {item.q}
                  </span>

                  <div
                    className="
                      w-10 h-10
                      rounded-full
                      bg-purple-500/10
                      border border-purple-500/20
                      flex items-center justify-center
                      text-purple-400
                      text-xl
                      group-hover:bg-purple-500/20
                      transition-all
                    "
                  >
                    {open === i ? '−' : '+'}
                  </div>

                </button>

                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >

                      <div
                        className="
                          px-7 pb-7
                          text-gray-400
                          text-sm lg:text-base
                          leading-relaxed
                          border-t border-white/5
                        "
                      >
                        <div className="pt-5">
                          {item.a}
                        </div>
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>

            </ScrollReveal>
          ))}

        </div>

        {/* EXTRA SPACING BETWEEN FAQ & FOOTER */}
        <div className="h-10 sm:h-16 lg:h-20" />

      </div>
    </section>
  )
}
