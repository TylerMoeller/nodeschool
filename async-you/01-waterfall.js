var http = require('http'),
    async = require('async'),
    fs = require('fs'),
    filename = process.argv[2],
    body = '';

async.waterfall([
  function(cb) {
    fs.readFile(filename, function(err, data) {
      if (err) throw err;
      cb(null, data.toString());
    });
  },

  function(body, cb) {
    http.get(body, function(res) {
      res.on('data', function(chunk) {
      body += chunk.toString();
    });

      res.on('end', function(chunk) {
      cb(null, body);
    });
    }).on('error', function(err) {
      cb(err);
    });
  },
], function done(err, result) {
  if (err) return console.error(err);
  console.log(result.split('\n')[1]);
});
