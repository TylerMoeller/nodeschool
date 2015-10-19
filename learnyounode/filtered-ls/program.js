var fs = require('fs')
var path = require('path')

var dir = process.argv[2]
var ext = process.argv[3]

fs.readdir(dir, function done(err, files) {
	if (err) console.log(err)
	for(var i in files) {
		if(path.extname(files[i]) === '.' + ext) console.log(files[i])
	}
})