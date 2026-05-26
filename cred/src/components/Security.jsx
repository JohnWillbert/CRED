// Security.jsx - Bank-grade security section with animated cards
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaShieldAlt, FaLock, FaEye, FaCheckCircle } from 'react-icons/fa'

const securityFeatures = [
  {
    icon: <FaShieldAlt />,
    title: 'End-to-End Encryption',
    desc: 'All data transmission is encrypted with military-grade 256-bit AES.',
  },
  {
    icon: <FaLock />,
    title: 'Zero Storage',
    desc: 'We never store full card numbers on our servers. Ever.',
  },
  {
    icon: <FaEye />,
    title: 'Fraud Detection',
    desc: 'Real-time AI-powered fraud monitoring on all transactions.',
  },
  {
    icon: <FaCheckCircle />,
    title: 'PCI Compliant',
    desc: 'Highest level of payment card industry compliance and certification.',
  },
]

const certifications = [
  'PCI DSS Level 1 Certified',
  '256-bit AES Encryption',
  'RBI Regulated NBFC Partner',
  'ISO 27001 Certified',
]

const Security = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="security" className="bg-dark2 border-t border-border py-24 px-[5%]">
      <div ref={ref} className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[10px] tracking-[3px] text-gold font-semibold mb-4 block uppercase">Security</span>
          <h2 className="font-syne font-black text-[clamp(2rem,4vw,3.2rem)] leading-[1.1] mb-6">
            Bank-grade<br />security.
          </h2>
          <p className="text-muted text-base leading-relaxed max-w-md mb-8">
            Your data and money are protected by the highest standards of encryption and compliance. We never store your card numbers.
          </p>

          {/* Certifications */}
          <div className="flex flex-col gap-3">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                <span className="text-sm text-muted">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Security cards */}
        <div className="grid grid-cols-2 gap-4">
          {securityFeatures.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="bg-dark border border-border p-6 group hover:border-gold/30 transition-colors duration-300"
            >
              <div className="text-2xl text-gold mb-4 group-hover:scale-110 transition-transform duration-300">
                {feat.icon}
              </div>
              <h4 className="font-syne font-bold text-sm mb-2">{feat.title}</h4>
              <p className="text-muted text-xs leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Security
