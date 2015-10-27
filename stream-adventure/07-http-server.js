var http = require('http'),
    through = require('through2');

var server = http.createServer(function(req, res) {
  if (req.method === 'POST') {
    req.pipe(through(function(buffer, encoding, next) {
      this.push(buffer.toString().toUpperCase());
      next();
    })).pipe(res);
  } else res.end('I only respond to POSTs');
});

server.listen(process.argv[2]);
