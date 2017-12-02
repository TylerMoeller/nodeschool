const http = require('http');
const url = require('url');

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

const server = http.createServer((req, res) => {

  const data = url.parse(req.url, true);
  const time = new Date(data.query.iso);
  let result;

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
