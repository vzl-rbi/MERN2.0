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
  console.log("someone has connected!!");
  socket.on("disconnect", () => {
    console.log("User is Disconnected!!");
  });
});
