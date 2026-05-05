import { iplData } from "../data/dhoniData"
import { motion } from "framer-motion"
import { staggerContainer, fadeUp } from "../utils/animations"

function IPL() {
  return (
    <div>
      <h1>IPL CAREER</h1>

      <motion.div 
        className="ipl-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.p variants={fadeUp}><strong>Matches:</strong> {iplData.matches}</motion.p>
        <motion.p variants={fadeUp}><strong>Runs:</strong> {iplData.runs}</motion.p>
        <motion.p variants={fadeUp}><strong>Average:</strong> {iplData.average}</motion.p>
        <motion.p variants={fadeUp}><strong>Strike Rate:</strong> {iplData.strikeRate}</motion.p>
        <motion.p variants={fadeUp}><strong>50s:</strong> {iplData.fifties}</motion.p>
        <motion.p variants={fadeUp}><strong>Sixes:</strong> {iplData.sixes}</motion.p>
        <motion.p variants={fadeUp}><strong>Dismissals:</strong> {iplData.dismissals}</motion.p>
        <motion.p variants={fadeUp}><strong>Titles:</strong> {iplData.titles}</motion.p>
      </motion.div>
    </div>
  )
}

export default IPL;