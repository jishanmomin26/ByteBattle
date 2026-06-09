import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Details", href: "#details" },
  { label: "Timeline", href: "#timeline" },
  { label: "Rewards", href: "#rewards" },
  { label: "Problem Statements", href: "#problem-statements" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();

    setMobileOpen(false);

    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-purple-500/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleClick(e, "#hero")}
          className="flex items-center gap-2 group z-50"
        >
          <div
            className="
              w-10 h-10
              rounded-xl
              bg-gradient-to-br
              from-purple-500 to-blue-500
              flex items-center justify-center
              font-bold text-white text-sm
            "
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            BB
          </div>

          <span
            className="
              text-2xl
              font-bold
              tracking-tight
              text-white
              group-hover:text-purple-400
              transition-colors
            "
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            ByteBattle
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="
                text-sm
                text-gray-400
                hover:text-white
                transition-colors
                relative group
              "
            >
              {link.label}

              <span
                className="
                  absolute -bottom-1 left-0
                  w-0 h-0.5
                  bg-gradient-to-r
                  from-purple-500 to-blue-500
                  group-hover:w-full
                  transition-all duration-300
                "
              />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden z-50"
        >
          <div className="flex flex-col gap-1.5">
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-7 h-0.5 bg-white block"
            />

            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-7 h-0.5 bg-white block"
            />

            <motion.span
              animate={
                mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
              }
              className="w-7 h-0.5 bg-white block"
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="
              md:hidden
              bg-[#0a0a0a]/98
              backdrop-blur-2xl
              overflow-hidden
            "
          >
            <div
              className="
                px-6
                pt-28
                pb-10
                flex flex-col
                gap-2
              "
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="
                    text-2xl
                    text-gray-200
                    py-4
                    border-b border-white/5
                    hover:text-purple-400
                    transition-colors
                  "
                  style={{
                    fontFamily: "var(--font-poppins)",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
