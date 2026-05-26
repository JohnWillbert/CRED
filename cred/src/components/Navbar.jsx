// Navbar.jsx - Sticky navbar with blur background on scroll, mobile hamburger menu
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = ['About', 'Features', 'Security', 'Members']

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 px-[5%] py-5 flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'bg-dark/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <div className="font-syne font-black text-2xl text-gold tracking-tight">CRED</div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-muted text-sm font-medium hover:text-cream transition-colors duration-300 no-underline"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button className="hidden md:block relative bg-gold text-black border-none px-6 py-2.5 font-grotesk font-bold text-sm tracking-widest cursor-pointer transition-transform duration-150 neopop-shadow hover:-translate-x-0.5 hover:-translate-y-0.5">
          LOGIN
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] cursor-pointer p-1 bg-transparent border-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-[1.5px] bg-cream"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-[1.5px] bg-cream"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-[1.5px] bg-cream"
          />
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[70px] left-0 right-0 z-40 bg-dark/97 backdrop-blur-lg border-b border-border px-[5%] py-8 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-cream text-lg font-medium no-underline hover:text-gold transition-colors"
              >
                {link}
              </a>
            ))}
            <button className="self-start bg-gold text-black border-none px-6 py-3 font-grotesk font-bold text-sm tracking-widest cursor-pointer">
              LOGIN
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
