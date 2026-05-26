// Testimonials.jsx - Auto-scrolling member reviews using CSS infinite scroll
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const reviews = [
  {
    stars: 5,
    text: 'CRED has completely changed how I manage my credit cards. The rewards are genuinely useful and the UI is absolutely stunning.',
    author: 'Arjun Sharma',
    card: 'HDFC Regalia Member',
  },
  {
    stars: 5,
    text: 'Never missed a payment since joining CRED. The reminders and one-tap payments make it so effortless to stay on top.',
    author: 'Priya Mehta',
    card: 'Axis Magnus Member',
  },
  {
    stars: 5,
    text: 'The cashback and vouchers I get are actually premium — not the usual junk. Worth every second of using the app.',
    author: 'Rohan Kapoor',
    card: 'SBI Elite Member',
  },
  {
    stars: 5,
    text: 'My credit score improved significantly after 6 months on CRED. The insights and tips are genuinely actionable.',
    author: 'Sneha Iyer',
    card: 'ICICI Sapphiro Member',
  },
  {
    stars: 5,
    text: 'Paying rent via credit card and earning rewards is a game changer. I\'ve collected enough coins for a flight upgrade!',
    author: 'Vikram Nair',
    card: 'Amex Platinum Member',
  },
  {
    stars: 5,
    text: 'The exclusivity aspect makes you want to maintain a good credit score. Brilliant incentive structure from CRED.',
    author: 'Anita Bose',
    card: 'IndusInd Pinnacle Member',
  },
]

const TestimonialCard = ({ review }) => (
  <div className="w-[300px] flex-shrink-0 bg-dark2 border border-border p-7">
    <div className="text-gold text-xs tracking-[3px] mb-4">{'★'.repeat(review.stars)}</div>
    <p className="text-muted text-sm leading-[1.7] mb-5">"{review.text}"</p>
    <div className="text-sm font-semibold text-cream">{review.author}</div>
    <div className="text-xs text-muted mt-0.5">{review.card}</div>
  </div>
)

const Testimonials = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  // Duplicate reviews for seamless infinite scroll
  const allReviews = [...reviews, ...reviews]

  return (
    <section id="members" className="bg-dark py-24 overflow-hidden">
      {/* Header */}
      <div ref={ref} className="text-center px-[5%] mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-[10px] tracking-[3px] text-gold font-semibold mb-4 block uppercase"
        >
          Members Love Us
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-syne font-black text-[clamp(2rem,4vw,3.2rem)]"
        >
          Rated 4.9 on App Store
        </motion.h2>

        {/* Store badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex gap-4 justify-center mt-6 flex-wrap"
        >
          <div className="border border-border px-5 py-2.5 flex items-center gap-3">
            <span className="text-xl">🍎</span>
            <div className="text-left">
              <div className="text-[10px] text-muted">Download on the</div>
              <div className="text-xs font-semibold text-cream">App Store</div>
            </div>
          </div>
          <div className="border border-border px-5 py-2.5 flex items-center gap-3">
            <span className="text-xl">▶</span>
            <div className="text-left">
              <div className="text-[10px] text-muted">Get it on</div>
              <div className="text-xs font-semibold text-cream">Google Play</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Infinite scroll testimonials */}
      <div className="testimonial-wrapper">
        <div className="testimonial-track">
          {allReviews.map((review, i) => (
            <TestimonialCard key={i} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
