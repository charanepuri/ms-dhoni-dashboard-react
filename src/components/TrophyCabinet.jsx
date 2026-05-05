import { trophyData } from "../data/dhoniData"

import { motion } from "framer-motion"
import { staggerContainer, scaleIn } from "../utils/animations"

function TrophyCabinet() {
  return (
    <div>
      <h1>TROPHIES</h1>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="trophy-grid"
      >
        {trophyData.map((item, i) => (
          <motion.div key={i} variants={scaleIn} className="trophy-card">
            <h2>{item.year}</h2>
            <p>{item.title}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default TrophyCabinet;