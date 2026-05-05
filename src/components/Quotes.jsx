import { quotesData } from "../data/dhoniData"
import { motion } from "framer-motion"
import { staggerContainer, scaleIn } from "../utils/animations"

function Quotes() {
  return (
    <div>
      <h1>FAMOUS QUOTES</h1>

      <motion.div 
        className="quotes"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {quotesData.map((quote, index) => (
          <motion.blockquote key={index} className="quote-item" variants={scaleIn}>
            "{quote}"
          </motion.blockquote>
        ))}
      </motion.div>
    </div>
  )
}

export default Quotes;