var test = require('tape');
var fancify = require(process.argv[2]);

test('fancify argument tests', function(t) {
  t.equal(fancify('Hello'),
    '~*~Hello~*~', 'fancify(\'Hello\') returns ~*~Hello~*~');
  t.equal(fancify('Hello', true),
    '~*~HELLO~*~', 'fancify(\'Hello\', true) returns ~*~HELLO~*~');
  t.equal(fancify('Hello', false, '!'),
    '~!~Hello~!~', 'fancify(\'Hello\', false, \'!\') returns ~!~Hello~!~');
  t.end();
});
