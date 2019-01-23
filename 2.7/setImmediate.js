const fs = require('fs');

// Immediate will go always FIRST!
// Recommendation to use setImmediate instead of 0 ms delay
fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('timeout');
  }, 0);
  setImmediate(() => {
    console.log('immediate');
  });
});
