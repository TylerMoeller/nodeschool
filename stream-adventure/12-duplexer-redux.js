var duplexer = require('duplexer2'),
  through = require('through2').obj,
  o = {},
  input = through(write, end);

module.exports = function(counter) {
  function write(buffer, encoding, next) {
    if (o[buffer.country]) {
      o[buffer.country] = o[buffer.country] + 1;
    } else {
      o[buffer.country] = 1;
    }

    next();
  }

  function end(done) {
    counter.setoccurrences(o);
    done();
  }

  return duplexer(input, counter);
};
