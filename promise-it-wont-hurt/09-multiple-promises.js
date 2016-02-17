var Q = require('q'),
    def = Q.defer();

def.promise
.then(promise1)
.then(promise2);

function all(promise1, promise2) {
  var counter = 0;
  return def(internalPromise);
}
