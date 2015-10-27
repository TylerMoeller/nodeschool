var through = require('through2'),
    split = require('split'),
    lineNumber = 0;

process.stdin.pipe(split()).pipe(through(function(buf, _, next) {
  var line = buf.toString();
  this.push(lineNumber % 2 === 0 ?
    line.toLowerCase() + '\n' :
    line.toUpperCase() + '\n');
  lineNumber++;
  next();
})).pipe(process.stdout);
