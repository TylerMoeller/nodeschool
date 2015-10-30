var q = require('q'),
    defer = q.defer();

defer.promise.then(printMessage, printMessage);
setTimeout(defer.resolve, 300, new Error('I FIRED'));
setTimeout(defer.reject, 300, new Error('I DID NOT FIRE'));
