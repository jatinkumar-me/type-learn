import { useDispatch, useSelector } from "react-redux";
import { useCountdown } from "../hooks/useCountDown";
import { endTest, selectIsTestActive, selectTestDuration } from "../state/testSlice";
import { useEffect } from "react";

export default function CountDown({inputRef} : {inputRef: React.RefObject<HTMLInputElement>}) {
  const dispatch = useDispatch();
  const isTestActive = useSelector(selectIsTestActive);
  const duration = useSelector(selectTestDuration);
  const { remainingTime, start, resetTimer } = useCountdown(duration);

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

  return <div className="countdown">
    <h1> ⏱ {remainingTime} s</h1>
  </div>
}
