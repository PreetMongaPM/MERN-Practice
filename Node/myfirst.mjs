// let http = require('http');
import http from "http";

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello World!");
  })
  .listen(8080, "0.0.0.0");
