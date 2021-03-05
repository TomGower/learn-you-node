const http = require('http');

const port = process.argv[2];

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    const [path, dateFormat] = req.url.split('?');
    if (path === '/api/parsetime') {
      if (dateFormat.substring(0,3) === 'iso') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const reqTime = new Date(dateFormat.substring(4));
        const response = JSON.stringify({
          'hour': reqTime.getHours(),
          'minute': reqTime.getMinutes(),
          'second': reqTime.getSeconds(),
        });
        res.write(response);
        res.end();
      }
    } else if (path === '/api/unixtime') {
      if (dateFormat.substring(0,3) === 'iso') {
        const reqTime = new Date(dateFormat.substring(4));
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const response = JSON.stringify({ 'unixtime': reqTime.getTime()});
        res.write(response);
        res.end();
      }
    }
  }
});

server.listen(port);

/*
'use strict'
const http = require('http')

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime: time.getTime() }
}

const server = http.createServer(function (req, res) {
  const parsedUrl = new URL(req.url, 'http://example.com')
  const time = new Date(parsedUrl.searchParams.get('iso'))
  let result

  if (/^\/api\/parsetime/.test(req.url)) {
    result = parsetime(time)
  } else if (/^\/api\/unixtime/.test(req.url)) {
    result = unixtime(time)
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(Number(process.argv[2]))
*/