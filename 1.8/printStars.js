const print = (stars, header) => {
  console.log('*'.repeat(stars));
  console.log(header);
  console.log('*'.repeat(stars));
};
console.log(require.main);
if (require.main == module) {
  // Running as a script
    console.log('____**********______');
    console.log(require.main);
  print(process.argv[2], process.argv[3]);
} else {
  // different id's will be in 2 modules
    console.log('___________');
  // Being required
  module.exports = print;
  console.log(module);
}
