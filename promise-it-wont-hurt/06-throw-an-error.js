var q = require('q'),
    defer = q.defer(),
    invalidJSON = process.argv[2];

function parsedPromise() {
  try {
    JSON.parse(invalidJSON);
  } catch (e) {
    console.log(e);
  }
}
