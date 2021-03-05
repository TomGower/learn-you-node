const http = require('http');

const [,,target1,target2,target3] = process.argv;
let allContent = '';

http.get(target1, (res) => {
  res.setEncoding('utf-8');
  res.on('data', data => {
    allContent += data;
  });
  res.on('end', () => {
    allContent += '\n';
    http.get(target2, (res2) => {
      res2.setEncoding('utf-8');
      res2.on('data', data2 => {
        allContent += data2;
      });
      res2.on('end', () => {
        allContent += '\n';
        http.get(target3, (res3) => {
          res3.setEncoding('utf-8');
          res3.on('data', data3 => {
            allContent += data3;
          });
          res3.on('end', () => {
            console.log(allContent);
          });
          res3.on('error', err => console.error(err));
        })
      })
    })
  })
});

/*
'use strict'
const http = require('http')
const bl = require('bl')
const results = []
let count = 0

function printResults () {
  for (let i = 0; i < 3; i++) {
    console.log(results[i])
  }
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }

      results[index] = data.toString()
      count++

      if (count === 3) {
        printResults()
      }
    }))
  })
}

for (let i = 0; i < 3; i++) {
  httpGet(i)
}
*/
