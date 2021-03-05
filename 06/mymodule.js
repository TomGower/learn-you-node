const fs = require('fs');
const path = require('path');

function readFiles(directory, extension, callback) {
  fs.readdir(directory, (err, data) => {
    if (err) {
      callback(err);
    } else {
      const filteredFiles = data.filter(file => path.extname(file) === `.${extension}`);
      callback(null, filteredFiles);
    }
  });
}

module.exports = readFiles;

/*
'use strict'
const fs = require('fs')
const path = require('path')

module.exports = function (dir, filterStr, callback) {
  fs.readdir(dir, function (err, list) {
    if (err) {
      return callback(err)
    }

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
  })
}
*/