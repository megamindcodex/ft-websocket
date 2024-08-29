module.exports = (io) => {
  const chatNamespace = io.of("/chat");
  
  const chatUsers = {};

  chatNamespace.on("connection", (socket) => {
    // users.push(socket.id);

    socket.on("join", (userName) => {
      chatUsers[userName] = socket.id
      socket.emit("handshake", {userName: userName, socketId: socket.id})
      console.log(`${userName} joined the chat namespace`)
      console.log("chat users: ",JSON.stringify(chatUsers));
    })


    socket.on("disconnect", () => {
      // users.reduce(`${socket.id}`);
    });
    // console.log(users);


  });
};
  