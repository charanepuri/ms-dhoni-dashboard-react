import { snapshotData } from "../data/dhoniData"

import { motion } from "framer-motion"
import { staggerContainer, scaleIn } from "../utils/animations"

function Snapshot() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="snapshot-grid"
    >
      <motion.div variants={scaleIn} className="card">
        <h2>17,266</h2>
        <p>INTERNATIONAL RUNS</p>
      </motion.div>

      <motion.div variants={scaleIn} className="card">
        <h2>311</h2>
        <p>TOTAL CAREER WINS</p>
      </motion.div>

      <motion.div variants={scaleIn} className="card">
        <h2>0.08s</h2>
        <p>FASTEST STUMPING</p>
      </motion.div>
    </motion.div>
  )
}

export default Snapshot;