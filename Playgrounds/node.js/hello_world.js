// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World!\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`서버가 http://${hostname}:${port}/에 열렸습니다!! 🚀`);
// });

const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  req.on('data', (chunk) => {
    console.log('You received a chunk of data', chunk);
  });
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('some data');
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
