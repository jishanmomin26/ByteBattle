import ScrollReveal from './ScrollReveal.jsx'
import { GOOGLE_FORM_URL } from '../App.jsx'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center font-bold text-white text-sm" style={{ fontFamily: 'var(--font-poppins)' }}>
                  BB
                </div>
                <span className="text-xl font-bold" style={{ fontFamily: 'var(--font-poppins)' }}>ByteBattle</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                A 15-hour online solo hackathon designed to encourage innovation, learning, and real-world problem-solving.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h4>
              <ul className="space-y-2.5">
                {[
                  { label: 'About', href: '#about' },
                  { label: 'Event Details', href: '#details' },
                  { label: 'Timeline', href: '#timeline' },
                  { label: 'Rewards', href: '#rewards' },
                  { label: 'FAQ', href: '#faq' },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault()
                        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="text-sm text-gray-500 hover:text-purple-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-gray-500">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-400 flex-shrink-0">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <a href="mailto:bytebattleadmin@gmail.com" className="hover:text-purple-400 transition-colors">
                    bytebattleadmin@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-500">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-400 flex-shrink-0">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                  </svg>
                  <a href="https://instagram.com/ByteBattle.in" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                    @ByteBattle.in
                  </a>
                </li>
              </ul>

              {/* Register CTA in footer */}
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-btn !text-sm !py-2.5 !px-6 inline-block mt-6"
              >
                Register Now
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Divider */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {currentYear} ByteBattle. All rights reserved.
          </p>
          <p className="text-xs text-gray-700">
            Built with 💜 for the next generation of builders
          </p>
        </div>
      </div>
    </footer>
  )
}
