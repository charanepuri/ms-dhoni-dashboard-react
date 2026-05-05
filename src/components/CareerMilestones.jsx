import { careerMilestonesData } from "../data/dhoniData"
import { motion } from "framer-motion"
import { staggerContainer, fadeUp } from "../utils/animations"

function CareerMilestones() {
  return (
    <div>
      <h1>CAREER MILESTONES</h1>

      <h2>Debut</h2>
      <motion.table
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <thead>
          <tr>
            <th>Format</th>
            <th>Date</th>
            <th>Opponent</th>
          </tr>
        </thead>
        <tbody>
          {careerMilestonesData.debut.map((item, index) => (
            <motion.tr key={index} variants={fadeUp}>
              <td>{item.format}</td>
              <td>{item.date}</td>
              <td>{item.opponent}</td>
            </motion.tr>
          ))}
        </tbody>
      </motion.table>
      
      <br />
      
      <h2>Retirement</h2>
      <motion.table
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <thead>
          <tr>
            <th>Format</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {careerMilestonesData.retirement.map((item, index) => (
            <motion.tr key={index} variants={fadeUp}>
              <td>{item.format}</td>
              <td>{item.date}</td>
            </motion.tr>
          ))}
        </tbody>
      </motion.table>
    </div>
  )
}

export default CareerMilestones;