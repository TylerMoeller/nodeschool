var q = require('q'),
    deferred = q.defer();

deferred.promise.then(console.log, printError);
setTimeout(deferred.reject, 300, new Error('REJECTED!'));

function printError(error) {
  console.log(error.message);
}
