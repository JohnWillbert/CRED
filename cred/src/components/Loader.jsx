// Loader.jsx - Full screen loader shown on initial page load
import { motion, AnimatePresence } from 'framer-motion'

const Loader = ({ loading }) => {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-dark z-[9999] flex items-center justify-center"
        >
          <motion.div
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="font-syne font-black text-5xl text-gold tracking-tight"
          >
            CRED
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader
