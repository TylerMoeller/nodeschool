var http = require('http'),
    url = require('url');

function parsetime(time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds(),
  };
}

function unixtime(time) {
  return {
    unixtime: time.getTime(),
  };
}

var server = http.createServer(function(req, res) {

  var data = url.parse(req.url, true),
      time = new Date(data.query.iso),
      result;

  if (req.url.indexOf('/api/parsetime') > -1) {
    result = parsetime(time);
  } else if (req.url.indexOf('/api/unixtime') > -1) {
    result = unixtime(time);
  }

  if (result) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(Number(process.argv[2]));
