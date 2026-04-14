import { motion } from 'framer-motion'
import Hero        from '../components/Hero'
import Features    from '../components/Features'
import HowItWorks  from '../components/HowItWorks'
import Download    from '../components/Download'
import FAQ         from '../components/FAQ'
import Support     from '../components/Support'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.35 } },
  exit:    { opacity: 0, transition: { duration: 0.2 } },
}

export default function Home() {
  return (
    <motion.div
      className="page-wrapper"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Hero />
      <Features />
      <HowItWorks />
      <Download />
      <FAQ />
      <Support />
    </motion.div>
  )
}
