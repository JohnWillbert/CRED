// About.jsx - Trust section with credit score card, stats, and stagger animations
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const ScoreBar = ({ label, value, delay }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="mt-3">
      <div className="flex justify-between text-xs text-muted mb-1.5">
        <span>{label}</span>
        <span className="text-gold">{value}%</span>
      </div>
      <div className="h-1.5 bg-dark3 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${value}%` } : { width: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay }}
          className="h-full"
          style={{ background: 'linear-gradient(to right, #c9a84c, #f0c96b)' }}
        />
      </div>
    </div>
  )
}

const About = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { num: '750+', label: 'MIN CREDIT SCORE' },
    { num: '200+', label: 'BRAND PARTNERS' },
    { num: '₹1Cr+', label: 'REWARDS GIVEN' },
  ]

  return (
    <section id="about" className="bg-dark2 border-t border-border py-24 px-[5%]">
      <div ref={ref} className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="text-[10px] tracking-[3px] text-gold font-semibold mb-4 block uppercase">About CRED</span>
          <h2 className="font-syne font-black text-[clamp(2rem,4vw,3.2rem)] leading-[1.1] mb-6">
            Not everyone<br />qualifies.
          </h2>
          <p className="text-muted text-base leading-relaxed max-w-md">
            CRED is an exclusive community for India's most creditworthy individuals. Pay credit card bills, earn rewards, and get access to premium experiences unavailable elsewhere.
          </p>

          {/* Stats row */}
          <div className="flex gap-8 mt-10 flex-wrap">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                <div className="font-syne font-black text-3xl text-gold">{stat.num}</div>
                <div className="text-[10px] text-muted tracking-[1px] mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Credit score card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="relative"
        >
          {/* Main Card */}
          <div className="bg-dark3 border border-[#252525] p-8 neopop-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-full border-[3px] border-gold flex items-center justify-center font-syne font-black text-gold text-base">
                825
              </div>
              <div>
                <div className="font-semibold text-sm text-cream">Credit Score</div>
                <div className="text-xs text-green-400 mt-0.5">▲ Excellent</div>
              </div>
            </div>

            <ScoreBar label="Payment History" value={98} delay={0.4} />
            <ScoreBar label="Credit Utilization" value={18} delay={0.5} />
            <ScoreBar label="Account Age" value={72} delay={0.6} />
            <ScoreBar label="Credit Mix" value={85} delay={0.7} />
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute -bottom-5 -left-5 bg-dark3 border border-[#252525] p-3 flex items-center gap-3 shadow-xl"
          >
            <div className="w-8 h-8 bg-gold/10 flex items-center justify-center text-lg">🎁</div>
            <div>
              <div className="text-xs font-semibold text-cream">CRED Coins Earned</div>
              <div className="text-[10px] text-muted">+2,480 this month</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
