var http = require("http");
var port = 8080;

var { Router } = require('./routes.js');

var server = http.createServer(function (req, res) {
    // Response
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    res.write(Router(req));
    res.end();
});

server.listen(port, function () {
    console.log("Listening on Port: "+ 8080);
});