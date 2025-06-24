import { useEffect, useRef, useState } from "react";

const App = () => {
  const [messages, setMessages] = useState(["hi there"]);
  const InputRefJoin = useRef<HTMLInputElement>(null);
  const InputRefChat = useRef<HTMLInputElement>(null);
  const wsRef = useRef<WebSocket>();

  const sendMessageHandler = (value: string) => {
    if (
      InputRefChat.current === null ||
      InputRefJoin.current === null ||
      !wsRef.current
    )
      return;

    if (value == "join") {
      wsRef.current.send(
        JSON.stringify({
          type: value,
          payload: { roomId: InputRefJoin.current.value },
        })
      );
    }
    if (value == "chat") {
      wsRef.current.send(
        JSON.stringify({
          type: value,
          payload: { message: InputRefChat.current.value },
        })
      );
    }
  };

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    wsRef.current = ws;

    ws.onmessage = (event) => {
      setMessages((m) => [...m, event.data]);
    };
  }, []);

  return (
    <div className="h-screen bg-black flex flex-col">
      <div className="w-[95%] h-[90vh] mx-auto p-4 rounded-lg bg-white">
        {messages?.map((m) => (
          <div className="">
            <span className="text-black">{m}</span>
          </div>
        ))}
      </div>
      <div className="w-[95%] flex justify-around h-[10vh]  m-4 rounded-lg mx-auto">
        <h2>Join from here before getting into the room</h2>
        <input
          ref={InputRefJoin}
          className="w-[80%] my-4 bg-gray-400 rounded-2xl p-4 text-2xl"
          type="text"
          placeholder="Enter your message here"
        />
        <button
          onClick={() => sendMessageHandler("join")}
          className="bg-blue-300 w-[10%] rounded-2xl my-4 cursor-pointer text-2xl"
        >
          Join Room
        </button>
      </div>
      <div className="w-[95%] flex justify-around h-[10vh]  m-4 rounded-lg mx-auto">
        <input
          ref={InputRefChat}
          className="w-[80%] my-4 bg-gray-400 rounded-2xl p-4 text-2xl"
          type="text"
          placeholder="Enter your message here"
        />
        <button
          onClick={() => sendMessageHandler("chat")}
          className="bg-blue-300 w-[10%] rounded-2xl my-4 cursor-pointer text-2xl"
        >
          send message
        </button>
      </div>
    </div>
  );
};
export default App;
