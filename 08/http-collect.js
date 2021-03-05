const http = require('http');

const target = process.argv[2];

let charCount = 0;
let allResponse = '';

http.get(target, (res) => {
  res.setEncoding('utf-8');
  res.on('data', function (data) {
    charCount += data.length;
    allResponse += data;
  });
  res.on('end', () => {
    console.log(charCount + '\n' + allResponse);
  })
});

/*
'use strict'
const http = require('http')
const bl = require('bl')

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err) {
      return console.error(err)
    }
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
})
*/
