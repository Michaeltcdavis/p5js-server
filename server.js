const http = require("http");
const express = require("express");

const app = express();
app.use(express.static("public"));

app.set("PORT", "3000");

const server = http.createServer(app);

server.on("listening", () => {
  console.log("listening on port 3000")
})

server.listen("3000");