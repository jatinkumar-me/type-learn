import { useSelector } from "react-redux"
import { selectIsTestActive, selectScore } from "../state/testSlice"

export default function({ onClick }: { onClick: () => void }) {
  const score = useSelector(selectScore);
  const isTestActive = useSelector(selectIsTestActive);
  return (<div className="score">
    <div className="test-status" >
      {isTestActive ? <p>Test active</p> : <button className="start-button" onClick={onClick}>Start Test ↪</button>}
    </div>
    <div className="score-container">
      <span>Accuracy: <b>{Math.floor(score.accuracy)}%</b></span>
      <span>Speed: <b>{Math.floor(score.cpm)} cpm</b></span>
    </div>
  </div>
  )
}
