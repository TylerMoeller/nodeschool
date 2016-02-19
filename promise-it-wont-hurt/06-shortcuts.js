'use strict';

var promise = Promise.resolve('Success').catch(function (e) {
  console.log(e);
});
