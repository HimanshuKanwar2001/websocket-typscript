import { useEffect } from "react";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import axios from "axios";
import {
  notification,
  todosAtomFamily,
  totalNotificationSelector,
} from "./atom";

function App() {
  return (
    <RecoilRoot>
      {/* <MainApp /> */}
      <Todo id={1} />
      <Todo id={2} />
    </RecoilRoot>
  );
}

function Todo({ id }) {
  const currentTodo = useRecoilValue(todosAtomFamily(id));
  return (
    <div>
      {currentTodo.title} <br></br>
      {currentTodo.description}
    </div>
  );
}

// function MainApp() {
//   const [networkCount, setNetworkCount] = useRecoilState(notification);
//   const totalNotificationCount = useRecoilValue(totalNotificationSelector);

//   // useEffect(() => {
//   //   // Fetch data only once when the component mounts
//   //   // const fetchData = async () => {
//   //   //   try {
//   //   //     const res = await axios.get("https://dummyjson.com/quotes");
//   //   //     console.log("Data fetched:", res.data.quotes); // Adjusted to match API response structure
//   //   //     setNetworkCount(res.data.quotes); // Assuming the API returns an array under `quotes`
//   //   //   } catch (error) {
//   //   //     console.error("Error fetching data:", error.message);
//   //   //   }
//   //   // };

//   //   // fetchData();
//   // }, [setNetworkCount]); // Dependency ensures `setNetworkCount` is valid

//   return (
//     <div>
//       <h1>Hello World!!!</h1>
//       <p>Total Notifications: {totalNotificationCount}</p>
//       <pre>
//         {networkCount.map((noti) => (
//           <div key={noti.id}>
//             <strong>ID:</strong> {noti.id} <br />
//             <strong>Quote:</strong> {noti.quote} <br />
//             <strong>Author:</strong> {noti.author}
//           </div>
//         ))}
//       </pre>
//     </div>
//   );
// }

export default App;
