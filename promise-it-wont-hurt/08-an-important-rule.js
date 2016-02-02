var Q = require('q');

Q
.try(iterate, 1)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(throwMyGod)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(null, console.log);

function throwMyGod() {
  throw new Error('OH NOES');
}

function iterate(integer) {
  console.log(integer);
  return integer + 1;
}
