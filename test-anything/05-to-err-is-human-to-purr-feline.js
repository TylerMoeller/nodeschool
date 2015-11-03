var test = require('tape');
var feedCat = require(process.argv[2]);

test('feed cat anything but chocolate', function(t) {
  t.plan(6);
  t.equal(feedCat('cat food'), 'yum');
  t.equal(feedCat('tuna'), 'yum');
  t.equal(feedCat('wheatgrass'), 'yum');
  t.equal(feedCat('mice'), 'yum');
  t.equal(feedCat('birds'), 'yum');
  t.throws(feedCat.bind(null, 'chocolate'));
});
