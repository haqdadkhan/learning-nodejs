//! 1 --- import required modules ---
const http = require('http');
const PORT = 3000;

//! 2 --- define the handler ---
const requestHandler = (req, res) => {
    // send response
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('Hellow World! This is my first Node.js App.');
}

//! 3 --- create the server ---
const server = http.createServer(requestHandler);

//! 4 --- run the server ---
server.listen(PORT, () => {
    console.log(`Server is running at 'http://localhost:${PORT}`);
})
