/*
// Old solution using Q

var Q = require('q'),
    deferred = Q.defer();

function attachTitle(lastName) {
  return 'DR. ' + lastName;
}

def.promise
.then(attachTitle)
.then(console.log);

deferred.resolve('MANHATTAN');
*/
'use strict';

Promise.resolve('MANHATTAN')
  .then(attachTitle)
  .then(console.log);

function attachTitle(lastName) {
  return 'DR. ' + lastName;
}
