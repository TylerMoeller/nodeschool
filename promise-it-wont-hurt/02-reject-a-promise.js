var q = require('q'),
    defer = q.defer();

defer.promise.then(null, printError);
setTimeout(defer.reject, 300, new Error('REJECTED!'));

function printError(error) {
  console.log(error.message);
}
