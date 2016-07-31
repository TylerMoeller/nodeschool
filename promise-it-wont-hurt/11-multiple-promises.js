/*
// Old solution using Q

var Q = require('q'),
    def = Q.defer();

def.promise
.then(promise1)
.then(promise2);

function all(promise1, promise2) {
  var counter = 0;
  return def(internalPromise);
}
*/

'use strict';

/* globals getPromise1, getPromise2 */

function all(promise1, promise2) {
  return new Promise(function (fulfill, reject) {
    var counter = 0;
    var arr = [];

    promise1.then(function (count) {
      arr[0] = count;
      counter++;

      if (counter === 2) {
        fulfill(arr);
      }
    });

    promise2.then(function (count) {
      arr[1] = count;
      counter++;

      if (counter === 2) {
        fulfill(arr);
      }
    });
  });
}

all(getPromise1(), getPromise2())
  .then(console.log);
