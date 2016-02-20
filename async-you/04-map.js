var http = require('http'),
    async = require('async');

async.map([process.argv[2], process.argv[3]], function (item, done) {
  http.get(item, function (res) {

    var body = '';

    res.on('data', function (chunk) {
      body += chunk.toString();
    });

    res.on('end', function () {
      return done(null, body);
    });
  });
},

function done(err, results) {
  if (err) console.error(err);
  console.log(results);
});
