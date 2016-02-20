var async = require('async'),
    http = require('http'),
    fs = require('fs');

async.waterfall([
  function (cb) {
    // response is a single URL. Path to the file is provided in argv2.
    fs.readFile(process.argv[2], function (err, data) {
      if (err) return cb(err);
      cb(null, data.toString());
    });
  },

  function (body, cb) {
    http.get(body, function (res) {
      res.on('data', function (chunk) {
      body += chunk.toString();
    }).on('end', function (chunk) {
      cb(null, body);
    });
    }).on('error', function (err) {
      cb(err);
    });
  },
],

function done(err, result) {
  if (err) return console.error(err);
  console.log(result.split('\n')[1]);
});
