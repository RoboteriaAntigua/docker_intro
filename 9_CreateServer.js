var fs = require('fs');
var http = require('http');


http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  console.log("servidor corriendo");
  res.write("<h1>aqui renderizando codigo html, fundamental para ello las cabeceras (writeHead) </h3>");
  res.end();
}).listen(3000);


