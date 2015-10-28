var http = require('http'),
    async = require('async');

async.series({
  requestOne: function(done) {
    getURL(process.argv[2], done);
  },

  requestTwo: function(done) {
    getURL(process.argv[3], done);
  },
},
  function done(err, results) {
    if (err) return console.error(err);
    console.log(results);
  });

function getURL(url, done) {
  http.get(url, function(res) {
    var body = '';
    res.on('data', function(chunk) {
      body += chunk.toString();
    });

    res.on('end', function(chunk) {
      done(null, body);
    });
  }).on('error', function(err) {
      done(err);
    });
}
