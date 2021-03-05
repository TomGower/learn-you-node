const http = require('http');

const target = process.argv[2];

http.get(target, function cb(res) {
  res.setEncoding('utf-8');
  res.on('data', function(data) {console.log(data)});
});

/*
'use strict'
const http = require('http')

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
}).on('error', console.error)
*/
