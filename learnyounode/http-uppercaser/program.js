var http = require('http');
var map = require('through2-map');

var server = http.createServer(function (req, res) {
  if (req.method != 'POST')
    return res.end('I can only receive POSTs\n');

	req.pipe(map(function (chunk) {
	  return chunk.toString().toUpperCase();

	})).pipe(res);
});

server.listen(Number(process.argv[2]));