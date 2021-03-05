const http = require('http');
const map = require('through2-map');

const port = process.argv[2];

const server = http.createServer(function (req, res) {
  if (req.method !== 'POST') return;
  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase();
  })).pipe(res);
});

server.listen(port);

/* EXAMPLE USE OF THROUGH2-MAP
const map = require('through2-map')
inStream.pipe(map(function (chunk) {
  return chunk.toString().split('').reverse().join('')
})).pipe(outStream)
*/

/* OFFICIAL SOLUTION
'use strict'
const http = require('http')
const map = require('through2-map')

const server = http.createServer(function (req, res) {
  if (req.method !== 'POST') {
    return res.end('send me a POST\n')
  }

  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res)
})

server.listen(Number(process.argv[2]))
*/