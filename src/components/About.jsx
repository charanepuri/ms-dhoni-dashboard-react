import { aboutData } from "../data/dhoniData"

function About() {
  return (
    <div>
      <h1>ABOUT</h1>

      <p 
        className="about-text" 
        style={{ textAlign: "justify", whiteSpace: "pre-line" }}
      >
        {aboutData}
      </p>
    </div>
  )
}

export default About