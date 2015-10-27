var crypto = require('crypto'),
    tar = require('tar'),
    zlib = require('zlib'),
    concat = require('concat-stream'),
    parser = tar.Parse(),
    cipher = process.argv[2],
    pw = process.argv[3];

parser.on('entry', function(item) {
  if (item.type === 'Directory') return;

  var stream = crypto.createHash('md5', { encoding: 'hex' });
  item.pipe(stream).pipe(concat(function(hash) {
    console.log(hash + ' ' + item.path);
  }));
});

process.stdin.pipe(crypto.createDecipher(cipher, pw))
             .pipe(zlib.createGunzip()).pipe(parser);
