var q = require('q'),
    defer = q.defer(),
    json;

function parsedPromised(invalidJSON) {
  try {
    json = JSON.parse(invalidJSON);
  } catch (e) {
    defer.reject(e);
  }

  defer.resolve(json);
  return defer.promise;
}

parsedPromised(process.argv[2]).then(null, console.log);
