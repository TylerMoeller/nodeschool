'use strict';

var HTTP = require('q-io/http'),
  sessionCache = 'http://localhost:7000/',
  db = 'http://localhost:7001/';

HTTP.read(sessionCache)
.then(function (string) {
  return HTTP.read(db + string);
})
.then(function (json) {
  console.log(JSON.parse(json));
});
