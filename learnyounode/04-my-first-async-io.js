var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function(err, data) {
  if (err) return err;
  var newLines = data.split('\n').length - 1;
  console.log(newLines);
  return newLines;
});
