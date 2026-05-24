import ScrollReveal from './ScrollReveal.jsx'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/5 mt-20 sm:mt-28">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20">

        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">

            {/* Brand */}
            <div className="text-center md:text-left">

              <div className="flex items-center justify-center md:justify-start gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center font-bold text-white">
                  BB
                </div>

                <h3 className="text-2xl font-bold">
                  ByteBattle
                </h3>
              </div>

              <p className="text-gray-500 text-sm leading-7 max-w-sm mx-auto md:mx-0">
                A 15-hour online solo hackathon designed to encourage
                innovation, learning, and real-world problem-solving.
              </p>
            </div>

            {/* Links */}
            <div className="text-center md:text-left">

              <h4 className="text-white font-semibold uppercase tracking-[0.2em] text-sm mb-5">
                Quick Links
              </h4>

              <ul className="space-y-4">

                {[
                  ['About', '#about'],
                  ['Event Details', '#details'],
                  ['Timeline', '#timeline'],
                  ['Rewards', '#rewards'],
                  ['FAQ', '#faq'],
                ].map(([label, href]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-gray-500 hover:text-purple-400 transition-colors text-sm"
                    >
                      {label}
                    </a>
                  </li>
                ))}

              </ul>
            </div>

            {/* Contact */}
            <div className="text-center md:text-left">

              <h4 className="text-white font-semibold uppercase tracking-[0.2em] text-sm mb-5">
                Contact
              </h4>

              <div className="space-y-4">

                <a
                  href="mailto:bytebattleadmin@gmail.com"
                  className="block text-sm text-gray-500 hover:text-purple-400 transition-colors"
                >
                  ✉️ bytebattleadmin@gmail.com
                </a>

                <a
                  href="https://instagram.com/ByteBattle.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-gray-500 hover:text-purple-400 transition-colors"
                >
                  📷 @ByteBattle.in
                </a>

              </div>

            </div>

          </div>
        </ScrollReveal>

        {/* Bottom */}
        <div className="
          border-t border-white/5
          mt-14 pt-6
          flex flex-col sm:flex-row
          items-center justify-between
          gap-4
          text-center
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
