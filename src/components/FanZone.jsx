import { fanZoneData } from "../data/dhoniData"
import { motion } from "framer-motion"
import { staggerContainer, scaleIn, fadeUp } from "../utils/animations"

function FanZone() {
  return (
    <div>
      <h1>FAN ZONE</h1>

      {/* Nicknames */}
      <motion.div 
        className="nickname-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {fanZoneData.nicknames.map((name, i) => (
          <motion.div key={i} className="nickname-card" variants={scaleIn}>{name}</motion.div>
        ))}
      </motion.div>

      <br /><br /><br />

      {/* Famous Finishes */}
      <motion.ul 
        className="finishes"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {fanZoneData.finishes.map((item, i) => (
          <motion.li key={i} variants={fadeUp}>{item}</motion.li>
        ))}
      </motion.ul>
    </div>
  )
}

export default FanZone;