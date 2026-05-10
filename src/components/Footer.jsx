import ScrollReveal from './ScrollReveal.jsx'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 mt-20 sm:mt-28 border-t border-white/5">

      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-16 sm:pt-20 pb-10">

        <ScrollReveal>
          <div className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-10 sm:gap-12 md:gap-8
          ">

            {/* Brand */}
            <div className="space-y-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center font-bold text-white text-sm">
                  BB
                </div>
                <span className="text-xl font-bold">ByteBattle</span>
              </div>

              <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto md:mx-0">
                A 15-hour online solo hackathon designed to encourage innovation,
                learning, and real-world problem-solving.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4 text-center md:text-left">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                Quick Links
              </h4>

              <ul className="space-y-3">
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
            <div className="space-y-4 text-center md:text-left">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                Contact
              </h4>

              <div className="space-y-4 flex flex-col items-center md:items-start">

                {/* Email */}
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <span className="text-purple-400">✉️</span>
                  <a
                    href="mailto:bytebattleadmin@gmail.com"
                    className="hover:text-purple-400 transition-colors break-all"
                  >
                    bytebattleadmin@gmail.com
                  </a>
                </div>

                {/* Instagram */}
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <span className="text-purple-400">📷</span>
                  <a
                    href="https://instagram.com/ByteBattle.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 transition-colors"
                  >
                    @ByteBattle.in
                  </a>
                </div>

              </div>
            </div>

          </div>
        </ScrollReveal>

        {/* Bottom Bar */}
        <div className="
          border-t border-white/5
          mt-12 pt-6
          flex flex-col sm:flex-row
          items-center justify-between
          gap-3
          text-center sm:text-left
        ">
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
