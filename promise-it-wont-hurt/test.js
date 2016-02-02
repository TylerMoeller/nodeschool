var q = require('q'),
    fs = require('fs'),
    defer = q.defer();

var writeFile = deferred.promisify(fs.writeFile);
