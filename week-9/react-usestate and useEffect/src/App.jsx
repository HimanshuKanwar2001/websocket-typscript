import { useState, useEffect } from "react";

import "./App.css";

// Conditional Rendering
function App() {
  const [counterVisible, setCounterVisible] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const toggleInterval = setInterval(() => {
      setCounterVisible((visible) => !visible);
    }, 5000);

    const clockInterval = setInterval(() => {
      console.log("Hello");
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Cleanup on unmount
    return () => {
      clearInterval(toggleInterval);
      clearInterval(clockInterval);
    };
  }, []);

  return (
    <>
      <h1>Counter App</h1>
      {counterVisible && <Counter count={count}></Counter>}
      <p>Check the console for updates every second.</p>
    </>
  );
}

// Counter Component
function Counter({ count }) {
  const increment = () => {
    console.log("Increment button clicked");
  };

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={increment}>Increment Value</button>
    </div>
  );
}

export default App;
 