// Import the required module
const http = require('http');

// Define the port and hostname
const PORT = 3000;
const HOSTNAME = '127.0.0.1';

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response headers
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Send the response message
  res.end('Hello from Microservice');
});

// Start the server
server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});
