// Features.jsx - 6-card feature grid with hover animations and glassmorphism
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  FaCreditCard, FaBolt, FaChartLine, FaGift, FaHome, FaMoneyBillWave
} from 'react-icons/fa'

const features = [
  {
    icon: <FaCreditCard />,
    title: 'Bill Payments',
    desc: 'Pay all your credit card bills in one place and earn CRED coins on every payment.',
  },
  {
    icon: <FaBolt />,
    title: 'UPI Payments',
    desc: 'Lightning-fast UPI transfers with cashback and rewards on every transaction.',
  },
  {
    icon: <FaChartLine />,
    title: 'Credit Score',
    desc: 'Monitor your CIBIL score, track history, and get personalized improvement tips.',
  },
  {
    icon: <FaGift />,
    title: 'CRED Rewards',
    desc: 'Exclusive access to premium deals, vouchers, and cashback from 200+ brands.',
  },
  {
    icon: <FaHome />,
    title: 'Rent Payments',
    desc: 'Pay rent via credit card and earn rewards. Works even if landlord doesn\'t accept cards.',
  },
  {
    icon: <FaMoneyBillWave />,
    title: 'CRED Cash',
    desc: 'Access instant credit line at low interest rates backed by your credit history.',
  },
]

const FeatureCard = ({ feature, index }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-dark2 p-10 cursor-pointer group relative overflow-hidden transition-all duration-300 hover:bg-dark3"
    >
      {/* Gold hover overlay */}
      <div className="absolute inset-0 bg-gold/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon */}
      <div className="w-12 h-12 border border-[#2a2a2a] flex items-center justify-center text-xl text-gold mb-6 transition-all duration-300 group-hover:border-gold group-hover:scale-110">
        {feature.icon}
      </div>

      <h3 className="font-syne font-bold text-lg mb-2 text-cream">{feature.title}</h3>
      <p className="text-muted text-sm leading-relaxed">{feature.desc}</p>

      {/* Arrow */}
      <div className="mt-6 text-gold/0 group-hover:text-gold text-sm transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
        Explore →
      </div>
    </motion.div>
  )
}

const Features = () => {
  return (
    <section id="features" className="bg-dark py-24 px-[5%]">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-[10px] tracking-[3px] text-gold font-semibold mb-4 block uppercase">Features</span>
        <h2 className="font-syne font-black text-[clamp(2rem,4vw,3.2rem)] mb-4">Everything in one place</h2>
        <p className="text-muted max-w-md mx-auto text-base leading-relaxed">
          Premium tools built for people who value their financial health above all.
        </p>
      </div>

      {/* Grid */}
      <div
        className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        style={{ gap: '1.5px', background: '#1a1a1a', border: '1.5px solid #1a1a1a' }}
      >
        {features.map((feature, i) => (
          <FeatureCard key={feature.title} feature={feature} index={i} />
        ))}
      </div>
    </section>
  )
}

export default Features
