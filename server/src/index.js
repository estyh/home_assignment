const http = require("http");
const express = require("express");
const { Server } = require("socket.io");
const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  path: "/ws",
});

io.on("connection", (socket) => {
  console.log("User connected");
});

server.listen(3000, () => {
  console.log("Listening on port 3000");
});
