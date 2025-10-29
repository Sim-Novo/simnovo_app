import http from 'http';

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello from SimNovo Node.js app!');
  } else {
    res.statusCode = 404;
    res.end('Page not found');
  }
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:3000/');
});

