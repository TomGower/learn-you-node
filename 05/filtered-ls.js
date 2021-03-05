const fs = require('fs');
const path = require('path');

const dir = process.argv[2];
const ext = process.argv[3];

function readFiles() {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.log(err);
    } else {
      for (const file of files) {
        if (path.extname(file) === `.${ext}`) console.log(file);
      }
    }
  });
}

readFiles();

/* MODEL ANSWER
'use strict'
const fs = require('fs')
const path = require('path')

const folder = process.argv[2]
const ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
  if (err) return console.error(err)
  files.forEach(function (file) {
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })
})
*/