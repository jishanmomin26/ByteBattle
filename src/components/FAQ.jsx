import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from './ScrollReveal.jsx'

const faqs = [
  {
    q: 'Is ByteBattle free to participate?',
    a: 'Yes! ByteBattle is completely free to join. There are no registration fees or hidden charges. We believe in making opportunities accessible to everyone.',
  },
  {
    q: 'Can beginners participate?',
    a: "Absolutely! ByteBattle is designed to be beginner-friendly. Whether you're just starting to learn programming or you're an experienced developer, everyone is welcome. Guidance and support will be provided throughout the event.",
  },
  {
    q: 'Is it a solo or team hackathon?',
    a: 'ByteBattle is a solo hackathon. Each participant works individually on their project. This ensures fair evaluation and personal growth for every participant.',
  },
  {
    q: 'When will the problem statement be revealed?',
    a: 'The problem statement or theme will be revealed after registration closes on 25 May 2026. This ensures fairness and encourages original, creative solutions from all participants.',
  },
  {
    q: 'How do I submit my project?',
    a: "Detailed submission instructions will be shared with registered participants before the hackathon begins. Generally, you'll submit your project via a GitHub repository link along with a brief demo or documentation.",
  },
  {
    q: 'What technologies can I use?',
    a: "You are free to use any programming language, framework, or tool of your choice. There are no restrictions on the tech stack — use whatever you're comfortable with!",
  },
]

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div className="glass-card overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left gap-4"
      >
        <span className="text-sm sm:text-base text-gray-200 font-medium">{faq.q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-purple-400 text-2xl flex-shrink-0 leading-none"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="relative pt-20 pb-32 sm:pt-28 sm:pb-40 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="section-heading">Frequently Asked Questions</h2>
            <p className="text-gray-500 mb-14 text-sm tracking-wide uppercase">Got questions? We've got answers</p>
          </div>
        </ScrollReveal>

        <div className="space-y-3 max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <FAQItem
                faq={faq}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
