const fs = require('fs');

const filePath = process.argv[2];
const cb = process.argv[3];

// console.log(filePath, cb);

function getFileLength() {
  fs.readFile(filePath, 'utf-8', function doThing(err, fileContents) {
    if (err) throw new Error(err);
    const fileLength = fileContents.split('\n').length - 1;
    printLength(fileLength);
  })
}

function printLength(num) {
  console.log(num);
}

getFileLength();

/* MODEL ANSWER
'use strict'
const fs = require('fs')
const file = process.argv[2]

fs.readFile(file, function (err, contents) {
  if (err) {
    return console.log(err)
  }
  // fs.readFile(file, 'utf8', callback) can also be used
  const lines = contents.toString().split('\n').length - 1
  console.log(lines)
})
*/
