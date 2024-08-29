module.exports = (io) => {
  const newsNamespace = io.of("/news");

  const newsUsers = {}

  newsNamespace.on("connection", (socket) => {
    socket.on("join", (userName) => {
      newsUsers[userName] = socket.id;
      console.log(`${userName} joined the news namespace`)
      console.log("news users: ",JSON.stringify(newsUsers));
    })

  });
};
