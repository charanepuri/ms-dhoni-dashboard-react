import { awardsData } from "../data/dhoniData"
import { motion } from "framer-motion"
import { staggerContainer, fadeUp } from "../utils/animations"

function Awards() {
  return (
    <div>
      <h1>AWARDS & HONORS</h1>

      <motion.ul 
        className="awards-list"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {awardsData.map((item, index) => (
          <motion.li key={index} variants={fadeUp}>{item}</motion.li>
        ))}
      </motion.ul>
    </div>
  )
}

export default Awards;