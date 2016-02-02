var trumpet = require('trumpet'),
    through = require('through2');
tr = trumpet();

var stream = tr.select('.loud').createStream();
stream.pipe(through(function(buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase());
  next();
})).pipe(stream);

process.stdin.pipe(tr).pipe(process.stdout);
