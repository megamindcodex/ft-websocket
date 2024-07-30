module.exports = (io) => {
  const newsNamespace = io.of("/news");

  newsNamespace.on("connection", (socket) => {});
};
