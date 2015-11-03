var q = require('q'),
    defer = q.defer();

function countdown() {
  for (var i = 5; i > 0; i--) {
    console.log(i);
    return q.all(i);
  }

  next();
}
