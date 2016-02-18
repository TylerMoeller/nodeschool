var q = require('q'),
    deferred = q.defer();

deferred.promise.then(console.log);
setTimeout(deferred.resolve, 300, 'RESOLVED!');
