var assert = require('assert');
var isCoolNumber = require('./02-metatest');

assert(isCoolNumber(42));
assert.ok(isCoolNumber(42));
assert.equal(isCoolNumber(42), true, 'Failure: Not equal to 42!');
assert.notEqual(isCoolNumber(42), false, 'Failure: Not equal to 42!');
assert.deepEqual(isCoolNumber(42), true, 'Failure: Not equal to 42!');
assert.notDeepEqual(isCoolNumber(42), false, 'Failure: Not equal to 42!');
assert.strictEqual(isCoolNumber(42), true, 'Failure: Not equal to 42!');
assert.notStrictEqual(isCoolNumber(42), false, 'Failure: Not equal to 42!');
