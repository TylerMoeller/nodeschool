var Q = require('q'),
    deferred = Q.defer();

function attachTitle(lastName) {
  return 'DR. ' + lastName;
}

def.promise
.then(attachTitle)
.then(console.log);

deferred.resolve('MANHATTAN');
