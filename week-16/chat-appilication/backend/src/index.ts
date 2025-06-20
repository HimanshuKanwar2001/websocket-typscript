import { WebSocket, WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

interface User {
  socket: WebSocket;
  room: string;
}

let userCount = 0;
let allSockets: User[] = [];

// [
//   { socket: socket1, room: "room1" },
//   { socket: socket2, room: "room1" },
//   { socket: socket3, room: "room2" },
// ];

wss.on("connection", (socket) => {
  allSockets.push(socket);
  userCount = userCount + 1;
  console.log("user connected no.", userCount);

  socket.on("message", (message) => {
    console.log(message.toString());
    allSockets.forEach((s) => {
      s.send(message.toString() + " : send from the server");
    });
    // socket.send(message.toString() + "send from the server");
  });

  socket.on("disconnect", () => {
    allSockets = allSockets.filter((s) => s != socket);
  });
});
