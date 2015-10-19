var test = require('tape')
var fancify = require(process.argv[2])

test('fancify', function (t) {
  t.equal(fancify('H3ñl0'), '~*~H3ñl0~*~', 'Wraps a string in ~*~')
  t.equal(fancify('Hello', true), '~*~HELLO~*~', 'Optionally makes it allcaps')
  t.equal(fancify('Hello', false, '假'), '~假~Hello~假~', 'Optionally allows to set the character')
  t.end()
})