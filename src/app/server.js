const express = require("express");
const http = require("http");
const app = express();

const server = http.createServer();
const socket = require("socket.io");
const io = socket(server);

const rooms = {};

server.listen(8000, () => {
  console.log("Server is running");
});

io.on("connect", () => {
  socket.on("join_room", (roomId) => {
    if (rooms[roomId]) {
      rooms[roomId].push(socket.id);
    } else {
      rooms[roomId] = [socket.id];
    }

    const otherUser = rooms[roomId].find((id) => id === socket.id);
    if (otherUser) {
      socket.emit("other_user", otherUser);
      socket.to(otherUser).emit("user_joined", socket.id);
    }
  });

  socket.on("offer", (payload) => {
    io.to(payload.target).emit("offer",payload);
  });

  socket.on("answer", (payload) => {
    io.to(payload.target).emit("answer",payload);
  })

  socket.on("ice_candidate",incoming => {
    io.to(payload.target).emit("ice_candidate",incoming.candidate);

  });
});
