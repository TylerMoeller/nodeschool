var combine = require('stream-combiner'),
    through = require('through2'),
    split = require('split'),
    zlib = require('zlib');

module.exports = function() {
  var tr = through(write, end),
      current;

  function write(buffer, encoding, next) {
    if (buffer.length === 0) return next();
    var data = JSON.parse(buffer);

    if (data.type === 'genre') {
      if (current) this.push(JSON.stringify(current) + '\n');
      current = { name: data.name, books: [] };
    } else if (data.type === 'book') {
      current.books.push(data.name);
    }

    next();
  }

  function end(next) {
    if (current) this.push(JSON.stringify(current) + '\n');
    next();
  }

  return combine(split(), tr, zlib.createGzip());
};
