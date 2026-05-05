import { statsData } from "../data/dhoniData"
import { motion } from "framer-motion"
import { staggerContainer, fadeUp } from "../utils/animations"

function Stats() {
  return (
    <div>
      <h1>CAREER STATISTICAL BREAKDOWN</h1>

      <div className="quote">
        <p>
          "Till the full stop doesn’t come, the sentence isn’t complete."
        </p>
        <span>— M.S. Dhoni</span>
      </div>

      <div className="table-container">
        <motion.table
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <thead>
            <tr>
              <th>Format</th>
              <th>Matches</th>
              <th>Runs</th>
              <th>Average</th>
              <th>Dismissals</th>
            </tr>
          </thead>

          <tbody>
            {statsData.map((item, index) => (
              <motion.tr key={index} variants={fadeUp}>
                <td>{item.format}</td>
                <td>{item.matches}</td>
                <td>{item.runs}</td>
                <td>{item.avg}</td>
                <td>{item.dismissals}</td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </div>
    </div>
  )
}

export default Stats