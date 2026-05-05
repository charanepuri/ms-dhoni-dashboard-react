import { achievementsData } from "../data/dhoniData"
import { motion } from "framer-motion"
import { staggerContainer, fadeUp } from "../utils/animations"

function Achievements() {
  return (
    <div>
      <h1>ACHIEVEMENTS</h1>

      <motion.ul 
        className="achievements-list"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {achievementsData.map((item, index) => (
          <motion.li key={index} variants={fadeUp}>{item}</motion.li>
        ))}
      </motion.ul>
    </div>
  )
}

export default Achievements;