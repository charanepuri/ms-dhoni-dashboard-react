import Snapshot from "../components/Snapshot"
import Journey from "../components/Journey"
import Stats from "../components/Stats"
import Profile from "../components/Profile"
import Achievements from "../components/Achievements"
import Quotes from "../components/Quotes"
import IPL from "../components/IPL"
import Awards from "../components/Awards"
import Captaincy from "../components/Captaincy"
import Footer from "../components/Footer"
import Legacy from "../components/Legacy"
import PersonalLife from "../components/PersonalLife"
import CareerMilestones from "../components/CareerMilestones"
import CareerSummary from "../components/CareerSummary"
import About from "../components/About"
import FanZone from "../components/FanZone"
import TrophyCabinet from "../components/TrophyCabinet"
import Gallery from "../components/Gallery"

import { motion } from "framer-motion"
import { fadeUp } from "../utils/animations"

function Home() {
  return (
    <>
      {/* <Navbar /> */}

      <div className="container">
        <motion.h1
          className="main-title"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          MAHENDRA SINGH DHONI
        </motion.h1>

        <Section id="snapshot"><Snapshot /></Section>
        <Section id="journey"><Journey /></Section>
        <Section id="stats"><Stats /></Section>
        <Section id="profile"><Profile /></Section>
        <Section id="personal"><PersonalLife /></Section>
        <Section id="achievements"><Achievements /></Section>
        <Section id="quotes"><Quotes /></Section>
        <Section id="ipl"><IPL /></Section>
        <Section id="awards"><Awards /></Section>
        <Section id="captaincy"><Captaincy /></Section>
        <Section id="legacy"><Legacy /></Section>
        <Section id="milestones"><CareerMilestones /></Section>
        <Section id="summary"><CareerSummary /></Section>
        <Section id="about"><About /></Section>
        <Section id="trophies"><TrophyCabinet /></Section>
        <Section id="fanzone"><FanZone /></Section>
        <Section id="gallery"><Gallery /></Section>

        <Footer />
      </div>
    </>
  )
}

function Section({ children, id }) {
  return (
    <motion.section
      id={id}
      className="section"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {children}
    </motion.section>
  )
}

export default Home;