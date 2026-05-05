import { personalLifeData } from "../data/dhoniData"
import { motion } from "framer-motion"
import { staggerContainer, fadeUp } from "../utils/animations"

function PersonalLife() {
  return (
    <div>
      <h1>PERSONAL LIFE</h1>

      <motion.div 
        className="personal-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.p variants={fadeUp}><strong>Father:</strong> {personalLifeData.father}</motion.p>
        <motion.p variants={fadeUp}><strong>Mother:</strong> {personalLifeData.mother}</motion.p>
        <motion.p variants={fadeUp}><strong>Spouse:</strong> {personalLifeData.spouse}</motion.p>
        <motion.p variants={fadeUp}><strong>Child:</strong> {personalLifeData.child}</motion.p>

        <motion.div variants={fadeUp}>
          <strong>Siblings:</strong>
          {personalLifeData.siblings.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default PersonalLife;