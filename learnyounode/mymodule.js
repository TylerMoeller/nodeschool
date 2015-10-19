var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var ext = "." + process.argv[3];

module.exports = function (args) {}

  fs.readdir(dir, function (err, dirList) {
    if (err)
      return callback(err)

    dirList = dirList.filter(function (file) {
      return path.extname(file) === '.' + ext
    })

    callback(null, dirList)
  })