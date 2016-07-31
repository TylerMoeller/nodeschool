/*
// Old solution using Q

var Q = require('q'),
    def = Q.defer(),
    data;

function parsedPromised(invalidJSON) {
  try {
    data = JSON.parse(invalidJSON);
  } catch (error) {
    def.reject(error);
  }

  def.resolve(data);
  return def.promise;
}

parsedPromised(process.argv[2]).then(null, console.log);
*/
'use strict';

function parsePromised(json) {
  return new Promise(function (fulfill, reject) {
      fulfill(JSON.parse(json));
      reject(new Error());
    });
}

parsePromised(process.argv[2])
.then(null, console.log);
