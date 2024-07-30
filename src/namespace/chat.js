module.exports = (io) => {
  const chatNamespace = io.of("/chat");
  const users = [];

  chatNamespace.on("connection", (socket) => {
    users.push(socket.id);
    socket.on("sendMessage", (msg) => {
      console.log(`message received: ${msg}`);
    });

    socket.on("disconnect", () => {
      // users.reduce(`${socket.id}`);
    });
    console.log(users);
  });
};
