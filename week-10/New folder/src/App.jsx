import { createContext, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const blubContext = createContext();

//a clock with a start and stop button
function App() {
  const [currentCount, setCurrentCount] = useState(1);
  // const [timer, setTimer] = useState(0);
  const timer = useRef();
  function startClock() {
    const value = setInterval(() => {
      setCurrentCount((currentCount) => currentCount + 1);
    }, 1000);
    timer.current = value;
  }
  function stopClock() {
    console.log(timer.current);
    // timer.current.stopClock;
    clearInterval(timer.current);
  }
  return (
    <>
      {currentCount}
      <br />
      <button onClick={startClock}>start</button> &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={stopClock}>stop</button>
    </>
  );
}

export default App;
