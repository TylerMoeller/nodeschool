const http = require('http');
const bl = require('bl');
const async = require('async');

async.eachSeries(process.argv.slice(2), (url, callback) => {
  http.get(url, (response) => {
    response.pipe(bl((err, data) => {
      if (err) callback(err);
      console.log(data.toString());
      callback();
    }));
  });
});
