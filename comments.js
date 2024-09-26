// Create web server

// Import the http module
const http = require('http');

// Define the hostname and port where the server will listen
const hostname = '127.0.0.1';
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
  // Set the response header with the status and content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Send a response to the client
  res.end('Hello, World!\n');
});

// Make the server listen to incoming requests
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
