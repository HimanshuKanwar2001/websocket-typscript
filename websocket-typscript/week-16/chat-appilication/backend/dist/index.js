"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let userCount = 0;
let allSockets = [];
// [
//   { socket: socket1, room: "room1" },
//   { socket: socket2, room: "room1" },
//   { socket: socket3, room: "room2" },
// ];
wss.on("connection", (socket) => {
    // allSockets.push(socket);
    userCount = userCount + 1;
    console.log("user connected no.", userCount);
    socket.on("message", (message) => {
        //@ts-ignore
        let parsedMessage = JSON.parse(message);
        if (parsedMessage.type === "join") {
            allSockets.push({ socket: socket, room: parsedMessage.payload.roomId });
        }
        console.log(allSockets);
        if (parsedMessage.type === "chat") {
            const currentRoom = allSockets.find((s) => s.socket === socket);
            if (currentRoom) {
                allSockets.forEach((s) => {
                    if (s.room === currentRoom.room) {
                        s.socket.send(parsedMessage.payload.message);
                    }
                });
            }
        }
        if (message)
            console.log(message.toString());
        // allSockets.forEach((s) => {
        //   s.send(message.toString() + " : send from the server");
        // });
        // socket.send(message.toString() + "send from the server");
    });
    socket.on("disconnect", () => {
        allSockets = allSockets.filter((s) => s.socket !== socket);
    });
});
