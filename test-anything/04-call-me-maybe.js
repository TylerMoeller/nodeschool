var test = require('tape');
var repeatCallback = require(process.argv[2]);
var n = 5;

test('repeatCallback: correct number of callbacks', function(t) {
  t.plan(n);
  repeatCallback(n, function() {
    t.pass('callback called ' + n + ' times');
  });
});
