// Footer.jsx - Full footer with links, social icons, and copyright
import { motion } from 'framer-motion'
import { FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa'

const footerLinks = {
  Company: ['About Us', 'Blog', 'Careers', 'Press'],
  Legal: ['Privacy Policy', 'Terms of Use', 'Security', 'Cookie Policy'],
  Support: ['Help Center', 'Contact Us', 'Community', 'Status'],
}

const socialIcons = [
  { icon: <FaTwitter />, label: 'Twitter' },
  { icon: <FaLinkedin />, label: 'LinkedIn' },
  { icon: <FaInstagram />, label: 'Instagram' },
  { icon: <FaYoutube />, label: 'YouTube' },
]

const Footer = () => {
  return (
    <footer className="bg-dark border-t border-border pt-16 pb-8 px-[5%]">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div>
            <div className="font-syne font-black text-2xl text-gold tracking-tight mb-4">CRED</div>
            <p className="text-muted text-sm leading-relaxed max-w-[200px]">
              India's most trusted rewards platform for creditworthy individuals.
            </p>
            <div className="flex gap-3 mt-6">
              {socialIcons.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 border border-border flex items-center justify-center text-muted text-sm hover:border-gold hover:text-gold transition-all duration-300 no-underline"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[10px] tracking-[2px] text-muted font-semibold mb-5 uppercase">{title}</h4>
              <ul className="list-none flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[#555] text-sm no-underline hover:text-gold transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted">
            © 2024 CRED. All rights reserved. Built with ❤️ for creditworthy India.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-[#555] hover:text-gold transition-colors no-underline">Privacy</a>
            <a href="#" className="text-xs text-[#555] hover:text-gold transition-colors no-underline">Terms</a>
            <a href="#" className="text-xs text-[#555] hover:text-gold transition-colors no-underline">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
