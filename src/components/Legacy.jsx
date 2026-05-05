import { legacyData } from "../data/dhoniData"
import { motion } from "framer-motion"
import { staggerContainer, fadeUp } from "../utils/animations"

function Legacy() {
  return (
    <div>
      <h1>LEGACY</h1>

      <motion.ul 
        className="legacy-list"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {legacyData.map((item, index) => (
          <motion.li key={index} variants={fadeUp}>{item}</motion.li>
        ))}
      </motion.ul>
    </div>
  )
}

export default Legacy