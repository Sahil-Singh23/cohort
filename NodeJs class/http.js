// server.js

const http = require("http");

const server = http.createServer((req, res) => {
  // Set response headers
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send response body
  res.end("Hello, world!\n");
});

// Server listens on port 3000
server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
