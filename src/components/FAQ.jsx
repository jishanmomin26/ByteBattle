import { useState } from 'react'
import ScrollReveal from './ScrollReveal.jsx'

const faqs = [
  {
    q: 'Is ByteBattle free to participate?',
    a: 'Yes, ByteBattle is completely free for all participants.',
  },
  {
    q: 'Can beginners participate?',
    a: 'Absolutely! This hackathon is beginner-friendly.',
  },
  {
    q: 'Is it a solo or team hackathon?',
    a: 'It is a solo hackathon. You will participate individually.',
  },
  {
    q: 'When will the problem statement be revealed?',
    a: 'After registration closes.',
  },
  {
    q: 'How do I submit my project?',
    a: 'Submission details will be shared on hackathon day.',
  },
  {
    q: 'What technologies can I use?',
    a: 'You are free to use any tech stack.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section
      id="faq"
      className="
        relative
        pt-20 pb-32
        sm:pt-28 sm:pb-40
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Heading */}
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="section-heading">
              Frequently Asked Questions
            </h2>

            <p className="text-gray-500 mt-3 text-[11px] sm:text-sm tracking-[0.25em] uppercase">
              Got Questions? We’ve Got Answers
            </p>
          </div>
        </ScrollReveal>

        {/* FAQ Container */}
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">

          {faqs.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div
                className="
                  border border-white/10
                  rounded-xl
                  overflow-hidden
                  bg-white/[0.02]
                "
              >
                {/* Question */}
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="
                    w-full
                    flex items-center justify-between
                    px-4 sm:px-6
                    py-4 sm:py-5
                    text-left
                  "
                >
                  <span className="text-sm sm:text-base text-white font-medium">
                    {item.q}
                  </span>

                  <span className="text-purple-400 text-xl">
                    {open === i ? '−' : '+'}
                  </span>
                </button>

                {/* Answer */}
                {open === i && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-sm text-gray-400 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}

        </div>

      </div>
    </section>
  )
}
