import { useDispatch, useSelector } from "react-redux";
import { useCountdown } from "../hooks/useCountDown";
import { endTest, selectIsTestActive, selectTestDuration, setTestDuration } from "../state/testSlice";
import { useEffect, useState } from "react";

export default function CountDown({ inputRef }: { inputRef: React.RefObject<HTMLInputElement> }) {
  const dispatch = useDispatch();
  const isTestActive = useSelector(selectIsTestActive);
  const duration = useSelector(selectTestDuration);
  const [durationInput, setDurationInput] = useState(duration);
  const [showInput, setShowInput] = useState(false);
  const { remainingTime, start, resetTimer } = useCountdown(duration);

  function handleClick() {
    dispatch(setTestDuration(durationInput));
    setShowInput(!showInput);
  }

  useEffect(() => {
    if (isTestActive) {
      start();
      if (remainingTime <= 0) {
        dispatch(endTest());
        inputRef.current?.blur();
        resetTimer();
      }
    }
  }, [isTestActive, remainingTime]);

  useEffect(() => {
    resetTimer();
  }, [duration])

  return <div className="countdown">
    <h1> ⏱ {remainingTime} s</h1>
    <div className="duration-input-form">

    {
      showInput &&
      <input
        type="number"
        min={5}
        max={600}
        className="duration-input"
        value={durationInput}
        onChange={(e) => setDurationInput(parseInt(e.target.value))}
        disabled={isTestActive}
      />
    }
    <button disabled={isTestActive} aria-label="Change test duration" onClick={handleClick}>
      Change duration
    </button>
    </div>
  </div>
}
