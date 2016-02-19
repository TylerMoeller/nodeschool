/*
// Old solution using Q

var q = require('q'),
    deferred = q.defer();

deferred.promise.then(console.log);
setTimeout(deferred.resolve, 300, 'RESOLVED!');

*/

'use strict';

var promise = new Promise(function (fulfill, reject) {
  setTimeout(function () {
    fulfill('FULFILLED!');
  }, 300);
});

promise.then(console.log);
