var exec = require('child_process').exec;
var mongodb = process.execPath;
var os = require('os');
if (os.type() !== 'Windows_NT') {
  console.log('add a space');
}

console.log(os.type());
console.log(mongodb);
console.log(exec);

var os = require('os');
if (os.type() !== 'Windows_NT') {
  console.log('This is not windows');

  // Surrounds with double quotes on non-Windows OS if path contains a space
  if (mongod.indexOf(' ') !== -1) {
    mongod = '"' + mongod + '"';
  }
}
