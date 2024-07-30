require("dotenv").config();
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const bodyParser = require("body-parser");
const cors = require("cors");

// Enable CORS for all routes
app.use(cors());
app.use(bodyParser.json());

const io = new Server(httpServer, {
  cors: {
    origin: ["http://localhost:5173"],
    methods: ["Get", "POST", "PUT", "DELETE"],
    allowedHeaders: ["content-type", "Authorization"],
  },
});

const PORT = process.env.PORT || 4500;

const registerChatNamespace = require("./namespace/chat.js");
const registerNewsNamespace = require("./namespace/news.js");

const connectNamespaces = () => {
  // Initialize namespace
  registerChatNamespace(io);
  registerNewsNamespace(io);
};

connectNamespaces();

const startServer = async () => {
  try {
    httpServer.listen(PORT, () => {
      console.log(`server listening on port ${PORT} http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Error starting server", err);
  }
};

startServer();
