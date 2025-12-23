import express from "express";
const app = express();
import { Server } from "socket.io";
const PORT = 3000;
const message = "Hello from node.js";

app.get("/", (req, res) => {
  res.status(200).json({ "Message  ": message });
});

const server = app.listen(PORT, () =>
  console.log(`Server has started at http://localhost:${PORT}`)
);

const io = new Server(server);
io.on("connection", (socket) => {
  // console.log(socket.id);
  // socket.emit("greet", {
  //   greeting: "Hello sir,  welcome to the Socket.Io",
  // });
  console.log("Client connected:", socket.id);
  socket.on("sendData", (data) => {
    // console.log(data);
    if (data) {
      // socket.emit("response", "Thank you!!. I received your Data");
      // Server sends to ALL connected clients
      io.emit("globalMessage", { message: "Hello, Everyone!!" });
    }
  });
  // socket.on("disconnect", () => {
  //   console.log("User is Disconnected!!");
  // });
});
