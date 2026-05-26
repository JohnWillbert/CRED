// NeoPopCards.jsx - CRED-style NeoPOP 3D cards for "How it works" section
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    num: '01',
    title: 'Check Eligibility',
    desc: 'CRED is for those with a credit score above 750. Apply and get instant eligibility check.',
  },
  {
    num: '02',
    title: 'Add Cards & Pay',
    desc: 'Link all your credit cards securely and pay all bills in one seamless transaction.',
  },
  {
    num: '03',
    title: 'Earn & Redeem',
    desc: 'Every payment earns CRED coins. Redeem for exclusive rewards from premium brands.',
  },
]

const NeoCard = ({ step, index }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="bg-dark border border-[#252525] p-8 neopop-card cursor-pointer"
    >
      <div
        className="font-syne font-black text-5xl leading-none mb-4"
        style={{ color: 'rgba(201,168,76,0.15)' }}
      >
        {step.num}
      </div>
      <h3 className="font-syne font-bold text-lg mb-2">{step.title}</h3>
      <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
    </motion.div>
  )
}

const NeoPopCards = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="neopop" className="bg-dark2 border-t border-border border-b py-24 px-[5%]">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[3px] text-gold font-semibold mb-4 block uppercase">How it works</span>
          <h2 className="font-syne font-black text-[clamp(2rem,4vw,3.2rem)]">Three simple steps</h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <NeoCard key={step.num} step={step} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <button className="relative bg-gold text-black border-none px-10 py-5 font-grotesk font-bold text-base tracking-widest cursor-pointer neopop-shadow">
            JOIN CRED NOW
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default NeoPopCards
