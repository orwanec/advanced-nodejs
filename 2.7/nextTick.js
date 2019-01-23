const fs = require('fs');

// here file validation will be now async and trigger an error after
// the console.log(`Size in KB: is executed
// Function should be not mixed but rather totally async or sync!!!
function fileSize (fileName, cb) {
  if (typeof fileName !== 'string') {
    return process.nextTick(
      cb,
      new TypeError('argument should be string')
    );
  }

  fs.stat(fileName, (err, stats) => {
    if (err) {
      return cb(err);
    }

    cb(null, stats.size);
  });
}

fileSize(1, (err, size) => {
  if (err) throw err;

  console.log(`Size in KB: ${size/1024}`);
});

console.log('Hello!');
