const net = require('net');

const port = process.argv[2];
const res = '';

const server = net.createServer(function (socket) {
  // socket handling logic
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDay();
  const response = `${date.getFullYear()}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${date.getDay()} ${date.getHours()}:${date.getMinutes()}\n`;
  socket.write(response);
  socket.end();
});
server.listen(port);

/*
'use strict'
const net = require('net')

function zeroFill (i) {
  return (i < 10 ? '0' : '') + i
}

function now () {
  const d = new Date()
  return d.getFullYear() + '-' +
    zeroFill(d.getMonth() + 1) + '-' +
    zeroFill(d.getDate()) + ' ' +
    zeroFill(d.getHours()) + ':' +
    zeroFill(d.getMinutes())
}

const server = net.createServer(function (socket) {
  socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))
*/