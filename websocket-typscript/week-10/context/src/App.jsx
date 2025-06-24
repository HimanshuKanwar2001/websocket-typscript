import { createContext, useContext, useState } from "react";

import "./App.css";
const BulbContext = createContext();

function BulbProvider({ children }) {
  const [bublOn, setBulbOn] = useState(true);
  return (
    <BulbContext.Provider value={{ bulbOn: bublOn, setBulbOn: setBulbOn }}>
      {children}
    </BulbContext.Provider>
  );
}
function App() {
  return (
    <>
      <BulbProvider>
        <div>Hello world</div>
        <Light />
      </BulbProvider>
    </>
  );
}

function Light() {
  return (
    <>
      <LightBulb />
      <LightSwitch />
    </>
  );
}

function LightBulb() {
  const { bulbOn } = useContext(BulbContext);
  return (
    <>
      <div>{bulbOn ? "Bulb is On" : "Bulb is off"}</div>
    </>
  );
}

function LightSwitch() {
  const { setBulbOn } = useContext(BulbContext);
  function toggle() {
    setBulbOn((prev) => !prev);
  }
  return (
    <>
      <button onClick={toggle}>Toggle Button</button>
    </>
  );
}
export default App;
