var http = require('http'),
    bl = require('bl'),
    async = require('async');

var url1 = process.argv[2],
    url2 = process.argv[3],
    url3 = process.argv[4];

async.series([
  function (callback) {
    http.get(url1, function (response) {
      response.pipe(bl(function (err, data) {
        if (err) return console.error(err);
        data = data.toString();
        console.log(data);
        callback(null, 'one');
      }));
    });
  },

  function (callback) {
    http.get(url2, function (response) {
      response.pipe(bl(function (err, data) {
        if (err) return console.error(err);
        data = data.toString();
        console.log(data);
        callback(null, 'two');
      }));
    });
  },

  function (callback) {
    http.get(url3, function (response) {
      response.pipe(bl(function (err, data) {
        if (err) return console.error(err);
        data = data.toString();
        console.log(data);
        callback(null, 'three');
      }));
    });
  },
],

function (err, results) {
  if (err) console.log(err);
});
