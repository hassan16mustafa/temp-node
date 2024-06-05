const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("welcome");
    } else if (req.url === '/about') {
        res.end("what is up");
    } else {
        res.end('<button> what is this</button>');
    }
});

server.listen(5000, () => {
    console.log('Server is listening on port 5000');
});
