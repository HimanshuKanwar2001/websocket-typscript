import { useEffect, useState } from "react";
import "./App.css";
import useCounter from "./customHooks/useValue";
import usePostTitle, { useFetch } from "./customHooks/usePostTitle";
import usePrev from "./customHooks/usePrev";
import useDebounce from "./customHooks/useDebounce";

function App() {
  // const { count, increaseCount } = useCounter();
  // const postTitle = usePostTitle();
  const [inputVal, setInputVal] = useState("");
  const debounceFn = useDebounce(inputVal, 400);
  const [state, setState] = useState(0);
  const prev = usePrev(state);
  const { finalData, loading } = useFetch();

  function inputValue(e) {
    setInputVal(e.target.value);
    // console.log(inputVal);
  }

  useEffect(() => {
    // expensiveoperation
    console.log("expensiveoperation");
  }, [debounceFn]);
  // "https://jsonplaceholder.typicode.com/posts/2"
  async function sendData() {
    await fetch("https://jsonplaceholder.typicode.com/posts/2");
  }
  function increaseCount1() {
    setState((prev) => prev + 1);
  }

  // if (loading) {
  //   return (
  //     <>
  //       <div>Loading...</div>
  //     </>
  //   );
  // }

  return (
    <>
      <div>
        <input type="text" onChange={inputValue} />
        {/* {postTitle} */}
        {JSON.stringify(finalData)}
        <button onClick={increaseCount1}>Increase {state} </button>
      </div>
      <p>prev value :{prev}</p>
    </>
  );
}

export default App;
