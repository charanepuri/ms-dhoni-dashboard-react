import { useState } from "react"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"

function App() {
  const [theme, setTheme] = useState("blue")

  const toggleTheme = () => {
    setTheme(prev => (prev === "blue" ? "yellow" : "blue"))
  }

  return (
    <div className={theme}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Home />
    </div>
  )
}

export default App