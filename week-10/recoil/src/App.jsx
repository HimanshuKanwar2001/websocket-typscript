import { memo, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { use } from "react";
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom, evenSelector } from "./store/atoms/counter";

function App() {
  return (
    <>
      <RecoilRoot>
        <Button />
        <Counter />
        <IsEven />
      </RecoilRoot>
    </>
  );
}

function Button() {
  const setCount = useSetRecoilState(counterAtom);
  return (
    <>
      <button onClick={() => setCount((prev) => prev + 2)}>Increase</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrease</button>
    </>
  );
}

function Counter() {
  const count = useRecoilValue(counterAtom);
  return (
    <>
      <div>{count}</div>
    </>
  );
}

function IsEven() {
  const isEvenState = useRecoilValue(evenSelector);
  return <>{isEvenState ? "Even" : "Odds"}</>;
}

export default App;
