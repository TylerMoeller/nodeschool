var fs = require('fs'),
    filename = process.argv[2],
    newLines;

fs.readFile(filename, 'utf8', function callback(err, data) {

  if(err) throw err; 
  else newLines = data.split('\n').length - 1;

  console.log(newLines);
  return newLines;

});
