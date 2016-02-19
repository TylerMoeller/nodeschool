/*
// Old Solution using Q

var q = require('q'),
    deferred = q.defer();

deferred.promise.then(console.log);
deferred.resolve('I FIRED');
deferred.reject('I DID NOT FIRE');
*/

'use strict';

var promise = new Promise(function (fulfill, reject) {
  fulfill('I FIRED');
  reject(new Error('I DID NOT FIRE'));
});

function onRejected(error) {
  console.log(error.message);
}

promise.then(console.log, onRejected);
