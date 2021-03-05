const mymodule = require('./mymodule');

// console.log(process.argv);
const dir = process.argv[2];
const ext = process.argv[3];
const cb = (err, data) => {
  if (err) {
    console.log(err);
  } else {
    data.forEach(item => console.log(item));
  }
};

mymodule(dir, ext, cb);

/*
'use strict'
const filterFn = require('./solution_filter.js')
const dir = process.argv[2]
const filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
  if (err) {
    return console.error('There was an error:', err)
  }

  list.forEach(function (file) {
    console.log(file)
  })
})
*/
