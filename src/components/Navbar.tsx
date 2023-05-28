import CountDown from "./CountDown";

export default function Navbar({inputRef} : {inputRef: React.RefObject<HTMLInputElement>}) {
  return <nav>
    <div className="nav__content">
      <div className="nav__heading">
        <h1>Type-learn</h1>
      </div>
      <CountDown inputRef={inputRef} />
    </div>
  </nav>
}
