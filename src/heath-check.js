const http = require('http');
const hostname = 'localhost';
const port = 3000;
//http server
const server = http.createServer((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.end('<html><body><h1>Hello, World123AB!</h1></body></html>');
})
server.listen(port, hostname);