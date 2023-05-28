import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initTest, selectIsTestActive, selectText, setTotalCharacters, setTotalMistakes, startTest } from "../state/testSlice";
import Keyboard from "./Keyboard";

export default function TextBox({ inputRef }: { inputRef: React.RefObject<HTMLInputElement> }) {
  const dispatch = useDispatch();
  const isTestActive = useSelector(selectIsTestActive);

  const text = useSelector(selectText);
  const [curIndex, setCurIndex] = useState<number>(0);
  const [curValue, setCurValue] = useState<string>('');
  const [mistakes, setMistakes] = useState(new Set<number>());
  const [pressedKey, setPressedKey] = useState<string>("");


  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    dispatch(setTotalCharacters());

    if (text.charAt(curIndex) == value) {
      if (curIndex == 0 && !isTestActive) {
        handleStart();
      }
      setCurIndex(prevIndex => prevIndex + 1);
    } else {
      setMistakes(mistakes.add(curIndex));
      dispatch(setTotalMistakes());
    }

    if (curIndex >= text.length - 1) {
      handleCompletion();
    }
    setCurValue('');
  }

  function handleCompletion() {
    dispatch(initTest());
    setCurIndex(0);
    setMistakes(new Set());
  }

  function handleStart() {
    dispatch(startTest());
  }

  function handleKeyUp() {
    setPressedKey("");
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    setPressedKey(e.key);
  }

  useEffect(() => {
    if(!isTestActive){
      setCurIndex(0);
      setCurValue('');
    }
  }, [isTestActive])

  return (<section >
    <div className="textBox">
      <div>
        {text.split('').map((char, i) => <span key={i}>
          {i === curIndex ? <span className="caret">|</span> : <></>}
          <span
            className={
              `${mistakes.has(i) ? "mistake" : ""} ${i < curIndex ? "completed" : ""}`}
          >
            {char}
          </span>
        </span>)}
      </div>
      <input
        className="textInput"
        type="text"
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        value={curValue}
        onChange={handleChange}
        maxLength={1}
        ref={inputRef}
        autoFocus
      />
    </div>
    <Keyboard pressedKey={pressedKey.toUpperCase()} expectedKey={text.charAt(curIndex).toUpperCase()} />
  </section>
  )
}
