import { captaincyData } from "../data/dhoniData"
import { motion } from "framer-motion"
import { staggerContainer, fadeUp } from "../utils/animations"

function Captaincy() {
  return (
    <div>
      <h1>CAPTAINCY RECORD</h1>

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
            <th>Wins</th>
            <th>Losses</th>
            <th>Win %</th>
          </tr>
        </thead>

        <tbody>
          {captaincyData.map((item, index) => (
            <motion.tr key={index} variants={fadeUp}>
              <td>{item.format}</td>
              <td>{item.matches}</td>
              <td>{item.wins}</td>
              <td>{item.losses}</td>
              <td>{item.winRate}</td>
            </motion.tr>
          ))}
        </tbody>
      </motion.table>
    </div>
  )
}

export default Captaincy