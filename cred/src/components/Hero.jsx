// Hero.jsx - Full-screen hero with animated gradient, floating elements, scroll indicator
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Hero = () => {
  const orb1Ref = useRef(null)
  const orb2Ref = useRef(null)

  useEffect(() => {
    // Floating orb animations with GSAP
    gsap.to(orb1Ref.current, {
      y: -30,
      x: 20,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
    gsap.to(orb2Ref.current, {
      y: 20,
      x: -15,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })

    // Mouse glow effect
    const handleMouseMove = (e) => {
      const glow = document.getElementById('hero-glow')
      if (glow) {
        glow.style.left = `${e.clientX}px`
        glow.style.top = `${e.clientY}px`
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-[5%] pt-32 pb-16 overflow-hidden">
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(201,168,76,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* Mouse-follow glow */}
      <div
        id="hero-glow"
        className="fixed w-[300px] h-[300px] rounded-full pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2"
        style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)' }}
      />

      {/* Floating orbs */}
      <div
        ref={orb1Ref}
        className="absolute w-[400px] h-[400px] rounded-full -top-24 -right-24 pointer-events-none"
        style={{ background: 'rgba(201,168,76,0.04)', filter: 'blur(60px)' }}
      />
      <div
        ref={orb2Ref}
        className="absolute w-[300px] h-[300px] rounded-full bottom-24 -left-20 pointer-events-none"
        style={{ background: 'rgba(230,57,70,0.03)', filter: 'blur(60px)' }}
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center"
      >
        <motion.span
          variants={itemVariants}
          className="inline-block border border-border px-4 py-1.5 text-xs tracking-[3px] text-muted mb-8 uppercase"
        >
          Members Only Club
        </motion.span>

    
        <motion.h1
          variants={itemVariants}
          className="font-syne font-black text-[clamp(2.7rem,5vw,6rem)] leading-[1.0] mb-6"
        >
          Rewarding the<br />
          <span className="gold-text">Creditworthy</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-muted text-lg max-w-xl leading-relaxed mb-10"
        >
          India's most trusted platform for managing credit cards, paying bills, and building your financial reputation.
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-4 flex-wrap justify-center">
          <button className="relative bg-gold text-black border-none px-8 py-4 font-grotesk font-bold text-base tracking-widest cursor-pointer neopop-shadow">
            GET STARTED
          </button>
          <button className="bg-transparent text-cream border border-border/60 px-8 py-4 font-grotesk font-medium text-base cursor-pointer hover:border-gold hover:text-gold transition-all duration-300">
            How it works →
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="flex gap-12 mt-16 flex-wrap justify-center"
        >
          {[
            { num: '12M+', label: 'MEMBERS' },
            { num: '₹3500Cr', label: 'BILLS PAID' },
            { num: '4.9★', label: 'APP RATING' },
            { num: '100%', label: 'SECURE' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-syne font-black text-3xl text-gold">{stat.num}</div>
              <div className="text-xs text-muted tracking-[2px] mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[3px] text-muted">SCROLL</span>
        <div
          className="w-px h-10 origin-top"
          style={{
            background: 'linear-gradient(to bottom, #c9a84c, transparent)',
            animation: 'scrollLine 2s infinite',
          }}
        />
      </motion.div>
    </section>
  )
}

export default Hero
