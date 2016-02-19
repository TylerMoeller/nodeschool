'use strict';

var secretValue = process.argv[2];

first(secretValue)
  .then(second)
  .then(console.log);
