import { useState } from "react"
import { motion } from "framer-motion"

function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="nav-container">

        {/* Logo */}
        <div className="logo">MSD</div>

        {/* Desktop Links */}
        <div className="nav-links desktop">
          <a href="#snapshot">Snapshot</a>
          <a href="#journey">Journey</a>
          <a href="#stats">Stats</a>
          <a href="#profile">Profile</a>
          <a href="#personal">Personal</a>
          <a href="#achievements">Achievements</a>
          <a href="#quotes">Quotes</a>
          <a href="#ipl">IPL</a>
          <a href="#awards">Awards</a>
          <a href="#captaincy">Captaincy</a>
          <a href="#legacy">Legacy</a>
          <a href="#milestones">Milestones</a>
          <a href="#summary">Summary</a>
          <a href="#about">About</a>
          <a href="#trophies">Trophies</a>
          <a href="#fanzone">Fan Zone</a>
        </div>

        {/* Right Controls */}
        <div className="nav-right">

          {/* Toggle */}
          <div className="theme-switch" onClick={toggleTheme}>
            <div className={`switch ${theme === "yellow" ? "active" : ""}`}>
              <div className="circle"></div>
            </div>
          </div>

          {/* Hamburger */}
          <div className="hamburger" onClick={() => setOpen(!open)}>
            ☰
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          className="mobile-menu"
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
        >
          <a href="#snapshot">Snapshot</a>
          <a href="#journey">Journey</a>
          <a href="#stats">Stats</a>
          <a href="#profile">Profile</a>
          <a href="#personal">Personal</a>
          <a href="#achievements">Achievements</a>
          <a href="#quotes">Quotes</a>
          <a href="#ipl">IPL</a>
          <a href="#awards">Awards</a>
          <a href="#captaincy">Captaincy</a>
          <a href="#legacy">Legacy</a>
          <a href="#milestones">Milestones</a>
          <a href="#summary">Summary</a>
          <a href="#about">About</a>
          <a href="#trophies">Trophies</a>
          <a href="#fanzone">Fan Zone</a>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar