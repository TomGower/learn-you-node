const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const file = process.argv[3];

const server = http.createServer(function (req, res) {
  // request handling logic
  // const fileStream = fs.createReadStream(file);
  // res.write(fileStream);
  // res.pipe(fileStream);
  fs.createReadStream(file).pipe(res);
});
server.listen(port);

/*
'use strict'
const http = require('http')
const fs = require('fs')

const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })

  fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))
*/