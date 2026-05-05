import { careerSummaryData } from "../data/dhoniData"
import { motion } from "framer-motion"
import { staggerContainer, fadeUp } from "../utils/animations"

function CareerSummary() {
  return (
    <div>
      <h1>CAREER SUMMARY</h1>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeUp} className="summary-block">
          <h2>T20I Career</h2>
          <p style={{ textAlign: "justify" }}>{careerSummaryData.t20i}</p>
        </motion.div>

        <motion.div variants={fadeUp} className="summary-block">
          <h2>ODI Career</h2>
          <p style={{ textAlign: "justify" }}>{careerSummaryData.odi}</p>
        </motion.div>

        <motion.div variants={fadeUp} className="summary-block">
          <h2>Test Career</h2>
          <p style={{ textAlign: "justify" }}>{careerSummaryData.test}</p>
        </motion.div>

        <motion.div variants={fadeUp} className="summary-block">
          <h2>IPL Career</h2>
          <p style={{ textAlign: "justify" }}>{careerSummaryData.ipl}</p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default CareerSummary;