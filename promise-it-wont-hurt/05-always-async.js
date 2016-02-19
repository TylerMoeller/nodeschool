/*
// Old solution using Q

var Q = require('q'),
    deferred = Q.defer();

deferred.promise.then(console.log);
deferred.resolve('SECOND');
console.log('FIRST');
*/

'use strict';

var promise = new Promise(function (fulfill, reject) {
  fulfill('PROMISE VALUE');
}).then(console.log);

console.log('MAIN PROGRAM');
