import "./App.css";
import {
  RecoilRoot,
  useRecoilStateLoadable,
  useRecoilValueLoadable,
} from "recoil";
import { todoAtomFamily } from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <Todo id={4} />
      <Todo id={5} />
    </RecoilRoot>
  );
}

function Todo({ id }) {
  const [todoLoadable, setTodoLoadable] = useRecoilStateLoadable(
    todoAtomFamily(id)
  );
  // {
  //   contents
  //   state
  // }

  if (todoLoadable.state === "loading") return <p>Loading...</p>;
  if (todoLoadable.state === "hasError") return <p>Error loading quote.</p>;

  console.log(todoLoadable.state);
  const todo = todoLoadable.contents;

  return (
    <div>
      <p>{todo.id}</p>
      <p>{todo.quote}</p>
      <p>— {todo.author}</p>
    </div>
  );
}

export default App;
