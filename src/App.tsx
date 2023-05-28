import { useEffect, useRef } from "react"
import Score from "./components/Score"
import TextBox from "./components/TextBox"
import { useDispatch } from "react-redux"
import { initTest } from "./state/testSlice"
import Navbar from "./components/Navbar"

function App() {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    dispatch(initTest());
    inputRef.current?.focus();
  }

  useEffect(() => { dispatch(initTest()); }
    , [])

  return (
    <main className="main">
      <Navbar inputRef={inputRef} />
      <section className="main-section">
        <Score onClick={handleClick}/>
        <TextBox inputRef={inputRef} />
      </section>
    </main>
  )
}

export default App
