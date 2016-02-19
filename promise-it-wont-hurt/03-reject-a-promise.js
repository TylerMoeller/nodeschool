/*
// Old solution using Q

var q = require('q'),
    deferred = q.defer();

deferred.promise.then(console.log, printError);
setTimeout(deferred.reject, 300, new Error('REJECTED!'));

function printError(error) {
  console.log(error.message);
}
*/
'use strict';

var promise = new Promise(function (fulfill, reject) {
  setTimeout(function () {
    reject(new Error('REJECTED!'));
  }, 300);
});

function onReject(error) {
  console.log(error.message);
}

promise.then(null, onReject);
