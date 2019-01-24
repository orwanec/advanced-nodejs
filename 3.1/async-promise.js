const fs = require('fs');

// Callback + Promise together,
// added dafault value for cb=() = {} if we want to use it
const readFileAsArray = function(file, cb = () => {}) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, function(err, data) {
      if (err) {
        //if we use promise
        reject(err);
        //if we use callback
        return cb(err);
      }

      const lines = data.toString().trim().split('\n');
      // if we use Promise
      resolve(lines);
      // if we use callbacks
      cb(null, lines);
    });
  });
};

// example call
readFileAsArray('./numbers')
  .then(lines => {
    const numbers = lines.map(Number);
    const oddNumbers = numbers.filter(number => number % 2 === 1);
    console.log('odd numbers count:', oddNumbers.length);
  })
  .catch(console.error);

readFileAsArray('./numbers', (err, lines) => {
  if (err) throw err;

  const numbers = lines.map(Number);
  const oddNumbers = numbers.filter(number => number % 2 === 1);
  console.log('odd numbers count:', oddNumbers.length);
});

async function countOdd () {
  try {
    const lines = await readFileAsArray('./numbers');
    const numbers = lines.map(Number);
    const oddCount = numbers.filter(number => number % 2 === 1).length;
    console.log('odd numbers count:', oddCount);
  } catch(err) {
    console.error(err);
  }
}

countOdd();
