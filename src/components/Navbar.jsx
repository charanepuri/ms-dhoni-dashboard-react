import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

const navLinks = [
  { id: "snapshot", label: "Snapshot" },
  { id: "journey", label: "Journey" },
  { id: "stats", label: "Stats" },
  { id: "profile", label: "Profile" },
  { id: "personal", label: "Personal" },
  { id: "achievements", label: "Achievements" },
  { id: "quotes", label: "Quotes" },
  { id: "ipl", label: "IPL" },
  { id: "awards", label: "Awards" },
  { id: "captaincy", label: "Captaincy" },
  { id: "legacy", label: "Legacy" },
  { id: "milestones", label: "Milestones" },
  { id: "summary", label: "Summary" },
  { id: "about", label: "About" },
  { id: "trophies", label: "Trophies" },
  { id: "fanzone", label: "Fan Zone" },
  { id: "gallery", label: "Gallery" }
];

function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const navRef = useRef(null)

  // Track the scroll position to highlight the active link
  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          // 150px offset accommodates the fixed navbar height
          if (element.getBoundingClientRect().top <= 150) {
            current = link.id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [open]);

  return (
    <motion.nav
      ref={navRef}
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="nav-container">

        {/* Logo */}
        <div className="logo">MSD</div>

        {/* Desktop Links */}
        <div className="nav-links desktop">
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={`#${link.id}`}
              className={activeSection === link.id ? "active" : ""}
            >{link.label}</a>
          ))}
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
          onClick={(e) => {
            if (e.target.closest("a")) setOpen(false)
          }}
        >
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={`#${link.id}`}
              className={activeSection === link.id ? "active" : ""}
            >{link.label}</a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar