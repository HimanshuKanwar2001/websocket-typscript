import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const [socket, setSocket] = useState();
  const [messages, setMessages] = useState([]);
  const inputRef = useRef();
  const sendMessage = () => {
    if (!socket) {
      return;
    }
    const message = inputRef.current.value;
    // @ts-ignore
    socket.send(message);
  };

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:5000");
    setSocket(ws);

    ws.onmessage = (event) => {
      console.log(event.data);
      setMessages([...messages, event.data]);
    };
    ws.onerror = () => {
      console.log("connection error ...");
    };
    ws.onclose = () => {
      console.log("connection closed ...");
    };
    ws.onopen = () => {
      console.log("connection opened ...");
    };
  }, []);

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <input ref={inputRef} type="text" placeholder="Message...." />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default App;
