import { profileData } from "../data/dhoniData"
import { motion } from "framer-motion"
import { staggerContainer, fadeUp } from "../utils/animations"

function Profile() {
  return (
    <div>
      <h1>PERSONAL PROFILE</h1>

      <motion.div 
        className="profile-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.p variants={fadeUp}><strong>Full Name:</strong> {profileData.fullName}</motion.p>
        <motion.p variants={fadeUp}><strong>DOB:</strong> {profileData.dob}</motion.p>
        <motion.p variants={fadeUp}><strong>Birthplace:</strong> {profileData.birthplace}</motion.p>
        <motion.p variants={fadeUp}><strong>Nationality:</strong> {profileData.nationality}</motion.p>
        <motion.p variants={fadeUp}><strong>Role:</strong> {profileData.role}</motion.p>
        <motion.p variants={fadeUp}><strong>Batting Style:</strong> {profileData.battingStyle}</motion.p>
        <motion.p variants={fadeUp}><strong>Jersey:</strong> {profileData.jersey}</motion.p>
      </motion.div>
    </div>
  )
}

export default Profile