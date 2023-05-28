import { useEffect, useState } from 'react';

const useCountdown = (seconds: number) => {

  const [remainingTime, setRemainingTime] = useState(seconds);
  const [isRunning, setIsRunning] = useState(false);

  function resetTimer() {
    setRemainingTime(seconds);
    setIsRunning(false);
  }

  function start() {
    setIsRunning(true);
  }

  useEffect(() => {
    if (remainingTime > 0 && isRunning) {
      const timer = setTimeout(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [remainingTime, isRunning]);

  return { remainingTime, resetTimer, start };
};

export { useCountdown };
