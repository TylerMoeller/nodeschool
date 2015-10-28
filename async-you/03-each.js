var http = require('http'),
    async = require('async');

async.each([process.argv[2], process.argv[3]], function(item, done) {
  var req = http.get(item, function(res) {
    res.on('data', function(chunk) {
    });

    res.on('end', function() {
      done(null); //only logging errors today
    });
  }).on('error', function(err) {
    done(err);
  });
},

function done(err) {
  if (err) console.error(err);
});
