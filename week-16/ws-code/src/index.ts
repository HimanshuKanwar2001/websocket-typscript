// import express from "express";
import { WebSocketServer } from "ws";
// const app = express();
const wss = new WebSocketServer({ port: 5000 });

//event handler
wss.on("connection", function (socket) {
  console.log("a user connected");
  //   setInterval(() => {
  //@ts-ignore
  //     socket.send(
  //       "Current Price of Solana is " + Math.floor(Math.random() * 100)
  //     );
  //   }, 500);

  socket.on("message", (e) => {
    console.log(e.toString());
    if (e.toString() === "ping") {
      socket.send("pong");
    }
  });
});

// app.use(express.json());

// app.listen(5000, () => {
//   console.log("server is running on port 5000");
// });
