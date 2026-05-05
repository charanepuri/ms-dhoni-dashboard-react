import { journeyData } from "../data/dhoniData"

function Journey() {
  return (
    <div>
      <h1>THE JOURNEY TO IMMORTALITY</h1>
      <h3 className="journey-subtitle">FROM RANCHI TO IMMORTALITY</h3>

      <div className="journey-container">

        {/* Left Side */}
        <div className="journey-left">
          <p className="journey-tags">{journeyData.titles}</p>
          <br />
          <h2 className="journey-name">{journeyData.name}</h2>

          <div className="journey-stats">
            <p>{journeyData.achievements}</p>
            <p>{journeyData.captaincy}</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="timeline">
          {journeyData.timeline.map((item, index) => (
            <p key={index} className="timeline-item">
              {item}
            </p>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Journey;